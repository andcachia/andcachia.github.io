function init(){
	//Hover and click effects for Icons
	var elements = document.getElementsByClassName("myIcon");
	for(var i=0; i<elements.length; i++){
		elements[i].onmouseover= function(){ iconHoverEffect(this) };
		elements[i].onmouseleave = function(){ removeIconHoverEffect(this) };
		elements[i].onclick = function(){ 
			animateIcons(); 
			changePage(this.parentNode.children[1].id);
		};
	}

	//Hover and click effects for Projects Tiles
	var elements = document.getElementsByClassName("tile");
	for(var i=0; i<elements.length; i++){
		elements[i].onmouseover= function(){ tileHoverEffect(this) };
		elements[i].onmouseleave = function(){ removeTileHoverEffect(this) };
		elements[i].onclick = function(){ expandTile(this); };
	}

	//Hover and click effects for Products List
	var elements = document.getElementsByClassName("product-icon");
	for(var i=0; i<elements.length; i++){
		elements[i].onmouseover= function(){ prodIconHoverEffect(this); };
		elements[i].onmouseleave = function(){ removeProdIconHoverEffect(this); };
		elements[i].onclick = function(){ openProductPopup(this); };
	}

	var elements = document.getElementsByClassName("close-popup-button");
	for(var i=0; i<elements.length; i++){
		elements[i].onmouseover= function(){  };
		elements[i].onmouseleave = function(){  };
		elements[i].onclick = function(){ closeProductPopup(this); };
	}
}

function changePage(pageId){
	var pages = document.getElementsByClassName("page");
	var currentPage = document.getElementById(pageId+"-page");

	TweenLite.set(pages, {opacity: 0, 'z-index': 0});
	TweenLite.set(currentPage, {opacity: 1, 'z-index': 10});

	switch(pageId){
		case "projects": projectsPageAnim();
			resumeVideo();
			break;
		case "products": productsBackgroundAnimation();
			break;
	}
}


//Home icons hover effect
function iconHoverEffect(element){
	TweenLite.to(element, 1, {scale: 1.2});

	var textElement = document.querySelector("#" + element.parentElement.id + " .icon-caption");
	TweenLite.to(textElement, 1, {scale: 1.3});
}
function removeIconHoverEffect(element){
	TweenLite.to(element, 0.5, {scale: 0.8});

	var textElement = document.querySelector("#" + element.parentElement.id + " .icon-caption");
	TweenLite.to(textElement, 1, {scale: 1});
}



//Projects Tiles hover effects
function tileHoverEffect(tile){
	var title = tile.children[1];
	var text = tile.children[2];

	TweenLite.to(tile, 0.2, {'-webkit-filter': 'brightness(130%)', 'filter': 'brightness(130%)' });
	TweenLite.to(title, 0.3, {y: -20});
	TweenLite.to(text, 1, {opacity: 1});
};
function removeTileHoverEffect(tile){
	var title = tile.children[1];
	var text = tile.children[2];

	TweenLite.to(tile, 0.2, {'-webkit-filter': 'brightness(100%)', 'filter': 'brightness(100%)' });
	TweenLite.to(text, 0.1, {opacity: 0});
	TweenLite.to(title, 0.3, {y: 20});
	
};


function prodIconHoverEffect(icon){
	TweenLite.to(icon, 0.5, {y: -20});
}
function removeProdIconHoverEffect(icon){
	TweenLite.to(icon, 0.2, {y: 20});
}

function openProductPopup(listItem){
	var popup = document.getElementById("products-popup");
	var title = document.getElementById("popup-title");
	var mainImg = document.getElementById("popup-main-image");

	title.innerHTML = productsInfo[listItem.id].title;
	mainImg.src = productsInfo[listItem.id].img_src;

	TweenLite.set(popup, {'z-index': 100});
	TweenLite.to(popup, 0.5, {opacity: 1});	
}

function closeProductPopup(listItem){
	var popup = document.getElementById("products-popup");
	TweenLite.set(popup, {'z-index': 0});
	TweenLite.to(popup, 0.5, {opacity: 0});
}


function resumeVideo(){
	var video = document.getElementById("projects-video");
	video.play();
	video.muted = false;
}
function pauseVideo(){
	var video = document.getElementById("projects-video");
	video.pause();
	video.muted = true;
}

/*
function expandTile(tileElement){
	var expandedTile = document.createElement('div');
	expandedTile.className = 'expandedTile';
	TweenLite.set(expandedTile, {xPercent:-50, yPercent:-50});
	document.getElementsByTagName('body')[0].appendChild(expandedTile);
};
*/