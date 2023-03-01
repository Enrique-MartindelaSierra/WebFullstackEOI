	
	function pedirNumero(){
		let numero;
		do{
			numero=prompt("Dame un numero");
			if(numero<1 || numero>10)
				alert("Error, el número debe estar entre 1 y 10");
			if(numero=="")
				alert("Error!, el número no puede ser vacío");
			if(isNaN(numero))
				alert("Error!, no me has dado un número");
		}while(isNaN(numero) || numero=="" || numero<1 || numero>10);	
		return +numero;
	}
	
	let num1=pedirNumero();
	let num2=pedirNumero();
	
	let modo;
	
	do{
		modo=prompt("Dame el Modo de Visualización (PARRAFOS/LISTA/TABLA/DESPLEGABLE)");
		if(modo!="PARRAFOS" && modo!="LISTA" && modo!="TABLA" && modo!="DESPLEGABLE")
			alert("Error! no me has puesto un modo válido");
	}while(modo!="PARRAFOS" && modo!="LISTA" && modo!="TABLA" && modo!="DESPLEGABLE");

	let tabla,filas;
	
	if(num1>num2){
		tabla=num2;
		filas=num1;
	}
	else{
		tabla=num1;
		filas=num2;			
	}	
	
	if(modo=="LISTA"){
		document.write("<ul>");
		for(let i=1;i<=filas;i++)
			document.write("<li>"+tabla+"x"+i+"="+(tabla*i)+"</li>");
		document.write("</ul>");
	}
	else if(modo=="PARRAFOS"){
		document.write("<div style='border:1px solid black;'>");
		for(let i=1;i<=filas;i++)
			document.write("<p>"+tabla+"x"+i+"="+(tabla*i)+"</p>");
		document.write("</div>");		
	}
	else if(modo=="TABLA"){
		document.write("<table style='border:1px solid black; border-collapse:collapse;'>");
		for(let i=1;i<=filas;i++)
			//document.write("<tr><td>"+tabla+"x"+i+"</td><td>=</td><td>"+(tabla*i)+"</td></tr>");
			{
				document.write("<tr>");
				document.write("<td style='border:1px solid black;'>"+tabla+"x"+i+"</td>");
				document.write("<td style='border:1px solid black;'>=</td>")>
				document.write("<td style='border:1px solid black;'>"+(tabla*i)+"</td>");
				document.write("</tr>");
				
			}
		document.write("</table>");		
	}
	else if(modo=="DESPLEGABLE"){
		document.write("<select>");
		for(let i=1;i<=filas;i++)
			document.write("<option>"+tabla+"x"+i+"="+(tabla*i)+"</option>");
		document.write("</select>");		
	}

	
	