class Programa {
    constructor(nombre, version) {
        this.nombre = nombre;
        this.version = version;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getVersion() {
        return this.version;
    }
}
class EditoresVideo extends Programa {
    constructor(nombre, version, formatos) {
        super(nombre, version);
        this.formatos = formatos;
    }
    getFormatos() {
        return this.formatos;
    }
    insertarFormato(formato) {
        this.formatos.push(formato);
    }
    quitarFormato() {
        this.formatos.pop();
    }
    imprimirEditorVideo() {
        return this.getNombre() + " " + this.getVersion() + " " + this.formatos.join();
    }
}
let arrayProgramas = [];
function grabar() {
    let nombrePrograma = document.getElementById("nombre").value;
    let arrayFormatos = ["mp4", "mkv"];
    let edVideo = new EditoresVideo(nombrePrograma, 1, arrayFormatos);
    arrayProgramas.push(edVideo);
    edVideo.insertarFormato("flv");
}
function mostrar() {
    let lista = "<ul>";
    for (let i = 0; i < arrayProgramas.length; i++)
        lista += "<li>" + arrayProgramas[i].imprimirEditorVideo() + "</li>";
    lista += "</ul>";
    let divElemento = document.getElementById("listado");
    divElemento.innerHTML = lista;
}
window.onload = function () {
    let boton = document.getElementById("boton");
    if (boton != null)
        boton.addEventListener("click", grabar);
    //boton.onclick=grabar;
    let boton2 = document.getElementById("botonMostrar");
    if (boton2 != null)
        boton2.addEventListener("click", mostrar);
};
//# sourceMappingURL=poo.js.map