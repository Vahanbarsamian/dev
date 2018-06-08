'use strict'
var count=0;
var em = document.querySelector('em');
var element  = document.querySelectorAll('#photo-list li');
var nb = element.length;

function cocher(){
	this.classList.toggle('selected');
count = document.querySelectorAll('li.selected').length;

em.textContent = count;

// document.querySelector('em').innerHTML = count;
}

for (var i=0; i < nb; i++){
	element[i].addEventListener('click',cocher);
	
}
