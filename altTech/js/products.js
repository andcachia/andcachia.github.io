
var productInfoTl;
var productBackgroundTl;

function productsInit(){
	setClickable();
	setAnimations();
}

function productsStart(){
	productBackgroundTl.restart();
	productsPageAnim();
}

//Set hover and click effects for clickable items
function setClickable(){
	var prodIcons = document.getElementsByClassName("product-icon");
	for(var i=0; i<prodIcons.length; i++){
		prodIcons[i].onmouseover= function(){ prodIconHoverEffect(this); };
		prodIcons[i].onmouseleave = function(){ removeProdIconHoverEffect(this); };
		prodIcons[i].onclick = function(){ selectProduct(this); };
	}

	var closeButton = document.getElementById("close-popup-button");
	closeButton.onmouseover= function(){  };
	closeButton.onmouseleave = function(){  };
	closeButton.onclick = function(){ closeProductPopup(); };

	var leftArrow = document.getElementById("products-left-arrow");
	var rightArrow = document.getElementById("products-right-arrow");
	leftArrow.onmouseover= function(){ };
	leftArrow.onmouseleave = function(){ };

	var backgroundOverlay = document.getElementById("prod-popup-overlay");
	backgroundOverlay.onclick = function(){ closeProductPopup(); }
}


function prodIconHoverEffect(icon){
	TweenLite.to(icon, 0.5, {y: -20});
}
function removeProdIconHoverEffect(icon){
	TweenLite.to(icon, 0.2, {y: 0});
}

function selectProduct(listItem){
	for(var i=0; i<productsInfo.length; i++){
		if (productsInfo[i].id == listItem.id)
			openProductPopup(i);
	};
}

function openProductPopup(index){
	var popup = document.getElementById("products-popup");
	var popupContainer = document.getElementById("popup-container");
	
	var title = document.getElementById("popup-title");
	var mainImg = document.getElementById("popup-main-image");
	var gallery = document.querySelectorAll(".popup-gallery img");
	var leftArrow = document.getElementById("products-left-arrow");
	var rightArrow = document.getElementById("products-right-arrow");
	var popupTableLeft = document.getElementById("popup-table-left");
	var popupTableRight = document.getElementById("popup-table-right");

	title.innerHTML = productsInfo[index].title;
	mainImg.src = productsInfo[index].img_src;
	gallery[0].src = productsInfo[index].gallery_0;
	gallery[1].src = productsInfo[index].gallery_1;
	gallery[2].src = productsInfo[index].gallery_2;
	gallery[3].src = productsInfo[index].gallery_3;

	TweenLite.set(popup, {'z-index': 100});
	TweenLite.to(popup, 0.5, {opacity: 1});	
	TweenLite.to(popupContainer, 1, {scrollTo:{y:0}, ease:Power2.easeOut});

	productInfoTl.restart();

	leftArrow.onclick = function(){ openProductPopup(+index-1) };
	rightArrow.onclick = function(){ openProductPopup(+index+1) };
}

function closeProductPopup(){
	var popup = document.getElementById("products-popup");
	TweenLite.set(popup, {'z-index': 0});
	TweenLite.to(popup, 0.5, {opacity: 0});
}



function setAnimations(){
	productInfoTl = setProdInfoAnimation();
	productBackgroundTl = productsBackgroundAnimation();
}

function productsPageAnim(){
	var tl = new TimelineLite();
	var icons = document.getElementsByClassName("product-icon");
	tl.staggerFrom(icons, 0.75, {delay: 1, opacity: 0, left:'70px'}, 0.25);
}

function productsBackgroundAnimation(){
	
	var tl = new TimelineLite({onComplete:complete});
	
	var backgrounds = document.querySelectorAll("#products-page .background");
	for (var i=0; i<backgrounds.length; i++){

		var img_title =  backgrounds[i].children[0];
		var img_subtext =  backgrounds[i].children[1];

		tl.from(backgrounds[i], 1, {css:{opacity: 0, zIndex:10 }});
		tl.from(img_title, 2,{opacity: 0, left: '-=150px'});
		tl.from(img_subtext, 2,{opacity: 0, left: '+=150px'},"-=0.75");
	}

	function complete(){
		tl.restart();
	}

	return tl;
}

function setProdInfoAnimation(){
	var title = document.getElementById("popup-title");
	var mainImg = document.getElementById("popup-main-image");
	var gallery = document.querySelectorAll(".popup-gallery img");
	var leftArrow = document.getElementById("popup-left-arrow");
	var rightArrow = document.getElementById("popup-right-arrow");
	var popupTableLeft = document.getElementById("popup-table-left");
	var popupTableRight = document.getElementById("popup-table-right");

	var tl = new TimelineLite();

	tl.from(title, 1, {opacity: 0, y:-100});
	tl.from(mainImg, 1, {opacity: 0, scale: 0.7},"-=0.6");
	tl.from(popupTableLeft, 1, {opacity: 0, x:-100},"-=0.6");
	tl.from(popupTableRight, 1, {opacity: 0, x:100},"-=1");
	tl.staggerFrom(gallery, 1, {opacity: 0, scale: 0.5}, 0.3),"-=0.6";

	return tl;
}
