/*
	ENUNCIADO EJERCICIO VIERNES

    1) Pedir al usuario cantidad
    2) Crear un desplegable con tantos option como el numero que ha dado.
    Elemento 1 ... Elemento N
    3) Crear tanto RADIOBUTTON como elemento también
    4) Si cambias el valor del radio, se cambie el desplegable y viceversa

*/	
	function cambiarRadio(){
		console.log("input[value='"+this.value+"']");
		document.querySelector("input[value='"+this.value+"']").checked=true;	
	}
	
	function cambiarDesplegable(){
		document.getElementById("desplegable").value=this.value;
	}
	
	window.onload=function(){
		let cantidad;
		do{
			cantidad=+prompt("Dame la cantidad de opciones");
		}while(isNaN(cantidad) || cantidad=="" || cantidad<1);
		
		let despl=document.createElement("select");
		despl.id="desplegable";
		despl.style.display="block";
		despl.style.marginBottom="20px";
		despl.onchange=cambiarRadio;
		
		document.body.appendChild(despl);
		
		let opt,texto;
		let lab,texto2,inp;
		for(let i=1;i<=cantidad;i++){
			//CREA LOS OPTION DEL DESPLEGABLE
			
			opt=document.createElement("option");
			opt.value="valor"+i;
			//opt.setAttribute("value","e"+i);
			texto=document.createTextNode("Elemento "+i);
			opt.appendChild(texto);
			//opt.innerHTML="Elemento "+i;
			despl.appendChild(opt);
			
			// CREO A LA VEZ LOS INPUT DEL RADIOBUTTON
			// PUEDES DESCOMENTAR EL CODIGO DE ABAJO Y QUITAR A PARTIR DE AQUI
			
			lab=document.createElement("label");
			
			texto2=document.createTextNode("Elemento "+i);
			lab.appendChild(texto2);//Meto el TEXTO dentro del LABEL en el LIMBO
			
			inp=document.createElement("input");
			inp.type="radio";
			//inp.name="radioButton";
			inp.setAttribute("name","radioButton");
			inp.onclick=cambiarDesplegable;
			inp.value="valor"+i;
			lab.appendChild(inp); //Meto el INPUT dentro del LABEL en el LIMBO
			document.body.appendChild(lab); //Meto el LABEL dentro del BODY en el HTML
			
		}
		
		/*let br=document.createElement("br");
		document.body.appendChild(br);
		br=document.createElement("br");
		document.body.appendChild(br);
		br=document.createElement("br");
		document.body.appendChild(br);*/		
		
		/*
		let lab,texto2,inp;
		for(let i=1;i<=cantidad;i++){
			lab=document.createElement("label");
			
			texto2=document.createTextNode("Elemento "+i);
			lab.appendChild(texto2);//Meto el TEXTO dentro del LABEL en el LIMBO
			
			inp=document.createElement("input");
			inp.type="radio";
			//inp.name="radioButton";
			inp.setAttribute("name","radioButton");
			inp.value="r"+i;
			lab.appendChild(inp); //Meto el INPUT dentro del LABEL en el LIMBO
			document.body.appendChild(lab); //Meto el LABEL dentro del BODY en el HTML
		}
		*/
	
	}
