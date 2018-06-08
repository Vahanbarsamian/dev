
var nombre = parseInt(window.prompt('Veuillez saisir un nombre entier'));
var tableau = new Array();
for (var ligne=1;ligne<=nombre;ligne++){
	tableau[ligne] = new Array();
	for (var colonne=1;colonne<=nombre;colonne++){
		tableau[ligne][colonne]=ligne*colonne;
		
	}
}


document.write('<table>');
for(var ligne=1;ligne<=nombre;ligne++){
		document.write('<tr>');
		for (var colonne=1;colonne<=nombre;colonne++) {
			
			if(ligne==colonne){
				document.write('<td class="same-number">'+tableau[ligne][colonne]+'</td>');
			}else{
				document.write('<td>'+tableau[ligne][colonne]+'</td>');
			}
		}
		document.write('</tr>');
}
document.write('</table>');
	