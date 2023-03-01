'use strict';

console.log("HOLA QUE TAL");

const pi=3.1416;

let fechaNacimiento;

let y=5; //number
y="hola";//string
y=true;//boolean


/*
alert("HOLA");
let numero=prompt("Dame un número");
alert("El número que has escrito es:"+numero);

	for(let i=0;i<100;i++)
		if(i%2==0)
			document.write("<p>PARRAFO "+i+" PAR</p>");
		else
			document.write("<p>PARRAFO "+i+" IMPAR</p>");
*/		
/*1) PEDIR 2 NUMEROS AL USUARIO
2) DECIDIR CUAL ES MAYOR DE LOS 2
3) HACES TANTOS PARRAFOS COMO EL MAYOR DE LOS 2
Y EL TEXTO DE LOS PARRAFOS SE LOS PIDES AL USUARIO.*/	

 let x="Dame un número";
 let n1=prompt(x);
 //let n2=Number(prompt("Dame otro número"));
 let n2=prompt("Dame otro número");
 let r=n1+n2; 
 let mayor;
 if(n1>n2){
	 alert(n1 + " es mayor que "+ n2+5);
	 mayor=n1;
 }
 else if(n1<n2){
	 alert(n1 + " es menor que "+ n2);
	 mayor=n2; 
 }
 else{
	 alert(n1 + " es igual que "+ n2);
	 mayor=n1; 
 }
 let p;
 for(let i=1;i<=mayor;i++){
	p=prompt("Dame el texto del párrafo "+i); 
	document.write("<p>"+p+"</p>"); 
 }
 
 let nota1
 let nota2
 let nota3
 ...
 let nota20
 
 let nota=new Array(20);
 let nota=[2,3,4,5,6,7,5];
 nota[0]=5;
 nota[1]=9;
 ...
 nota[20]=10;









	