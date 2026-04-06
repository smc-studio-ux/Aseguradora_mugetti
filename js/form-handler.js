function initFormHandler() {
  const form = document.querySelector(".contact-form form");

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const phone = form.querySelector("input[name='phone']").value.trim();
    const insurance = form.querySelector("select[name='insurance']").value;
    const message = form.querySelector("textarea[name='message']").value.trim();

    if (!name || !email || !insurance) {
      alert("Completá nombre, email y tipo de seguro para enviarnos tu consulta.");
      return;
    }

    const lines = [
      "Hola, quiero recibir asesoramiento desde la web.",
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Telefono: ${phone || "No informado"}`,
      `Interes: ${insurance}`,
      `Mensaje: ${message || "Sin mensaje adicional"}`,
    ];

    const url = `https://wa.me/5492325681632?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
    form.reset();
  });
}
