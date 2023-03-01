'use strict'


function pedirNumero1a10(texto) {

    let numero;
    do {
        numero = prompt(texto);

        if (isNaN(numero) || numero == "" || numero < 1 || numero > 10) {
            alert("ERROR")
        }
    } while (isNaN(numero) || numero == "" || numero < 1 || numero > 10)
    return +numero;
}

function determinarMayor(num, num2) {
    let min
    let max
    if (num < num2) {
        min = num;
        max = num2;
    } else {
        min = num2;
        max = num;
    }
    return +max
}
function determinarMenor(num, num2) {
    let min
    let max
    if (num < num2) {
        min = num;
        max = num2;
    } else {
        min = num2;
        max = num;
    }
    return +min
}

function lista(min, max) {
    document.write("<ul>")
    for (let i = 1; i <= max; i++) {
        document.write("<li>" + min + "x" + i + "=" + (min * i) + "</li>")
    }
    document.write("</ul>")
}

function parrafo(min, max) {
    document.write("<div>")
    for (let i = 1; i <= max; i++) {
        document.write("<p>" + min + "x" + i + "=" + (min * i) + "</p>")

    }
    document.write("</div>")
}

function tabla(min, max) {
    document.write("<table>")
    for (let i = 1; i <= max; i++) {
        document.write("<tr>" + "<td>" + min + "x" + i + "</td>" + "<td>" + "=" + "</td>" + "<td>" + (min * i) + "</td>" + "</tr>")

    }
    document.write("</table>")
}

function desplegable(min, max) {
    document.write("<select name=''>")
    for (let i = 1; i <= max; i++) {
        document.write("<option value=''>" + min + "x" + i + "=" + (min * i) + "</option>")

    }
    document.write("</select>")
}


function eligeTablaListaParrafoDesplegable(num1, num2) {
    let opcion
    do {
    opcion = +prompt("Elige: 1)tabla 2)lista 3)parrafo 4)desplegable 5)Salir")
        switch (opcion) {
            case 1:
                tabla(determinarMenor(num1, num2), determinarMayor(num1, num2));
                break;
            case 2:
                lista(determinarMenor(num1, num2), determinarMayor(num1, num2));
                break;

            case 3:
                parrafo(determinarMenor(num1, num2), determinarMayor(num1, num2));
                break;
            case 4:
                desplegable(determinarMenor(num1, num2), determinarMayor(num1, num2));
                break;
            case 5:
                break;
            default:
                alert("ERROR");

        }
    } while (opcion != 5);
}
eligeTablaListaParrafoDesplegable(pedirNumero1a10("dime un numero: "), pedirNumero1a10("dime otro numero: "));
