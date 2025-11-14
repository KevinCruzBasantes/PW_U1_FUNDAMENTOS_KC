function guardar() {
    validarCampos();
}
function validarCampos() {
    let nombre = document.getElementById("id_nombre").value
    let apellido = document.getElementById("id_apellido").value
    let fecha = document.getElementById("id_fechaNac").value
    let email = document.getElementById("id_email").value
    let password = document.getElementById("id_password").value
    if (nombre === "") {
        mostrarMensaje("Nombre es obligatorio");
        mostrarAsterisco("id_error_nombre");
        return;
    }if(nombre!=""){
        limpiarMensaje();
    }
     if (email === "") {
        mostrarMensaje("Email es obligatorio");
        mostrarAsterisco("id_error_nombre");
        
    }if (!validarEmail(email)) {
        mostrarMensaje("Email no es valido");
        mostrarAsterisco("id_error_email");
        return;
    }else{
        
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