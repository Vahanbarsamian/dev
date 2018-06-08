'use strict'
//Je demande mes valeurs une et deux placee dans des variables
var nombre1 = parseFloat(window.prompt('Veuillez saisir votre 1er chiffre'));
var nombre2 = parseFloat(window.prompt('Veuillez saisir votre 2eme chiffre'));
//Je defini une nouvelle varible resultat
var result;
//Verification des valeurs chiffre si ok on rentre dans le code
if (!isNaN(nombre1) && !isNaN(nombre2)){
var operation = window.prompt('Veuillez saisir une operation');
// Switch
	switch(operation){

	 case "plus":
	 case"+":
		result = nombre1+nombre2;

		break;
	 case "moins":
	 case"-":
		result=nombre1-nombre2;
		break;
	 case "divise":
	 case"/":
	 if (nombre2==0){
	 	result = 'division par 0 immpossible';
	 	break;
	 	 }
	else{
		result=nombre1/nombre2;
	}
		break;
	case "multiplie":
	case"*":
		result = nombre1*nombre2;
		break;
	case "puissance":
	case"**":
		result = nombre1**nombre2;//ou Math.pow(nombre1,nombre2);
		break;

	default :
		result = 'Votre operation n\'est pas valide';
		break;
	}
}	
else {
	result='Au moins une des entrée n\'est pas un chiffre veuillez recommencer';
}
document.write('Résultat : ' + result);




	

