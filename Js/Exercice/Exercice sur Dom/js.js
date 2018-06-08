var element = document.querySelector('.maDiv');
element.addEventListener('mouseover', mouseover);
element.addEventListener('dblclick', doubleclick);
element.addEventListener('mouseout', mouseout);
var button = document.getElementById('toggle-rectangle');
button.addEventListener('click', cacher);




function mouseover(){
	
	element.classList.add('important');

}

function doubleclick(){
	
	element.classList.toggle('good');
}

function mouseout(){
	
	element.classList.remove('important');
}


function cacher(){
 	element.classList.toggle('cacher');
}

