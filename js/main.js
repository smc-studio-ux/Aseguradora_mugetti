document.addEventListener("DOMContentLoaded", () => {
  if (typeof initNavbar === "function") {
    initNavbar();
  }

  if (typeof initFormHandler === "function") {
    initFormHandler();
  }

  if (typeof initWhatsApp === "function") {
    initWhatsApp();
  }
});
