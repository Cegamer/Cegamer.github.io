var disabledButtons = document.getElementsByClassName("header-botones-texto");
disabledButtons[0].className = "header-botones-texto-activo";

var enabledButton = document.getElementsByClassName("header-botones-texto-activo");

function headerdisabledButtonsetActive(enableButton) {
    enabledButton[0].className = "header-botones-texto";
    enableButton.className = "header-botones-texto-activo";
}

var habilidadesScroll = document.querySelectorAll('.habilidad-cuadro-exterior');
var proyectosScroll = document.querySelectorAll('.project-container')
var certificadoScroll = document.querySelectorAll('.certificado-container')
ScrollReveal().reveal(habilidadesScroll);
ScrollReveal().reveal(proyectosScroll);
ScrollReveal().reveal(certificadoScroll);
ScrollReveal().reveal('.habilidades-image');
ScrollReveal().reveal('.section-title')
