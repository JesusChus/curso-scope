// VARIABLES

var a; // ESTAMOS DECLARANDO LA VARIABLE A 
var b = "b"; // DECLARAMOS Y ASIGNAMOS 
b = "bb"; // REASIGNANDO UN VALOR
var a = "aa"// REDECLARACION 


//GLOBAL SCOPE
var fruit = "Apple"; // GLOBAL
console.log(fruit) 
function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = "Venezuela"
    console.log(country)
}
countries();

console.log(country);