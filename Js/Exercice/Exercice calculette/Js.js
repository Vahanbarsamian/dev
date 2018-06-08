
'use strict';

//Définition de variables et constante TVA
const TVA = 20;
var montantHT;
var TTC;
var demRemise;
var remise;

//Demande du montant HT + conversion en nombre décimal
montantHT = parseFloat(window.prompt("Montant HT ?")); //montantHT = parseFloat(montantHT);

//Demande s'il a ou non une remise
demRemise = window.prompt("Avez-vous une remise ?");

if (demRemise == "yes" || demRemise == "oui") //S'il a un remise, on rentre dans la condition
{
	//Demande le pourcentage de sa remise + conversion en nombre decimal
	remise = parseFloat(window.prompt("Pourcentage de remise"));
    
    //Affiche le taux de la remise sur le montant HT initial
	document.write("Vous bénéficiez de " + remise + "% de remise sur un montant HT de " + montantHT);
    
    //Calcule le montant HT avec la remise
    montantHT = montantHT - (montantHT * remise / 100); 
    
    //Affiche le nouveau montant HT remisé
    document.write("<br>Soit un nouveau montant HT de : " + montantHT);
} 
else //S'il n'a mis "oui" ou "yes"
{
	//Affiche le texte suivant :
	document.write("Vous n'avez pas de remise");
    document.write("<br>Votre montant HT de : " + montantHT);
}

//Calcule le montant de la TVA et on l'affiche
var montantTVA = montantHT * TVA / 100;
document.write("<br>Montant TVA : " + montantTVA);

//Calcule le montant TTC et on l'affiche
TTC = montantHT + montantTVA;
document.write("<br>Montant TTC : " + TTC);


    
