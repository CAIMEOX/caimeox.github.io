import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest


REPO_ROOT = Path(__file__).resolve().parents[1]
CONVERT_SCRIPT = REPO_ROOT / "theme" / "javascript-source" / "convert.js"

FAST_XML_PARSER_STUB = """
class XMLParser {
  parse() {
    return [{"html:code": [{"#text": "  converted"}]}];
  }
}

class XMLBuilder {
  build() {
    return "converted";
  }
}

module.exports = { XMLParser, XMLBuilder };
"""


def find_node():
    configured = os.environ.get("NODE_BIN")
    if configured:
        return configured
    return shutil.which("node")


class ConvertScriptTest(unittest.TestCase):
    def test_converts_nested_forester_5_xml_files(self):
        node = find_node()
        self.assertIsNotNone(node, "set NODE_BIN to a Node.js executable")

        with tempfile.TemporaryDirectory(prefix="forester-convert-") as directory:
            workspace = Path(directory)
            convert_script = workspace / "convert.js"
            shutil.copyfile(CONVERT_SCRIPT, convert_script)
            xml_file = workspace / "output" / "example" / "index.xml"
            xml_file.parent.mkdir(parents=True)
            xml_file.write_text("original", encoding="utf-8")

            stub = workspace / "node_modules" / "fast-xml-parser" / "index.js"
            stub.parent.mkdir(parents=True)
            stub.write_text(FAST_XML_PARSER_STUB, encoding="utf-8")

            environment = os.environ.copy()
            environment["NODE_PATH"] = str(workspace / "node_modules")
            result = subprocess.run(
                [node, str(convert_script)],
                cwd=workspace,
                env=environment,
                check=False,
                capture_output=True,
                text=True,
                timeout=10,
            )

            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(xml_file.read_text(encoding="utf-8"), "converted")
            self.assertIn("Converting example/index.xml", result.stdout)


if __name__ == "__main__":
    unittest.main()
