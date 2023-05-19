window.onload = function () {
  let carta = document.getElementById("carta");
  let botonNuevaCarta = document.getElementById("botonNuevaCarta");


  //--------------------------------------------------------------------------------------------------------------------
  function generarPinta() {
    // Hago un random de 4 opciones que me devuelva un simbolo
    let iconoRandom = Math.floor(Math.random() * 4) + 1;
    let claseIcono = "";

    switch (iconoRandom) {
      case 1:
        // claseIcono = "♦";
        claseIcono = "diamonds";
        break;
      case 2:
        // claseIcono = "♥";
        claseIcono = "hearts";
        break;
      case 3:
        // claseIcono = "♠";
        claseIcono = "spades";
        break;
      case 4:
        // claseIcono = "♣";
        claseIcono = "clubs";
        break;
    }
    return claseIcono;
  }

  //--------------------------------------------------------------------------------------------------------------------
  function generarNumero() {
    // Hago un random de 13 opciones que me devuelva: A cuando sea 1, numeros del 2-10 y J-Q-K para el 11-12-13
    let numeroRandom = Math.floor(Math.random() * 13) + 1;
    let numeroSeleccionado = "";

    switch (numeroRandom) {
      case 1:
        numeroSeleccionado = "A";
        break;
      case 11:
        numeroSeleccionado = "J";
        break;
      case 12:
        numeroSeleccionado = "Q";
        break;
      case 13:
        numeroSeleccionado = "K";
        break;
      default:
        numeroSeleccionado = numeroRandom;
        break;
    }
    return numeroSeleccionado;
  }

  // Asigno variables para generar la carta inicial
  let primerNumero = generarNumero();
  let primeraPinta = generarPinta();

  // Creo el texto del nodo con la variable devuelta por la funcion generarNumero
  let nodoTextoNumero = document.createTextNode(primerNumero);
  //--------------------------------------------------------------------------------------------------------------------
  let esRojo;
  //Para la primera carta se pregunta su es diamante o corazon, si lo es, es true, de lo contrario es false
  (primeraPinta === "diamonds" || primeraPinta === "hearts") ? esRojo = true : esRojo = false;

  // Asigno una clase con mi clase numero, la primera generacion de pinta y si es rojo o no
  carta.setAttribute("class", `numero ${primeraPinta} ${esRojo ? "red" : "black"}`);
  // Añado a la carta el simbolo del numero generado
  carta.appendChild(nodoTextoNumero);

  // Creo una funcion para refrescar la carta sin tener que refrescar la pagina entera
  function refrescarCarta() {
    let refreshPinta = generarPinta();
    nodoTextoNumero.nodeValue = generarNumero();
    (refreshPinta === "diamonds" || refreshPinta === "hearts") ? esRojo = true : esRojo = false;
    carta.setAttribute("class", `numero ${refreshPinta} ${esRojo ? "red" : "black"}`);
  };

  // Añado el eventListener al boton para ejecutar la funcion cada vez que lo aprete
  botonNuevaCarta.addEventListener("click", refrescarCarta);

  //--------------------------------------------------------------------------------------------------------------------
  let idIntervalo;

  //funcion para iniciar el cambio con intervalos
  function changeCard() {
    // Pregunto si no existe idIntervalo
    if (!idIntervalo) {
      idIntervalo = setInterval(refrescarCarta, 500);
    }
  }

  // Creo funcion para parar el intervalo
  function pararRandom() {
    clearInterval(idIntervalo);
    // Liberamos la variable idIntervalo y le asignamos null
    idIntervalo = null;
  }

  document.getElementById("botonActivarAuto").addEventListener("click", changeCard);
  document.getElementById("botonDesactivarAuto").addEventListener("click", pararRandom);
}
