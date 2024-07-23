let btnJuego = document.getElementById("btnJugar");


juegoRuleta.style.display = "none";

btnJuego.addEventListener("click", function(){

    let juegoRuleta = document.getElementById("juegoRuleta");

    if( juegoRuleta.style.display != "none"){
        
        juegoRuleta.style.display = "none";
    }

    else{
        juegoRuleta.style.display = "block";
    }
})




let btnRuleta =document.getElementById("btnRuleta");

const clickPromise = new Promise((resolve, reject) => {

    btnRuleta.addEventListener('click', () => {
    
    resolve('Ganaste! Obtener recompensa');
    });
});


clickPromise
            .then((message) => {
    Swal.fire(message); 
})
            .catch((error) => {
    console.error(error);
});

