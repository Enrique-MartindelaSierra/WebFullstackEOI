
//version 1
let nombre: string;
nombre = "Pablo";
let edad: number;
edad = 30;
const PERSONAJE: object = {
    nombre: nombre,
    edad: edad
};

//version 2
interface PERSONAJE2 {
    nombre: string,
    edad: number
};
let p2:PERSONAJE2 = {nombre: "enrique", edad:24}

class Rombo{
 

    constructor(public diagonalVertical:number, public diagonalHorizontal:number) {}

    calcularArea():number{
        return this.diagonalHorizontal*this.diagonalVertical;
    }

}

let r1:Rombo=new Rombo(10,20);
document.write("El area del Rombo es: "+(r1.calcularArea()));