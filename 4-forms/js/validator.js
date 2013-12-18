"use strict";

var Validator = {

	form: document.getElementById("form"),

	firstName: document.getElementsByName("firstName")[0],
	lastName: document.getElementsByName("lastName")[0],
	zip: document.getElementsByName("zip")[0],
	email: document.getElementsByName("email")[0],
	pricingmodel: document.getElementsByName("pricingmodel")[0],
	testValidate: false,

	init: function() {

		var button = document.querySelector("#submit");

		firstName.addEventListener('blur', validate, true);
		lastName.addEventListener('blur', validate, true);
		zip.addEventListener('blur', validate, true);
		email.addEventListener('blur', validate, true);
		pricingmodel.addEventListener('blur', validate, true);

		button.onclick = function (e) {
 		Validator.test = Validator.validateAll();
 		if(Validator.testValidate !== true) {
 			e.preventDefault();
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
		var errorMessage = document.createElement("p");
		errorMessage.setAttribute("class","error");
		errorMessage.appendChild(document.createTextNode("Ogiltligt Postnummer!"));
		this.parentNode.appendChild(errorMessage);
	}

}

}

},

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

	if(errors.length === 0){
 		return true;
	}

},



};

window.onload = Validator.init();