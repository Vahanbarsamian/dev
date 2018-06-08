
'use strict'
var ordi = Math.random();
var result;
var resultat;
var personne = window.prompt('Veuillez saisir Pierre, Feuille, Ciseaux').toLowerCase();


if (ordi<1/3){result="pierre";}
else if (ordi > 1/3 && ordi < 2/3){result ="feuille";}
else if (ordi > 2/3){ result = "ciseaux";}

switch (result){

case "feuille":
if(personne == "feuille"){resultat="égalité ";}
else if(personne == "pierre"){resultat = 'Vous avez perdu';}
else if(personne == "ciseaux"){resultat="Vous avez gagné!!!";}
else {resultat = "";}
break;

case "pierre":
if(personne == "feuille"){resultat = "Vous avez gagné!!!";}
else if(personne == "pierre"){resultat ='égalité';}
else if(personne == "ciseaux"){resultat="Vous avez perdu";}
else {resultat = "";}
break;

case "ciseaux":
if(personne == "feuille"){resultat ="Vous avez perdu ";}
else if(personne == "pierre"){resultat ='Vous avez gagné!!!';}
else if(personne == "ciseaux"){resultat ="égalité";}
else {resultat = "";}
break;

default:
result ="";
resultat = "valeur inconnue";
}
document.write( resultat + " l\'ordinateur a joué " + result);

