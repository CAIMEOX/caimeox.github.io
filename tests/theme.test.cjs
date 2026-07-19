const assert = require("node:assert/strict");
const fs = require("node:fs");
const test = require("node:test");
const vm = require("node:vm");

const themeSource = fs.readFileSync("theme/theme.js", "utf8");

function classList() {
  const values = new Set();
  return {
    add(value) {
      values.add(value);
    },
    contains(value) {
      return values.has(value);
    },
    toggle(value, force) {
      force ? values.add(value) : values.delete(value);
    },
  };
}

function loadTheme({ storedMode = null, prefersDark = false } = {}) {
  const storage = new Map();
  if (storedMode) storage.set("forester-theme", storedMode);

  const root = { dataset: {}, classList: classList() };
  const label = { textContent: "Auto" };
  const toggleListeners = {};
  const toggle = {
    dataset: {},
    attributes: {},
    querySelector: () => label,
    addEventListener: (name, listener) => {
      toggleListeners[name] = listener;
    },
    setAttribute(name, value) {
      this.attributes[name] = value;
    },
  };
  const ninja = { classList: classList() };
  const documentListeners = {};
  const mediaListeners = {};
  const windowListeners = {};
  const media = {
    matches: prefersDark,
    addEventListener: (name, listener) => {
      mediaListeners[name] = listener;
    },
  };

  const document = {
    documentElement: root,
    readyState: "loading",
    addEventListener: (name, listener) => {
      documentListeners[name] = listener;
    },
    querySelector(selector) {
      if (selector === "#theme-toggle") return toggle;
      if (selector === "ninja-keys") return ninja;
      return null;
    },
  };

  const window = {
    matchMedia: () => media,
    localStorage: {
      getItem: (key) => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
      removeItem: (key) => storage.delete(key),
    },
    addEventListener(name, listener) {
      windowListeners[name] = listener;
    },
  };

  vm.runInNewContext(themeSource, { document, window });
  documentListeners.DOMContentLoaded();

  return {
    label,
    media,
    mediaListeners,
    ninja,
    root,
    storage,
    toggle,
    toggleListeners,
    windowListeners,
  };
}

test("uses the system preference until the reader chooses a theme", () => {
  const theme = loadTheme();

  assert.equal(theme.label.textContent, "Auto");
  assert.equal(theme.root.dataset.theme, undefined);
  assert.equal(theme.ninja.classList.contains("dark"), false);

  theme.toggleListeners.click();
  assert.equal(theme.label.textContent, "Dark");
  assert.equal(theme.root.dataset.theme, "dark");
  assert.equal(theme.storage.get("forester-theme"), "dark");
  assert.equal(theme.ninja.classList.contains("dark"), true);

  theme.toggleListeners.click();
  assert.equal(theme.root.dataset.theme, "light");

  theme.toggleListeners.click();
  assert.equal(theme.root.dataset.theme, undefined);
  assert.equal(theme.storage.has("forester-theme"), false);
});

test("restores a stored override before initializing the control", () => {
  const theme = loadTheme({ storedMode: "light", prefersDark: true });

  assert.equal(theme.root.dataset.theme, "light");
  assert.equal(theme.label.textContent, "Light");
  assert.equal(theme.ninja.classList.contains("dark"), false);
  assert.match(theme.toggle.attributes["aria-label"], /currently light/);
});

test("keeps Auto synchronized with system and cross-tab changes", () => {
  const theme = loadTheme({ prefersDark: true });

  assert.equal(theme.ninja.classList.contains("dark"), true);

  theme.media.matches = false;
  theme.mediaListeners.change();
  assert.equal(theme.ninja.classList.contains("dark"), false);

  theme.storage.set("forester-theme", "dark");
  theme.windowListeners.storage({ key: "forester-theme" });
  assert.equal(theme.root.dataset.theme, "dark");

  theme.storage.clear();
  theme.windowListeners.storage({ key: null });
  assert.equal(theme.root.dataset.theme, undefined);
  assert.equal(theme.label.textContent, "Auto");
});
