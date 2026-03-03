(() => {
  "use strict";

  const KEY = "preferred-theme";

  function apply(theme) {
    document.documentElement.style.colorScheme = theme;
    // Update toggle button icon visibility
    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      const sunIcon = btn.querySelector(".icon-sun");
      const moonIcon = btn.querySelector(".icon-moon");
      if (sunIcon && moonIcon) {
        sunIcon.style.display = theme === "dark" ? "block" : "none";
        moonIcon.style.display = theme === "light" ? "block" : "none";
      }
    }
  }

  function current() {
    return (
      localStorage.getItem(KEY) ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
  }

  function toggle() {
    const next = current() === "dark" ? "light" : "dark";
    localStorage.setItem(KEY, next);
    apply(next);
  }

  // Apply stored theme immediately (before DOM ready) to prevent flash
  apply(current());

  // Bind toggle button when DOM is ready
  function init() {
    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.addEventListener("click", toggle);
      apply(current()); // update icon visibility
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Respond to system theme changes when no manual override
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (!localStorage.getItem(KEY)) apply(current());
  });
})();
