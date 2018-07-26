function init(){

	mainInit();
	productsInit();
	projectsInit();
	partnersInit();
	contactusInit();


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

	var logo = document.getElementById("logo");
	logo.onmouseover= function(){ iconHoverEffect(this) };
	logo.onmouseleave = function(){ removeIconHoverEffect(this) };
	logo.onclick = function(){ 
		reverseMainAnim(); 
		changePage("main");
	};
}

function changePage(pageId){
	var pages = document.getElementsByClassName("page");
	var currentPage = document.getElementById(pageId+"-page");

	TweenLite.set(pages, {opacity: 0, 'z-index': 0});
	TweenLite.set(currentPage, {opacity: 1, 'z-index': 10});

	scroll(0,0);

	switch(pageId){
		case "projects": projectsStart();
			break;
		case "products": productsStart();
			break;
		case "contactus": contactusStart();
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

