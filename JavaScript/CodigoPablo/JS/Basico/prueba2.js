'use strict';

/*
	1) PIDE UN STRING AL USUARIO
	2) DI CUANTAS VOCALES TIENE ESE STRING
	3) (EXTRA)DEVUELVE LA CADENA INVERTIDA

	let cadena="hoLA";
	
	if(cadena.charAt(1)=="o")
		console.log("La segunda letra es una o");
	else 
		console.log("La segunda letra NO es una o");
	
	-> TIENE 2 VOCALES
	-> ALoh

*/
	
	let cadena=prompt("Dame la cadena");
	let contadorVocales=0;
	let cadenaReves="";
	for(let i=0;i<cadena.length;i++){
		if(cadena.charAt(i).toLowerCase()=="a" 
		|| cadena.charAt(i).toLowerCase()=="e"
		|| cadena.charAt(i).toLowerCase()=="i" 
		|| cadena.charAt(i).toLowerCase()=="o"
		|| cadena.charAt(i).toLowerCase()=="u")
			contadorVocales=contadorVocales+1;
		cadenaReves=cadena.charAt(i)+cadenaReves;
	}

	alert("Cantidad de vocales es:"+contadorVocales
	+"\ncadena al revés:"+cadenaReves);
	

 
 /* EJEMPLO CONDICIONALES
   let x=5;
   let y=8;
   
   
   
   console.log(++x * y--); // X=6    Y=7    RESUTADO=48
   
   console.log(x-- - y--); // X=5    Y=6    RESUTADO= -1
   
   console.log(--x + y++); // X=4    Y=7    RESUTADO=10
   
let x=2;
let y="2";
   
if(x==y)
	
if(!(x!=y))
	   
   if(x<=5)
	   
   if(!(x>5))
   
>
<
>=
<=


1) PEDIR 2 NUMEROS (VALIDAR HASTA EL INFINITO QUE NOS LOS DA)
2) AVERIGUAR CUAL DE LOS DOS ES MÁS PEQUEÑO Y MAS GRANDE. 
METERLOS EN 2 VARIABLE (peque y grande)
3) RECORRER DE peque a grande (bucle)
4) CONTADORES positivos, negativos, pares, impares, suma	
5) FACTORIAL 6
6) IMPRIMIR RESULTADOS EN VARIOS CONSOLE o ALERT   
		6  -2

		
		CADENA:-2 -1 0 1 2 3 4 5 6		
		 PARES:5
	   IMPARES:4
	  POSITIVOS:7
	  NEGATIVOS:2
	 SUMA TOTAL:18
	FACTORIAL 6:720 = 6*5*4*3*2*1
   
   
   
   
  */ 

		let num;
		
		do{
			num=+prompt("Dame un número");
			
			if(isNaN(num))
				alert("Error!, te he dicho que me des un número");
		}while(isNaN(num));


		let positivos=0;
		let negativos=0;
		let pares=0;
		let impares=0;
		for(let i=peque;i<=grande;i++){
			if(i>=0)
				positivos++;
			else
				negativos++;
			
			if(i%2==0)
				pares++;
			else
				impares++;
			
		}
   
		console.log("PARES:"+pares);
		console.log("IMPARES:"+impares);
		console.log("POSITIVOS:"+positivos);
		console.log("NEGATIVOS:"+negativos);
		
   
   
 