import functools
import http.server
import os
from pathlib import Path
import subprocess
import tempfile
import threading
import unittest


REPO_ROOT = Path(__file__).resolve().parents[1]

SEARCH_FIXTURE = b"""<!doctype html>
<html data-base-url="/output/">
  <head>
    <meta charset="utf-8">
    <script>
      window.searchSmokeErrors = [];
      window.addEventListener("error", event => {
        window.searchSmokeErrors.push(event.message);
      });
      window.addEventListener("unhandledrejection", event => {
        window.searchSmokeErrors.push(String(event.reason));
      });
    </script>
    <script type="module" src="/output/forester.js"></script>
  </head>
  <body>
    <ninja-keys placeholder="Start typing a note title or ID"></ninja-keys>
    <script type="module">
      const pause = milliseconds => new Promise(resolve => {
        setTimeout(resolve, milliseconds);
      });
      const fail = reason => {
        document.documentElement.dataset.searchSmoke = `fail: ${reason}`;
      };

      try {
        const ninja = document.querySelector("ninja-keys");
        const deadline = Date.now() + 4000;

        while (!Array.isArray(ninja.data) || ninja.data.length === 0) {
          if (window.searchSmokeErrors.length > 0) {
            throw new Error(window.searchSmokeErrors.join(" | "));
          }
          if (Date.now() >= deadline) {
            throw new Error("search data did not load");
          }
          await pause(25);
        }

        const tree = ninja.data.find(item =>
          item.section === "All Trees" && item.title
        );
        if (!tree) {
          throw new Error("forest.json did not populate All Trees");
        }

        ninja.open();
        await pause(100);

        if (window.searchSmokeErrors.length > 0) {
          throw new Error(window.searchSmokeErrors.join(" | "));
        }
        const resultRendered = Array.from(
          ninja.shadowRoot.querySelectorAll("ninja-action")
        ).some(action => action.shadowRoot.textContent.includes(tree.title));
        if (!resultRendered) {
          throw new Error("search overlay did not render a tree result");
        }

        document.documentElement.dataset.searchSmoke = "pass";
      } catch (error) {
        fail(error.message);
      }
    </script>
  </body>
</html>
"""


class SearchFixtureHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/_search-smoke.html":
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(SEARCH_FIXTURE)))
            self.end_headers()
            self.wfile.write(SEARCH_FIXTURE)
            return
        super().do_GET()

    def log_message(self, _format, *_args):
        pass


def find_chrome():
    candidates = [
        os.environ.get("CHROME_BIN"),
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/usr/bin/google-chrome",
        "/usr/bin/google-chrome-stable",
        "/usr/bin/chromium",
        "/usr/bin/chromium-browser",
    ]
    return next((path for path in candidates if path and Path(path).is_file()), None)


class ForesterSearchTest(unittest.TestCase):
    def test_search_loads_and_renders_forest_results(self):
        chrome = find_chrome()
        self.assertIsNotNone(chrome, "set CHROME_BIN to a Chromium executable")
        self.assertTrue(
            (REPO_ROOT / "output" / "forest.json").is_file(),
            "run `make dev` before the search smoke test",
        )

        handler = functools.partial(SearchFixtureHandler, directory=str(REPO_ROOT))
        server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
        server_thread = threading.Thread(target=server.serve_forever, daemon=True)
        server_thread.start()

        try:
            with tempfile.TemporaryDirectory(prefix="forester-search-") as profile:
                url = f"http://127.0.0.1:{server.server_port}/_search-smoke.html"
                process = subprocess.Popen(
                    [
                        chrome,
                        "--headless",
                        "--disable-gpu",
                        "--no-first-run",
                        "--no-sandbox",
                        f"--user-data-dir={profile}",
                        "--virtual-time-budget=5000",
                        "--dump-dom",
                        url,
                    ],
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                    text=True,
                )
                try:
                    stdout, stderr = process.communicate(timeout=10)
                except subprocess.TimeoutExpired:
                    process.kill()
                    stdout, stderr = process.communicate()
        finally:
            server.shutdown()
            server.server_close()
            server_thread.join(timeout=2)

        self.assertIn(
            'data-search-smoke="pass"',
            stdout,
            f"Forester search smoke test failed:\n{stdout[-4000:]}\n{stderr[-1000:]}",
        )


if __name__ == "__main__":
    unittest.main()
