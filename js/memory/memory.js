var Memory = {

	arrayRandom : [],
	arrayPic : [],
	rows : 4,
	cols : 4,
	pairs : 0,
	NrOfPairs : 0,
	count : 0,
	times : 0,
	clickedBrick : [],

	init : function() {
		//Genererar en array med tal
		Memory.arrayRandom = RandomGenerator.getPictureArray(Memory.rows, Memory.cols);

		var container = document.getElementById("container");
		var table = document.createElement("table");
		container.appendChild(table);

		var pic = 0;
		//Pic är det nummer i ordningen som man går ut ur loopen
		//Generera en tabell som skapar spelbordet, nästlade for-loopar
		for(var i = 0; i < Memory.rows; i++) {
			var tr = document.createElement("tr");
			table.appendChild(tr);

			for(var j = 0; j < Memory.cols; j++) {
				var td = document.createElement("td");
				tr.appendChild(td);

				var img = document.createElement("img");
				img.id = "img";
				img.setAttribute("src", "pics/0.png");
				img.height = 24;
				img.width = 24;

				var link = document.createElement("a");
				link.href = "#";
				td.appendChild(link);
				link.appendChild(img);
				pic++;

				Memory.turnBrick(img, pic);
			}
		}

	},
	turnBrick : function(img, pic) {

		img.onclick = function(e) {
			//Lägg till den bliden man klickade på i ny array

			//Om bilden man klickade på inte är vänd
			if(img.getAttribute("src") == "pics/0.png") {

				Memory.clickedBrick.push(img);

				//Om det finns mindre än 2 vända bilder
				if(Memory.count < 2) {
					img.setAttribute("src", "pics/" + Memory.arrayRandom[pic - 1] + ".png");
					Memory.arrayPic.push(Memory.arrayRandom[pic - 1]);
					//nummret i arrayen som man klickade på
					Memory.count++;

					if(Memory.count === 2) {
						setTimeout(function() {
							Memory.control(Memory.arrayPic[pic - 1]);
							Memory.clickedBrick = [];
						}, 1000);
					}
				}

			}
		};
	},
	control : function(pic) {
		Memory.count = 0;

		Memory.times++;

		//Vänd på arrayPic så att vi alltid har senaste siffrorna först i arrayen
		Memory.arrayPic.reverse();
		//Är första och andra bilden lika
		if(Memory.arrayPic[0] === Memory.arrayPic[1]) {
			Memory.arrayPic = [];
			Memory.pairs++;
			NrOfPairs = (Memory.rows * Memory.cols) / 2;
			if(Memory.pairs == 8) {
				alert("Du klarade det på " + Memory.times + " försök!");
			}

		} else {

			//Är bilderna inte lika så vänder vi tillbaka bilderna!
			var img = document.getElementById("img");

			Memory.arrayPic[0] = Memory.clickedBrick[0].setAttribute("src", "pics/0.png");
			Memory.arrayPic[1] = Memory.clickedBrick[1].setAttribute("src", "pics/0.png");

		}

	}
};
window.onload = Memory.init;
