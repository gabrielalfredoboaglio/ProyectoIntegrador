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
