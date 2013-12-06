"use strict";

var main = {

init: window.onload = function() {

var mess = new Message("Testmeddelande", new Date());
alert(mess);
alert(mess.getText());
alert(mess.getDate());
mess.setText("En annan\n text");
alert(mess);
mess.setDate(1989);
alert(mess.getDate());
alert(mess.getHTMLtext());
alert(mess);
}

};