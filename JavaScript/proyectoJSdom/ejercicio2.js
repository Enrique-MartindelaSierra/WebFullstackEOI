'use strict'

/*
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
}*/


function cambiarEstructura() {
	let f = document.formulario;
	let tablaM = f.multiple.value;
	let cantidad = f.multiplicador.value;


	if (this.id == "tabla")
		lista(tablaM, cantidad);
	else if (this.id == "lista")
		desplegable(tablaM, cantidad);
	else if (this.id == "desplegable")
		parrafo(tablaM, cantidad);
	else
		tabla(tablaM, cantidad);

	this.parentNode.removeChild(this);

}

function lista(min, max) {
    let lista = document.createElement("ul");
    lista.id = "lista";
	lista.onclick = cambiarEstructura;
    let elemento, texto;
    for (let i = 1; i <= max; i++) {
        elemento = document.createElement("li");
        texto = document.createTextNode(min + "x" + i + "=" + (min * i));
        elemento.appendChild(texto);
        lista.appendChild(elemento);
    }
    let formulario = document.formulario;
    document.body.insertBefore(lista, formulario);
}

function parrafo(min, max) {
    let parrafo = document.createElement("div");
    parrafo.id = "parrafos";
	parrafo.onclick = cambiarEstructura;
    parrafo.style.border = "1px solid black";
    let elemento, texto;
    for (let i = 1; i <= max; i++) {
        elemento = document.createElement("p");
        texto = document.createTextNode(min + "x" + i + "=" + (min * i));
        elemento.appendChild(texto);
        parrafo.appendChild(elemento);
    }
    let formulario = document.formulario;
    document.body.insertBefore(parrafo, formulario);
}

function hacerCelda(row, cadena) {
	let celda, texto;
	celda = document.createElement("td");
	celda.style.border = "1px solid black";
	texto = document.createTextNode(cadena);
	celda.appendChild(texto);
	row.appendChild(celda);
}
function tabla(tablaMulti, row) {
	let tabla = document.createElement("table");
	tabla.id = "tabla";
	tabla.onclick = cambiarEstructura;
	tabla.style.border = "1px solid black";
	tabla.style.borderCollapse = "collapse";
	let fila;

	for (let i = 1; i <= row; i++) {
		fila = document.createElement("tr");

		hacerCelda(fila, tablaMulti + "x" + i);
		hacerCelda(fila, "=");
		hacerCelda(fila, tablaMulti * i);
		tabla.appendChild(fila);
	}
	let formulario = document.formulario;
	document.body.insertBefore(tabla, formulario);
}

function desplegable(min, max) {
    let desplegable = document.createElement("select");
    desplegable.id = "desplegable";
	desplegable.onchange = cambiarEstructura;
    let elemento, texto;
    for (let i = 1; i <= max; i++) {
        elemento = document.createElement("option");
        texto = document.createTextNode(min + "x" + i + "=" + (min * i));
        elemento.appendChild(texto);
        desplegable.appendChild(elemento);
    }
    let formulario = document.formulario;
    document.body.insertBefore(desplegable, formulario);
}


function eligeTablaListaParrafoDesplegable(num1, num2, opcion) {

    //  let opcion
    //  do {
    //  opcion = +prompt("Elige: 1)tabla 2)lista 3)parrafo 4)desplegable 5)Salir")
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
    // } while (opcion != 5);
}
function menu() {
    let f = document.formulario;
    let opcionElegida, modo;
    modo = +f.opcion.value;
    let min, max;
    if (modo != 5) {
        min = f.multiple.value;
        max = f.multiplicador.value;
    }

    switch (modo) {
        case 1:
            tabla(min, max);
            break;
        case 2:
            lista(min, max);
            //hacerEstructuraBasica(tabla,filas,"<ul>","<li>","</li>","</ul>");
            break;
        case 3:
            parrafo(min, max);
            //hacerEstructuraBasica(tabla,filas,"<div style='border:1px solid black;'>","<p>","</p>","</div>");
            break;
        case 4:
            desplegable(min, max);
            //hacerEstructuraBasica(tabla,filas,"<select>","<option>","</option>","</select>");
            break;
        case 5:
            alert("Hasta luego");
    }
}


function validar() {
	let f = document.formulario;
	if (f.multiple.value == "") {
		alert("Error el campo de la tabla debe rellenarse");
		return false;
	}
	if (f.multiplicador.value == "") {
		alert("Error el campo de la cantidad debe rellenarse");
		return false;
	}
	if (f.opcion.value == "") {
		alert("Error debe marcar una estructura");
		return false;
	}
	menu();
	event.preventDefault();
}

function validarNumeros(nodo, campo) {
	if (isNaN(nodo.value) || nodo.value < 1 || nodo.value > 10)
		nodo.setCustomValidity("Error el campo " + campo + " debe ser numérico");
	else
		nodo.setCustomValidity("");
}

window.onload = function () {
	let f = document.formulario;
	f.onsubmit = validar;

	f.multiple.oninput = function () {
		validarNumeros(this, "tabla");
	};
	f.multiplicador.addEventListener("blur", function () {
		validarNumeros(this, "cantidad");
	});
}

