var inicio = document.getElementById("boton");
inicio.addEventListener("click", jugar);
var resultado = document.getElementById("resultado");
// console.log(jugador);

var maquina = Math.floor(Math.random() * 3)+1;

function jugar()
{ 
    var jugadorcito = document.getElementById("selection");
    var jugador = parseInt(jugadorcito.value);

    if (jugador == maquina) {
        resultado.innerHTML = "Empate";
    } 
    else if (jugador == 1 && maquina == 2) {
        resultado.innerHTML = "Gano la maquina";
    } 
    else if (jugador == 1 && maquina == 3) {
        resultado.innerHTML = "Ganaste";
    } 
    else if (jugador == 2 && maquina == 3) {
        resultado.innerHTML = "Gano la maquina";
    } 
    else if (jugador == 2 && maquina == 1) {
        resultado.innerHTML = "Ganaste";
    } 
    else if (jugador == 3 && maquina == 1) {
        resultado.innerHTML = "Gano la maquina";
    } 
    else if (jugador == 3 && maquina == 2) {
        resultado.innerHTML = "Ganaste";
    }
}