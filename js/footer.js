// Formulario Footer
document
  .getElementById("formularioFooter")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    var nombreFooter = document.getElementById("nombre").value;

    var emailFooter = document.getElementById("email").value;

    var mensajeFooter = document.getElementById("mensaje").value;

    // Mostrar un mensaje de confirmación al usuario indicando que el formulario fue enviado
    if (confirm("¿Estás seguro de que deseas enviar el formulario?")) {
      alert("Formulario enviado. Te estaremos contactando a la brevedad.");

      document.getElementById("formularioFooter").reset();
    } else {
      // El usuario canceló el envío
      alert("Envío cancelado. Puedes revisar los campos antes de enviar.");
    }
  });
