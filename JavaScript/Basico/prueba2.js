'use strict';

/*let palabra = prompt("dime una palabra");
let largo = palabra.length
let vocales = 0;
for (let i = 0; i < largo; i++) {
    if (palabra.charAt(i).toLowerCase()==("a")||palabra.charAt(i).toLowerCase()==("e")||palabra.charAt(i).toLowerCase()==("i")||palabra.charAt(i).toLowerCase()==("o")||palabra.charAt(i).toLowerCase()==("u")){
        vocales++
    }
}
alert(vocales)
for (let i = largo; i >= 0; i--) {
document.write("<p>"+palabra.charAt(i)+"</p>")
}*/
let palabra = prompt("dime una palabra");
let vocales = 0;
let cadenaReves = "";
for (let i = 0; i < palabra.length; i++) {
    if (palabra.charAt(i).toLowerCase() == ("a") 
    || palabra.charAt(i).toLowerCase() == ("e") 
    || palabra.charAt(i).toLowerCase() == ("i") 
    || palabra.charAt(i).toLowerCase() == ("o") 
    || palabra.charAt(i).toLowerCase() == ("u")) {
        vocales++
    }
    cadenaReves = palabra.charAt(i) + cadenaReves;
}
    alert("Cantidad de vocales es:" + vocales 
    + "\ncadena al revés:" + cadenaReves);

    