// esto en la primera linea sirve para obligar a declarar variables
//'use strict';

console.log("hola que tal");
//console.error("Algo ha fallado");

//variables de JS
const pi = 3.1416;
var x;
let y; //undefined

y = 5;//number
y = "hola";//string
y = true;//boolean

//las variables se actualizan y cambian de tipo en tiempo de ejecución

//var y let en teoria es lo mismo 
//pero var daba var daba algunos problemas que let no
//usaremos let para cualquier variable y trataremos de no usar var


alert("hola");
let numero = prompt("dame un numero"); //todo lo que venga de un prompt es un string
//si quiero saber el tipo de un dato existe typeof
alert("el numero que has escrito es: " + numero);

//el document.write nos imprime codigo en el html
document.write("HOLA");
//JS nos sirve para movidas como estas
/*
for (let i = 0; i < 100; i++) {
   if (i % 2 == 0)
       document.write("<p>Parrafo par</p>");
   else
       document.write("<p>Parrafo inpar</p>");
}
*/

//ejercicio de clase de Pablo
let num = +prompt("dime un numero");
let num2 = +prompt("dime otro numero");
/* problema, esto es string, entonces "9" es mayor que "100"
 *soluciones: todas hacen lo mismo
 *let num =parseInt(prompt())
 *let num =number(prompt())
 *let num =+prompt() //esta es la optima y preferible
 */

let mayor;
if (num > num2) {
    alert(num + " es mayor que " + num2);
    mayor = num
}
else if(num2 > num) {
    alert(num2 + " es mayor que " + num);
    mayor = num2
}else  {
    alert(num2 + " es igual que " + num);
    mayor = num
}
let parrafo;
for (i = 1; i <= mayor; i++) {
    parrafo = prompt("que quieres escribir en el parrafo " + i );
    document.write("<p>" + parrafo + "</p>");
}


