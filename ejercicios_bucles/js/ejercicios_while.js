// B U C L E   W H I L E

// E J E R C I C I O # 1

// 1. Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. Los números se separarán por comas.

// Ejemplo: Si le doy el número 5 pues deberá contar 0,1,2,3,4,5
/*
let max = parseInt(prompt("Ingrese el numero maximo"));
let i = 0;
let listaNumeros = "";

while (i < max) {
  listaNumeros += i + ", " // 0, 1, 2, 3, 4,

  i++;
}

listaNumeros += i; // con el operador "+=" se le concatena el valor de la variable "i" a el valor que ya se encuentra en la variable "lista"
// // "lista = 0, 1, 2, 3, 4, " + "i = 5"
// // "lista = 0, 1, 2, 3, 4, 5"

alert(listaNumeros) // se imprime en el front con una alerta
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 2

// 2. Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número.

// Ejemplo: Si tecleo 0 me dirá Por favor teclee un número entre 1 y 5.
/*
let min = 1;
let max = 5;
let numero = 0;

while (numero < min || numero > max) {
  numero = parseInt(prompt("Ingrese un numero entre 1 y 5"));
}
document.write(`El numero ingresado esta entre 1 y 5`);
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 3

// 3. Un script que preguntará al usuario si desea continuar con el programa. Si el usuario pulsa una letra n (mayúscla o minúscula), el programa finalizará. Cualquier otra entrada repetirá la pregunta.

// Ejemplo: El usuario teclea Si, como no es la letra s pues dirá Error, ¿Desa seguir con el programa?.
/*
let respuesta = "s";

while (respuesta == "s" || respuesta == "S") {
  respuesta = prompt("Desea continuar el programa? (s/n)");
}

alert("programa finalizado");
*/

/*
let respuesta;

while (respuesta != "n" && respuesta != "N") {
  respuesta = prompt("Desea continuar el programa? (s/n)");
}

alert("programa finalizado");
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 4

// 4. Determinar si el número que teclea el usuario es primo o no. Recordar que un número primo es el que solo puede dividirse por si mismo y por la unidad.

// Ejemplo: Si el usuario telcea el 3: dirá que 3 es primo. Si telcea el 4 dirá que 4 no es primo.
/*
let numero = parseInt(prompt("Ingrese el numero"));
let esPrimo = "Si"
let i = 2;

while ((i < numero) && (numero % i != 0)) {
  i++
}
if (i < numero) {
  esPrimo = "No"
}

console.log(`el numero ${numero} ${esPrimo} es PRIMO`);
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 5

// 5. Escribir un script que pida al usuario una contraseña. Si coincide con la clave definida en el script le devolverá el mensaje "Acceso concedido" y si no coincide le devolverá el mensaje "Acceso Denegado" . Si falla tres veces se emitirá el mensaje "Alerta, intruso".

// Ejemplo: La contrasñe es por ejemplo pasar. Tecleo tres veces otra distinta: Acceso Intruso.
/*
let pass = "";
let passDB = 123456;
let access = "Acceso concedido";
let i = 1;

while ((pass != passDB) && (i <= 3)) {
  pass = prompt("Ingrese la Clave");
  
  if (pass != passDB) {
    alert("Acceso denegado");
  }

  i++
}

if (i == 4) {
  access = "Alerta, intruso";
}

alert(access);
*/

// E J E M P L O # 2

/*
while ((pass != passDB) && (i <= 3)) {
  pass = prompt("Ingrese la Clave");
  
  if (pass != passDB) {
    alert("Acceso denegado");

    i++
  }
  else {
    alert("Acceso concedido");
  }

}

console.log (i)

if (i == 4) {
  alert("Alerta, intruso");
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 6

// 6. En este script se pedirá al usuario que teclee un número cada vez. El proceso acaba cuando teclee un 0 en cuyo caso además mostrará la suma de todos los números tecleados.

// Ejemplo: El usuario teclea primero el 4 luego el 5 depsués 6 y finalmente , 0. El programa se para y muestra "La suma de todos los número es 15".
/*
let num;
let suma = 0;

while (num != 0) {
  num = parseInt(prompt("Ingrese un numero"));

  suma = suma + num;
  // suma += num;
}

document.write(`La suma total de los numeros ingresados son: ${suma}`);
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 7

// 7. Este script le pide al usuario que vaya tecleando números enteros positivos hasta que el usuario ingrese el 0. En este caso el programa acaba mostrando el valor máximo y mínimo de los números tecleados.

// Ejemplo: El usuario teclea la serie 4,2,3,5,0, El máximo es 5 y el minimo es 2. Si teclea 2,2,2,0, máximo es 2 y minimo es 2.
/*
let numero = parseInt(prompt("Ingrese un numero"));
let serie = numero;
let mayor = 0;
let menor = numero;

while (numero != 0) {
  // max = numero > max ? numero : max;
  // min = numero < min ? numero : min;

  if (numero > mayor) {
    mayor = numero;
  } else {
    mayor = mayor;
  }

  if (numero < menor) {
    menor = numero;
  } else {
    menor = menor;
  }

  numero = parseInt(prompt("Ingrese un numero"));

  serie += ", " + numero;
}

document.write(`
  Los numeros ingresados fueron: ${serie}
  <br>
  El numero mayor es: ${mayor}
  <br>
  El numero menor es: ${menor} 
`);
*/

// if (mayor == 0) {
//   alert("No ingreso ningun numero");
// } else {
//   document.write(`
//   Los numeros ingresados fueron: ${serie}
//   <br>
//   El numero mayor es: ${mayor}
//   <br>
//   El numero menor es: ${menor}
// `);
// }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 8

// 8. Este script le pide al usuario que vaya tecleando números una y otra vez, pero solo números pares, en caso de que teclee un número impar el programa acabará y dirá la cantidad de números pares ingresados (el 0 cuenta como par).

// Ejemplo: Muestra Si escribo 2,8,12,1 el script me dirá "Ha escrito 3 números pares").
/*
let numPar = parseInt(prompt("Ingrese un numero par"));
let i = 0;

while (numPar % 2 != 1) {
  numPar = parseInt(prompt("Ingrese un numero par"));
  
  if (numPar % 2 == 1) {
    alert("Introduciste un numero impar");
  }
  
  i++;
}

document.write(`A escrito ${i} números pares`);
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 9

// 9. Este script muestra un menu de opciones: 1- Leer datos. 2- Mostrar datos 3- Fin. El usuario deberá teclear uno de ellos y el programa mostrará la opción elegida. Si teclea un valor fuera del menu se mostrará un mensaje de error y se vuelve a pedir un número de opción. El programa finaliza al teclear el 3.

// Ejemplo: Pulso 1, mensaje Opción leeer datos. Y vuelve a pedir opción. Pulso 4 : Error y vuelve a pedir opción, Pulso 3: Fin del programa y acaba.
/*
let opcion = parseInt(
  prompt(`
    1 - Leer datos.
    2 - Mostrar datos.
    3 - Fin.
  `)
);

while (opcion < 1 || opcion > 3) {
  alert("error");

  opcion = parseInt(
    prompt(`
      1 - Leer datos.
      2 - Mostrar datos.
      3 - Fin.
    `)
  );
}

while (opcion != 3) {
  opcion == 1 ? alert("Leer Datos.") : alert("Mostrar datos.");

  opcion = parseInt(
    prompt(`
      1 - Leer datos.
      2 - Mostrar datos.
      3 - Fin.
    `)
  );
}

document.write("Fin del programa");
*/

// E J E M P L O # 2

/*
let opcion;

while (opcion != 3) {
  opcion = parseInt(prompt("1 - Leer datos \n2 - Mostar datos \n3 - Fin"));

  switch (opcion) {
    case 1:
      alert("Leer datos.");
      break;
    case 2:
      alert("Mostar datos.");
      break;
    case 3:
      alert("Fin del programa.");
      break;
    default:
      alert("Error, opción incorrecta");
  }
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 10

// 10. Un script pedirá al usuario que vaya tecleando números de manera repetida. cuando pulse 0, el programa muestra "La suma es " seguido de la suma de los números. Si esta suma es par el programa se repite y si es impar el programa acaba.

// Ejemplo: Si tecleo 2,6,2, 0 Me dirá suma "10" y volverá a pedir otra serie de números, si tecleo 2,6,3 Me dirá "suma 11" y acabará.
/*
let numero;
let suma = 0;

alert("Ingrese tantos numero como pueda. \nPara validar la suma de los numero ya ingresador, presione 0 (cero). \nSi la suma es un numero par el programa sigue, si es impar el programa terminara")

while (suma % 2 == 0) {
  numero = parseInt(prompt("Ingrese un numero"))

  while (numero != 0) {
    suma += numero;

    numero = parseInt(prompt("Ingrese un numero"))
  }

  alert(`La suma es ${suma}`)
}

document.write("Fin del programa")
*/