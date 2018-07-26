

function partnersInit(){
	setClickablePartners();
}

function setClickablePartners(){
	var elements = document.getElementsByClassName("partner-logo");
	for(var i=0; i<elements.length; i++){
		elements[i].onmouseover= function(){  };
		elements[i].onmouseleave = function(){  };
		elements[i].onclick = function(){ selectPartner(this) };
	}
}

function selectPartner(listItem){
	for(var i=0; i<partnersInfo.length; i++){
		if (partnersInfo[i].id == listItem.id)
			displayPartner(i);
	};
}

function displayPartner(index){
	var partnerTitle = document.getElementById("partner-title");
	var partnerSubtext = document.getElementById("partner-subtext");
	var images = document.getElementsByClassName("partner-img");

	partnerTitle.innerHTML = partnersInfo[index].title;
	partnerSubtext.innerHTML = partnersInfo[index].subtext;
	images[0].src = partnersInfo[index].img_0;
	images[1].src = partnersInfo[index].img_1;
	images[2].src = partnersInfo[index].img_2;
}