function startMainAnim(){
	var elements = document.getElementsByClassName("center-align");
	TweenLite.set(elements, {xPercent:-50});

	var logo = document.getElementById("logo");
	var title = document.getElementById("title");
	var motto = document.getElementById("motto");
	var icons = document.getElementsByClassName("myIcon");
	var iconCaptions = document.getElementsByClassName("icon-caption");

	var tl = new TimelineLite();
	tl.to(logo, 1, {opacity:1});
	tl.to(title, 0.75, {opacity:1});
	tl.to(motto, 0.75, {opacity:1});
	tl.staggerTo(icons, 2, {scale:0.8, opacity:1, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2, "-=0.5");
	tl.to(iconCaptions, 1, { opacity:1 }, "-=1");
}

function animateIcons(){
	var icons = document.getElementsByClassName("icon-container");

	var tl = new TimelineLite();
	tl.staggerTo(icons, 1.5, {scale: 0.5, top: '-70px', ease:Elastic.easeOut, force3D:true}, 0.2);
}

function projectsPageAnim(){
	var tl = new TimelineLite();
	var tiles = document.getElementsByClassName("tile");
	tl.staggerFrom(tiles, 0.75, {delay: 1, opacity: 0, left:'70px'}, 0.25);
}