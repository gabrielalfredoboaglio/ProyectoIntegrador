// Formulario De inscripcion
document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtiene los valores de los campos del formulario
    var nombrePadre = document.getElementById("nombrePadre").value;

    var nombreAlumno = document.getElementById("nombreAlumno").value;

    var email = document.getElementById("emailInsc").value;

    var telefono = document.getElementById("telefono").value;

    var turno = document.getElementById("turno").value;

    var mensaje = document.getElementById("mensaje").value;

    // Muestra un mensaje de confirmación al usuario indicando que el formulario fue enviado
    if (confirm("¿Estás seguro de que deseas enviar el formulario?")) {
      alert(
        "El formulario ha sido registrado, nos comunicaremos en las proximas horas. ¡Muchas Gracias!."
      );

      document.getElementById("miFormulario").reset();
    } else {
      return;
    }
  });
