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

		//3. Update views, likes, time stamp and user image of cloned card
		imgCardClone.find("#views").html('<i class="fe fe-eye mr-1"></i> 0');
		imgCardClone.find("#likes").html('<i class="fe fe-heart mr-1"></i> 0');
		imgCardClone.find("#timestamp").text("just now");
		imgCardClone.find("#userimage").attr("style","background-image: url(https://placeimg.com/128/128/people)");

		//4. Change id of cloned card (not necessary)
		imgCardClone.attr("id","A"+i);
		i++;

		//5. Prepend the card to parent div
		$("#imageCardContainer").prepend(imgCardClone);

	}
}