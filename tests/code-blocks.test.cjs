const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const pluginPath = path.resolve(
  __dirname,
  "../theme/prism-normalize-whitespace.js",
);
const treeStylesheetPath = path.resolve(__dirname, "../theme/tree.xsl");

function classList(...classes) {
  return {
    contains(candidate) {
      return classes.includes(candidate);
    },
  };
}

function loadPlugin() {
  let normalizeHook;

  globalThis.Prism = {
    plugins: {},
    hooks: {
      add(name, hook) {
        if (name === "before-sanity-check") {
          normalizeHook = hook;
        }
      },
    },
    util: {
      isActive(element, name, defaultValue) {
        for (let current = element; current; current = current.parentElement) {
          if (current.classList?.contains(name)) {
            return true;
          }
          if (current.classList?.contains(`no-${name}`)) {
            return false;
          }
        }
        return defaultValue;
      },
    },
  };

  delete require.cache[pluginPath];
  require(pluginPath);
  assert.equal(typeof normalizeHook, "function");
  return normalizeHook;
}

function codeBlock(code, preClasses = []) {
  const pre = {
    childNodes: [],
    classList: classList(...preClasses),
    getAttribute() {
      return null;
    },
    hasAttribute() {
      return false;
    },
    nodeName: "PRE",
    parentElement: null,
    removeChild(node) {
      this.childNodes.splice(this.childNodes.indexOf(node), 1);
    },
  };
  const element = {
    children: [],
    classList: classList("language-haskell"),
    parentElement: pre,
    parentNode: pre,
  };
  pre.childNodes.push(element);

  return { code, element };
}

test.afterEach(() => {
  delete globalThis.Prism;
});

test("dedents a block by its smallest non-empty indentation", () => {
  const normalize = loadPlugin();
  const environment = codeBlock(
    [
      "        data Graph a",
      "            = Empty",
      "            | Vertex a",
      "",
      "        instance Graph Example",
    ].join("\n"),
  );

  normalize(environment);

  assert.equal(
    environment.code,
    [
      "data Graph a",
      "    = Empty",
      "    | Vertex a",
      "",
      "instance Graph Example",
    ].join("\n"),
  );
});

test("preserves relative leading and trailing whitespace inside the code", () => {
  const normalize = loadPlugin();
  const environment = codeBlock(
    "        continuation  \n    base",
  );

  normalize(environment);

  assert.equal(environment.code, "    continuation  \nbase");
});

test("does not partially dedent inconsistent tabs and spaces", () => {
  const normalize = loadPlugin();
  const environment = codeBlock("\tfirst\n    second");

  normalize(environment);

  assert.equal(environment.code, "\tfirst\n    second");
});

test("leaves inline code and an intentionally unindented block alone", () => {
  const normalize = loadPlugin();
  const inlineParent = { nodeName: "P", parentElement: null };
  const inline = {
    code: " overlay ",
    element: {
      classList: classList(),
      parentElement: inlineParent,
      parentNode: inlineParent,
    },
  };
  const block = codeBlock("first line\n    intentionally indented");

  normalize(inline);
  normalize(block);

  assert.equal(inline.code, " overlay ");
  assert.equal(block.code, "first line\n    intentionally indented");
});

test("supports an explicit opt-out for indentation-sensitive examples", () => {
  const normalize = loadPlugin();
  const environment = codeBlock(
    "        keep this indentation\n            and this indentation",
    ["no-whitespace-normalization"],
  );

  normalize(environment);

  assert.equal(
    environment.code,
    "        keep this indentation\n            and this indentation",
  );
});

test("loads the normalization hook after Prism using ordered defer scripts", () => {
  const stylesheet = fs.readFileSync(treeStylesheetPath, "utf8");
  const prism = 'defer="defer" src="{/f:tree/@base-url}prism.js"';
  const normalizer =
    'defer="defer" src="{/f:tree/@base-url}prism-normalize-whitespace.js"';

  assert.notEqual(stylesheet.indexOf(prism), -1);
  assert.ok(stylesheet.indexOf(normalizer) > stylesheet.indexOf(prism));
});
