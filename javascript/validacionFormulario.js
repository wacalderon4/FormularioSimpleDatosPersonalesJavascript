function limpiarErrores() {
  var errores = document.getElementsByClassName("error");
  for (var i = 0; i < errores.length; i++) {
    errores[i].innerHTML = "";
  }
}

function validar(formulario) {
  limpiarErrores();
  if (formulario.nombre.value.trim().length == 0) {
    document.getElementById("errorNombre").innerText = "Campo obligatorio";
    formulario.nombre.focus();
    return false;
  }
  if (formulario.nombre.value.trim().length <= 2) {
    document.getElementById("errorNombre").innerText =
      "El nombre debe tener al menos 3 caracteres";
    formulario.nombre.focus();
    return false;
  }
  var expresionREmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!expresionREmail.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText =
      "El dato ingresado debe tener el formato de un email";
    formulario.email.focus();
    return false;
  }
  if (formulario.contrasena.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText =
      "El campo contraseña no debe estar vacío";
    formulario.contrasena.focus();
    return false;
  }
  if (formulario.contrasena.value.trim().length < 6) {
    document.getElementById("errorContrasena").innerText =
      "El campo contraseña debe tener más de 5 caracteres";
    formulario.contrasena.focus();
    return false;
  }
  if (formulario.contrasena.value != formulario.confirmacion.value) {
    document.getElementById("errorConfirmacion").innerText =
      "La contraseña debe coincidir con la confirmación";
    formulario.confirmacion.focus();
    return false;
  }
  if (formulario.genero.value == "") {
    document.getElementById("errorGenero").innerText =
      "Debe seleccionar una opción";

    return false;
  }
  if (formulario.pais.value == "") {
    document.getElementById("errorPais").innerText = "Debe seleccionar un país";
    formulario.pais.focus();
    return false;
  }
  if (!formulario.terminos.checked) {
    document.getElementById("errorTerminos").innerText =
      "Deben aceptarse los términos y condiciones";
    formulario.terminos.focus();
    return false;
  }

  alert("Datos enviados");

  return true;
}

function mostrarPestana1() {
  var contenido1 = document.getElementById("contenido");

  contenido1.innerHTML = "Este es el contenido de la pestaña 1";
}

function mostrarPestana2() {
  var contenido2 = document.getElementById("contenido");
  contenido2.innerHTML = "Este es el contenido de la pestaña 2";
}
