function guardar() {
    validarCampos();
}
function validarCampos() {
    limpiarMensaje();
    let nombre = document.getElementById("id_nombre").value
    let apellido = document.getElementById("id_apellido").value
    let fecha = document.getElementById("id_fechaNac").value
    let email = document.getElementById("id_email").value
    let password = document.getElementById("id_password").value
 
    if (nombre === "") {
        mostrarMensaje("Nombre es obligatorio");
        mostrarAsterisco("id_error_nombre");
        return;
    }
    if (apellido === "") {
        mostrarMensaje("Apellido es obligatorio");
        mostrarAsterisco("id_error_apellido");
        return;
    }
    if (fecha === "") {
        mostrarMensaje("La fecha de nacimiento es obligatoria");
        mostrarAsterisco("id_error_fn");
        return;
    }
    if (email === "") {
        mostrarMensaje("El email es obligatorio");
        mostrarAsterisco("id_error_email");
        return;
    }
    if (!validarEmail(email)) {
        mostrarMensaje("Email no es válido");
        mostrarAsterisco("id_error_email");
        return;
    }
    if (password === "") {
        mostrarMensaje("La contraseña es obligatoria");
        mostrarAsterisco("id_error_password");
        return;
    }
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
function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}
 