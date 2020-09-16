var inicio = document.getElementById("boton");
inicio.addEventListener("click", jugar);
var resultado = document.getElementById("resultado");


// url imagen piedra:  "https://i.imgur.com/RML1AP3.png"
// url imagen papel:  "https://i.imgur.com/4zcSVMw.png"
// url imagen tijera:  "https://i.imgur.com/6kqyqK5.png"

function jugar()
{ 
    var maquina = Math.floor(Math.random() * 3)+1;
    console.log(maquina);
    var jugadorcito = document.getElementById("selection");
    var jugador = parseInt(jugadorcito.value);
    
    // Para visualizar la mano del jugador en pantalla
    if (jugador == 1) {
        document.getElementById("mano1").src="https://i.imgur.com/RML1AP3.png";
    }
    else if (jugador == 2) {
        document.getElementById("mano1").src="https://i.imgur.com/4zcSVMw.png";
    }
    else {
        document.getElementById("mano1").src="https://i.imgur.com/6kqyqK5.png";
    }
    
    // Para visualizar la mano de la maquina en pantalla
    if (maquina == 1) {
        document.getElementById("mano2").src="https://i.imgur.com/RML1AP3.png";
    }
    else if (maquina == 2) {
        document.getElementById("mano2").src="https://i.imgur.com/4zcSVMw.png";
    }
    else {
        document.getElementById("mano2").src="https://i.imgur.com/6kqyqK5.png";
    }

    // Programacion de la partida
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