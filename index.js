const alerta = document.querySelector(".btn-alerta")

alerta.addEventListener('click', () => {
  alert("Has dado click en el botón de Alerta")
})

$(document).ready(() => {
  $(".btn-alerta").click(() => {
    console.log("Hola, estoy utilizando Jquery");
  })
})