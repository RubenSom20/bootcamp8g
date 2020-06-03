1. 
        /* -Crear una función que reciba una palabra del usuario
        -Si el usuario escribe más de una palabra, indicarle que debe ingresar sólo una palabra
        -Si el usuario ingresa al menos un número dentro de la palabra, indicarle que no puede ingresar números
        -si el usuario ingresa una palabra, evaluar si esa palabra es un palíndromo (https://www.estandarte.com/noticias/idioma-espanol/qu-es-un-palndromo-ejemplos_1723.html)
        -Indicar el resultado al usuario
    */

        const getMessage = () =>{
            let unaPalabra = prompt("Ingrasa una pabra"); 
            let arrayDePalabras = unaPalabra.split(" ").length
            if(arrayDePalabras>1){
                alert("Solo puedes ingresar una palabra")
            }
            let totalDigitos = unaPalabra.match(/\d/)
            if(totalDigitos){
                alert("No puedes ingresar digitos")
            }
            unaPalabra.split("")
        }
        getMessage()



        /*2.
        -crear una función que reciba un número del usuario
        -si el usuario ingresa algo diferente a un número, indicarle que debe ingresar un número
        -si el usuario ingresa más de un número ( por ejemplo 22 10, ó 25,15,89) indicarle que debe ingresar únicamente un número
        -si el usuario ingresa un número, descomponer ese número en sus factores primos ( https://www.youtube.com/watch?v=NPaBFe6QBDQ )
        -concatenar cada factor primo encontrado en un string, y entregar ese string como resultado final al usuario.
        input -> 24
        output -> "2, 2, 2, 3"*/


        const calculatePrimeFactor = (number) =>{
            let factor = []
            let residue = number

            for (residue ; residue !=1;){
                let prime = findDividerNumber(residue)
                factor.push(prime)
                residue = residue / prime
            }
            return factor
        }

        const findDividerNumber = ( dividendo ) =>{
            let pimeNumbers = [2,3,5,7,11,13]
            
            for ( let i = 0; i < pimeNumbers.length; i++){
                if( dividendo % pimeNumbers[i] === 0){
                    return pimeNumbers[i]
                }
            } 
        }