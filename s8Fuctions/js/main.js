
var numeroUno = prompt

var numeroDos =




const getUserOperation = ( selectedOperation ) => {
    switch( selectedOperation ) {
        case "suma":
            console.log("tu elección es una adición")
            break;
        case "resta":
            console.log("Vas a hacer una resta")
            break;
        case "división":
            console.log("seleccionaste una división")
            break;
        case "multiplicación":
            console.log("lo que vas a hacer es una multiplicación")
            break;
        default:
            console.log("no puedo realizar la operación seleccionada")
    } 
}