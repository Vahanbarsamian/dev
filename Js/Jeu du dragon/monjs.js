'use strict';

// Je declare des constantes;

const easy = 1;
const normal = 2;
const difficile = 3;

const cuivre = 1;
const fer = 2;
const magique = 3;

const bois = 1;
const acier = 2;
const excalibur = 3;

// Je crée un objet game
var game = new Object();
game.niveau = choix('Saisissez un niveau\n 1-Facile\n 2-Normal\n 3-Difficile\n');
game.armure = choix('Saisissez une armure\n 1-Cuivre\n 2-Fer\n 3-Magique\n');
game.epee = choix('Saisissez une épée\n 1-Bois\n 2-Acier\n 3-Excalibur\n');
game.round = 0;

// Fonction choix qui retourne la valeur du choix en fonction du message
function choix(msg){
	var nb;
	do {
		nb = parseInt (window.prompt(msg));

	}
	while (nb!= 1 && nb!=2 && nb!=3);
	return nb;
}


// Fonction random qui servira a créer des chiffres aléatoires pour le jeu
function random(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}


// Fonction de comptage de coups
function compteur(){
	return game.round ++;
}

// Fonction d'initialisation
function ini(){
	
	console.clear;
	game.round = 1; 

	switch (game.niveau){
		case easy:
			game.vieDragon = random(150,200);
			game.vieJoueur = random (200,250);
		break;
		case normal:
			game.vieDragon = random(200,250);
			game.vieJoueur = random (200,250);
		break;
		case difficile:
			game.vieDragon = random(200,250);
			game.vieJoueur = random (150,200);
		break;
	}


	switch (game.armure){
		case cuivre :
			game.protect = 1;
			break;

		case fer :
			game.protect = 1.25;
			break;

		case magique :
			game.protect = 2;
			break;
	}

	switch (game.epee){
		case bois :
			game.impact = 0.5;
			break;

		case acier :
			game.impact = 1;
			break;

		case excalibur :
			game.impact = 2;
			break;
	}

}


// Fonction dégat joueur
function degatJoueur(){
	var dommageJoueur;
		switch (game.niveau){
			case easy :
				dommageJoueur = random(25, 30);
				break;
			case normal :
				dommageJoueur = random(15, 20);
				break;
		
		case difficile :
				dommageJoueur = random(5, 10);
				break;
		}
		return dommageJoueur * game.epee;
}


// Fonction degat dragon
function degatDragon(){
	var dommageDragon;
		if(game.niveau == easy){
			dommageDragon = random(10,20);
		}else {
			dommageDragon = random(30,40);
		}
		return dommageDragon / game.armure;
}



// Fonction message de synthèse
function recap(){
console.log ("On est au round "+ compteur() + " et il vous reste "+ game.vieJoueur + " points de vie\n" + "Quand au Dragon il lui reste " + game.vieDragon + " points de vie");

}


// Fonction qui affiche l'image
function montreImage(adresse){
document.write('<img src="'+adresse+'" alt="">')

}


// Fonction qui affiche le gagnant
function gagne(){
	
	if(game.vieDragon <= 0){
		console.log("Le Joueur à été le plus fort il gagne");
		montreImage('images/knight.jpg');
	}
	else{
		console.log("Le Dragon à été le plus fort il gagne");
		montreImage('images/dragon.jpg');
	}
}



// Definition du déroulement d'une partie
//Initialisation
function commencer(){
	ini();

// Condition de la boucle tant que du joueur et du dragon les vie > 0
while (game.vieDragon > 0  &&  game.vieJoueur > 0) {

// decompte des rounds
 
 console.log("Tour n° " + game.round);
	
// Tirage au sort de qui du joueur ou du dragon frappe le premier
var joueur = random(10,20);
var dragon = random(10,20);


// joueur le plus rapide
	if( joueur > dragon ){
		game.vieDragon -=  degatJoueur(); 
		console.log("Le Joueur a été plus rapide et a fait perdre " + degatJoueur() + " points de vie au Dragon");

	}else {
		game.vieJoueur -=  degatDragon();
		console.log("Le Dragon a été plus rapide et a fait perdre " + degatDragon() + " points de vie au Joueur");
	}

recap();
	}
gagne();
}

commencer();


