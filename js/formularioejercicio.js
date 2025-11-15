function guardar(event) {
    // Evita que el formulario se recargue
    if (event) event.preventDefault();
    validarCampos();
}

function validarCampos() {
    limpiarMensaje();
    let nombre = document.getElementById("id_nombre").value.trim();
    let card = document.getElementById("id_card").value.trim();
    let fecha = document.getElementById("id_fechaExp").value.trim();
    let password = document.getElementById("id_csv").value.trim();

    if (nombre === "") {
        mostrarMensaje("Nombre es obligatorio");
        mostrarAsterisco("id_error_nombre");
        return false;
    }
    if (card === "") {
        mostrarMensaje("Número de tarjeta es obligatorio");
        mostrarAsterisco("id_error_card");
        return false;
    }
    if (fecha === "") {
        mostrarMensaje("Fecha de expiración es obligatoria");
        mostrarAsterisco("id_error_fe");
        return false;
    }
    if (password === "") {
        mostrarMensaje("El CSV es obligatorio");
        mostrarAsterisco("id_error_csv");
        return false;
    }

    alert("Formulario válido"); // Para probar que pasó la validación
    return true;
}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}

function mostrarAsterisco(id_elemento) {
    document.getElementById(id_elemento).innerText = '*';
}

function limpiarMensaje() {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = "";
    mensaje.style.display = "none";
    const errores = document.querySelectorAll(".error_ast");
    errores.forEach((elem) => elem.innerText = "");
}
