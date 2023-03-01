let s1 = "hojacacaca caca a    a"
let s2 = "caca"
let s3 = "aldre"




function replaceIndexof(s1, s2, s3) { //esto no es optimo aunque parezca sencillo por que hace más iteraciones de las necesarias pasando por el bucle por cada caracter
    

    let contador = 0

    for (let i = 0; i < s1.length; i++) {
        if(i==s1.indexOf(s2,i)){
            i= i + s2.length;
             contador++}
    }

    document.write(s1.replaceAll(s2, s3));
    document.write("<br>"+contador)
}

replaceIndexof(s1, s2, s3);