/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let form = document.getElementById("formulario"); //obtener el elemento

  form.addEventListener("submit", envioFormulario); //manipular el elemento

  let mensajeAlerta = document.getElementById("mensajeAlerta");
  let tarjeta = document.getElementById("tarjeta");
  let codigo = document.getElementById("codigo");
  let importe = document.getElementById("importe");
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let postalCode = document.getElementById("postalCode");
  let radios = document.getElementById("radios");
  let radio1 = document.getElementById("inlineRadio1");
  let radio2 = document.getElementById("inlineRadio2");
  let radio3 = document.getElementById("inlineRadio3");
  let radio4 = document.getElementById("inlineRadio4");
  let message = document.getElementById("message");

  function envioFormulario(event) {
    event.preventDefault();

    // Condicion para cambiar color de card
    if (tarjeta.value === "") {
      tarjeta.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      tarjeta.style.background = "white";
    }

    // Condicion para cambiar color de cvc
    if (codigo.value === "") {
      codigo.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      codigo.style.background = "white";
    }

    // Condicion para cambiar color de amount
    if (importe.value === "") {
      importe.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      importe.style.background = "white";
    }

    // Condicion para cambiar color de firstName
    if (firstName.value === "") {
      firstName.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      firstName.style.background = "white";
    }

    // Condicion para cambiar color de lastName
    if (lastName.value === "") {
      lastName.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      lastName.style.background = "white";
    }

    // Condicion para cambiar color de city
    if (city.value === "") {
      city.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      city.style.background = "white";
    }

    // Condicion para cambiar color de state
    if (state.value === "Pick a state") {
      state.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      state.style.background = "white";
    }

    // Condicion para cambiar color de postalCode
    if (postalCode.value === "") {
      postalCode.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      postalCode.style.background = "white";
    }

    // Condicion para cambiar color de radios
    if (radio1.checked || radio2.checked || radio3.checked || radio4.checked) {
      radios.style.background = "gray";
    } else {
      radios.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    }

    // Condicion para cambiar color de message
    if (message.value === "") {
      message.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      message.style.background = "white";
    }
  }
};
