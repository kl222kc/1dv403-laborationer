"use strict";

function Message(message, date) {
	
	this.getText = function() {
		return message;
	}

	this.setText = function(_message) {
		message = _message;
	}

	this.getDate = function() {
		return date;
	}

	this.setDate = function(_date) {
		date = _date;
	}

	Message.prototype.toString = function() {
		return this.getText()+" ("+this.getDate()+")";
	}

	Message.prototype.getHTMLText = function() {
		var str = this.getText();
		return str.replace(/\n/g, '<br />');
	}	
}

