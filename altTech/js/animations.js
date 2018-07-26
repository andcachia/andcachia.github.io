var iconsAnimation = new TimelineLite();
var mainPageAnimation = new TimelineLite();

function mainInit(){
	setIconAnim();
}

function startMainAnim(){
	var elements = document.getElementsByClassName("center-align");
	TweenLite.set(elements, {xPercent:-50});

	var logo = document.getElementById("logo");
	var title = document.getElementById("title");
	var motto = document.getElementById("motto");
	var icons = document.getElementsByClassName("myIcon");
	var iconCaptions = document.getElementsByClassName("icon-caption");

	mainPageAnimation.to(logo, 1, {opacity:1});
	mainPageAnimation.to(title, 0.75, {opacity:1});
	mainPageAnimation.to(motto, 0.75, {opacity:1});
	mainPageAnimation.staggerTo(icons, 2, {scale:0.8, opacity:1, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2, "-=0.5");
	mainPageAnimation.to(iconCaptions, 1, { opacity:1 }, "-=1");
}

function setIconAnim(){
	var icons = document.getElementsByClassName("icon-container");
	var navbar = document.getElementById("topNavBar");

	iconsAnimation.to(logo, 1, {scale: 0.8, top: 0, left: '5%', ease: Power1.easeOut});
	iconsAnimation.staggerTo(icons, 1.5, {scale: 0.5, top: '-80px', ease:Elastic.easeOut, force3D:true}, 0.2, "-=0.5");
	iconsAnimation.to(navbar, 1, {opacity: 1}, "-=0.75");
	iconsAnimation.pause();
}

function animateIcons(){
	iconsAnimation.play();
}

function reverseMainAnim(){
	iconsAnimation.seek(-1);
	iconsAnimation.reverse();
}

