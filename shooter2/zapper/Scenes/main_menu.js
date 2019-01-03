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
        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet','Slicing-01.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var logo = this.add.image(game.config.width/2, game.config.height/5,'spritesheet','Slicing-02.png');
        logo.setDisplaySize(game.config.width/2, game.config.height/3);
        logo.setAlpha(0);

        var startButton = this.children.add(new Button(this, 'Slicing-15.png', 'Slicing-03.png', game.config.width/2, game.config.height + 100));
        startButton.on('pointerdown', () => this.startGame() );

        var highScoresButton = this.children.add(new Button(this, 'Slicing-16.png', 'Slicing-04.png', game.config.width/2, game.config.height + 100));
        highScoresButton.on('pointerdown', () => this.highScores() );

        var moreGamesButton = this.children.add(new Button(this, 'Slicing-17.png', 'Slicing-05.png', game.config.width/2, game.config.height + 100));
        moreGamesButton.on('pointerdown', () => this.moreGames() );

        var animations = new UIAnimations(this);
        animations.fadeIn(logo);      
        animations.moveUp(startButton, game.config.height/2.1, 250, 0);
        animations.moveUp(highScoresButton, game.config.height/1.65, 250, 250);
        animations.moveUp(moreGamesButton,game.config.height/1.35, 250, 500);

        var highScore = localStorage.getItem("highscore");
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
        this.scene.start('game');
    },

    highScores: function() {
        this.scene.start('highscores');
    },

    moreGames: function() {
        window.open("http://planet-boop.com",  "_blank")
    },

    
});