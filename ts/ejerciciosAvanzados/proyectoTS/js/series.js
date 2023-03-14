"use strict";
let arraySeries = [];
class Series {
    constructor(nombre, capitulos) {
        this.nombre = nombre;
        this.capitulos = capitulos;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getCapitulos() {
        return this.capitulos;
    }
    setCapitulos(capitulos) {
        this.capitulos = capitulos;
    }
}
function grabar() {
    let nombreSerie = document.getElementById("serie").value;
    let capitulosSerie = +document.getElementById("capitulos").value;
    let serie = new Series(nombreSerie, capitulosSerie);
    arraySeries.push(serie);
    console.log(arraySeries);
    console.log(capitulosSerie);
}
function listar() {
    let lista = "<ul>";
    for (let i = 0; i < arraySeries.length; i++)
        lista += "<li>" + arraySeries[i].getNombre() + arraySeries[i].getCapitulos() + "</li>";
    lista += "</ul>";
    let divElemento = document.getElementById("listado");
    divElemento.innerHTML = lista;
}
window.onload = function () {
    let boton = document.getElementById("boton");
    if (boton != null)
        boton.addEventListener("click", grabar);
    let boton2 = document.getElementById("modo");
    if (boton2 != null)
        boton2.addEventListener("change", listar);
};
