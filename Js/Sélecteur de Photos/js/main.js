'use strict';   // Mode strict du JavaScript
$ (function(){
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

var index;
var photos;
var total;



/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
$('#bouton').on('click',selectall);
$('#reset').on('click',reset);
$('#hide').click(function (){$('main').toggle("slow")});
$('#warning').on('click', delay);


function delay(){
    $('li:not(.selected)').css('background-color','red');
    $('p').append('<p id="textadd" style="color:red">il reste '+$('.photo-list li.selected').length +' photo(s) non selectionnée');
    setTimeout(function(){
        $('li:not(.selected)').css('background-color','');
        $('#textadd').remove();
    },2000);

}



function selectall(){
    $('ul li').addClass('selected');
     // var selectedPhotos = $('.photo-list li.selected').length;
    
    $('em').text($('.photo-list li.selected').length);
}


function  reset(){
    $('ul li').removeClass('selected');
    $('em').text($('.photo-list li.selected').length);
}


function onClickListItem()
{
    var selectedPhotos;

    /*
     * Dans un gestionnaire d'évènements (et uniquement dans ce cas-là) la variable this représente
     * l'objet DOM qui a déclenché l'évènement.
     *
     * Il s'agit donc de la balise <li> sur laquelle on a cliqué.
     *
     *
     * On active ou on désactive la classe selected du <li> sur lequel on a cliqué.
     */
    this.classList.toggle('selected');

    // Recherche de toutes les balises <li> sélectionnées (classe selected).
    selectedPhotos = $('.photo-list li.selected');

    /*
     * document.querySelectorAll() renvoie un tableau avec autant d'objets DOM manipulables en
     * JavaScript que de balises trouvées.
     *
     * selectedPhotos possède donc une propriété length représentant toutes les photos
     * sélectionnées.
     *
     * Mise à jour du nombre total de photos sélectionnées.
     */
    $('em').text(selectedPhotos.length).css("color","blue");
}



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

// Recherche de toutes les balises <li> (les photos) et de la balise <em> (nombre total).
photos = $('.photo-list li');
total  = $('#total em');


// Installation d'un gestionnaire d'évènement clic sur toutes les balises <li>.
for(index = 0; index < photos.length; index++)
{
   $(photos[index]).on('click', onClickListItem);
}
});

