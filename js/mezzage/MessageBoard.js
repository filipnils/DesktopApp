var MessageBoard = {
	
	messages: [],

	
	init:function(e) {
		// Om man klickar på knapp
		var btn = document.getElementById("button");
		btn.onclick = MessageBoard.theMessage;
		// Om man klickar på enter
		var enter = document.getElementById("textinput");
		enter.onkeypress = function(e) {
			if(!e) var e = window.event;
		
		if (e.keyCode === 13 && e.shiftKey === false) {
			MessageBoard.theMessage();
			return false;
		}
		};
	},
	
	theMessage: function() {
		var input = document.getElementById("textinput").value;
		var msg = new Message(input, new Date());
		
		MessageBoard.messages.push(msg);
		
		MessageBoard.renderMessages();
	},
	
	renderMessages: function() {
		// Ta bort gamla meddelanden
		document.getElementById("textinput").value = "";
		document.getElementById("mez").innerHTML = "";
		
		
		var messcount = document.getElementById("messcount");
		messcount.innerHTML = "";
		var amount = document.createTextNode("Antal meddelanden: " + MessageBoard.messages.length);
		messcount.appendChild(amount);
		
		
		
		for(var i = 0; i < MessageBoard.messages.length; i++) {
			MessageBoard.renderMessage(i);
		}
	},
	
	renderMessage: function(messageID) {
		
		var mez = document.getElementById("mez");
		var text = document.createElement("div");
		text.id = "msgDiv";
		
		text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
		mez.appendChild(text);
		
		//deleteknapp
		var link = document.createElement("a");
		var pic = document.createElement("img");
		link.setAttribute("href", "#");
		pic.setAttribute("src", "DeleteRed.png");
		//pic.setAttribute("DeleteRed.png");
		link.appendChild(pic);
		text.appendChild(link);
		link.className = "icon";
		link.onclick = function() {
			MessageBoard.removeMessage(messageID);
		};
		
		//Tidsstämpel
		var timelink = document.createElement("a");
		var timepic = document.createElement("img");
		timelink.setAttribute("href", "#");
		timepic.setAttribute("src", "Clock4.png");
		timelink.appendChild(timepic);
		text.appendChild(timelink);
		timelink.className = "icon";
		timelink.onclick = function() {
			alert("Inlägget skapades " + MessageBoard.messages[messageID].getDate());
		};
		
		//Skriv ut när meddelandet skapades i diven
		var dateText = document.getElementById("text");
		var dateDiv = document.createElement("div");
		dateDiv.id = "tid";
		dateDiv.innerHTML = MessageBoard.messages[messageID].getDateText();
		text.appendChild(dateDiv);
		
		},
		
	removeMessage: function(del) {
		var removeMes = window.confirm("Vill du radera ditt meddelande?");
		if (removeMes === true) {
			MessageBoard.messages.splice(del, 1);
			var myDiv = document.getElementById(mez);
			
			MessageBoard.renderMessages();
			
			}
		}
		
};
window.onload = MessageBoard.init;