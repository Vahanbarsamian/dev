$(function(){
addEvent('#add-contact', 'click',onClickAddContact);
addEvent('#save-contact','click',createContact);
addEvent('#clear-address-book','click',onClickClearAddressBook);
refreshAddressBook();
$(document).on('click','#address-book a',onClickShowContactDetails);

});




