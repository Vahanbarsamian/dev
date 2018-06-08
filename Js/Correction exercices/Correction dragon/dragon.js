<script>
'use strict';

/*************************************************************************************************/
/* **************************************** dragon-slayer.js *************************************/
/*************************************************************************************************/


var game;

const ARMURE_CUIVRE = 1;
const ARMURE_FER = 2;
const ARMURE_MAGIQUE = 3;

const EASY = 1;
const MEDIUM = 2;
const HARD = 3;

const EPEE_BOIS = 1;
const EPEE_ACIER = 2;
const EPEE_EXCALIBUR = 3;

function initialiser (){
	game = {};
    game.round = 1;
	game.difficulte = choix('Niveau de difficulté ?\n1. Facile - 2. Normal - 3. Difficile');
        
    switch(game.difficulte)
    {
    	case EASY:
        	game.PVjoueur = RandomInt(200,250);
        	game.PVdragon = RandomInt(150,200);
            break;
    	case MEDIUM:
        	game.PVjoueur = RandomInt(200,250);
        	game.PVdragon = RandomInt(200,250);
            break;
    	case HARD:
        	game.PVjoueur = RandomInt(150,200);
        	game.PVdragon = RandomInt(200,250);
            break;
    }
        
    game.armure = choix(
        'Armure ?\n' +
        '1. Cuivre - 2. Fer - 3. Magique'
    );
    
    switch(game.armure)
    {
    	case ARMURE_CUIVRE:
        	game.ratioArmure = 1;
            break;
    	case ARMURE_FER:
        	game.ratioArmure = 1.25;
            break;
    	case ARMURE_MAGIQUE:
        	game.ratioArmure = 2; //les dégâts du dragon sont divisés par 2
            break;
    }
    
    game.epee = choix(
        'Epée ?\n' +
        '1. Bois - 2. Acier - 3. Excalibur'
    );
    
     switch(game.epee)
    {
    	case EPEE_BOIS:
        	game.ratioEpee = 0.5;
            break;
    	case EPEE_ACIER:
        	game.ratioEpee = 1;
            break;
    	case EPEE_EXCALIBUR:
        	game.ratioEpee = 2; //les dégâts infligés sont multipliés par 2
            break;
    }
}

function calculerDegatsD(){
	var Degats;
	if (game.difficulte == EASY){
    	Degats = RandomInt(10, 20);
    } else {
    	Degats = RandomInt(30, 40);
    }
    return Math.round(Degats / game.ratioArmure);
}

function calculerDegatsJ(){
	var Degats;
	switch(game.difficulte){
    	case EASY:
        	Degats = RandomInt(25, 30);
            break;
    	case MEDIUM:
        	Degats = RandomInt(15, 20);
            break;
    	case HARD:
        	Degats = RandomInt(5, 10);
            break;
    }
    return Math.round(Degats * game.ratioEpee);
}

function AfficherEtat(){
	console.log("Tour n°" + game.round);
    console.log("PV joueur : " + game.PVjoueur + " | PV dragon : " + game.PVdragon);
}

function jeu(){
	var vitesseD;
    var vitesseJ;
    var Degats;
    
    while (game.PVdragon > 0 && game.PVjoueur > 0){
        vitesseD = RandomInt(10, 20);
        vitesseJ = RandomInt(10, 20);
        if (vitesseD > vitesseJ) {
            Degats = calculerDegatsD();
            game.PVjoueur -= Degats; //game.PVjoueur = game.PVjoueur - Degats;
            console.log("Le dragon est plus rapide et vous brûle : -" + Degats + " de points de vie");
        } else {
            Degats = calculerDegatsJ();
            game.PVdragon -= Degats; 
            console.log("Vous êtes plus rapide et frappez le dragon : -" + Degats + " de points de vie");
        }
    }
    AfficherEtat();
    game.round++ // game.round += 1 // game.round = game.round + 1
}

function winner(){
	if (game.PVdragon <= 0){
    	showWinner("images/knight.jpg");
    	console.log("Vous avez gagné, il vous restait " + game.PVjoueur + "PV");
    } else {
    	showWinner("images/dragon.jpg");
    	console.log("Vous avez perdu, il restait au dragon " + game.PVdragon + "PV");
    }
}

function commencer(){
	//initialisation
	console.clear();
    initialiser();
    
    //exécution du jeu :  et exécution du jeu
    console.log('Points de vie de départ');
    AfficherEtat();
    jeu();
    
    //fin du jeu : affiche le gagnant
    winner();
}

commencer();

/*************************************************************************************************/
/* **************************************** utilities.js *****************************************/
/*************************************************************************************************/

function showWinner(src){
	document.write("<img src='" + src + "'/>");
}

function choix(msg){
	var nb;
    do {
    	nb = parseInt(window.prompt(msg));
    } while (nb != 1 && nb != 2 && nb != 3);
    return nb;
}

function RandomInt(min, max){
	return Math.floor(Math.random() * (max-min+1) + min);
}

</script>
