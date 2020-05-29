/*
1:
-Pedir al usuario su nombre completo
-Determinar la cantidad de palabras que tiene su nombre
-si la cantidad de palabras es mayor que 3, indicarle al usuario que su nombre es muy largo
-si no, indicar al usuario que tiene un nombre corto

2:pedir al usuario mediante diferentes propmts su dirección
    (calle)
    (número)
    (colonia)
    (alcaldía)
    (estado)
    mostrar al usuario su dirección completa con el siguiente formato:
    input ->    san mateo 
                172
                la preciosa
                azcapotzalco
                ciudad de mexico
    output ->   San Mateo, 172, La Preciosa, Azcapotzalco, Ciudad De México

3: 
    Pedir al usuario que escriba una frase
    Pedir al usuario que escriba un caracter
    Indicarle al usuario la cantidad de veces que ese caracter aparece en su frase;

4:
    Pedir al usuario su nombre completo
    Mostrarle al usuario sus iniciales con el siguiente formato:
    input  -> "Israel Salinas Martínez"
    output -> I.S.M. 
*/



var nombreUsuario = prompt("Ingrsa tu nombre completo") // variable que guarda nombre

var splitNombreUsuario = nombreUsuario.split(" ") // variable que separa nombre por " ", con metodo split

var cantidadDePalabras = splitNombreUsuario.length // variable que cuenta arreglo prop length

if (cantidadDePalabras > 3 ){
    alert("Su nombre es muy largo")
}else{
    alert("Su nombre es muy corto")
}


var calle = prompt("Ingrsa tu calle")
var numero = prompt("Ingrsa tu número")
var colonia = prompt("Ingrsa tu colonia")
var alcaldia = prompt("Ingrsa tu alcaldía")
var estado = prompt("Ingrsa tu estado")

var direccionCompleta = calle.concat(" ", numero, " ", colonia, " ", alcaldia, " ", estado)

alert(`tu direccón es ${direccionCompleta}`)


var frase = prompt ("Ingresa una frase")
var caracter = prompt ("Ingresa un caracter")

var datoFrase = frase.match(caracter, gi)

var sumaCaracteres = datoFrase.length

alert(`Tu caracter se repite ${sumaCaracteres} `)

