function productsBackgroundAnimation(){
	
	var tl = new TimelineLite({onComplete:complete});
	
	var backgrounds = document.querySelectorAll("#products-page .background");
	for (var i=0; i<backgrounds.length; i++){

		var title =  backgrounds[i].children[0];
		var subtext =  backgrounds[i].children[1];

		tl.from(backgrounds[i], 1, {css:{opacity: 0, zIndex:10 }});
		tl.from(title, 2,{opacity: 0, left: '-=150px'});
		tl.from(subtext, 2,{opacity: 0, left: '+=150px'},"-=0.75");
	}

	function complete(){
		tl.restart();
	}
}
