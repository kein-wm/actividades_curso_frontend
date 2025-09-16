// E J E R C I C I O   D O M   # 8

// Escribe un script de nombre creaDiv() que crea un nuevo bloque div en la página modelo. El bloque se creará al pulsar el botón con texto Crear, sus colores serán texto blanco con fondo rojo y el texto quedará centrado. Este texto consiste en la cadena Javascript permite crear páginas dinámicas.

// Ejemplo: El botón ya existe solo es necesario escribir la función, procurando usar los métodos de document para crear nodos.

const crearElemento = e => document.createElement(e);
const selecElemento = e => document.querySelector(e);

const body = selecElemento("body");
const btn = crearElemento("button");

btn.textContent = "Crear";
btn.addEventListener("click", e => {
  const div = crearElemento("div");

  div.textContent  ="Javascript permite crear páginas dinámicas";
  // div.style.backgroundColor = "#900";
  // div.style.color = "white";
  // div.style.textAlign = "center";

  div.setAttribute("style", "background-color: #900; color: white; text-align: center");

  // document.body.append(div)
  
  body.append(div)
})

body.append(btn)
