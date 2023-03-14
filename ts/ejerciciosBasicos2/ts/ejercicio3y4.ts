

/*
function suma( a:number, b:number ):number {
    return (a + b)
};
*/

let suma:Function=( a:number, b:number ):number=>(a + b)

console.log(suma(12, 5));

/*
var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};
*/

interface heroes{
    nombre:string;
    poderes:string[];
}

let spiderman:heroes = {nombre:"",poderes:[]};
spiderman.nombre="Peter parket"
spiderman.poderes=["trepar", "fuerza", "agilidad", "telas de araña"]