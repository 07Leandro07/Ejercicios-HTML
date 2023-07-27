/**
 * INGRESAR 3 VALORES Y DETERMINAR CUAL ES EL MAYOR DE LOS 3
 */

const prompt = require("prompt-sync")({ sigint: true})

let numeroUno = prompt ("INGRESE EL PRIMER NUMERO: ");
let numeroDos = prompt ("INGRESE EL SEGUNDO NUMERO: ");
let numeroTres = prompt ("INGRESE EL TERCER NUMERO: ");

if ((numeroUno > numeroDos) && (numeroDos > numeroTres)){
    console.log("EL NUMERO MAS GRANDE ES EL NUMERO UNO");
}

else if ((numeroDos > numeroUno) && (numeroUno > numeroTres)){
    console.log("EL NUMERO MAS GRANDE ES EL NUMERO DOS");
}

else if ((numeroTres > numeroDos) && (numeroDos > numeroUno)){
    console.log("EL NUMERO MAS GRANDE ES EL NUMERO TRES");
}

else{
    console.log("LOS NUMEROS SON IGUALES");
}




/**
 * TABLA DE MULTIPLICAR INGRESANDO UN NUMERO CUALQUIERA
 */

let tablaMultiplicar = prompt("INGRESE EL NUMERO QUE USTED DESEE MULTIPLICAR:");

for(let numeroParaMultiplicar=1; numeroParaMultiplicar<=10; numeroParaMultiplicar++){
    let resultado= tablaMultiplicar+ "X" + numeroParaMultiplicar + "=" + (tablaMultiplicar*numeroParaMultiplicar);
    console.log(resultado);
}


/**
 * TABLA DE DIVIDIR INGRESANDO UN NUMERO CUALQUIERA
 */

let tablaDividir = prompt("INGRESE EL NUMERO QUE USTED DESEE DIVIDIR:");

for (let numeroParaDividir=1; numeroParaDividir<=10; numeroParaDividir++){
    console.log(tablaDividir*numeroParaDividir + "/" + tablaDividir + "=" + numeroParaDividir);
}