'use strict';   // Mode strict du JavaScript

// Déclaration d'une variable.
var number;

//On stocke le message à afficher dans le prompt afin qu'il se raffraichisse à chaque passage de la boucle

var message = 'Veuillez saisir un nombre supérieur ou égal à 10 :';

/*
 * La boucle doit au moins s'exécuter une fois pour que la comparaison puisse s'effectuer, il faut
 * donc utiliser un DO ... WHILE.
 */
do
{
    number = parseFloat(window.prompt(message));

    //Si le nombre est inférieur à 10, on adapte le message à afficher en lui disant combien il manque pour atteindre 10
    if (number < 10) message = "Il manque " + (10 - number) + " pour atteindre 10. Saisir un nombre supérieur ou égal à 10 :"
}
while((isNaN(number)) || (number < 10)); //Si ce qu'a saisi l'utilisateur n'est pas un nombre ou qu'il est inférieur à 10, on recommence

document.write('<p>Merci, vous avez saisi <strong>' + number + '</strong>.</p>');