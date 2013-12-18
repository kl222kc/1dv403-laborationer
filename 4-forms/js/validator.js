"use strict";

var Validator = {

    form: document.getElementById("form"),

	firstName: document.getElementsByName("firstName")[0],
	lastName: document.getElementsByName("lastName")[0],
	zip: document.getElementsByName("zip")[0],
	email: document.getElementsByName("email")[0],
	pricingmodel: document.getElementsByName("pricingmodel")[0],

	init: function() {

		firstName.addEventListener('blur', validate, true);
        lastName.addEventListener('blur', validate, true);
        zip.addEventListener('blur', validate, true);
        email.addEventListener('blur', validate, true);
        pricingmodel.addEventListener('blur', validate, true);

	function validate() {

	if(this.parentNode.querySelector(".error")) {
		var error = this.parentNode.querySelector(".error");
		this.parentNode.removeChild(error);
	}

	if(this.value === "") {
		
		var errorMessage = document.createElement("p");
		errorMessage.setAttribute("class","error");
		errorMessage.appendChild(document.createTextNode("Fel!"));
		this.parentNode.insertBefore(errorMessage);

	}

	}

	},


};

window.onload = Validator.init();