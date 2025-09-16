// E J E R C I C I O   D O M   # 5

// Ejercicio 5: Reemplazar Contenido con Múltiples Elementos

// Escribe el código de una función actualizarInformacion() que haga lo siguiente:
  // Seleccione un <div> existente con el id "seccionInformacion" que actualmente contiene texto simple.
  // Elimine todo el contenido actual dentro de "seccionInformacion".
  // Cree dos nuevos elementos: un <p> y una <span>.
  // El <p> debe contener el texto "Detalles adicionales:".
  // La <span> debe contener el texto "Visita nuestra página." y tener un font-weight de "bold".
  // Finalmente, inserte tanto el <p> como la <span> dentro del <div> "seccionInformacion", asegurando que el <p> aparezca primero y la <span> después.

const actualizarInformacion = () => {
  const div = document.querySelector("#seccionInformacion");
  const p = document.createElement("p");
  const span = document.createElement("span");

  div.textContent = "";
  p.textContent = "Detalles adicionales:";
  span.textContent = "Visita nuestra Página.";
  span.style.fontWeight = "bold"

  div.append(p, span)
}

actualizarInformacion();

// E J E M P L O # 2 - Funcion por expresion
/*
const actualizarInformacion = function () {
  const div = document.querySelector("#seccionInformacion");
  const p = document.createElement("p");
  const span = document.createElement("span");

  div.textContent = "";
  p.textContent = "Detalles adicionales:";
  span.textContent = "Visita nuestra Página.";
  span.style.fontWeight = "bold"

  div.append(p, span)
}

actualizarInformacion();
*/

// E J E M P L O # 3 - Funcion por declaracion

/*
function actualizarInformacion () {
  const div = document.querySelector("#seccionInformacion");
  const p = document.createElement("p");
  const span = document.createElement("span");

  div.textContent = "";
  p.textContent = "Detalles adicionales:";
  span.textContent = "Visita nuestra Página.";
  span.style.fontWeight = "bold"

  div.append(p, span)
}

actualizarInformacion();
*/