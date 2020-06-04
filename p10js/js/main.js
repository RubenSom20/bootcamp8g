/*
1.- Regresar un nuevo string, en el cual las palabras pares esten escritas en minúscula, y las palabras nones en mayúscula
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "LA mejor FORMA de PREDECIR el FUTURO es CREÁNDOLO"*/

   /* var fraseKodemia = prompt ("Escribe la frase")
var fraseSplit = fraseKodemia.split(" ");

var newArray = fraseSplit.map((item,index) => {
    if(index % 2 === 0 ){
       return item.toUpperCase() 
    }else {
       return item.toLowerCase() 
    }
})

var concat = newArray.join(" ")

alert(concat) */

/*2.- Regresar un nuevo string, que sea una frase formada con todas las palabras del string original que tengan más de 5 letras
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "mejor forma predecir futuro creándolo"*/


var fraseKodemia = prompt ("Escribe la frase")
var fraseSplit = fraseKodemia.split(" ");
var largLetras = fraseSplit.length

var arrayCinco = largLetras.filter((world,) => {
    if (world.length > 5){
        return 
    }
}) 








/*3.- Regresar el promedio de caracteres por palabra con base en el string original
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "La frase usa en promedio ${average} caracteres por palabra"
*/






