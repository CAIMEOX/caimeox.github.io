const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const foresterSourcePath = path.resolve(
  __dirname,
  "../theme/javascript-source/forester.js",
);

test("the theme enables KaTeX's copy-tex extension", () => {
  const source = fs.readFileSync(foresterSourcePath, "utf8");

  assert.match(
    source,
    /^import ['"]katex\/contrib\/copy-tex['"];?$/m,
    "copying rendered math should put its TeX source on the clipboard",
  );
});
