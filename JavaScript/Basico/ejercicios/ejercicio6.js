

let a = new Array(1, 2, 3, 4);
console.log(a.join("==>"));
 a.unshift(0);
console.log(a.join("==>"));
 a.push(5,6);
console.log(a.join("==>"));
 a.splice(3, 3);
console.log(a.join("==>"));
 a.splice(a.length-1,0,20,30);
console.log(a.join("==>"));
 a.reverse();
console.log(a.join("==>"));
 a.sort();
console.log(a.join("==>"));
a.sort(function(n1,n2){
    return n1-n2;
})
console.log(a.join("==>"));