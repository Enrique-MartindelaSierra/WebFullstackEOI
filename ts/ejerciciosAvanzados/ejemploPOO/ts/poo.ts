class Programa{
    constructor(private nombre:string, private version:number){}

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre=nombre;
    }
    getVersion():number{
        return this.version;
    }

}

class EditoresVideo extends Programa{
    private formatos:string[];

    constructor(nombre:string,version:number,formatos:string[]){
        super(nombre,version);
        this.formatos=formatos;
    }

    getFormatos():string[]{
        return this.formatos;
    }

    insertarFormato(formato:string){
        this.formatos.push(formato);
    }
    quitarFormato(){
        this.formatos.pop();
    }
    imprimirEditorVideo():string{
        return this.getNombre()+" "+this.getVersion()+" "+this.formatos.join();
    }

}

let arrayProgramas:EditoresVideo[]=[];

function grabar(){
    let nombrePrograma=(<HTMLInputElement>document.getElementById("nombre")).value;
    let arrayFormatos:string[]=["mp4","mkv"];

    let edVideo:EditoresVideo=new EditoresVideo(nombrePrograma,1,arrayFormatos);
    arrayProgramas.push(edVideo);
    edVideo.insertarFormato("flv");
}

function mostrar(){
    let lista:string="<ul>";
    for(let i=0;i<arrayProgramas.length;i++)
        lista+="<li>"+arrayProgramas[i].imprimirEditorVideo()+"</li>";
    lista+="</ul>";

    let divElemento:HTMLDivElement=<HTMLDivElement>document.getElementById("listado");
    divElemento.innerHTML=lista;
}

window.onload=function(){
    let boton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("boton");
    if(boton!=null)
        boton.addEventListener("click",grabar);
        //boton.onclick=grabar;
    let boton2:HTMLButtonElement=<HTMLButtonElement>document.getElementById("botonMostrar");
    if(boton2!=null)
        boton2.addEventListener("click",mostrar);        
}