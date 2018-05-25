var i=0;
var imgPrompt = function () {

	var username = prompt("Enter username");
	var imgAddr = prompt("Enter image address");
	var caption = prompt("Enter Caption");

	if (imgAddr !== "") {
		
		// 1. Clone first image card
		var ic = $("#imageCard").clone(true);

		//2. Change image and caption of cloned card
		ic.find("img").attr("src",imgAddr);
		ic.find("#caption").text(caption);
		ic.find("#username").text(username);

		//3. Change ids of cloned div
		ic.attr("id","A"+i);
		i++;

		//4. Prepend the card to parent div
		$("#imageCardContainer").prepend(ic);

	}
}