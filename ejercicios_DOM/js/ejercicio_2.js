// E J E R C I C I O   D O M   # 2

// Ejercicio 2: Actualizar Contenido y Estilo Condicionalmente

// Escribe el código para un script que haga lo siguiente:
  // Seleccione todos los elementos <li> dentro de una lista desordenada (<ul>) con el id "listaDeTareas".
  // Usando un bucle for, itere sobre cada elemento <li>.
  // Si el texto de un <li> contiene la palabra "urgente", cambia su color de texto a rojo y añade el texto "(¡PRIORIDAD!)" al final de su contenido existente.
  // Si el texto no contiene "urgente", simplemente cambia su color de texto a azul.

// 1. Bucle For

const ul = document.querySelector("#listaDeTareas");
const li = ul.children;

for (let i = 0; i < li.length; i++) {
  if (li[i].textContent == "Urgente") {
    li[i].style.color = "#f00"
    li[i].textContent += " ¡PRIORIDAD!"
  } else {
    li[i].style.color = "#00f"
  }
}

// 2. Bucle While
/*
const ul = document.querySelector("#listaDeTareas");
const li = ul.children;
let i = 0;

while (i < li.length) {
  if (li[i].textContent == "Urgente") {
    li[i].style.color = "#f00";
    li[i].textContent += " ¡PRIORIDAD!";
  } else {
    li[i].style.color = "#00f";
  }

  i++;
}
*/
