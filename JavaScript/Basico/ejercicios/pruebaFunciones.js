'use strict'


function sumar2(x, y) {
    console.log(x + y);
}

function sumar(x = 0, y = 0) {
    let resultado;
    resultado = x + y;
    return resultado;
}

sumar(2, 4);
let z = sumar2(3, 5);
let x = sumar(8, 2);
console.log(sumar(x, x));

console.log(sumar())
console.log(sumar(5))
console.log(sumar(2, 3, 4, 5, 6, 3, 4, 5, 6, "jajajaja"))


function PrecioTotal(nombre = "producto generico", precio = 100, impuesto = 21) {
    nombre = "" + nombre
    precio = +precio
    impuesto = +impuesto

    if (isNaN(precio)|| isNaN(impuesto)||precio<0||impuesto<0)
        console.error("ERROR")

    console.log(nombre + " " + (precio + (precio * (impuesto / 100))))
}

console.log(PrecioTotal("casa", 20000, 11))
console.log(PrecioTotal())
console.log(PrecioTotal("casa", 309, 11))
console.log(PrecioTotal(30, "20000", "11"))
console.log(PrecioTotal(0,"veinte","IVA"))

