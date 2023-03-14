console.log("HOLA");

let x:number=3;

//x="hola";
let y:number=7;

let cadena:string="HOLA QUE TAL";

cadena=x+"";

let b:boolean;

let j="hola";

b=true;
b=false;

document.write(x.toString());

let z:any="jjaaja";
z=4;

//// ARRAYS

let arrayIndefinido:any[2];


arrayIndefinido[0]=2;
arrayIndefinido[1]="hola";
arrayIndefinido[3]=true;

let arrayNumeros:number[]=[3,4,56,43,1];

arrayNumeros[2]=parseInt("hola");


//// FUNCIONES

function sumar(x: number|string,y: number|string):number|string{
    let resultado:number;
    if(typeof(x)==="string" && typeof(y)==="string")
        return x.concat(y);
    else if(typeof(x)==="string")
        return x;
    else if(typeof(y)==="string")
        return y;
    else
        resultado=x+y;
    return resultado;
}

document.write(sumar(2,4).toString());

document.write(sumar("JAJAJA","JEJEJE")+"");

function conseguirNombre(nombre:string,apellidos?:string|undefined):string{
    if(apellidos==undefined)
        return nombre;
    return nombre+" "+apellidos;
}

document.write(conseguirNombre("Pablo"));


let cuerpo:HTMLElement=document.body;

let elemento:HTMLButtonElement=<HTMLButtonElement>document.getElementById("boton");

let elemento2=document.getElementById("jejeje");


let titulo:string="El Quijote";
let descripcion:string="Un libro de Cervantes...";

function imprimeLibro2(x:string,y:string):void{
    document.write(x+" "+y);
}

imprimeLibro2(titulo,descripcion);


interface ILibro{
    titulo:string;
    descripcion:string;
}

function imprimeLibro(libro:ILibro):void{
    document.write(libro.titulo+" "+libro.descripcion);
}

let libro1:ILibro={titulo:"El Quijote",descripcion:"Un libro de Cervantes..."};
imprimeLibro(libro1);

class Cliente{
    private name:string;
    public email:string;
    protected edad:number;

    constructor(name:string,email:string,edad:number){
        this.name=name;
        this.email=email;
        this.edad=edad;
    }

    setName(name:string):void{
        this.name=name;
    }
    getName():string{
        return this.name;
    }

    registrar():void{
        document.write(this.name+" Registrado correctamente");
    }

    imprimirPadre():void{

        console.log(this.name+" "+this.email+" "+this.edad);
    }
}

let usu1:Cliente=new Cliente("Pablo","a@a.es",20);

usu1.registrar();
let x2:string=usu1.getName();
usu1.setName("DIEGO");
console.log(usu1.getName());
usu1.email="pablo@iessanvicente.com";


class ClienteVip extends Cliente{
    numVip:number;

    constructor(name:string,email:string,edad:number,numVip:number){
       super(name,email,edad);
       this.numVip=numVip; 
    }

    registrar(): void {
        super.registrar();
    }

    imprimirHijo(){
        console.log(this.getName()+" "+this.email+" "+this.edad+" "+this.numVip);
    }
}

let cliente2:ClienteVip=new ClienteVip("Pilar","zzz@zzz.es",30,1);
cliente2.registrar();
cliente2.imprimirHijo();
cliente2.imprimirPadre();
