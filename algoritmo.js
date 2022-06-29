const MINUTOS = 60000 // Valores en milisegundos.
const SEGUNDOS = 1000
const SONIDO_TIC = new Audio('./Sonidos/tic.mp3');
const SONIDO_TAC = new Audio('./Sonidos/tac.mp3')

let beatsPorMinuto = 0 //"Beats por minuto ingresados por el usuario"

let selectorSonido = 0 //"alternación entre sonido tic y tac del metronomo"
let ejecucionMetronomo = "acá va la función a ejecutar con setInterval"

function definirBPM(){
    beatsPorMinuto = document.querySelector("#beats_por_minuto").value;
    beatsPorMinuto = (MINUTOS/beatsPorMinuto);
    console.log(beatsPorMinuto);
}

function funcionRepetidaBPM(){
    selectorSonido ++

    switch(selectorSonido){
        case 1:
            SONIDO_TIC.play()
            
        break;

        case 2: 
            SONIDO_TAC.play()
            
        break;

        case 3:
            SONIDO_TAC.play()
            
        break;

        case 4:
            SONIDO_TAC.play()
            
            selectorSonido = 0;
        break;

    }

}

function iniciarMetronomo(){
    detenerMetronomo()
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