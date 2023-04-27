$(document).ready(function () {
  const jsonToMao = {
    nombre: "Daniel Mercado Tapias",
    edad: 21,
    telefono: {
      tipoTelefono: "celular",
      numTelefono: "3013637210",
    },
    email: "damttrabajos@gmail.com",
  };

  $.each(jsonToMao, function (index, value) {
    if (index == "telefono") {
      $.each(value, function (i, v) {
        $("#jsonUl").append("<li>" + i + " - " + v + " </li>");
      });
    } else {
      $("#jsonUl").append("<li>" + index + " - " + value + " </li>");
    }
  });
});
