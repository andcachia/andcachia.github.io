var Shooter = window.Shooter || {};
Shooter.Anim = (function($){
	var Anim = function(){

		var self = this,
			gameArea = $("#game_area"),
			title = $("#title"),
			pointsLabel = $("#points_label"),
			timerLabel = $("#timer_label"),
		 	right_pane = $("#right_pane"),
		 	pane_points = $("#points_explanation th"),
		 	pane_sprites = $("#points_explanation td");

		
		this.openingAnimation = function(){
			var t1 = new TimelineLite();
			TweenLite.set(gameArea, {visibility:"visible"});

			t1.to(title, 0.5, {scale: 1.7});
			t1.to(title, 1, {scale: 1, left: '20%', top: '10%'}, 1);
			t1.from(pointsLabel, 0.5, {x:'10%', opacity: 0});
			t1.from(timerLabel, 0.5, {x:'10%', opacity: 0});
			t1.from(right_pane, 0.5, {x:'10%', opacity: 0});
		};

		this.animateTitle = function(sec){
			var title = $("#title");
			TweenLite.fromTo(title,0.5,
			{
				left: '15%',
				top: '5%'
			},
			{
				left: '10%',
				opacity: 1
			});
		};

		this.animatePointsLabel = function(sec){
			var label = $("#points_label");
			TweenLite.to(label,0.5,
			{
				delay:sec,
				y: '-=50',
				opacity: 1
			});
		};

		this.animateTimerLabel = function(sec){
			var label = $("#timer_label");
			TweenLite.to(label,0.5,
			{
				delay:sec,
				y: '-=50',
				opacity: 1
			});
		};

		this.animateRightPane = function(sec){
			var right_pane = $("#right_pane");
			var pane_points = $("#points_explanation th");
			var pane_sprites = $("#points_explanation td");
			TweenLite.to([right_pane,pane_points],1,
			{
				opacity: 1
			});
			TweenLite.to(pane_sprites,2,
			{
				ease: Elastic.easeOut,
				delay:sec,
				scale: 0.7,
				opacity: 1
			});
		};
	};
	return Anim;
})(jQuery);