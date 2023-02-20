const btnservir = document.getElementById('boton-servir');
const btntomar = document.getElementById('boton-tomar');

const vdserviendo = document.getElementById('tacita');
const vdhumeando = document.getElementById('tacita-humeando');
const vdtomando = document.getElementById('tacita-tomando');

let tacita = "vacia";

btnservir.addEventListener('click', servir);
btntomar.addEventListener('click', tomar);

function servir() {

    if (tacita == "vacia") {
        //reproducir el video
        serviendo();
        vdserviendo.onended = () => {
            // video taza humeando segundo video
            humeando();
            tacita = "llena";
        } 
    }
}

function tomar() {
    if (tacita == "llena") {
        tomando();

        vdtomando.onended = () => {
            // video taza humeando segundo video
            tacita = "vacia";
        }
    }
}



function serviendo() {
    vdtomando.classList.add('display-none');
    vdserviendo.classList.remove('display-none');
    vdserviendo.play();

}

function humeando() {

    vdserviendo.classList.add('display-none');
    vdhumeando.classList.remove('display-none');
    vdhumeando.play();
    vdhumeando.loop= true;
}

function tomando() {

    vdhumeando.classList.add('display-none');
    vdtomando.classList.remove('display-none');
    vdtomando.play();
   
}
