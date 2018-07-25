var Shooter = window.Shooter || {};
Shooter.Anim = (function($){
	var Anim = function(){

		var self = this,
			board = $("#board"),
			game_screen = $("#game_screen"),
			game_background = $("#game_background"),
			main_background = $("#main_background"),
			title = $("#title"),
			totalPointsLabel = $("#total_points_label"),
			levelPointsLabel = $("#level_points_label"),
			timerLabel = $("#timer_label"),
		 	right_pane = $("#right_pane"),
		 	level_number = $("#level_number"),
		 	pane_points = $("#points_explanation th"),
		 	pane_sprites = $("#points_explanation td"),
		 	play_button = $("#play_button"),
		 	title_screen = $("#title_screen"),
		 	dialog_window = $("#dialog_window"),
		 	dialog_button = $("#dialog_button"),
		 	screen_alert_text = $("#screen_alert_text");

		this.openingAnimation = function(){
			var t1 = new TimelineLite();

			t1.to(title, 1, {scale: 1.7, ease: Elastic.easeOut, opacity: 1});
			t1.to(play_button, 1, {opacity: 1, scale: 0.5, ease: Elastic.easeOut},"-=0.5");
		};

		this.startGameAnimation = function(){
			var t1 = new TimelineLite();
			game_screen.show();

			t1.to(play_button, 0.2, {opacity: 0, scale: 0.5});
			t1.to(title, 0.5, {scale: 1, left: '20%', top: '10%'});
			t1.to(main_background, 1.5, {top: '-100%'},"-=0.3");
			t1.to(game_background, 1, {top: 0},"-=1.5");
			t1.fromTo(totalPointsLabel, 0.5, {left:'-=10%',top:'-=5%'}, {left:'+=10%', opacity: 1},"-=0.1");
			t1.fromTo(levelPointsLabel, 0.5, {left:'-=10%'}, {left:'+=10%', opacity: 1},"-=0.4");
			t1.fromTo(timerLabel, 0.5, {left:'-=10%'}, {left:'+=10%', opacity: 1},"-=0.1");
			t1.from(level_number,0,{scale:0.5});
		};

		this.animateNextLevelPoints = function(){
			TweenLite.fromTo(screen_alert_text,3,{opacity:1,left: '10%',},{left: '30%'});
			TweenLite.to(screen_alert_text,3,{opacity: 0,left: '10%'});
		}

		this.animDialogWindow = function(){
			TweenLite.from(dialog_window,1.5,{ease: Elastic.easeOut,scale: 2});
			TweenLite.from(dialog_button,1.8,{ease: Elastic.easeOut,scale: 2});
		}
	};
	return Anim;
})(jQuery);