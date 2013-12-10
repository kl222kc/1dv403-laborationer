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
 		main.renderMessages();

 	};
 },


	renderMessages: function() {
 	// Tar bort alla meddelenden
 	document.querySelector("#messageboard").innerHTML = "";
 	// Skriver ut alla meddelanden
 	for(var i=0; i < main.messages.length; ++i) {
 		main.renderMessage(i);
 	}

 },

 renderMessage: function(messageID) {
 	// Meddelandets text

 	var div = document.querySelector("#messageboard");
 	var divMessage = document.createElement("div");
 	var text = document.createElement("p");
 	var time = document.createElement("p");

 	divMessage.setAttribute("class", "message");
 	text.setAttribute("class", "text");
 	time.setAttribute("class", "time");

 	var date = main.messages[messageID].getDate();

 	text.innerHTML = main.messages[messageID].getHTMLText();
 	time.innerHTML = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);

	div.appendChild(divMessage);
	divMessage.appendChild(text);
 	divMessage.appendChild(time);
 }

};