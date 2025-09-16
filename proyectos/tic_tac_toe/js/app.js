//Funciones para Seleccionar Etiquetas
const selects = (label) => document.querySelectorAll(label);
const select = (label) => document.querySelector(label);

// Sellecion de Etiquetas
const boxes = selects(".box");
const restart_btn = select(".restart");
const info = select(".status");

// Variables para Lógica del Juego
let juegoEnCurso = true;
let turnoDelJugador = "X";
let estadoDelJuego = Array(9).fill("");

// Posibles Victorias
const condicionesDeVictoria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

info.textContent = `Turno de - "${turnoDelJugador}"`;

// E J E M P L O # 1 - Funcion Victoria
const victoria = () => {
  const ganador = condicionesDeVictoria.find(
    ([a, b, c]) =>
      estadoDelJuego[a] &&
      estadoDelJuego[a] === estadoDelJuego[b] &&
      estadoDelJuego[a] === estadoDelJuego[c]
  );

  if (ganador) {
    ganador.forEach((i) => (boxes[i].style.backgroundColor = "#090"));
  }

  return ganador;
};

// E J E M P L O # 2 - Funcion Victoria
/*
const victoria = () => {
  for (const [a, b, c] of condicionesDeVictoria) {
    if(estadoDelJuego[a] && estadoDelJuego[a] === estadoDelJuego[b] && estadoDelJuego[a] === estadoDelJuego[c]) {
      return [a, b, c]

      // [a, b, c].forEach(i => boxes[i].style.backgroundColor = "#090"); // hay que quitarle el "return" anterior an esta linea, para que tambien funcione de esta manera
    }
  }

  return null;
}
*/

// E J E M P L O # 3 - Funcion Victoria
/*
const victoria = () => condicionesDeVictoria.find(([a, b, c]) => estadoDelJuego[a] && estadoDelJuego[a] === estadoDelJuego[b] && estadoDelJuego[a] === estadoDelJuego[c])
*/

const clicksCeldas = (_, i) => {
  if (!juegoEnCurso || estadoDelJuego[i]) return;

  estadoDelJuego[i] = turnoDelJugador;
  boxes[i].textContent = turnoDelJugador;

  // const lineaGanadora = victoria();

  if (victoria()) {
    info.textContent = `El Ganador es "${turnoDelJugador}"`;
    juegoEnCurso = false;

    // C O L O R E A R   E N   V E R D E   L I N E A   G A N A D O R A
    // victoria().forEach(i => boxes[i].style.backgroundColor = "#090"); // otro ejemplo para cambiar el color de las casillas ganadoras, sin cambiarlo directamente dentro de la funcion "victoria()" con el ".forEach"
    // lineaGanadora.forEach(i => boxes[i].style.backgroundColor = "#090"); // otro ejemplo, colocando la funcion dentro de una variable para tambien poderle hacer el ".forEach" sin necesidad de colcocar la funcion directamente

  } else if (!estadoDelJuego.includes("")) {
    info.textContent = "Hay un Empate";
    juegoEnCurso = false;
    boxes.forEach((box) => (box.style.backgroundColor = "#900"));
    
  } else {
    turnoDelJugador = turnoDelJugador === "X" ? "O" : "X";
    info.textContent = `Turno de - "${turnoDelJugador}"`;
  }
};

// E J E M P L O # 1 - Boton de Reinicio de Juego
const restartGame = () => {
  juegoEnCurso = true;
  turnoDelJugador = "X";
  estadoDelJuego = Array(9).fill("");
  boxes.forEach((box) => (box.textContent = ""));
  boxes.forEach((box) => (box.style.backgroundColor = "#fff"));
  info.textContent = `Turno de - "${turnoDelJugador}"`;
};

restart_btn.addEventListener("click", restartGame);

// E J E M P L O # 2 - Boton de Reinicio de Juego
/*
restart_btn.addEventListener("click", e => {
  juegoEnCurso = true;
  turnoDelJugador = "X";
  estadoDelJuego = Array(9).fill("");
  boxes.forEach(box => box.textContent = "");
  info.textContent = `Turno de - "${turnoDelJugador}"`;
});
*/

// E J E M P L O # 1 - Click de las Celdas
boxes.forEach((box, position) =>
  box.addEventListener("click", (e) => clicksCeldas(e, position))
);

// E J E M P L O # 2 - Click de las Celdas
/*
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", e => clicksCeldas(e, i));
}
*/
