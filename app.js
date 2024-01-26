let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  console.log(intentos);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    // El usuario no acertó
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número es menor');
    } else {
      asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja(); 
  }

  return;
}

function limpiarCaja() {
  let valorCaja = document.querySelector('#valorUsuario');
  valorCaja.value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumeroSorteados);
  
  // si el numero incluido esta en la lista hacemos una operacion
  if (listaNumeroSorteados.includes(numeroGenerado)){
       
    return generarNumeroSecreto();
  }else{
       listaNumeroSorteados.push(numeroGenerado);
    return numeroGenerado;
  }


  return numeroSecreto;
}
function condicionesIniciales(){
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', `Indica un número del 1 al 10 ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos =1;
}
   function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar numero alectorio
    //inicializar el numero de intentos
    condicionesIniciales( );
    // desabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled','true');

  }

condicionesIniciales();                   