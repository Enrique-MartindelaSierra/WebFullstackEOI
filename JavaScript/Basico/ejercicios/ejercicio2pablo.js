'use strict'
function pedirAusuario(opcion){

		

    if(opcion=="numero"){

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

    else if(opcion=="modo"){

        let modo;

        do{

            modo=prompt("Dame el Modo de Visualización (PARRAFOS/LISTA/TABLA/DESPLEGABLE/SALIR)").toLocaleUpperCase();

            if(modo!="PARRAFOS" && modo!="LISTA" && modo!="TABLA" && modo!="DESPLEGABLE" && modo!="SALIR")

                alert("Error! no me has puesto un modo válido");

        }while(modo!="PARRAFOS" && modo!="LISTA" && modo!="TABLA" && modo!="DESPLEGABLE" && modo!="SALIR");

        return modo;

    }

    else{

        alert("Error!, opción no válida");

        return -1;

    }



}

function mayor(x,y){

    if(x>y)

        return x;

    else

        return y;

}

function menor(x,y){

    if(x>y)

        return y;

    else

        return x;

}	



function hacerEstructuraBasica(menor,mayor,item1,item2,item3,item4){

    document.write(item1);

    for(let i=1;i<=mayor;i++)

        document.write(item2+menor+"x"+i+"="+(menor*i)+item3);

    document.write(item4);		

}

function hacerTabla(menor,mayor){

    document.write("<table style='border:1px solid black; border-collapse:collapse;'>");

    for(let i=1;i<=mayor;i++)

        //document.write("<tr><td>"+tabla+"x"+i+"</td><td>=</td><td>"+(tabla*i)+"</td></tr>");

        {

            document.write("<tr>");

            document.write("<td style='border:1px solid black;'>"+menor+"x"+i+"</td>");

            document.write("<td style='border:1px solid black;'>=</td>")>

            document.write("<td style='border:1px solid black;'>"+(menor*i)+"</td>");

            document.write("</tr>");

            

        }

    document.write("</table>");			

    

}



function menu(){



    let opcionElegida,modo;

    do{

        modo=pedirAusuario("modo");

        let num1,num2,tabla,filas;

        if(modo!="SALIR"){

            num1=pedirAusuario("numero");

            num2=pedirAusuario("numero");

            tabla=menor(num1,num2);

            filas=mayor(num1,num2);

        }

        switch(modo){

            case "LISTA":

                            //hacerLista(tabla,filas);

                            hacerEstructuraBasica(tabla,filas,"<ul>","<li>","</li>","</ul>");

                            break;

            case "PARRAFOS":

                            //hacerParrafos(tabla,filas);

                            hacerEstructuraBasica(tabla,filas,"<div style='border:1px solid black;'>","<p>","</p>","</div>");

                            break;		

            case "TABLA":

                            hacerTabla(tabla,filas);

                            break;

            case "DESPLEGABLE":

                            //hacerDesplegable(tabla,filas);

                            hacerEstructuraBasica(tabla,filas,"<select>","<option>","</option>","</select>");

                            break;	

            case "SALIR":

                            alert("Hasta luego");

        }

    }while(modo!="SALIR");			

}


