//Validacion para formulario de inscripcion

// Obtener todos los formularios
const formFooter = document.querySelectorAll(".needs-validation");

// Iterar sobre cada formulario
Array.from(formFooter).forEach((form) => {
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
document.getElementById("enviarBtnFooter").addEventListener("click", (e) => {
  const formFt = document.getElementById("formularioFooter");
  if (formFt.checkValidity()) {
    // Formulario válido, permitir envío
  } else {
    e.preventDefault();
    e.stopPropagation();
    formFt.classList.add("was-validated");
  }
});

//Fin Validacion para formulario de inscripcion
