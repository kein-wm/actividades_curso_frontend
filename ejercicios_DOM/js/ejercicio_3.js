// E J E R C I C I O   D O M   # 3

// Ejercicio 3: Duplicar y Modificar Estructura

// Escribe el código de una función duplicarBloque() que realice:
  // Identifique un <div> existente con el id "bloqueOriginal".
  // Cree una copia de este <div> (solo el elemento, no sus hijos).
  // Asigne el id "bloqueCopia" a esta nueva copia.
  // Dentro de la copia, establezca el textContent a "Contenido Duplicado".
  // Inserte esta copia del <div> justo antes de un <footer> que tenga el id "pieDePagina".

const duplicarBloque = () => {
  const div = document.querySelector("#bloqueOriginal");
  const location = document.querySelector("#pieDePagina");
  const divCopia = div.cloneNode();


  divCopia.setAttribute("id", "bloqueCopia");
  divCopia.textContent = "Contenido Duplicado";
  divCopia.style.color = "#009";

  location.before(divCopia);
}

duplicarBloque();

// E J E M P L O # 2 - con "insertBefore"
/*
const duplicarBloque = function () {
  const body = document.querySelector("body");
  const div = document.querySelector("#bloqueOriginal");
  const location = body.children[1];
  const divCopy = div.cloneNode();
  const text = "Contenido Duplicado"
  
  divCopy.setAttribute("id", "bloqueCopia");
  divCopy.textContent = text;
  divCopy.style.color = "#009";

  body.insertBefore(divCopy, location);
}

duplicarBloque();
*/