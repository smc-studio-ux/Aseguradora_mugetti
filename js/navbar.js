function initNavbar() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (!menuToggle || !navMenu) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-open");
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("nav-open");
    });

    const linkUrl = new URL(link.href, window.location.href);
    const currentUrl = new URL(window.location.href);

    if (
      linkUrl.pathname === currentUrl.pathname &&
      linkUrl.hash === currentUrl.hash
    ) {
      link.classList.add("active");
    }
  });
}
