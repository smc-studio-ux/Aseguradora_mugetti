function initFormHandler() {

    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;

        if (!name || !email) {

            alert("Por favor complete los campos obligatorios.");
            return;

        }

        alert("Gracias por su consulta. Nos comunicaremos pronto.");

        form.reset();

    });

}