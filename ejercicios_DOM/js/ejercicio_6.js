// E J E R C I C I O   D O M   # 6

// En la página web modelo ves que tienes un titular Hola Mundo. Se trata de añadir una función javascript para que al pulsar el botón cambiar este título se convierta en Hola Mundo con Javascript . El unico cambio necesario es el bloque con el texto cambiar y  completar la función cambiar() que aparece en el código de la página.

// Ejemplo: Debe cambiar de Hola Mundo a Hola Mundo Javascript

const body = document.querySelector("body");
const btn = document.createElement("button");
btn.textContent = "Cambiar el Titulo";

body.append(btn);

btn.addEventListener("click", (e) => {
  const h1 = document.querySelector("h1");
  h1.textContent = "¡Hola Mundo con JavaScript!"
})