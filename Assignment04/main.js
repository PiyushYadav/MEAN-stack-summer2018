var i=0;
var imgPrompt = function () {

	var username = prompt("Enter username");
	var imgAddr = prompt("Enter image address");
	var caption = prompt("Enter Caption");

	if (imgAddr !== "") {
		
		// 1. Clone first image card
		var imgCardClone = $("#imageCard").clone(true);

		//2. Change image and caption of cloned card
		imgCardClone.find("img").attr("src",imgAddr);
		imgCardClone.find("#caption").text(caption);
		imgCardClone.find("#username").text(username);

		//3. Change id of cloned card (not necessary)
		imgCardClone.attr("id","A"+i);
		i++;

		//4. Prepend the card to parent div
		$("#imageCardContainer").prepend(imgCardClone);

	}
}