var id=0;
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
			
			var list = loadDataFromDomStorage();
				if($('#contact-form').data('mode') == 'add'){
				list.push(createContact);
				
				}else{
					//update des donnees
				}
			saveDataToDomStorage(list);
			$('#contact-form').fadeOut('slow');
			refreshAddressBook();
		} 



 	function onClickAddContact(){
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


 	refreshAddressBook(){
 		$('#address-book').children().remove();
 	}


