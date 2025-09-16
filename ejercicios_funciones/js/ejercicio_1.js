// E J E R C I C I O   F U N C I O N E S   # 1

// 1. Diseña una función que calcule el factorial de un número, usa una función recursiva (que se llama a si misma). Recuerda que el factorial de un número es el resultado de multiplicar cada número por el anterior hasta llegar a 1. Y el factorail de 0 es por definición 1. --- ¡LISTO!

// Ejemplo: Si escribo factorial(3) obtendré 3*2*1 = 6

//F U N C T I O N   D E C L A R A C I O N
function factorial(n) { 
  if (n === 0) { //caso base: si n es 0, el factorial es 1
    return 1;
  }
  else { //caso recursivo: n * factorial(n-1)
    return n * factorial(n - 1); 
  }
}

const numero = parseInt(prompt("Ingrese el numero"));
const resultado = factorial(numero);

document.write(`El factorial de ${numero} es ${resultado}`); // Salida: El factorial de 5 es 120

/*
//F UN C T I O N   E X P R E S I O N
const factorial = function(n) { 
  if (n === 0) { //caso base: si n es 0, el factorial es 1
    return 1;
  }
  else { //caso recursivo: n * factorial(n-1)
    return n * factorial(n - 1); 
  }
}

const numero = parseInt(prompt("Ingrese el numero"));
const resultado = factorial(numero);

document.write(`El factorial de ${numero} es ${resultado}`); // Salida: El factorial de 5 es 120
*/

/*
//F U N C T I O N   F L E C H A
const factorial = (n) => { 
  if (n === 0) { //caso base: si n es 0, el factorial es 1
    return 1;
  }
  else { //caso recursivo: n * factorial(n-1)
    return n * factorial(n - 1); 
  }
}

const numero = parseInt(prompt("Ingrese el numero"));
const resultado = factorial(numero);

document.write(`El factorial de ${numero} es ${resultado}`); // Salida: El factorial de 5 es 120
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
// E J E M P L O - Funcion iterativa para calcular el factorial

//F U N C T I O N   D E C L A R A C I O N
let numero = parseInt(prompt("Ingrese el numero"));

function factorialIterativo(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
    document.write(resultado + "<br>")
  }
  return resultado;
}

const factorialIterativoResultado = factorialIterativo(numero);
console.log(`Factorial de ${numero} (iterativo): ${factorialIterativoResultado}`);
*/

/*
//F U N C T I O N   E X P R E S I O N
let numero = parseInt(prompt("Ingrese el numero"));

const  factorialIterativo = function(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
    document.write(resultado + "<br>")
  }
  return resultado;
}

const factorialIterativoResultado = factorialIterativo(numero);
console.log(`Factorial de ${numero} (iterativo): ${factorialIterativoResultado}`);
*/

/*
//F U N C T I O N   F L E C H A
let numero = parseInt(prompt("Ingrese el numero"));

const factorialIterativo = (n) => {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
    document.write(resultado + "<br>")
  }
  return resultado;
}

const factorialIterativoResultado = factorialIterativo(numero);
console.log(`Factorial de ${numero} (iterativo): ${factorialIterativoResultado}`);
*/