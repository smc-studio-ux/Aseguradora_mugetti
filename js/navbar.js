const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

// abrir / cerrar menú
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-open");
  });
}

// cerrar menú al tocar un link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav-open");
  });
});

// marcar link activo
document.querySelectorAll(".nav-menu a").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
