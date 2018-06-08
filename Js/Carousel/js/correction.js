//#play #next #previous #random


//src et légende
var slides = [
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];

//next : passe à l'image suivante
//previous : revient à l'image précédente
//random : affiche image aléatoire
//play

function nextImage(){
    if(index == slides.length -1){
        index = 0;
    } else {
        index++;
    }
    afficherPhoto();
}

function prevImage(){
    if (index == 0){
        index = slides.length - 1;
    } else {
        index--;
    }
    afficherPhoto();
}

function randomImage(){
    var random; 
    do {
        random = Math.floor(Math.random()*slides.length); 
    } while(index == random);
    index = random;
    afficherPhoto();
}

function playDiapo(){
    var btn = document.querySelector("#play");
    btn.classList.toggle('fa-play');
    btn.classList.toggle('fa-pause');
    
    //doit lancer la diapo si elle n'est pas lancée
    if(timer == null){
        //diapo arrêté, il faut le lancer
        timer = setInterval(nextImage, 2000);
    } else {
        clearInterval(timer);
        timer = null;
    }
    //ou l'arrêter si elle est lancée
}

function afficherPhoto(){
    //document.querySelector("#image").setAttribute("src", slides[index].src);
    document.querySelector("#image").src = slides[index].src;
    document.querySelector("#legend").textContent = slides[index].legend;
}

/*const TOUCHE_ESPACE = 32;
const TOUCHE_GAUCHE = 37;
const TOUCHE_DROITE = 39;*/

function clavier (event){
    switch(event.keyCode){
        case 32: //touche espace
            playDiapo();
            break;
        case 37: // touche gauche    
            prevImage();
            break;
        case 39: // touche droite
            nextImage();
            break;
        default:
            randomImage();
    }
}


document.addEventListener('DOMContentLoaded', function (){

    index = 0;
    timer = null;
    
    addEvent('#next', 'click', nextImage);
    addEvent('#play', 'click', playDiapo);
    addEvent('#previous', 'click', prevImage);
    addEvent('#random', 'click', randomImage);
    
    document.addEventListener('keyup', clavier);
    
    afficherPhoto();

});


function addEvent(id, evenement, fonction){//sélecteur, l'événement déclencheur, fonction à appeler
    document.querySelector(id).addEventListener(evenement, fonction);
}