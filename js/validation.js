// Obtener todos los formularios
const forms = document.querySelectorAll(".needs-validation");

// Iterar sobre cada formulario
Array.from(forms).forEach((form) => {
  // Agregar manejador de envío
  form.addEventListener("submit", (e) => {
    // Evitar envío si no es válido
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
});

// Validar formulario al hacer clic en botón enviar
document.getElementById("enviarBtn").addEventListener("click", (e) => {
  const form = document.getElementById("miFormulario");
  if (form.checkValidity()) {
    // Formulario válido, permitir envío
  } else {
    e.preventDefault();
    e.stopPropagation();
    form.classList.add("was-validated");
  }
});

//Validacion de telefono en caso de escribir letras o en caso de dejar vacio el input
// Obtener elemento
const telefono = document.getElementById("telefono");

// Expresión regular para validar solo números
const numeroRegex = /^\d+$/;

// Evento blur para validar
telefono.addEventListener("blur", () => {
  // Valor del input
  const valor = telefono.value;

  // Validar longitud y formato
  if (valor.length === 0) {
    // Esta vacío, mostrar mensaje de requerido
    mostrarMensaje("Este dato es requerido.");
  } else if (!numeroRegex.test(valor)) {
    // Contiene letras, mensaje de solo números
    mostrarMensaje("Solo números permitidos");
  } else {
    // Valor correcto, remover mensaje de error
    removerMensaje();
  }
});

// Funciones para mostrar y remover mensaje
function mostrarMensaje(mensaje) {
  // Código para mostrar mensaje de validación
  telefono.classList.add("is-invalid");
  telefono.nextElementSibling.innerHTML = mensaje;
}

// Código para remover mensaje en el caso de haber cometido un error al escribir letras o simbolos
function removerMensaje() {
  telefono.classList.remove("is-invalid");
  telefono.nextElementSibling.innerHTML = "";
}
