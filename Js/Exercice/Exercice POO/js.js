var jours = ['Dimanches','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
var mois = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
var immeuble = new Object();
immeuble.lots = 540;
immeuble.coproprietaires = 37;
immeuble.etages = 5;
immeuble.ascenseurs = 3;
immeuble.gardien = ['Filia','Pablo'];
immeuble.debut = new Date('2015');
immeuble.fin = new Date('2017-07-15');

document.write('l\'immeuble contient ' + immeuble.lots + ' lots <br> il a ' + immeuble.coproprietaires + ' coproprietaires <br> il possede ' + immeuble.etages + ' étages <br> il a ' + immeuble.gardien + ' en gardiens <br> sa construction à démarre en ' + immeuble.debut.getFullYear() + 'et a été livré le ' +':'+ jours[immeuble.fin.getDay()] + immeuble.fin.getDate() + mois[immeuble.fin.getMonth()]);