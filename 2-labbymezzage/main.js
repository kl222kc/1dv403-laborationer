"use strict";

var main = {

	messages: [],

	init: window.onload = function() {

		var button = document.querySelector("form button");
		var text = "";
		var mess;

		button.onclick = function (e) {
 		e.preventDefault(); // prevents the default action the browser makes on that event.
 		text = document.querySelector("textarea").value;
 		mess = new Message(text, new Date());
 		main.messages.push(mess);
 		alert(main.messages[0]);
 		alert(main.messages[1]);
 	};

 }

};