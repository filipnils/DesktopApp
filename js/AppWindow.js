function AppWindow(cssClass) {

	//Skapa själva fönstret
	$("<div></div>").prependTo("#wrapper").attr('class', 'appwindow');

	//Baren längst uppe i fönstret
	$("<div></div>").prependTo(".appwindow").attr("class", "appwindowtop");

	//Baren längst nere i fönstret
	$("<div></div>").appendTo(".appwindow").attr("class", "appwindowbottom");
}