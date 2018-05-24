var imgPrompt = function () {
	var caption = prompt("Enter Caption");
	var imgAddr = prompt("Enter image address");
	if (imgAddr !== "" && caption!=="") {
		var ic = $("#imageCard").clone(true);
		$("#imageLink").attr("src",imgAddr);
		$("#caption").text(caption);
		ic.appendTo("#imageCardContainer");
	}
}
