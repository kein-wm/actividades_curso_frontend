// E J E R C I C I O   D O M   # 9

// La página web modelo contiene tres imágenes. Cada imagen está en un bloque figure con un elemento figcaption para un pie de foto. Al pulsar sobre cualquier imagen se debe mostar su atributo alt en su pie de foto. Si el pie ya está relleno se borrará su contenido y no se escribirá nada.

// Ejemplo: Cada imagen es como un botón que alterna el pie de foto entre vacio (sin texto) y el valor del atributo alt de cada una.

const img = document.querySelectorAll("img");

for (let i = 0; i < img.length; i++) {

  img[i].addEventListener("click", e => {
    const figcaption = img[i].nextElementSibling;
    
    if (figcaption.innerText == "") {
      figcaption.textContent = img[i].alt;
      figcaption.style.fontSize = "1.8rem";
    } else {
      figcaption.textContent = "";
    }
  })
}

console.log(img[0].nextElementSibling)
