//version 1
let nombre;
nombre = "Pablo";
let edad;
edad = 30;
const PERSONAJE = {
    nombre: nombre,
    edad: edad
};
;
let p2 = { nombre: "enrique", edad: 24 };
class Rombo {
    constructor(diagonalVertical, diagonalHorizontal) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }
    calcularArea() {
        return this.diagonalHorizontal * this.diagonalVertical;
    }
}
let r1 = new Rombo(10, 20);
document.write("El area del Rombo es: " + (r1.calcularArea()));
//# sourceMappingURL=ejercicio1.js.map