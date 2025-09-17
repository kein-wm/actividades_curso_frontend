const boxes = document.querySelectorAll(".box");
const restart_btn = document.querySelector(".restart");
const info = document.querySelector(".status");

let juegoEnCurso = true;
let turnoDelJugador = "X";
let estadoDelJuego = Array(9).fill("");

const combinacionesDeVictoria = [
  [0, 1, 2,],
  [3, 4, 5,],
  [6, 7, 8,],
  [0, 3, 6,],
  [1, 4, 7,],
  [2, 5, 8,],
  [0, 4, 8,],
  [2, 4, 6,],
]

info.textContent = `Turno del Jugador"${turnoDelJugador}"`;

const victoria = () => {
  const ganador = combinacionesDeVictoria.find(([a, b, c]) => estadoDelJuego[a] && estadoDelJuego[a] === estadoDelJuego[b] && estadoDelJuego[a] === estadoDelJuego[c])

  return ganador;
}

const game = (_, i) => {
  if(!juegoEnCurso || estadoDelJuego[i]) return;

  estadoDelJuego[i] = turnoDelJugador;
  boxes[i].textContent = turnoDelJugador;

  const ganador = victoria();

  if(ganador){
    info.textContent = `Ha ganado el Jugador "${turnoDelJugador}"`;
    juegoEnCurso = false;
    ganador.forEach(pos => boxes[pos].style.backgroundColor = "#090");

  } else if(!estadoDelJuego.includes("")){
    info.textContent = "¡Hay un Empate!;"
    juegoEnCurso = false;
  } else{
    turnoDelJugador = turnoDelJugador === "X" ? "O" : "X";
    info.textContent = `Turno del Jugador "${turnoDelJugador}"`;
  }
}

boxes.forEach((box, position) => box.addEventListener("click", e => game(e, position)));

const restartGame = () => {
  juegoEnCurso = true;
  turnoDelJugador = "X";
  estadoDelJuego = Array(9).fill("");
  boxes.forEach(box => box.textContent = "");
  boxes.forEach(box => box.style.backgroundColor = "#fff");
  info.textContent = `Turno del Jugador "${turnoDelJugador}"`;
}

restart_btn.addEventListener("click", restartGame);