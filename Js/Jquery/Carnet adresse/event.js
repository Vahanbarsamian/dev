
	function addEvent(id,event,fonction){
		$(id).on(event,fonction);
	}

	function createContact(){
		
		var createContact = new Object;
		createContact = {
			
			'title':$("#title option:selected").text(),
			'firstName':$("#firstName").val(),
			'lastName': $("#lastName").val(),
			'phone':$("#phone").val() }
			if (!$("#firstName").val() || !$("#lastName").val() || !$("#lastName").val() ){
				alert(" Il reste des champs incomplets");
				return
			}
			var list = loadDataFromDomStorage();
				if($('#contact-form').data('mode') == 'add'){
						var input = $('#phone').val();
						var regex = new RegExp("((^$)|(^[0-9]{10})$)"); 
						if (regex.test(input)) {
							list.push(createContact);
						} else {
							alert("Le N° de téléphone ne contient pas 10 chiffres\nVeuillez rectifier !!!!");
							
						return
						}				
				}else{

					list[$('#contact').data('index')] = createContact;
					$('#contact-details').hide();
					refreshAddressBook();
					//update des donnees

				}

			saveDataToDomStorage(list);
			$('#contact-form').fadeOut('slow');
			refreshAddressBook();
		} 



 	function onClickAddContact(){
 		refreshAddressBook();
 		$('#contact-form').fadeIn('slow');
 		$('#contact-form').trigger('reset');
 		$('#contact-form').data('mode',"add");
 		// ou $('#contact-form').show();

 	}


 	function loadDataFromDomStorage(){
 		var result = localStorage.getItem('adressBook');
 		if (result==null) {
 			result = [];
 		}else {
 			result = JSON.parse(result);
 		}
 		return result;
 	}

 	function saveDataToDomStorage(value){
		
		var mytab = JSON.stringify(value);
 		localStorage.setItem('adressBook',mytab);
 	}


 	function refreshAddressBook(){

		var list = loadDataFromDomStorage();
				
		//$("#contact-details").show();
		if(list){
			$('#address-book ul').empty();
			for (var i=0 ; i < list.length ;  i++ ){
				switch (list[i].title){
			case "Madame":
				list.title = "Mme.";
				break;
			case "Mademoiselle":
				list.title = "Mle.";
				break;
			case "Monsieur":
				list.title = "Mr.";
				break;

		}
				$('#address-book ul').append('<li><a href="#" id="'+i+'"">'+list.title+' '+ list[i].firstName +' '+list[i].lastName +'</a></li>');
					
			}
				
		 }else{ $('#address-book ul').empty();
		 		$('#address-book').hide();
			 	
			}
			
	}
 	

	function onClickClearAddressBook(){
		if ($('#contact-details').children().length > 0){
		var demandeConfirm = confirm("voulez vous vraiment tout supprimer ?");
	if(demandeConfirm == true){ // bouton ok cliqué
		var result = localStorage.removeItem('adressBook');
		refreshAddressBook(result);
		$('#contact-details').empty();
		} 
		
	} 
}

	function onClickEditContact(){
		var list  = loadDataFromDomStorage();
		console.log(list);
		if(list){
			 var contact  = list[$("#contact").data('index')];
			$('#title option[value="contact.title"]');
			$('#lastName').val(contact.lastName) ;
			$('#firstName').val(contact.firstName);
			$('#phone').val(contact.phone);
			$('#contact-form').data('mode','update').show();
		}
	}




	function onClickShowContactDetails(){
		
		$("#contact-details").show();
		var list  = loadDataFromDomStorage();
		if(list){
		 $('#contact-details').empty();
		 var contact  = list[$(this).attr('id')];

			$('#contact-details').append("<h3 id='contact' data-index='" + $(this).attr('id') + "'>"+contact.title+"</h3>");
			$('#contact-details').append("<p> Prenom : "+contact.firstName +"<br> Nom : "+ contact.lastName +"<br> N° de téléphone : "+contact.phone +"</p>");
			$('#contact-details').append('<a href="#" id="'+contact+'">Editer ce contact</a>');
				;
				} else{ $('#contact-details').empty();
		 		$('#contact-details').hide();
			 	}
		addEvent('#contact-details a','click',onClickEditContact);
			 	
}	


