let numeroScreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSoteados = [];

function asignarTextoElemento(eLemento, texto){
    let elelmentoHTML = document.querySelector(eLemento);
    elelmentoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroScreto === numeroDeUsuario ){
    asignarTextoElemento('p', `Felicidades!! Acertaste en ${intentos} ${(intentos === 1) ? 'vez' : "veces"}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroScreto){
            asignarTextoElemento('p', 'El numero es menor');
        }else{
            asignarTextoElemento('p', 'El numero es mayor')
        }
        intentos++;
        limpiarCaja();
    }
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSoteados);
    //Si e lnumero generado esta incluido en la lista 

    if (listaNumerosSoteados.length == numeroMaximo){
        return asignarTextoElemento('p', 'Haz llegado al limite de numeros sorteados')
    }

    if(listaNumerosSoteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSoteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Inidcar mensajo de intervalos 
    condicionesInidicales();

    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function condicionesInidicales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroScreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesInidicales();
