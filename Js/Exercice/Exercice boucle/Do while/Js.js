do {
var number = parseFloat(window.prompt("Veuillez saisir un nombre :"));
if (number < 10){alert('il manque '+ (10-number) +' pour faire 10' );}
}
while ((isNaN(number)) || (number < 10)); 

document.write('<p> Merci, vous avez saisi <strong> ' + number+'</strong>.<p>');
