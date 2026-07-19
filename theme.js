(function () {
  const storageKey = "forester-theme";
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  root.classList.add("theme-enabled");

  function readStoredMode() {
    try {
      const value = window.localStorage.getItem(storageKey);
      return value === "light" || value === "dark" ? value : "auto";
    } catch (_) {
      return "auto";
    }
  }

  function storeMode(mode) {
    try {
      if (mode === "auto") {
        window.localStorage.removeItem(storageKey);
      } else {
        window.localStorage.setItem(storageKey, mode);
      }
    } catch (_) {
      // The theme still works for this page when storage is unavailable.
    }
  }

  const initialMode = readStoredMode();
  if (initialMode !== "auto") {
    root.dataset.theme = initialMode;
  }

  function initializeThemeControl() {
    const toggle = document.querySelector("#theme-toggle");
    const modeLabel = toggle?.querySelector(".theme-toggle__mode");
    const ninja = document.querySelector("ninja-keys");

    if (!toggle || !modeLabel) {
      return;
    }

    function currentMode() {
      return root.dataset.theme || "auto";
    }

    function effectiveMode(mode) {
      return mode === "auto" ? (systemDark.matches ? "dark" : "light") : mode;
    }

    function render(mode, persist) {
      if (mode === "auto") {
        delete root.dataset.theme;
      } else {
        root.dataset.theme = mode;
      }

      if (persist) {
        storeMode(mode);
      }

      const effective = effectiveMode(mode);
      const displayMode = mode.charAt(0).toUpperCase() + mode.slice(1);
      modeLabel.textContent = displayMode;
      toggle.dataset.mode = mode;
      toggle.setAttribute("aria-label", `Theme: ${displayMode}; currently ${effective}`);
      toggle.setAttribute("title", `Theme: ${displayMode}. Activate to change appearance.`);
      ninja?.classList.toggle("dark", effective === "dark");
    }

    function nextMode(mode) {
      const systemMode = systemDark.matches ? "dark" : "light";
      const oppositeMode = systemMode === "dark" ? "light" : "dark";

      if (mode === "auto") {
        return oppositeMode;
      }

      if (mode === oppositeMode) {
        return systemMode;
      }

      return "auto";
    }

    toggle.addEventListener("click", function () {
      render(nextMode(currentMode()), true);
    });

    const handleSystemChange = function () {
      if (currentMode() === "auto") {
        render("auto", false);
      }
    };

    if (systemDark.addEventListener) {
      systemDark.addEventListener("change", handleSystemChange);
    } else {
      systemDark.addListener(handleSystemChange);
    }

    window.addEventListener("storage", function (event) {
      if (event.key === storageKey || event.key === null) {
        render(readStoredMode(), false);
      }
    });

    render(initialMode, false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeThemeControl, { once: true });
  } else {
    initializeThemeControl();
  }
})();
