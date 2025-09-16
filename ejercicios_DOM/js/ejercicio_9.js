// E J E R C I C I O   D O M   # 9

// En la página web modelo debes lograr que al pulsar el botón con el texto borrar se deberá eliminar el bloque que aparece bajo el titular, no ocultar, sino borrarlo. Para detalles mira el código fuente de la página. Solo tienes que escribir el código de la función borrar()

// Ejemplo: Al pulsar el botón el subtítulo debe dejar de existir en el código de la página. No deb producirse error al volver a pulsar el botón.

const btn = document.createElement("button");
btn.textContent = "Borrar paragraph";
btn.setAttribute(
  "style", 
  "background-color: black; color: white; padding: .4rem 1.2rem; border-radius: .5rem; margin-left: .5rem"
);

document.body.append(btn)

btn.addEventListener("click", e => {
  const paragraph = document.querySelector("p");
  paragraph.remove()
})