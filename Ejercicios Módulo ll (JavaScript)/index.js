let a=9;
if(a < 10){
    console.log("A es menor a 10");
}

else{
    console.log("A es mayor a 10 y menor o igual a 20")
}

let mensaje = (a > 10) ? "A es mayor a 10" : "A es menor a 10";
console.log("Mensaje:", mensaje);




let X=20;

if(X<10){
    console.log("X esta en el rango de 0 a 10")
}

else if(X<20){
    console.log("X esta en el rango de 10 a 20")
}


else if(X<30){
    console.log("X esta en el rango de 20 a 30")
}

else{
    console.log("X esta fuera de rango")
}




mensaje = (X<10) ? 'X esta en el rango 0-10' :
          (X<20) ? 'X esta en el rango 10-20' :
          (X<30) ? 'X esta en el rango 20-30' :
          'X esta fuera de rango'

console.log("SEGUNDO EJEMPLO", mensaje);



let variableCualquiera=4;
    switch(variableCualquiera){
        case 1:
            mensaje1 = "Activo";
        break;

        case 2:
            mensaje1 = "Inactivo";
        break;

        case 3:
            mensaje1 = "En proceso";
        break;

        case 4:
            mensaje1 = "Atendido";
        break;

        case 5:
            mensaje1 = "Liberado";
        break;

        default:
            mensaje1 = "Fuera de la variable";
        break;
    }

console.log("el estatus de la tarea es: ", mensaje1);


console.log("FOR EJEMPLO INCREMENTO")
for (let B=0; B<=20; B++){
    console.log(B);
}

console.log("FOR EJEMPLO DECREMENTO")
for (let C=45; C>=0; C--){
    console.log (C);
}


console.log("WHILE EJEMPLO")
let C=0;
while(C<=24){
    console.log(C);
    C++
}