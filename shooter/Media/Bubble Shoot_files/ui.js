var Shooter = window.Shooter || {};
Shooter.ui = (function($){
	var ui = {
		TARGET_DIMS : 44,
		GAME_SCREEN_WIDTH: $("#board").width(),
		GAME_SCREEN_HEIGHT: $("#board").height(),
		init : function(level,points,timer){
			$("#board").empty();
			Shooter.ui.updateRightPanel(level);
			Shooter.ui.updatePoints(points);
			Shooter.ui.updateTimer(timer);
		},
		getMouseCoords : function(e){
			//Get position of mouse coords relative to containing div
			var offset = $("#board").offset();
			var coords = {x : e.pageX - offset.left, y : e.pageY - offset.top};
			return coords;
		},
		updatePoints : function(points){
			$("#points").text(points);
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
		updateRightPanel : function(level){
			$("#level_number").text("Level "+level);

			$("#points_explanation").empty();
			var spritePoints = [1,5,20,-2];
			
			for (var i=0; i<4; i++){
				var row = $(document.createElement("tr"));
				
				var sprite = $(document.createElement("td"));
				sprite.addClass("target");
				TweenLite.to(sprite,0,{
					scale: 1,
					backgroundPosition: (-135*i)+'px ' + (-150*(level-1))+'px'
				});

				var pointsText = $(document.createElement("th"));
				pointsText.text(spritePoints[i] + " points - ");
				
				row.append(pointsText);
				row.append(sprite);
				
				$("#points_explanation").append(row);
			}
		},
		addTarget : function(target){
			var gameArea = $("#board");
			var sprite = target.getSprite();
			var dest = target.getDestCoords();
			gameArea.append(sprite);
			
			//Set to and from coordinates and begin animation
			var tween = TweenLite.fromTo(sprite,target.getSpeed(),
			target.getStartCoords(),
			{
				left: dest.left,
				top: dest.top,
				ease: Power0.easeNone,
				onComplete: fadeSprite
			});
			
			//Disappear when reaching destination
			function fadeSprite(){
				tween = TweenLite.to(sprite,0.5,{ 
					opacity:0,
					onComplete: removeSprite
				});
			};

			function removeSprite(){
				sprite.remove();
			};
		},
		destoryTarget: function(target){
			var gameArea = $("#board");
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
		stopAnim: function(target){
			var tweens = TweenLite.getTweensOf(target.getSprite());
			//Check in case tween animation has stopped but target not set to null yet
			if (tweens.length > 0)
					tweens[0].kill();
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
			text.show();
			text.text("Get "+points+" points to reach the next level!!");

			TweenLite.fromTo(text,5,
			{
				opacity:1,
				left: '10%',
			},
			{
				opacity: 0,
				left: '30%'
			});
		}
	};
	return ui;
})(jQuery);