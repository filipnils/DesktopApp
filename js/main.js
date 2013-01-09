var Desktop = {

	init: function() {
		Desktop.launchApp();
	},

	launchApp: function() {
		var that = this;
		$("#app1").on('click', function() {
			if (that.win === undefined) {
				that.win = new AppWindow();
			}
		});
	}

};

window.onload = Desktop.init;