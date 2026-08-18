const titulo = document.getElementById("titulo")
const lampada = document.getElementById("lampada")
const ligar = document.getElementById("ligar")
const desligar = document.getElementById("desligar")




ligar.addEventListener('click', function() {
    document.getElementById("lampada").src = "img/acesa.png"
    document.getElementsByTagName('body')[0].style.backgroundColor = "white";
    titulo.style.color = "black"

})

desligar.addEventListener('click', function() {
    document.getElementById("lampada").src = "img/apagada.png"
    document.getElementsByTagName('body')[0].style.backgroundColor = "black";
    titulo.style.color = "white"

})