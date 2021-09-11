var disabledButtons = document.getElementsByClassName("header-botones-texto");
disabledButtons[0].className = "header-botones-texto-activo";

var enabledButton = document.getElementsByClassName("header-botones-texto-activo");

function headerdisabledButtonsetActive(enableButton) {
    enabledButton[0].className = "header-botones-texto";
    enableButton.className = "header-botones-texto-activo";
}


