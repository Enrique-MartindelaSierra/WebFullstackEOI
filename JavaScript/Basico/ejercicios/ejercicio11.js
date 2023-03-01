'use strict'


function pedirNumero(texto,texto2){

    let numero;
    do{
        numero = prompt(texto);
        if(numero == ""){
            alert("ERROR")
        }
        if(isNaN(numero)||numero == ""){
            alert(texto2)
        }
    }while (isNaN(numero)||numero == "")
    return +numero;
}

    


let num;
do {
    num = +prompt("Dime un numero")
    if (isNaN(num))
    alert("ERROR")
    
} while (isNaN(num))

let num2
do {
    num2 = +prompt("Dime otro numero")
    if (isNaN(num2))
        alert("ERROR")
} while (isNaN(num2))

let min;
let max;

if (num < num2) {
    min = num;
    max = num2;
} else {
    min = num2;
    max = num;
}
let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;
let suma = 0;
let factor = 1;
let texto = "";
let empezar = 1;
for (let i = empezar; i <= max; i++) {
 if(i>=min){  if (i % 2==0) {
        pares++

    } else {
        impares++

    }
    if (i < 0) {
        negativos++
    } else if (i >= 0) {
        positivos++
    }
    suma = suma + i
    texto = texto + ", " + i 
 } factor=factor*i
    
}



alert("PARES: " + pares)
alert("IMPARES: " + impares)
alert("POSITIVOS: "+ positivos)
alert("NEGATIVOS: "+ negativos)
alert("LOS NUMEROS ENTRE "+ min +" Y "  + max +" SON: "+ texto)
alert("SUMA TOTAL: "+ suma)
if(max>0){
    alert("FACTORIAL: "+ factor)
}else{
    alert("no hay factorial")
}
