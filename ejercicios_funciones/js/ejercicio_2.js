// E J E R C I C I O   F U N C I O N E S   # 1

// 2. Escribe una función que reciba como argumento un precio y el porcentaje de impuestos. La función devolverá el valor total a pagar, teniendo en cuenta que al precio sin impuestos se le descuenta un porcentaje del 10% si es mayor de 100 euros. --- ¡LISTO!

// Ejemplo: Si he comprado por valor de 200 euros con un impuesto del 5%, me descuentan un 10% por tanto pago 180 euros más los impuestos que son el 5% de 180. En total 189 euros.

let precio = parseInt(prompt("Ingrece el precio"));
let impuesto = 0.05; //para sacar el 5% del impuesto del precio que se introduzca
let porcentaje = precio * 0.10; //saca el 10% del precio que se introduzca
let descuento = precio - porcentaje; //saca el descuento, restando el precio con el 10% ya sacado anteriormente

// F U N C T I O N   D E C L A R A C I O N
function compra (p, i) {  //recibiendo como argumento el precio (e) y el impuesto (i)
  if(p > 100){ //si el precio es mayor a 100, se le aplica el descuento
    return descuento * i + descuento;
  }
  else {
    return p + i;
  }
}

totalPagar = compra(precio, impuesto);
document.write(totalPagar);

// F U N C T I O N   E X P R E S I O N
/*
const comprar = function(p, i){
  return p > 100 ? descuento * i + descuento : p + i
}

totalPagar = compra(precio, impuesto);
document.write(totalPagar);
*/

// F U N C T I O N   F L E C H A
/*
const comprar = (p, i) => {
  if(p > 100) return descuento * i + descuento;
  else return p + i;
  }

document.write(compra(precio, impuesto));
*/