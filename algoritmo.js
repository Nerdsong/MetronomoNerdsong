const MINUTOS = 60000 // Valores en milisegundos.
const SEGUNDOS = 1000
const SONIDO_TIC = new Audio('./Sonidos/tic.mp3');
const SONIDO_TAC = new Audio('./Sonidos/tac.mp3')

let beatsPorMinuto = 0 //"Beats por minuto ingresados por el usuario"

let selectorSonido = 0 //"alternación entre sonido tic y tac del metronomo"
let ejecucionMetronomo = "acá va la función a ejecutar con setInterval"
let numeroDeCompás = 0


function definirBPM(){
    beatsPorMinuto = document.querySelector("#beats_por_minuto").value;
    beatsPorMinuto = (MINUTOS/beatsPorMinuto) ;
    
}




function funcionRepetidaBPM(){
    selectorSonido ++
    contadorDeCompases()
    switch(selectorSonido){
        case 1:
            SONIDO_TIC.play()
            detenerMetronomo()
            ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
            
        break;

        case 2: 
            SONIDO_TAC.play()
            detenerMetronomo()
            ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
        break;

        case 3:
            SONIDO_TAC.play()
            detenerMetronomo()
            ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
        break;

        case 4:
            SONIDO_TAC.play()
            detenerMetronomo()
            ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
            selectorSonido = 0;
        break;

    }

}

function contadorDeCompases(){
    numeroDeCompás ++
    if (numeroDeCompás == 16){
        mostrarNumeroAleatorio()
        numeroDeCompás = 0
    }
}

function iniciarMetronomo(){
    detenerMetronomo()
    mostrarNumeroAleatorio()
    numeroDeCompás = 0
    selectorSonido = 0
    ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
}

function detenerMetronomo(){
    clearInterval(ejecucionMetronomo);
}

let tapperUno = "valor calculado entre los tap del usuario"
let tapperDos = "valor calculado entre los tap del usuario"
let tapperTres = "valor calculado entre los tap del usuario"
let tapperCuatro = "valor calculado entre los tap del usuario"
let numeroTaps = 0 //"cantidad de veces que el usuario tappea"
let beatsPorMinutoTap = "valor de beats por minuto segun tap"

function funcionTap(){
    numeroTaps ++
    switch(numeroTaps){
    
        case 1 :
            tapperUno = Date.now();
            console.log(tapperUno)
        break

        case 2 :
            tapperDos = Date.now();
            console.log(tapperDos)
            
        break
        
        default :
            asignacionBeatsPorMinutoTap()
            tapperUno = 0
            tapperDos = 0
            numeroTaps = 0
        break
        }
}

function asignacionBeatsPorMinutoTap(){
    beatsPorMinutoTap = tapperDos-tapperUno;
    beatsPorMinutoTap = (MINUTOS/beatsPorMinutoTap);
    document.querySelector("#beats_por_minuto").value = Math.floor(beatsPorMinutoTap)
    definirBPM()
}

function asignacionBeatsPorMinutoSlide(){
    document.querySelector("#beats_por_minuto").value = document.querySelector("#slider_bpm").value;
    definirBPM()
}

function aumentarBPM(){
    document.querySelector("#slider_bpm").value ++ ;
    asignacionBeatsPorMinutoSlide()
}

function disminuirBPM(){
    document.querySelector("#slider_bpm").value -- ;
    asignacionBeatsPorMinutoSlide()
}

// Creación de algoritmo para aleatorizar cada 4 compases 4 números que en total sumen 16

//Variables que contendrán cada uno de los cuatro números aleatorios
let primerNumeroAleatorio = "";
let segundoNumeroAleatorio = "";
let tercerNumeroAleatorio = "";
let cuartoNumeroAleatorio = "";
//Cada numero debe ser mayor a 0 y juntos deben sumar 16, por lo tanto ningún número puede ser mayor a 13
//  para hacerlo, determinamos una constante y una variable que controlen el limite máximo del número aleatorio
const LIMITE_MAXIMO_POR_NUMERO = 13;
const LIMITE_MINIMO_POR_NUMERO = 1;
const LIMITE_TOTAL_SUMATORIA = 16
let limiteVariableAleatorio = 16;
let numeroRestante = "";

function generarNumeroAleatorio(numeroAleatorio){

    numeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1)

    console.log(numeroAleatorio);
}

function mostrarNumeroAleatorio(){
    limiteVariableAleatorio = LIMITE_MAXIMO_POR_NUMERO;
    primerNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

    limiteVariableAleatorio = LIMITE_TOTAL_SUMATORIA - primerNumeroAleatorio - 2;
    segundoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);
    
    limiteVariableAleatorio = LIMITE_TOTAL_SUMATORIA - primerNumeroAleatorio - segundoNumeroAleatorio - 1;
    tercerNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

    limiteVariableAleatorio = LIMITE_TOTAL_SUMATORIA - primerNumeroAleatorio - segundoNumeroAleatorio - tercerNumeroAleatorio;
    cuartoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

    if(primerNumeroAleatorio + segundoNumeroAleatorio + tercerNumeroAleatorio + cuartoNumeroAleatorio != LIMITE_TOTAL_SUMATORIA){
        numeroRestante = 16 - (primerNumeroAleatorio + segundoNumeroAleatorio + tercerNumeroAleatorio)
        cuartoNumeroAleatorio = numeroRestante;
    }
        document.querySelector("#secuencia_ejercicio").innerHTML= `${primerNumeroAleatorio} - ${segundoNumeroAleatorio} - ${tercerNumeroAleatorio} - ${cuartoNumeroAleatorio}`
}


mostrarNumeroAleatorio()