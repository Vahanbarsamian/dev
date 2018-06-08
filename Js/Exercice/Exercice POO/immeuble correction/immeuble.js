'use strict';


//Tableau des jours
var dayNames = [];
dayNames[0] = 'Dimanche';
dayNames[1] = 'Lundi';
dayNames[2] = 'Mardi';
dayNames[3] = 'Mercredi';
dayNames[4] = 'Jeudi';
dayNames[5] = 'Vendredi';
dayNames[6] = 'Samedi';

//Tableau des mois
var monthNames = [];
monthNames[0]  = 'Janvier';
monthNames[1]  = 'Février';
monthNames[2]  = 'Mars';
monthNames[3]  = 'Avril';
monthNames[4]  = 'Mai';
monthNames[5]  = 'Juin';
monthNames[6]  = 'Juillet';
monthNames[7]  = 'Août';
monthNames[8]  = 'Septembre';
monthNames[9]  = 'Octobre';
monthNames[10] = 'Novembre';
monthNames[11] = 'Décembre';

//Objet batiment
var bat = {};
bat.type = "immeuble";
bat.lots = 540;
bat.pro = 37;
bat.etages = 5;
bat.asc = 3;
bat.gardien = ['Julia', 'Pablo'];
bat.annee = 2015;
bat.livraison = new Date('2017-07-15');

document.write("<p>L'immeuble contient " + bat.lots + " lots et " + bat.pro + " copropriétaires.</p>");
document.write("<p>Il comprend " + bat.etages + " étages et " + bat.asc + " ascenceurs.</p>");
document.write("<p>Il est gardé par " + bat.gardien[0] + " et " + bat.gardien[1] + ".</p>");
document.write("<p>Construit en " + bat.annee + ", il a été livré le " + dayNames[bat.livraison.getDay()] + " " + bat.livraison.getDate() + " " + monthNames[bat.livraison.getMonth()] + " " + bat.livraison.getFullYear() + ".</p>");



