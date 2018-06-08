'use strict';   // Mode strict du JavaScript
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var toogle = document.querySelector('a.toolbar-toggle');
toogle.addEventListener('click', afficheMenu);
var i = 0; var interval;
var adressePhotos = [{src:"images/1.jpg",legend:"Street Art"},
{src:"images/2.jpg",legend:"Fast Lane"},
{src:"images/3.jpg",legend:"Colorful Building"},
{src:"images/4.jpg",legend:"Skyscrapers"},
{src:"images/5.jpg",legend:"City by night"},
{src:"images/6.jpg",legend:"Tour Eiffel la nuit"}];

document.getElementById('slider-next').addEventListener('click',next);
document.getElementById('slider-previous').addEventListener('click',previous);

document.getElementById('slider-random').addEventListener('click',random);
var butplay = document.querySelector('#slider-toggle >i');
var photoPlay = document.getElementById('slider-toggle');
photoPlay.addEventListener('click',play);

document.addEventListener('keyup', clavier);
var image = document.querySelector('#slider img');
var legend = document.querySelector('figcaption');
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function afficheMenu(){
	var fleche =  document.querySelector('.toolbar-toggle i');
	var barmenu = document.querySelector(' div.toolbar nav');
	barmenu.classList.toggle('hide');
	if(barmenu.className == 'hide'){
		fleche.className = 'fas fa-arrow-down';
	}else{
		fleche.className = 'fas fa-arrow-right';
	}
}


function next() {
		
		if (i < adressePhotos.length-1){
			i++;
			image.src = adressePhotos[i].src;
			legend.textContent = adressePhotos[i].legend;

		}else {
			i=0;
			image.src = adressePhotos[i].src;
			legend.textContent = adressePhotos[i].legend;
		}
	}


function previous() {
	
	if (i >= 1){
		i--;
		image.src = adressePhotos[i].src;
		legend.textContent = adressePhotos[i].legend;

	}else {
		i = adressePhotos.length-1;
		image.src = adressePhotos[i].src;
		legend.textContent = adressePhotos[i].legend;
	}
	
}	
		
function random(){
	
	
	do {
	 var result = Math.floor(Math.random()*(adressePhotos.length));
}
	while (i == result);
	i = result;
	console.log(i);
	image.src = adressePhotos[i].src;
	legend.textContent = adressePhotos[i].legend;
}


     
 
function play(){
	
	photoPlay.classList.toggle("play");

	if(interval == null){
		interval = setInterval(next,2000);
		butplay.className ="fas fa-pause";

	} else {
		clearInterval(interval);
		butplay.className ="fas fa-play";
		interval=null;
	}
}

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


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


