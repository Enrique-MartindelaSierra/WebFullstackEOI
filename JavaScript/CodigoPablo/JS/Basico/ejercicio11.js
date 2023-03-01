/*
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

		function pedirNumero(texto,texto2){
			let numero;
			do{
				numero=prompt(texto);
				if(numero<-10 || numero>10)
					alert("Error, el número debe estar entre -10 y 10");
				if(numero=="")
					alert("Error!, el número no puede ser vacío");
				if(isNaN(numero))
					alert(texto2);
			}while(isNaN(numero) || numero=="" || numero<-10 || numero>10);	
			return +numero;
		}

		let num,num2;
		
		num=pedirNumero("Dame un número","Error!, te he dicho que me des un número");
		num2=pedirNumero("Dame otro número","Error!, te he dicho que me des otro número");

		let peque,grande;
		
		/*
			let peque=(num>num2)?num2:num;
			let grande=(num>num2)?num:num2;
		*/
		/*
			let peque=Math.min(num,num2);
			let grande=Math.max(num,num2);
		*/
		
		if(num>num2){
			peque=num2;
			grande=num;
		}
		else{
			peque=num;
			grande=num2;			
		}

		let cadena="";
		let suma=0;
		let factorial=1;
		let positivos=0;
		let negativos=0;
		let pares=0;
		let impares=0;
		let empezar;
		if(peque<1)
			empezar=peque;
		else
			empezar=1;
		
		
		for(let i=empezar;i<=grande;i++){	
			if(i>=peque){
				cadena=cadena+" "+i;
				if(i>=0)
					positivos++;
				else
					negativos++;
				
				if(i%2==0)
					pares++;
				else
					impares++;
				
				suma=suma+i;
			}
			if(i>0)
				factorial=factorial*i;
		}
		//for(let i=grande;i>=1;i--)
			//factorial=factorial*i;
		
		console.log("CADENA:"+cadena);
		console.log("PARES:"+pares);
		console.log("IMPARES:"+impares);
		console.log("POSITIVOS:"+positivos);
		console.log("NEGATIVOS:"+negativos);
		console.log("SUMA TOTAL:"+suma);
		if(grande>0)
			console.log("FACTORIAL DE "+grande+":"+factorial);
		else
			console.log("NO HAY FACTORIAL");