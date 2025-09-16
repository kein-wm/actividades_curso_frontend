// E J E R C I C I O   D O M   # 4

// Ejercicio 4: Generar Elementos a Partir de Datos

// Escribe el código para un script que utilice un array de objetos llamado productos (cada objeto con propiedades nombre y precio):
//         const productos = [
//          { nombre: "Laptop", precio: 1200 },
//          { nombre: "Mouse", precio: 25 },
//          { nombre: "Teclado", precio: 75 }
//         ];

// El script debe:
  // Seleccionar un <ul> vacío con el id "catalogoProductos".
  // Utilizar un bucle while para iterar sobre el array productos.
  // Por cada producto en el array, cree un nuevo elemento <li>.
  // Dentro de cada <li>, establezca su innerHTML para mostrar el nombre del producto en negrita (<strong>) y el precio en un elemento <span>. Por ejemplo: <strong>Laptop</strong> <span>$1200</span>.
  // Añada cada <li> al <ul> "catalogoProductos".

  
const ul = document.querySelector("#catalogoProductos")

const products = [
  {
    name: "Laptops",
    price: 45,
  },
  {
    name: "Desktop",
    price: 105,
  },
  {
    name: "keyboards",
    price: 20,
  },
  {
    name: "Earphones",
    price: 15,
  },
  {
    name: "Mouses",
    price: 10,
  },
]

let i = 0;

while (i < products.length) {
  const li = document.createElement("li")
  li.innerHTML = `<strong>${products[i].name}</strong>
                  <span>$${products[i].price}</span>`

  ul.append(li);

  i++
}

// E J E M P L O # 2 - Bucle FOR
/*
for (let i = 0; i < products.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${products[i].name}</strong>
                  <span>${products[i].price}</span>`
  ul.append(li);
}
*/