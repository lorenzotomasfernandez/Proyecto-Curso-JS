//Suscripcion a newsletter
let modal = $("#modalSuscribete");
let abrirModal = $("#botonSuscribete");
let cerrarCruz = $("#botonCruz");
let cerrarModal = $("#botonCerrar");
let inputEmail = $("#inputMail");
let inputValue = "";

inputEmail.on("change",function(){ validacionEmail(
)})

abrirModal.click (function() {
    if (inputValue.includes("@" && ".com")) {
      modal.css("display","block");
    }
  }
);

cerrarCruz.click (function() {
  modal.css("display","none");
} 
);

cerrarModal.click (function() {
  modal.css("display","none");
} 
);

window.onclick = function(event) {
    if (event.target == modal) {
      modal.css("display","none");
    }
}

function validacionEmail(e) {
  inputValue = $("#inputMail").val();
}


//Animacion
$(document).ready(function(){
  $("#ver_ocultar").click(function(){
     if($(this).hasClass('visualizar')){
        $(this).removeClass('visualizar');
        $(this).html('Ocultar pie de pagina');
        $("#footer").fadeIn(500);
     }else{
        $(this).addClass('visualizar');
        $(this).html('Ver pie de pagina');
        $("#footer").fadeOut(500);
     }
  });
});