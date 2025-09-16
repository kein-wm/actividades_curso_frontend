// E J E R C I C I O   D O M   # 1

// Ejercicio 1: Crear e Insertar un Nuevo Título

// Escribe el código de una función llamada insertarTituloSecundario() que realice lo siguiente:
  // Cree un nuevo elemento <h2>.
  // Establezca su contenido de texto a "Sección Importante".
  // Asigne la clase CSS "resaltado" a este <h2>.
  // Inserte este nuevo <h2> justo después del primer elemento <p> que encuentres en el <body> del documento.

// 1. Funcion Mediante Flecha

const insertarTituloSecundario = () => {
  const body = document.querySelector("body");
  const paragraph = body.children[2];
  const h2 = document.createElement("h2");

  h2.textContent = "Sección Importante";

  body.insertBefore(h2, paragraph); // "insertBefore" es para insertar un NODO en un lugar especifico
  // "h2" es la etiqueta creada a insertar y "paragraph" es la ubicacion a insertar (que seria antes del nodo ya ubicado allí)
};

insertarTituloSecundario(); // se imprime

// E J E M P L O # 2
/*
const insertarTituloSecundario = () => {
  const body = document.querySelector("body");
  const paragraph = document.querySelectorAll("p");
  const h2 = document.createElement("h2");
  let text = "Sección Importante";

  h2.textContent = text;
  body.insertBefore(h2, paragraph[1]);
};

insertarTituloSecundario();
*/

//---------------------------------------------------------------------------------------------------------------------------

// 2. Funcion Mediante Expresion
/*
const insertarTituloSecundario = function () {
  const body = document.querySelector("body");
  const h2 = document.createElement("h2");
  const location = body.children[2];

  h2.textContent = "Sección Importante";

  body.insertBefore(h2, location);
};

insertarTituloSecundario();
*/

//---------------------------------------------------------------------------------------------------------------------------

// 3. Funcion Mediante Declaracion
/*
function insertarTituloSecundario() {
  const body = document.querySelector("body");
  const h2 = document.createElement("h2");
  const location = body.children[2];
  let text = "Sección Importante";

  h2.textContent = text;

  body.insertBefore(h2, location);
}

insertarTituloSecundario();
*/