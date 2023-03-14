let arraySeries:Series[] = [];

class Series{
    constructor(private nombre:string, private capitulos:number){}

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre=nombre;
    }
    getCapitulos():number{
        return this.capitulos;
    }
    setCapitulos(capitulos:number){
        this.capitulos=capitulos;
    }

}


function grabar(){
    let nombreSerie:string =(<HTMLInputElement>document.getElementById("serie")).value;
    let capitulosSerie:number = +(<HTMLInputElement>document.getElementById("capitulos")).value;

    let serie:Series =new Series(nombreSerie,capitulosSerie);
    arraySeries.push(serie);
   console.log(arraySeries);
   console.log(capitulosSerie);
}

function listar(){
    let lista:string="<ul>";
    for(let i=0;i<arraySeries.length;i++)
        lista+="<li>"+arraySeries[i].getNombre()+arraySeries[i].getCapitulos() +"</li>";
    lista+="</ul>";

    let divElemento:HTMLDivElement=<HTMLDivElement>document.getElementById("listado");
    divElemento.innerHTML=lista;
}

window.onload=function(){
    let boton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("boton");
    if(boton!=null)
        boton.addEventListener("click",grabar);
    let boton2:HTMLButtonElement=<HTMLButtonElement>document.getElementById("modo");
    if(boton2!=null)
        boton2.addEventListener("change",listar);        
}