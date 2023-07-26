// Formulario De inscripcion
document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    var nombrePadre = document.getElementById("nombrePadre").value;

    var nombreAlumno = document.getElementById("nombreAlumno").value;

    var email = document.getElementById("email").value;

    var telefono = document.getElementById("telefono").value;

    var turno = document.getElementById("turno").value;

    var mensaje = document.getElementById("mensaje").value;

    // Mostrar un mensaje de confirmación al usuario indicando que el formulario fue enviado
    if (confirm("¿Estás seguro de que deseas enviar el formulario?")) {
      alert("Formulario enviado. Gracias por completarlo.");

      document.getElementById("miFormulario").reset();
    } else {
      // El usuario canceló el envío
      alert("Envío cancelado. Puedes revisar los campos antes de enviar.");
    }
  });
