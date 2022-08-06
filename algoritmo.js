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
    if (limiteTotalSumatoria == 12){
        switch(selectorSonido){
            case 1:
                contadorDeCompases()
                SONIDO_TIC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
                
            break;

            case 2:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
            break;

            case 3:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
                selectorSonido = 0;
            break;
        }
    }
    else if (limiteTotalSumatoria == 16){
        switch(selectorSonido){
            case 1:
                contadorDeCompases()
                SONIDO_TIC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
                
            break;

            case 2:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
            break;

            case 3:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
            break;

            case 4:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
                selectorSonido = 0;
            break;
        }
    }
    else if (limiteTotalSumatoria == 20){
        switch(selectorSonido){
            case 1:
                contadorDeCompases()
                SONIDO_TIC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
                
            break;

            case 2:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
            break;

            case 3:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
            break;

            case 4:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
                
            break;

            case 5:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
                selectorSonido = 0;
            break;
        }
    }
    else if (limiteTotalSumatoria == 24){
        switch(selectorSonido){
            case 1:
                contadorDeCompases()
                SONIDO_TIC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
                
            break;

            case 2:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
            break;

            case 3:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
            break;

            case 4:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)                
            break;

            case 5:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
            break;

            case 6:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
                selectorSonido = 0;
            break;
        }
    }
    else if (limiteTotalSumatoria == 28){
        switch(selectorSonido){
            case 1:
                contadorDeCompases()
                SONIDO_TIC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
                
            break;

            case 2:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
            break;

            case 3:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
            break;

            case 4:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)                
            break;

            case 5:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
            break;

            case 6:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
            break;

            case 7:
                contadorDeCompases()
                SONIDO_TAC.play()
                detenerMetronomo()
                ejecucionMetronomo = setInterval(funcionRepetidaBPM,beatsPorMinuto)
                selectorSonido = 0;
            break;
        }
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
let quintoNumeroAleatorio = "";
let sextoNumeroAleatorio = "";
let septimoNumeroAleatorio = "";
//Cada numero debe ser mayor a 0 y juntos deben sumar 16, por lo tanto ningún número puede ser mayor a 13
//  para hacerlo, determinamos una constante y una variable que controlen el limite máximo del número aleatorio
const LIMITE_MAXIMO_POR_NUMERO = 13;
const LIMITE_MINIMO_POR_NUMERO = 1;
let limiteTotalSumatoria = "valor variable según la métrica del compás"; 
const VALOR_CORCHEA = 4
let limiteVariableAleatorio = 16;
let numeroRestante = "";

function asignacionMetricaCompas(){
    limiteTotalSumatoria = document.querySelector("#selector_compases").value * VALOR_CORCHEA;
    console.log(limiteTotalSumatoria);
}

function contadorDeCompases(){
    asignacionMetricaCompas()
    numeroDeCompás ++
    if (numeroDeCompás == limiteTotalSumatoria){
        mostrarNumeroAleatorio()
        numeroDeCompás = 0
    }
}

function resetearContadorCompases (){
    numeroDeCompás = 0
}


function mostrarNumeroAleatorio(){
    asignacionMetricaCompas()
    if(limiteTotalSumatoria == 12){
        limiteVariableAleatorio = 10;
        primerNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - 1;
        segundoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);
        
        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio;
        tercerNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

        if(primerNumeroAleatorio + segundoNumeroAleatorio + tercerNumeroAleatorio != limiteTotalSumatoria){
            numeroRestante = limiteTotalSumatoria - (primerNumeroAleatorio + segundoNumeroAleatorio)
            tercerNumeroAleatorio = numeroRestante;
        }
        document.querySelector("#secuencia_ejercicio").innerHTML= `${primerNumeroAleatorio} - ${segundoNumeroAleatorio} - ${tercerNumeroAleatorio}`
    }

    else if(limiteTotalSumatoria == 16){
        limiteVariableAleatorio = 13;
        primerNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - 2;
        segundoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);
        
        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio - 1;
        tercerNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio - tercerNumeroAleatorio;
        cuartoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

        if(primerNumeroAleatorio + segundoNumeroAleatorio + tercerNumeroAleatorio + cuartoNumeroAleatorio != limiteTotalSumatoria){
            numeroRestante = limiteTotalSumatoria - (primerNumeroAleatorio + segundoNumeroAleatorio + tercerNumeroAleatorio)
            cuartoNumeroAleatorio = numeroRestante;
        }
        document.querySelector("#secuencia_ejercicio").innerHTML= `${primerNumeroAleatorio} - ${segundoNumeroAleatorio} - ${tercerNumeroAleatorio} - ${cuartoNumeroAleatorio}`
    }
    else if(limiteTotalSumatoria == 20){
        limiteVariableAleatorio = 16;
        primerNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - 3;
        segundoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);
        
        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio - 2;
        tercerNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio - tercerNumeroAleatorio - 1;
        cuartoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio - tercerNumeroAleatorio - cuartoNumeroAleatorio;
        quintoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1)

        if(primerNumeroAleatorio + segundoNumeroAleatorio + tercerNumeroAleatorio + cuartoNumeroAleatorio + quintoNumeroAleatorio != limiteTotalSumatoria){
            numeroRestante = limiteTotalSumatoria - (primerNumeroAleatorio + segundoNumeroAleatorio + tercerNumeroAleatorio + cuartoNumeroAleatorio)
            quintoNumeroAleatorio = numeroRestante;
        }
        document.querySelector("#secuencia_ejercicio").innerHTML= `${primerNumeroAleatorio} - ${segundoNumeroAleatorio} - ${tercerNumeroAleatorio} - ${cuartoNumeroAleatorio} - ${quintoNumeroAleatorio}`
    }
    else if(limiteTotalSumatoria == 24){
        limiteVariableAleatorio = 19;
        primerNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - 4;
        segundoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);
        
        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio - 3;
        tercerNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio - tercerNumeroAleatorio - 2;
        cuartoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio - tercerNumeroAleatorio - cuartoNumeroAleatorio - 1;
        quintoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1)

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio - tercerNumeroAleatorio - cuartoNumeroAleatorio - quintoNumeroAleatorio;
        sextoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1)

        if(primerNumeroAleatorio + segundoNumeroAleatorio + tercerNumeroAleatorio + cuartoNumeroAleatorio + quintoNumeroAleatorio + sextoNumeroAleatorio != limiteTotalSumatoria){
            numeroRestante = limiteTotalSumatoria - (primerNumeroAleatorio + segundoNumeroAleatorio + tercerNumeroAleatorio + cuartoNumeroAleatorio + quintoNumeroAleatorio)
            sextoNumeroAleatorio = numeroRestante;
        }
        document.querySelector("#secuencia_ejercicio").innerHTML= `${primerNumeroAleatorio} - ${segundoNumeroAleatorio} - ${tercerNumeroAleatorio} - ${cuartoNumeroAleatorio} - ${quintoNumeroAleatorio} - ${sextoNumeroAleatorio}`

    }
    else if(limiteTotalSumatoria == 28){
        limiteVariableAleatorio = 22;
        primerNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - 5;
        segundoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);
        
        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio - 4;
        tercerNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio - tercerNumeroAleatorio - 3;
        cuartoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1);

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio - tercerNumeroAleatorio - cuartoNumeroAleatorio - 2;
        quintoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1)

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio - tercerNumeroAleatorio - cuartoNumeroAleatorio - quintoNumeroAleatorio -1;
        sextoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1)

        limiteVariableAleatorio = limiteTotalSumatoria - primerNumeroAleatorio - segundoNumeroAleatorio - tercerNumeroAleatorio - cuartoNumeroAleatorio - quintoNumeroAleatorio - sextoNumeroAleatorio;
        septimoNumeroAleatorio = Math.floor((Math.random()*(limiteVariableAleatorio-1+1))+1)

        if(primerNumeroAleatorio + segundoNumeroAleatorio + tercerNumeroAleatorio + cuartoNumeroAleatorio + quintoNumeroAleatorio + sextoNumeroAleatorio + septimoNumeroAleatorio != limiteTotalSumatoria){
            numeroRestante = limiteTotalSumatoria - (primerNumeroAleatorio + segundoNumeroAleatorio + tercerNumeroAleatorio + cuartoNumeroAleatorio + quintoNumeroAleatorio + sextoNumeroAleatorio)
            septimoNumeroAleatorio = numeroRestante;
        }
        document.querySelector("#secuencia_ejercicio").innerHTML= `${primerNumeroAleatorio} - ${segundoNumeroAleatorio} - ${tercerNumeroAleatorio} - ${cuartoNumeroAleatorio} - ${quintoNumeroAleatorio} - ${sextoNumeroAleatorio} - ${septimoNumeroAleatorio}`    
    }
}