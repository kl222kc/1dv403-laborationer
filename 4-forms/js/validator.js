"use strict";

var Validator = {

	form: document.getElementById("form"),

	firstName: document.getElementsByName("firstName")[0],
	lastName: document.getElementsByName("lastName")[0],
	zip: document.getElementsByName("zip")[0],
	email: document.getElementsByName("email")[0],
	pricingmodel: document.getElementsByName("pricingmodel")[0],
	testValidate: false,
	confirm: false,

	init: function() {

		var button = document.querySelector("#send");

		firstName.addEventListener('blur', validate, true);
		lastName.addEventListener('blur', validate, true);
		zip.addEventListener('blur', validate, true);
		email.addEventListener('blur', validate, true);
		pricingmodel.addEventListener('blur', validate, true);
		
		// Formulär knappen
		button.onclick = function (e) {
			
			e.preventDefault();
			
			// Kallar på funktionen som validerar alla fälten 
			Validator.testValidate = Validator.validateAll();
			
			// Om validateAll returnerade true så skapas popup fönstret
			if(Validator.testValidate === true) {
				Validator.confirmForm();
			}

		};

		function validate() {

			if(this.parentNode.querySelector(".error")) {
				var error = this.parentNode.querySelector(".error");
				this.parentNode.removeChild(error);
			}

	// Kontrollerar så att fältet ej är tomt
	if(this.value === "") {
		var errorMessage = document.createElement("p");
		errorMessage.setAttribute("class","error");
		errorMessage.appendChild(document.createTextNode("Får ej vara tomt!"));
		this.parentNode.appendChild(errorMessage);
	}
	else {

	// Kontrollerar ifall email adressen är rätt ifyllt
	if(this.id === "email" && !(/^[a-zåäö0-9\-\_\.]{1,64}@[a-zåäö0-9\-\_\.]{1,250}\.[a-z]{1,6}$/i.test(this.value))) {
		var errorMessage = document.createElement("p");
		errorMessage.setAttribute("class","error");
		errorMessage.appendChild(document.createTextNode("Ogiltlig Email adress!"));
		this.parentNode.appendChild(errorMessage);
	}

	// Kontrollerar ifall postnummret är rätt ifyllt
	if(this.id === "zip" && !(/^(\d{5})?$/.test(this.value))) {

		// Fixar till postnummren
		if((/^SE\s\d{3}(\s|\-)\d{2}$/.test(this.value)) || (/^SE\d{3}(\s|\-)\d{2}$/.test(this.value)) || (/^SE\d{5}$/.test(this.value)) || (/^\d{3}(\s|\-)\d{2}$/.test(this.value))) {
			this.value = this.value.replace(/[^0-9]/g,"")
		}
		
		//Skriver ut felmeddelande om postnummret är fel
		if (this.value === "" || !(/^(\d{5})?$/.test(this.value))) {
			var errorMessage = document.createElement("p");
			errorMessage.setAttribute("class","error");
			errorMessage.appendChild(document.createTextNode("Ogiltligt Postnummer!"));
			this.parentNode.appendChild(errorMessage);
		}
	}

}

}

},

//Funktion som kollar igenom om alla fälten är rätt
validateAll: function() {

	if(firstName.value === "") {
		firstName.focus();
		firstName.blur();
	}

	if(lastName.value === "") {
		lastName.focus();
		lastName.blur();
	}

	if(email.value === "") {
		email.focus();
		email.blur();
	}

	if(zip.value === "") {
		zip.focus();
		zip.blur();
	}

	var errors = form.querySelectorAll('p.error');
	// Om det inte finns några fel returna true
	if(errors.length === 0){
		return true;
	}
	else {
		return false;
	}

},

//Funktion som skapar popupfönstret
confirmForm: function() {

	var div = document.querySelector("#container");

	var divBack = document.createElement("div");
	var modal = document.createElement("div");

	divBack.setAttribute("class","faded"); 
	modal.setAttribute("class","modalpop"); 

	var modalH1 = document.createElement("h1");
	var modalFirstName = document.createElement("p");
	var modalLastName = document.createElement("p");
	var modalZip = document.createElement("p");
	var modalEmail = document.createElement("p");
	var modalPriceModel = document.createElement("p");

    div.setAttribute("class","faded"); 

    modalH1.appendChild(document.createTextNode("Vänligen bekräfta ditt köp"));
    modalFirstName.appendChild(document.createTextNode("Förnamn: " + firstName.value));
    modalLastName.appendChild(document.createTextNode("Efternamn: " + lastName.value));
    modalZip.appendChild(document.createTextNode("Postnummer: " + zip.value));
    modalEmail.appendChild(document.createTextNode("Email: " + email.value));
    modalPriceModel.appendChild(document.createTextNode("Prismodell: " + pricingmodel.value));

    modal.appendChild(modalH1);
    modal.appendChild(modalFirstName);
    modal.appendChild(modalLastName);
    modal.appendChild(modalZip);
    modal.appendChild(modalEmail);
    modal.appendChild(modalPriceModel);

    var cancelButton = document.createElement("button");
    cancelButton.setAttribute("class","btn btn-default btn-lg");
    cancelButton.appendChild(document.createTextNode("Avbryt"))
    cancelButton.addEventListener("click",function()
    {
    	document.body.removeChild(divBack);
    	document.body.removeChild(modal);
    	div.removeAttribute("class");
    },false);

    var confirmButton = document.createElement("button");
    confirmButton.setAttribute("class","btn btn-default btn-lg");
    confirmButton.appendChild(document.createTextNode("Slutför köpet"));
    confirmButton.addEventListener("click", function()
    {
    	form.submit();
    }
    ,false)

    modal.appendChild(confirmButton);
    modal.appendChild(cancelButton);

    div.parentNode.appendChild(divBack);
    div.parentNode.appendChild(modal);

}



};

window.onload = Validator.init();