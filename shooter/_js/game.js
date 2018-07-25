var Shooter = window.Shooter || {};
Shooter.Game = (function($){
	var Game = function(){
		var self = this;

		var totalPoints = 0;
		var level = 1;
		var levelCompletePoints = [50,80,100];
		var targets;
		var minArrayIndex;
		var timer;
		var levelPoints;
		
		var sound = new Shooter.Sound();
		var anim = new Shooter.Anim();

		var targetsAnim;
		
		this.init = function(){
			$("#game_board").bind("click",clickGameScreen);
		};
		
		this.initLevel = function(){
			minArrayIndex = 0;
			timer = 60;
			levelPoints = 0;

			targets = [];
			targetsAnim = new TimelineLite();
			
			Shooter.ui.init(level,levelPoints,totalPoints,timer);
			Shooter.ui.showNextLevelPoints(levelCompletePoints[level-1]);
			anim.animateNextLevelPoints();
			self.run();
		};
		
		this.run = function(){
			
			createTargets();

			var timerCountdown = setTimeout(timerFunction, 1000);
			function timerFunction() {
				timer--;
				Shooter.ui.updateTimer(timer);

				//Flash and beep if under 5 seconds
				if (timer <= 5){
					sound.playBeep();
					Shooter.ui.animateTimer();
				}

				//Finish loop when timer reaches 0
			  	if (timer > 0) 
			  		timerCountdown = setTimeout(timerFunction, 1000);
			  	else
			  		endLevel();
			  };
		};

		//Create all targets before game begins, and set animation time to each accordingly
		var createTargets = function(){
			var screenWidth = Shooter.ui.GAME_SCREEN_WIDTH;
			var screenHeight = Shooter.ui.GAME_SCREEN_HEIGHT;
			var type = 1;
			for (var i=0; i<70; i++){
				type = 1;
				if (i % 3 == 0) type = 3;
				else if (i % 4 == 0) type = 0;
				else if (i % 10 == 0) type = 2;

				var target = Shooter.Target.create(screenWidth, screenHeight, type, level);
				targets.push(target);
				Shooter.ui.addTarget(target);
				//Logarithm to decrease delay time as i increases
				animateTarget(target,Math.log(i+1)*Math.log(i+1)*3);
			};
		};


		var animateTarget = function(target, delay){
			var sprite = target.getSprite();
			var dest = target.getDestCoords();
			var count = 0;
			var spriteNumber = 0;
			var direction = 1;

			//Set to and from coordinates and begin animation
			targetsAnim.to(sprite,0,{opacity: 1}, delay);
			targetsAnim.fromTo(sprite,target.getSpeed(),
			target.getStartCoords(),
			{
				left: dest.left,
				top: dest.top,
				ease: Power0.easeNone,
				onComplete: fadeSprite
			}, delay);
			
			//Disappear when reaching destination
			function fadeSprite(){
				TweenLite.to(sprite,0.5,{ 
					opacity:0,
					onComplete: removeSprite
				});
			};

			function changeSprite(){
				count = count + 1;
				if (count % 5 == 0){
					if (direction){
						spriteNumber = spriteNumber + 1;
						if (spriteNumber == 4) direction = 0;
					}
					else{
						spriteNumber = spriteNumber - 1;
						if (spriteNumber == 0) direction = 1;
					}
					sprite.css("background-position", (1220*spriteNumber)+'px ' + (0*25)+'%');
				}
			}

			function removeSprite(){
				sprite.remove();
			};
		}

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
						&& mouseCoords.y >= (top - margin) && mouseCoords.y <= (top + dims.height +  margin)
						&& sprite.css("opacity") != 0)
					{
						Shooter.ui.destoryTarget(targets[i]);
						levelPoints += targets[i].getPoints();
						totalPoints += targets[i].getPoints();
						Shooter.ui.updatePoints(levelPoints,totalPoints);

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
			targetsAnim.pause();

			if (levelPoints >= levelCompletePoints[level-1]){
				Shooter.ui.displayWinScreen();
				$("#dialog_button").bind("click",nextLevel);
			}
			else
			{
				Shooter.ui.displayLoseScreen();
				$("#dialog_button").bind("click",restart);
			}
			anim.animDialogWindow();
		};

		var nextLevel = function(){
			Shooter.ui.hideDialog();
			$("#dialog_button").unbind("click",nextLevel);

			level++;
			self.initLevel();
		};

		var restart = function(){
			Shooter.ui.hideDialog();
			$("#dialog_button").unbind("click",restart);

			level = 1;
			totalPoints = 0;
			self.initLevel();
		}
	};
	return Game;
})(jQuery);