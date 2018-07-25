var Shooter = window.Shooter || {};
Shooter.Game = (function($){
	var Game = function(){
		var self = this;

		var totalPoints = 0;
		var level = 1;
		var levelPoints = [50,80,100];
		var targets;
		var minArrayIndex;
		var timer;
		var points;

		var sound = new Shooter.Sound();
		var anim = new Shooter.Anim();

		this.openingAnim = function(){
			Shooter.ui.updateRightPanel(level);
			anim.openingAnimation();
		};		

		this.init = function(){
			targets = [];
			minArrayIndex = 0;
			timer = 60;
			points = 0;
			//Shooter.ui.init(level,points,timer);
			Shooter.ui.showNextLevelPoints(levelPoints[level-1]);
			$("#game_area").bind("click",clickGameScreen);
		};

		this.run = function(){
			var count = 0;
			var timeUntilNext = 500;
			var targetFrequency = 6;
			var loopingFunction = setTimeout(creationProcess, timeUntilNext);
			function creationProcess() {
				//Count increments twice every second
				count++;

				//Update countdown timer
				if (count % (1000/timeUntilNext) == 0) {
					timer--;
					Shooter.ui.updateTimer(timer);
					if (timer <= 5){
						sound.playBeep();
						Shooter.ui.animateTimer();
					}
				};

				//Determine whether to create a new target
				if (count % targetFrequency == 0) createNewTarget(0);
				if (count % (targetFrequency*3) == 0) createNewTarget(3);
			  	if (count % (targetFrequency*10) == 0) createNewTarget(2);
			  	if (count % (targetFrequency*5) == 0) {
			  		createNewTarget(1);
			  		if (targetFrequency > 1) targetFrequency--;
			  	}

			  	//Finish loop when timer reaches 0
			  	if (timer > 0) 
			  		loopingFunction = setTimeout(creationProcess, timeUntilNext);
			  	else
			  		endLevel();
			  };
		};

		var createNewTarget = function(type){
			var screenWidth = Shooter.ui.GAME_SCREEN_WIDTH;
			var screenHeight = Shooter.ui.GAME_SCREEN_HEIGHT;
			var target = Shooter.Target.create(screenWidth, screenHeight, type, level);
			targets.push(target);
			Shooter.ui.addTarget(target);
		};

		var clickGameScreen = function(e){
			var mouseCoords = Shooter.ui.getMouseCoords(e);
			var sprite, dims, left, top, margin;

			//minArrayIndex will reduce the size of the array as targets
			//are destroyed or go off screen
			for(var i=minArrayIndex; i<targets.length; i++){
				if (targets[i] != null){
					sprite = targets[i].getSprite();
					dims = targets[i].getDimensions();
					margin = targets[i].getMargin();
					left = parseInt(sprite.css('left'));
					top = parseInt(sprite.css('top'));

					//Clean dead targets
					if (left == targets[i].getDestCoords().left)
						targets[i] = null;

					//If target is still moving, check mouse co-ordinates
					else if (mouseCoords.x >= (left - margin) && mouseCoords.x <= (left + dims.width + margin)
						&& mouseCoords.y >= (top - margin) && mouseCoords.y <= (top + dims.height +  margin))
					{
						Shooter.ui.destoryTarget(targets[i]);
						points += targets[i].getPoints();
						Shooter.ui.updatePoints(points);

						if (targets[i].getType() == 3)
							sound.playSplat();
						else
							sound.playShot();
						
						targets[i] = null;
						if (i == minArrayIndex)
							minArrayIndex++;
					};
				}
				else{
					if (i == minArrayIndex)
						minArrayIndex++;
				};
			};
		};

		var endLevel = function(){
			for(var i=minArrayIndex; i<targets.length; i++){
				if (targets[i] != null)
					Shooter.ui.stopAnim(targets[i]);
			};

			if (points >= levelPoints[level-1]){
				Shooter.ui.displayWinScreen();
				$("#dialog_button").bind("click",nextLevel);
			}
			else
			{
				Shooter.ui.displayLoseScreen();
				$("#dialog_button").bind("click",restart);
			}
		};

		var nextLevel = function(){
			Shooter.ui.hideDialog();
			$("#dialog_button").unbind("click",nextLevel);

			level++;
			totalPoints += points;

			self.init();
			Shooter.ui.init(level,points,timer);
			anim.animateRightPane(0.2);
			self.run();
		};

		var restart = function(){
			Shooter.ui.hideDialog();
			$("#dialog_button").unbind("click",restart);

			level = 1;
			totalPoints = 0;
			self.init();
			Shooter.ui.init(level,points,timer);
			anim.animateRightPane(0.2);
			self.run();
		}
	};
	return Game;
})(jQuery);