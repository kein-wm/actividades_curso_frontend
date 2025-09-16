// E J E R C I C I O   D O M   # 7

// Tienes la página web modelo que debe cambiar el color del titular del negro actual a rojo y además debe quedar centrado. El único cambio será en el bloque cambiar y el código de función cambiar()

// Ejemplo: El bloque cambiar acepta el click, el color del titular cambia a rojo y queda centrado

const body = document.querySelector("body");
const btn = document.createElement("button");
const h1 = document.createElement("h1");

h1.textContent = "¡Hola Mundo!"
btn.textContent = "Cambiar"

body.append(h1, btn);

btn.addEventListener("click", (event) => {
  h1.textContent = "¡Hola Mundo con JavaScript!";
  h1.style.color = "#900";
  h1.style.textAlign = "center";
})