var Shooter = window.Shooter || {};
Shooter.ui = (function($){
	var ui = {
		TARGET_DIMS : 44,
		GAME_SCREEN_WIDTH: $("#game_board").width(),
		GAME_SCREEN_HEIGHT: $("#game_board").height(),
		init : function(level,levelPoints,totalPoints,timer){
			$("#game_board").empty();
			Shooter.ui.updatePoints(levelPoints,totalPoints);
			Shooter.ui.updateTimer(timer);
		},
		getMouseCoords : function(e){
			//Get position of mouse coords relative to containing div
			var offset = $("#game_board").offset();
			var coords = {x : e.pageX - offset.left, y : e.pageY - offset.top};
			return coords;
		},
		updatePoints : function(levelPoints,totalPoints){
			$("#total_points").text(totalPoints);
			$("#level_points").text(levelPoints);
		},
		updateTimer : function(time){
			 $("#timer").text(time);
		},
		animateTimer : function(){
			var timer = $("#timer");
			//Animate to make time value flashing
			TweenLite.fromTo(timer,0.75,{
				color:"#FC0",
				fontSize: '30px'
			},
			{
				color:"#000",
				fontSize: '24px'
			});
		},
		addTarget : function(target){
			var gameArea = $("#game_board");
			var sprite = target.getSprite();
			gameArea.append(sprite);
		},
		destoryTarget: function(target){
			var gameArea = $("#game_board");
			var sprite = target.getSprite();
			
			//Stop current animation
			var tween = TweenLite.getTweensOf(sprite);
			tween[0].kill();
			
			var explosionImg = $(document.createElement("div"));
			explosionImg.addClass("explosion");
			gameArea.append(explosionImg);
			
			//Set destorying animation
			TweenLite.fromTo(explosionImg,1,
			{
				left: sprite.css('left'),
				top: sprite.css('top')
			},
			{ 
				opacity:0,
				onComplete: removeImg
			});

			//Remove sprite from screen
			sprite.remove();

			//Remove div from DOM
			function removeImg(){
				explosionImg.remove();
			};
		},
		displayWinScreen : function(){
			var dialog = $("#dialog_window");
			dialog.show();

			$("#dialog_text").text("You won this level!\nClick to proceed:");
			$("#dialog_button").text("Next level");
		},
		displayLoseScreen : function(){
			var dialog = $("#dialog_window");
			dialog.show();

			$("#dialog_text").text("You suck!!");
			$("#dialog_button").text("Try again");
		},
		hideDialog : function(){
			$("#dialog_window").fadeOut(300);
		},
		showNextLevelPoints : function(points){
			var text = $("#screen_alert_text");
			text.text("Get "+points+" points to reach the next level!!");
		}
	};
	return ui;
})(jQuery);