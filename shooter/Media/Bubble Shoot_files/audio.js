var Shooter = window.Shooter || {};
Shooter.Sound = (function($){
	var Sound = function(){
		var beep = new Audio("../shooter/_audio/beep.mp3");
		var shot = new Audio("../shooter/_audio/shot.mp3");
		var splat = new Audio("../shooter/_audio/splat.mp3");

		this.playBeep = function(){ beep.currentTime = 0; beep.play(); }
		this.playShot = function(){ shot.currentTime = 0; shot.play(); }
		this.playSplat = function(){ splat.currentTime = 0; splat.play(); }
	}
	return Sound;
})(jQuery);