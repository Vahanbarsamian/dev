var somme;
var tva;
somme = window.prompt('veuillez saisir une valeur numerique');
tva = window.prompt('Quel taux de tva voulez vous appliquer? ');
matva = parseFloat(tva);
var valeur = parseFloat(somme);
var matva = (valeur*matva)/100;
var result = matva + valeur;
document.write ('le résultat de somme TTC= ' + result +'<br>');
document.write ('le tva = ' + tva +'% <br>');
document.write('la TVA pour la somme que vous avez saisi est de '+ matva + '€');



