var Shooter = window.Shooter || {};
Shooter.Main = (function($){
	var Main = function(){

		var anim = new Shooter.Anim();
		var game = new Shooter.Game();
		var audio = new Shooter.Sound();
		var game_screen = $("#game_screen");

		this.startApp = function(){
			anim.openingAnimation();
			$("#play_button").bind("click",startGame);
			game_screen.hide();
		}

		var startGame = function(){
			game.init();
			audio.playUnderwater(500);
			anim.startGameAnimation();
			toggleFullScreen();
			setTimeout(function(){
					game.initLevel();
				}, 4000);
		}

		function toggleFullScreen() {
			  var doc = window.document;
			  var docEl = doc.documentElement;

			  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
			  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

			  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
			    requestFullScreen.call(docEl);
			  }
			  else {
			    cancelFullScreen.call(doc);
			  }
			}
		};
	return Main;
})(jQuery);