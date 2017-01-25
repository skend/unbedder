$(document).ready(function() {
	var url = document.getElementById("resourceobject");
	if (url != null) {
		self.location = url.data;
	} else {
		self.location = window.frames[1].document.getElementById("plugin").src
	}
});