
  function sumar2(x,y){
	  console.log(x+y);
  }

  function sumar(x=0,y=0){
	  let resultado;
	  resultado=x+y;
	  return resultado;
  }
  
  let z=sumar2(3,5);
  sumar(2,4);
  let x=sumar(8,2);
  console.log(sumar(x,x));
  
  
  console.log(sumar());
  console.log(sumar(5));
  console.log(sumar(2,3,4,5,6,3,4,5,6,7,6,4,5,7,"jajajaja"));