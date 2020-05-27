//1.- Declarar una variable que contenga un número cualquiera y determinar 
//mediante un mensaje si ese número es par o impar
//2.- Determinar 2 variables ( base, altura ) e indicar si con ellas se 
//forma un cuadrado o un rectángulo
//3.- Determinar una variable (numeroDeLados) e indicar el nombre de la 
//figura geométrica que tiene esa cantidad de lados,si numero de lados es 
//mayor que 5, poner un mensaje que diga "tu figura tiene muchos lados "


//1.

var numeroCualquira =  7

if( numeroCualquira % 2 === 0){
    console.log("Este numero es par")
}else{
    console .log("Este numero impar")
}

//2.

var base = 4
var altura = 4

if( base === altura){
    console.log("Estas variables forman un cuadrado")
}else{
    console.log("Estas variables forman un rectángulo")
}

//3.

var numeroDeLados =  1


if(numeroDeLados === 3){
    console.log("Este es un triangulo")
}else if(numeroDeLados === 4){
    console.log("Este es un cuadrado o rectangulo")
}else if(numeroDeLados === 5){
    console.log("Este es un pentágono")
}else if(numeroDeLados > 5){
    console.log("Tu figura tiene muchos lados")
}else if(numeroDeLados < 3){
    console.log("Esta no es una figura geométrica")
}


