var Shooter = window.Shooter || {};
Shooter.Sound = (function($){
	var Sound = function(){
		var beep = new Audio("../shooter/audio/beep.mp3");
		var shot = new Audio("../shooter/audio/shot.mp3");
		var splat = new Audio("../shooter/audio/splat.mp3");
		var underwater = new Audio("../shooter/audio/underwater.mp3");

		this.playBeep = function(){ beep.currentTime = 0; beep.play(); }
		this.playShot = function(){ shot.currentTime = 0; shot.play(); }
		this.playSplat = function(){ splat.currentTime = 0; splat.play(); }
		this.playUnderwater = function(delay){ underwater.currentTime = 0; setTimeout(function(){ underwater.play(); },delay); }
		
	}
	return Sound;
})(jQuery);