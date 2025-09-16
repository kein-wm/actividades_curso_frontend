// B U C L E   F O R

// E J E R C I C I O # 1

// 1. Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.

// Ejemplo: Si el usuario entra por teclado el número 5 el script devolverá la secuencia  0, 1, 2, 3, 4, 5.
/*
let numero = parseInt(prompt("Ingrese el numero:"));
let contar = "";
let i;

for (i = 0; i < numero; i++) {
  document.write(`${i}, `);
  // contar += i + ", ";
}

// contar += i;

document.write(i);
// document.write(contar);
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 2

// 2. Se trata de que dado un número entero el script muestre una cuenta atrás, es decir, una lista de numeros separados por comas desde el número tecleado hasta el 0.

// Ejemplo: Si tecle o número 5 deberá mostarar 5,4,3,2,1.
/*
let numero = parseInt(prompt("Ingrese el numero:"));
let i;

for (i = numero; i > 0; i--) {
  document.write(`${i}, `);
}

document.write(i);
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 3

// 3. Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n').

// Ejemplo: Si tecleo el número 9 deberá mostrar cinco lineas con los números 0 2 4 6 8.
/*
let numero = parseInt(prompt("Ingrese el numero:"));
let pares = "";

for (let i = 0; i < numero; i = i + 2) {
  pares += `${i}\n`;
}

alert(pares);
*/

// E J E M P L O # 2
/*
let contar,
    max,
    par = 0,
    msg = "";

max = parseInt(prompt("Teclear un número entero"));

for (contar = 1; par < max; contar++) {
  msg += par + "\n";

  par = contar * 2;
}

alert(msg);
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 4

// 4. Este script debe escribir la tabla de multiplicar del número que el usuario teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.

// Recuerda que el salto de linea es el carácter "\n"

// Ejemplo: Si el usuario teclea el 4 la tabla mostrará diez líneas en la forma | 4 x 1 = 4 |4 x 2 = 8...

// let numero = parseInt(prompt("Ingrese el numero"));
// let mult = "";
// let i;

// for (i = 0; i <= 10; i++) {
//   mult += `${numero} x ${i} = ${numero * i}\n`;
// }

// alert(mult);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 5

// 5. En este ejercicio mezclamos bucles con condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.

// Recuerda: un número es múltiplo de N cuando el dividirlo por N el resto es 0.

// Ejemplo: Por ejemplo si tecleas el 14, obtendré la lista 2, 5, 8 y 11
/*
let numero = parseInt(prompt("Ingrese el numero"));
let almacenar = "";

for (let i = 1; i < numero; i++) {
  if (i % 3 == 2) {
    almacenar += i + ", "
  }
}

console.log(almacenar);
*/

// E J E M P L O # 2
/*
let numero = parseInt(prompt("Ingrese el numero"))

for (let i = 0; i < numero; i++) {
  if (i % 3 == 2) {
  console.log(i);
  }
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 6

// 6. Este script el usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.

// Ejemplo: Si el usuario teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x
/*
let letra = prompt("Ingrese la letra:");
let numero = parseInt(prompt("Ingrese el numero:"));
let container = "";

for (let i = 0; i < numero; i++) {
  container += letra;
}

document.write(container);
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 7

// 7. Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando alcancemos el valor 1:4.

// Ejemplo: Usamos el console log para ir imprimiendo los valores de los dígitos, deberá quedar algo así:
// 0:0
// 0:1
// 0:2
// ...
// ...
// 1:4 será el final del conteo

/*
let num1 = 1;
let num2 = 5;
let contador = "";

for (let i = 0; i <= num1; i++) {
  for (j = 0; j < num2; j++) {
    contador += i + ":" + j + "\n";
  }
}

alert(contador);
*/

// E J E M P L O # 2
/*
let num1 = parseInt(prompt("Ingrese el numero"));
let num2 = 5;

for (i = 0; i <= num1; i++) {
  for (j = 0; j < 5; j++) {
    console.log(`${i}:${j}`)  
  }
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 8

// 8. Se trata de dibujar un triángulo rectángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.

// Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.

// Ejemplo: Le tecleamos el valor 5. El resultado será:

// *
// **
// ***
// ****
// *****
/*
let valor = parseInt(prompt("Ingrese el valor:"));
let contador = "";

for (let i = 1; i <= valor; i++) {
  contador += "*";
  for (let j = 1; j < i; j++) {
    contador += "*";
  }

  contador += "\n";
}

console.log(contador);
*/

// E J E M P L O # 2
/*
for (let i = 0; i < valor; i++) {
  contador = "";
  for (let j = 0; j <= i; j++) {
    contador += "*";
  }

  console.log(contador + "\n");
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 9

// 9. Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario. El resultado será de la forma "Los números enteros de 0 a n suman suma".

// Ejemplo: Si tecleo el 5 obtendré "Los enteros enteros de 0 a 5 suman 15" (1+2+3+4+5).
/*
let valor = parseInt(prompt("Ingrese un valor:"));
let suma = 0;

for (let i = 0; i <= valor; i++) {
  suma += i;
}

document.write(`Los numeros enteros de 0 a ${valor}, suman un total de: ${suma}`);
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 10

// 10. Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4.

// Ejemplo: El progrma pide 4 veces al usuario que telcee un número y este escribe 5,9,10,12. El programa dirá "La media es 9"
/*
alert(
  "Le pedira ingresar un numero 4 veces, para asi calcular la medida aritmética"
);

let suma = 0;
let numero;
let divisor;

for (let i = 0; i < 4; i++) {
  numero = parseInt(prompt("Ingrese un numero:"));

  suma += numero;
}

divisor = suma / 4;

console.log(`la medida es: ${divisor}`);
*/