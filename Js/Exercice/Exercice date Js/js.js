var jours = new Array();
var mois = new Array();
mois = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];
jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]; 
var date = new Date();
date.setHours(17);
date.setMinutes(30);
var dif = date.getTime() - Date.now();
var valeur = new Date(dif);

document.write('Nous sommes le: ' + jours[date.getDay()] +" "+ date.getDate()+" "+ mois[date.getMonth()] +" "+ date.getFullYear());
document.write('<br> Et il est ' + date.getHours() +" : "+ date.getMinutes() + " : " + date.getSeconds());
document.write('<br>' + (valeur.getHours()-1) +" : "+ valeur.getMinutes());