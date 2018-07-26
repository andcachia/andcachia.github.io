var projectInfoTl;

function projectsInit(){
	setProjectsClickable();
	setProjectsAnimations();
}

function projectsStart(){
	projectsPageAnim();
	resumeVideo();
}

function setProjectsClickable(){
	//Hover and click effects for Projects Tiles
	var elements = document.getElementsByClassName("tile");
	for(var i=0; i<elements.length; i++){
		elements[i].onmouseover= function(){ tileHoverEffect(this) };
		elements[i].onmouseleave = function(){ removeTileHoverEffect(this) };
		elements[i].onclick = function(){ selectProject(this) };
	}

	var closeButton = document.getElementById("close-projects-popup");
	closeButton.onmouseover= function(){  };
	closeButton.onmouseleave = function(){  };
	closeButton.onclick = function(){ closeProjectPopup(); };

	var leftArrow = document.getElementById("projects-left-arrow");
	var rightArrow = document.getElementById("projects-right-arrow");
	leftArrow.onmouseover= function(){ };
	leftArrow.onmouseleave = function(){ };

	var backgroundOverlay = document.getElementById("proj-popup-overlay");
	backgroundOverlay.onclick = function(){ closeProjectPopup(); }
}

//Projects Tiles hover effects
function tileHoverEffect(tile){
	var img = tile.children[0];
	var title = tile.children[1];
	var text = tile.children[2];

	TweenLite.to(img, 0.5, {'-webkit-filter': 'brightness(70%)', 'filter': 'brightness(70%)' });
	TweenLite.to(title, 0.3, {y: -20});
	TweenLite.to(text, 1, {opacity: 1});
};
function removeTileHoverEffect(tile){
	var img = tile.children[0];
	var title = tile.children[1];
	var text = tile.children[2];

	TweenLite.to(img, 0.2, {'-webkit-filter': 'brightness(100%)', 'filter': 'brightness(100%)' });
	TweenLite.to(text, 0.1, {opacity: 0});
	TweenLite.to(title, 0.3, {y: 20});
	
};

function selectProject(listItem){
	openProjectPopup(listItem.id);
	/*
	for(var i=0; i<projectsInfo.length; i++){
		if (projectsInfo[i].id == listItem.id)
			openProjectPopup(i);
	};
	*/
}

function openProjectPopup(index){
	var popup = document.getElementById("projects-popup");
	var popupContainer = document.getElementById("projects-popup-container");
	var imgDiv = document.getElementById("projects-popup-image-container");
	var backgroundOverlay = document.getElementsByClassName("background-overlay")[0];
	var title = document.getElementById("projects-popup-title");
	var leftArrow = document.getElementById("projects-left-arrow");
	var rightArrow = document.getElementById("projects-right-arrow");

	title.innerHTML = projectsInfo[index].title;
	imgDiv.style.backgroundImage = "url(" + projectsInfo[index].img_src + ")";

	TweenLite.set(popup, {'z-index': 100});
	TweenLite.to(popup, 0.5, {opacity: 1});	
	TweenLite.to(popupContainer, 1, {scrollTo:{y:0}, ease:Power2.easeOut});

	projectInfoTl.restart();

	leftArrow.onclick = function(){ openProjectPopup(+index-1) };
	rightArrow.onclick = function(){ openProjectPopup(+index+1) };
}

function closeProjectPopup(){
	var popup = document.getElementById("projects-popup");
	TweenLite.set(popup, {'z-index': 0});
	TweenLite.to(popup, 0.5, {opacity: 0});
}

function resumeVideo(){
	var video = document.getElementById("projects-video");
	video.play();
	video.muted = true;
}
function pauseVideo(){
	var video = document.getElementById("projects-video");
	video.pause();
	video.muted = true;
}


function setProjectsAnimations(){
	projectInfoTl = setProjectInfoAnimation();
}

function projectsPageAnim(){
	var tl = new TimelineLite();
	var tiles = document.getElementsByClassName("tile");
	tl.staggerFrom(tiles, 0.75, {delay: 1, opacity: 0, left:'70px'}, 0.25);
}

function setProjectInfoAnimation(){
	var tl = new TimelineLite();
	var imgDiv = document.getElementById("projects-popup-image-container");

	tl.from(imgDiv, 10, {backgroundPosition: "+=20% 0"});

	return tl;
}