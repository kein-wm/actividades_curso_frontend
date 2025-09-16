// E J E R C I C I O # 1

// 1. En este ejercicio debes pedir dos números enteros y devolver el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de error. --- ¡LISTO!

//Ejemplo: Si se entran el número 8 y 2, debe resultar 4. Si se entran 4 y 0, debe resultar en un mensaje de error.
/*
let num1 = prompt("Ingrese el primer numero");
let num2 = prompt("Ingrese el segundo numero");

let resultado = num1 / num2;

if (resultado == 0) {
  alert("El Cociente es 0");
} else {
  document.write(resultado);
}

let num3 = prompt("Ingrese el primer numero");
let num4 = prompt("Ingrese el segundo numero");

if (num3 == 0 || num4 == 0) {
  alert("Ingrese un número válido, un número mayor a CERO");
} else {
  let resultado2 = num3 / num4;
  document.write(resultado2);
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 2

// 2. Este script pide al usuario que ingrese una letra entre A, B, C, D. Si pulsa la letra A en mayúscula o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó. --- ¡LISTO!

// Ejemplo: Si ingresa C le dará mensaje de error.
/*
let letra = prompt("Adivina la letra ganadora, entre la A, B, C y D");

if (letra != "") {
  if (letra == "A" || letra == "a") {
    document.write("Acertaste la letra ganadora");
  } else {
    if (
      letra == "B" ||
      letra == "b" ||
      letra == "C" ||
      letra == "c" ||
      letra == "D" ||
      letra == "d"
    ) {
      document.write("No acertaste la letra ganadora");
    } else {
      alert("Introduciste una letra distinta a las indicadas (A, B, C, D)");
    }
  }
} else {
  alert("No introduciste ningun valor");
}
*/

/*
if (
  letra == "A" ||
  letra == "a" ||
  letra == "B" ||
  letra == "b" ||
  letra == "C" ||
  letra == "c" ||
  letra == "D" ||
  letra == "d"
) {
  if (letra == "A" || letra == "a") {
    document.write("Acertaste la letra ganadora");
  } else {
    document.write("No acertaste la letra ganadora");
  }
} else {
  alert("Introduciste una letra distinta a las indicadas (A, B, C, D)");
}
*/

/*
if (letra != "") {
  if (letra == "A" || letra == "a") {
    document.write("Acertaste la letra ganadora");
  } else {
    if (letra == "B" || letra == "b") {
      document.write("No acertaste la letra ganadora");
    } else {
      if (letra == "C" || letra == "c") {
        document.write("No acertaste la letra ganadora");
      } else {
        if (letra == "D" || letra == "d") {
          document.write("No acertaste la letra ganadora");
        } else {
          alert("Introduciste una letra distinta a las indicadas (A, B, C, D)");
        }
      }
    }
  }
} else {
  alert("No introduciste ningun valor");
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 3

// 3. Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y el precio de cada uno. --- ¡LISTO!

// Ejemplo: Por ejemplo si compras 20 artículos de 50 euros se te descuenta un 15% del total pagarías 20*50 - 20*50*0.15 = 850 euros.
/*
let articulosIngresado = prompt("Introduzca el numero de articulos iguales");
let precioIngresado = prompt("Introduzca el valor del producto por separado");

let descuento;
let total;

let articulos = parseInt(articulosIngresado);
let precio = parseInt(precioIngresado);

total = articulos * precio;

if (articulos == "" && precio == "") {
  alert("Ingrese algun valor");
} else {
  if (articulos == "" && precio == 0) {
    alert("Ingrese algun valor en ARTICULOS y PRECIO tiene que se mayor a 0");
  } else {
    if (articulos == 0 && precio == "") {
      alert(
        "Ingrese algun valor en PRECIO y ARTICULOS tiene que ser mayor a 0"
      );
    } else {
      if (articulos == 0 && precio == 0) {
        alert("Los valores ingresados tienen que ser mayor a 0");
      } else {
        if (articulos > 10 && precio > 40) {
          descuento = total * 0.15;

          alert("Tu compra tuvo un descuento del 15%");

          document.write(`Monto total: ${total}
                          <br>
                          menos ${descuento} (15%)...
                          <br>
                          Tienes que pagar un total de: ${total - descuento}`);
        } else {
          document.write(`Tienes que pagar un total de: ${total}`);
        }
      }
    }
  }
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 4

// 4. Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7. --- ¡LISTO!

// Ejemplo: Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable
/*
let priTrimestre = prompt("Ingrese la nota del primer trimestre");
let segTrimestre = prompt("Ingrese la nota del segundo trimestre");
let terTrimestre = prompt("Ingrese la nota del tercer trimestre");

let trimestre = 3;

let trimestre1 = parseInt(priTrimestre);
let trimestre2 = parseInt(segTrimestre);
let trimestre3 = parseInt(terTrimestre);

let suma = trimestre1 + trimestre2 + trimestre3;
let promedio = suma / trimestre;

if (promedio > 7) {
  alert("Notable");

  document.write(`Su promedio del trimestre es de ${promedio}
                  <br>
                  NOTABLE`);
} else {
  if (promedio >= 5) {
    alert("Aprobado");

    document.write(`Su promedio del trimestre es de ${promedio}
                    <br>
                    APROBADO`);
  } else {
    alert("Reprobado");

    document.write("Su promedio del trimestre es inferior a 5");
  }
}
*/

/*
if (promedio < 5) {
  alert("Esta reprobado");

  document.write("Su promedio del trimestre es inferior a 5");
} else {
  if (promedio >= 5) {
    alert("Aprobado");

    document.write(`Su promedio del trimestre es de ${promedio}
                    <br>
                    APROBADO`);
  } else {
    if (promedio > 7) {
      alert("Notable");

      document.write(`Su promedio del trimestre es de ${promedio}
                      <br>
                      NOTABLE`);
    }
  }
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 5

// 5. Se trata de escribir un script que diga si un número es par o es impar. Recordemos que un número es par si al dividirlo por 2 da como resto 0.

// Ejemplo: Si el número es 17, el programa debe decir que es impar
/*
let num = parseInt(prompt("Ingrese el numero"));
// let resto = num % 2;

num % 2 === 0
  ? document.write(`el numero ${num} ingresado es par`)
  : document.write(`el numero ${num} ingresado es impar`);
*/

/*
if (num % 2 === 0) document.write(`el numero ${num} ingresado es par`);
else document.write(`el numero ${num} ingresado es impar`);
*/

/*
if (num % 2 === 0) {
  document.write(`el numero ${num} ingresado es par`);
} else {
  document.write(`el numero ${num} ingresado es impar`);
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 6

// 6. Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo

// Ejemplo: Si num1 es 2 debe decir que num1 es positivo
/*
let num1 = parseInt(prompt("Ingrese el numero"));

if (num1 >= 0) {
  document.write(`el numero ${num1} es positivo`);
} else {
  document.write(`el numero ${num1} es negativo`);
}
*/

/*
if (num1 >= 0) document.write(`el numero ${num1} es positivo`);
else document.write(`el numero ${num1} es negativo`);
*/

/*
num1 >= 0
  ? document.write(`el numero ${num1} es positivo`)
  : document.write(`el numero ${num1} es negativo`);
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 7

// 7. En este ejemplo el usuario tecleará dos números. Debe devolver la diferencia entre el mayor y el menor.

// Ejemplo: Si el usuario coloca el 5 y el 8, el programa devolverá 3 (8 - 5).
/*
let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let resta;

if (num1 > num2) {
  resta = num1 - num2;
  document.writeln(`La diferencia es de: ${resta}`);
} else {
  resta = num2 - num1;
  document.writeln(`La diferencia es de: ${resta}`);
}
*/

/*
if (num1 > num2)
  document.writeln(`La diferencia es de: ${(num1 - num2)}`);
else document.writeln(`La diferencia es de: ${(num2 - num1)}`);
*/

/*
num1 > num2
  ? document.writeln(`La diferencia es de: ${(num1 - num2)}`)
  : document.writeln(`La diferencia es de: ${(num2 - num1)}`);
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 8

// 8. Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco, agua. Si pide una cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.

// Ejemplo: Un cliente elige vino, aparecerá el mensaje vaya a la barra, en caso contrarío dirá que vaya a la tienda.
/*
let peticion = prompt("pedir vino, cerveza, refersco, agua u otros");

if (
  peticion == "vino" ||
  peticion == "agua" ||
  peticion == "refresco" ||
  peticion == "cerveza"
) {
  document.write(`dirigirse a la barra de bebidas`);
} else {
  document.write(`dirigirse a la tienda`);
}
*/

/*
if (
  peticion == "vino" ||
  peticion == "agua" ||
  peticion == "refresco" ||
  peticion == "cerveza"
)
  document.write(`dirigirse a la barra de bebidas`);
else document.write(`dirigirse a la tienda`);
*/

/*
peticion == "vino" ||
peticion == "agua" ||
peticion == "refresco" ||
peticion == "cerveza"
  ? document.write(`dirigirse a la barra de bebidas`)
  : document.write(`dirigirse a la tienda`);
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 9

// 9. Este programa te ayuda a viajar. El programa pide al usuario si va a viajar con coche, tren, bicicleta o autobús. Si va en tren o autobús le recordará que lleve dinero para el billete.

// Ejemplo: El cliente pide ir en tren, aparecerá el mensaje "lleva dinero para el ticket"
/*
let transporte = prompt("ingrese el metodo de transpote");

if (transporte == "coche" || transporte == "bicicleta") {
  document.write(
    `No hace falta llevar dinero para el ticket, ya que vas en tu ${transporte}`
  );
} else {
  document.write(
    `Lleva dinero para el ticket, ya que vas a viajar en ${transporte}`
  );
}
*/

/*
if (transporte == "coche" || transporte == "bicicleta") document.write(`No hace falta llevar dinero para el ticket, ya que vas en tu ${transporte}`);
else document.write(`Lleva dinero para el ticket, ya que vas a viajar en ${transporte}`)
*/

/*
transporte == "coche" || transporte == "bicicleta"
  ? document.write(`No hace falta llevar dinero para el ticket, ya que vas en tu ${transporte}`)
  : document.write(`Lleva dinero para el ticket, ya que vas a viajar en ${transporte}`);
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E R C I C I O # 10

// 10. En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este ejercicio debe tomar la longitud del tramo en kilómetros y el tiempo empleado, si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.

// Ejemplo: Ejemplo si recorre 100 km en 4 horas, ha ido a una velocidad de 100/4 que son 25km/h. Estaría descalificado.
/*
let k = 200;
let h = 4;
let kh = k / h;

if (kh >= 40 && kh <= 60) {
  alert("pasaste la prueba");
  document.write(`Completaste el recorrido a una velocidad de ${kh}K/h`);
} else {
  alert("Estas descalificado");
  document.write(`Completaste el recorrido a una velocidad de ${kh}K/h`);
}
*/

/*
kh >= 40 && kh <= 60
  ? alert("pasaste la prueba")
  : alert("Estas descalificado");
*/

/*
if (kh >= 40 && kh <= 60) alert("pasaste la prueba");
else alert("Estas descalificado");
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// E J E M P L O   C O N D I C I O N A L   S W I T C H
/*
let nota = 3;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

switch (nota) {
  case 10:
    calificacion = "Sobresaliente";
    break;
  case 9:
  case 8:
    calificacion = "Notable";
    break;
  case 7:
  case 6:
    calificacion = "Bien";
    break;
  case 5:
    calificacion = "Suficiente";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    calificacion = "Insuficiente";
    break;
  default:
    // Cualquier otro caso
    calificacion = "Nota errónea";
    break;
}

console.log("He obtenido un", calificacion);
*/