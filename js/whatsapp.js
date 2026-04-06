function initWhatsApp() {
  const button = document.querySelector(".whatsapp-button");

  if (!button) {
    return;
  }

  const defaultMessage =
    button.dataset.message || "Hola, quiero asesoramiento sobre seguros.";

  button.href = `https://wa.me/5492325681632?text=${encodeURIComponent(defaultMessage)}`;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
}
