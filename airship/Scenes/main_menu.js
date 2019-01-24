var MainMenu = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function MainMenu ()
    {
        Phaser.Scene.call(this, { key: 'mainmenu' });
        window.OVER = this;
    },

    create: function ()
    {
        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet','background_title.png');
        background.setDisplaySize(game.config.width, game.config.height);

        this.add.image(game.config.width/2, game.config.height/1.4,'spritesheet','hero_01.png');

        var startButton = this.children.add(new Button(this, 'btn_start.png', game.config.width/2, game.config.height + 100));
        startButton.on('pointerdown', () => this.startGame() );

        var highScoresButton = this.children.add(new Button(this, 'btn_high_scores.png', game.config.width/2, game.config.height + 100));
        highScoresButton.on('pointerdown', () => this.highScores() );

        var moreGamesButton = this.children.add(new Button(this, 'btn_more_games.png', game.config.width/2, game.config.height + 100));
        moreGamesButton.on('pointerdown', () => this.moreGames() );

        this.add.text(game.config.width/2, game.config.height - 40, "www.planetboop.com").setOrigin(0.5);

        var animations = new UIAnimations(this);
        animations.moveUp(startButton, game.config.height/2.8, 250, 0);
        animations.moveUp(highScoresButton, game.config.height/2, 250, 250);
        animations.moveUp(moreGamesButton,game.config.height/1.55, 250, 500);

        var highScore = localStorage.getItem("highscore_airship");
        if (!(highScore === null)){
            var highScoreLabel = this.add.text(game.config.width/2, game.config.height/1.15, 'High Score', { font: '32px Courier', fill: '#0033ff' });
            highScoreLabel.setOrigin(0.5);
            highScoreLabel.setAlpha(0);   
            animations.fadeIn2(highScoreLabel);

            var highScoreText = this.add.text(game.config.width/2, game.config.height/1.1, highScore, { font: '32px Courier', fill: '#00ff00' });
            highScoreText.setOrigin(0.5);
            highScoreText.setAlpha(0);   
            animations.fadeIn2(highScoreText);
        }  
    },

    startGame: function() {
        this.scene.start('howtoplay');
    },

    highScores: function() {
        this.scene.start('highscores');
    },

    moreGames: function() {
        window.open("http://planetboop.com",  "_blank")
    },

    
});