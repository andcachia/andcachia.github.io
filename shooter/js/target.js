var Shooter = window.Shooter || {};
Shooter.Target = (function($){
	var Target = function(startX,startY,destX,destY,width,height,speed,margin,type,points,sprite){
		var that = this;
		this.getType = function(){ return type; };
		this.getSprite = function(){ return sprite; };
		this.getSpeed = function(){ return speed; };
		this.getWidth = function(){ return width; };
		this.getHeight = function(){ return height; };
		this.getMargin = function(){ return margin; };
		this.getPoints = function(){ return points; };
		this.getStartCoords = function(){
			var coords = {
				left: startX,
				top: startY
			};
			return coords;
		},
		this.getDestCoords = function(){
			var coords = {
				left: destX,
				top: destY
			};
			return coords;
		}
		this.getDimensions = function(){
			var dims = {
				width: width,
				height: height
			};
			return dims;
		}
	};
	
	Target.create = function(screenWidth, screenHeight, type, level){
			
		var width = 610;
		var height = 450;
		var speed = Math.floor((Math.random() * 4) + 3);
		var margin = 20;

		//Either left or right of screen
		var x = Math.floor(Math.random() * 2) * (screenWidth - width);
		var destX = Math.abs(x - (screenWidth - width));
		//Random along screenHeight
		var y = Math.floor((Math.random() * (screenHeight/2 + screenHeight/4)) + 1);
		var destY = Math.floor((Math.random() * (screenHeight/2 + screenHeight/4)) + 1);

		var sprite = $(document.createElement("div"));
		sprite.addClass("target");
		//sprite.css("background-position", (-135*type)+'px ' + (-150*(level-1))+'px');

		var points = 1;
		var type = type * level;

		var target = new Target(x, y, destX, destY, width, height, speed, 
			margin, type, points, sprite);
		return target;
	};
	return Target;
})(jQuery);