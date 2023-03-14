"use strict";
console.log("HOLA");
let x = 3;
//x="hola";
let y = 7;
let cadena = "HOLA QUE TAL";
cadena = x + "";
let b;
let j;
b = true;
b = false;
document.write(x.toString());
let z = "jjaaja";
z = 4;
//// ARRAYS
let arrayIndefinido = [];
arrayIndefinido[0] = 2;
arrayIndefinido[1] = "hola";
arrayIndefinido[3] = true;
let arrayNumeros = [3, 4, 56, 43, 1];
arrayNumeros[2] = +"hola";
//// FUNCIONES
function sumar(x, y) {
    let resultado;
    if (typeof (x) === "string" && typeof (y) === "string")
        return x.concat(y);
    else if (typeof (x) === "string")
        return x;
    else if (typeof (y) === "string")
        return y;
    else
        resultado = x + y;
    return resultado;
}
document.write(sumar(2, 4).toString());
document.write(sumar("JAJAJA", "JEJEJE") + "");
function conseguirNombre(nombre, apellidos) {
    if (apellidos == undefined)
        return nombre;
    return nombre + " " + apellidos;
}
document.write(conseguirNombre("Pablo"));
let cuerpo = document.body;
let elemento = document.getElementById("boton");
