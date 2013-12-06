"use strict";

var main = {

messages: [],

init: window.onload = function() {

var mess = new Message("Testmeddelande", new Date());

main.messages.push(mess);

alert(main.messages[0]);

}

};