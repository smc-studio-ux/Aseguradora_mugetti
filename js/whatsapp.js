function initWhatsApp() {

    const phone = "5492325681632";

    const message = "Hola, quisiera consultar sobre seguros.";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    const button = document.createElement("a");

    button.href = url;

    button.target = "_blank";

    button.classList.add("whatsapp-button");

    button.innerHTML = "💬";

    document.body.appendChild(button);

}