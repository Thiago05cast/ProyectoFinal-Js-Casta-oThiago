
/* 
let monto;
let intentos = 1;
let resultado;


for( let i = 0 ; i < 4 ; i = i + 1){
    
    let monto = parseInt (prompt("Ingrese su apuesta"));

    if( monto <= 100){
        resultado = monto + 10;
        console.log("si gana recibirá:", resultado);
        break;
    }

    else if( monto <= 1000){
        resultado = monto + 100;
        console.log("si gana recibirá:", resultado);
        break;
    }
    
    else if( monto <= 10000){
        resultado = monto + 1000;
        console.log("si gana recibirá", resultado);
        break;
    }

    else if( monto >= 10000){
        resultado = monto + 2000;
        console.log("si gana recibirá", resultado);
        break;
    }
    else if(intentos < 4){
        intentos = intentos + 1;
    }
    
    else{
        console.log("Bloqueado: muchos intentos");
        break;
    }
}


// pre entrega 2

class apuesta{

    constructor(nombreUsuario, eleccion){
        this.nombreUsuario = nombreUsuario;
        this.eleccion = eleccion;

    }



}

let nombreUsuario = "";
let apuestas = [];


while( nombreUsuario != "FIN"){
    console.log ("<---CoderBet Apuestas--->");
    
    nombreUsuario = prompt("ingrese su nombre o FIN para finalizar");
    

    if( nombreUsuario != "FIN"){
        let eleccion = prompt("Ingrese su apuesta[BOCA, RIVER o EMPATE]");
        console.log("Resultado:ganó Boca Juniors 3-2, su elección fué", eleccion);
        console.log("si su elección fué Boca, se le depositará en su cuenta bancaria", resultado, "pesos");
        console.log("si su elección fué River o Empate usted ha perdido, suerte la proxima");

        let ObjApuestas = new apuesta (nombreUsuario, eleccion);
        apuestas.push(ObjApuestas);
    }

}

console.log (apuestas);




else if(eleccion = BOCA){
        console.log("Usted acertó el resultado, su recompensa es de:", resultado);
        break
    }


    else if(BOCA != eleccion ) {
        console.log("Resultado incorrecto, [apuesta perdida], suerte para la proxima");
        break
    }



*/