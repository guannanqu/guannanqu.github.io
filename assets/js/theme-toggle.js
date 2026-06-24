/*
 * Light / dark theme toggle
 *
 * The initial theme is applied in <head> (head/custom.html) before paint to
 * avoid a flash. Default is dark. The choice is stored in BOTH a cookie and
 * localStorage; the cookie is scoped to the registrable domain so the theme is
 * shared across www.guannanqu.com and guannanqu.com (localStorage is per-origin
 * and would otherwise reset when navigating between them).
 */
(function () {
  "use strict";

  var STORAGE_KEY = "theme";
  var root = document.documentElement;

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function persist(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
    try {
      var host = location.hostname;
      // Share across apex + www on the live site; host-only elsewhere (localhost).
      var domain = /(^|\.)guannanqu\.com$/i.test(host) ? "; domain=.guannanqu.com" : "";
      document.cookie =
        STORAGE_KEY + "=" + theme + "; path=/; max-age=31536000; samesite=lax" + domain;
    } catch (e) {}
  }

  function applyTheme(theme, persistChoice) {
    root.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.setAttribute(
        "title",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
    }
    if (persistChoice) {
      persist(theme);
    }
  }

  function toggle() {
    applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
  }

  function init() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) {
      return;
    }
    applyTheme(currentTheme(), false); // sync aria-pressed / title with current theme
    btn.addEventListener("click", toggle);
    btn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        toggle();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
