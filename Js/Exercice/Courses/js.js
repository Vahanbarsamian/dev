var liste = new Array;
// var index;
function ajoute (articles){
 liste.push(articles.toLowerCase());
	}


function supprimearticle (item){
	// var index = liste.map(elem => elem.toLowerCase().indexOf(produit.toLowerCase());)
	if(liste.indexOf(item) != -1)
	{
		var index = liste.indexOf(item);
		liste.splice(index,1);
	}else
	{
		console.log("cet article n'est pas dans la liste");
	}
}


function vidertableau (){
	liste= new Array();
}


function affichercontenu() {
	console.log(liste);
	console.log(liste.length);
}



ajoute ("Fraises");
ajoute ("poulet");
ajoute ("tournevis");
ajoute ("artichault");

affichercontenu(); 



supprimearticle(window.prompt('Quel éléments du tableau voulez-vous supprimer ?').toLowerCase());

affichercontenu(); 

vidertableau();

affichercontenu(); 

