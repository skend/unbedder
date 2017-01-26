$(document).ready(function() {
	var element = document.getElementById("resourceobject");
	if (element != null) {
		self.location = element.data;
	} else {
		self.location = window.frames[1].document.getElementById("plugin").src
	}
});