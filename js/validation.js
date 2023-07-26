//Validacion de formulario de inscripcion

//aplica las validaciones de Bootstrap a los formularios que tienen la clase "needs-validation"

const forms = document.querySelectorAll(".needs-validation");

//convierte la colección de elementos obtenida en el paso anterior en un array e itero sobre cada formulario utilizando el método forEach.

Array.from(forms).forEach((form) => {
  // Para cada formulario en el array, se agrega un evento "submit"
  form.addEventListener(
    "submit",
    // Ejecuto evento
    (event) => {
      // verifico si el formulario ha sido validado utilizando el método checkValidity() del objeto form sino es asi evito la propagacion
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      //despues de prevenir el envio del formulario muestra estilos de boostrap si fue validado
      form.classList.add("was-validated");
    },
    false
  );
});

// Agrega evento click al botón "Enviar"
document
  .getElementById("enviarBtn")
  .addEventListener("click", function (event) {
    // Obtener el formulario
    const form = document.getElementById("miFormulario");

    // Verifica si el formulario ha sido validado
    if (!form.checkValidity()) {
      // El formulario no ha sido validado, cancelar el evento click
      event.preventDefault();
      event.stopPropagation();
      // Agrega la clase "was-validated" para mostrar los mensajes de validación de Bootstrap
      form.classList.add("was-validated");
    }
  });
