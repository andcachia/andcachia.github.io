var GameOver = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameOver ()
    {
        Phaser.Scene.call(this, { key: 'gameover' });
        window.OVER = this;
    },

    init: function (data)
    {
        this.score = data.score;
    },

    create: function ()
    {
        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet','Slicing-01.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var board = this.add.image(game.config.width/2, game.config.height/2.5, 'spritesheet','Slicing-90.png');
        //board.displayHeight = game.config.height/1.25;
        //board.displayWidth = game.config.width/1.25;

        var titleSign = this.add.image(game.config.width/2, 0, 'spritesheet','Slicing-89.png');
        titleSign.y += titleSign.displayHeight/2;

        var scoreText = this.add.text(game.config.width/2, board.y - board.displayHeight/4, 'Your score: ' + this.score, { font: '32px Courier', fill: '#00ff00' });
        scoreText.setOrigin(0.5);
        scoreText.setAlpha(0);    

        //TODO: Check exact ratio
        var boop = this.add.sprite(game.config.width/2, board.y + board.displayHeight/4, 'spritesheet','Slicing-91.png');
        boop.displayHeight = game.config.height/5;
        boop.displayWidth = boop.height/1.1;    
        boop.setAlpha(0);    

        var startButton = this.children.add(new Button(this, 'Slicing-95.png', 'Slicing-93.png', game.config.width/2, game.config.height + 100));
        startButton.on('pointerdown', () => this.startGame() );

        board.setScale(0,0);
        titleSign.y -= titleSign.height;

        var animations = new UIAnimations(this);
        animations.growIn(board);
        animations.fallDown(titleSign);
        animations.fadeIn2(boop);
        animations.fadeIn2(scoreText);
        animations.moveUp(startButton, game.config.height/1.3, 750, 750);

        var highScore = localStorage.getItem("highscore");
        if (highScore === null || this.score > highScore){
            localStorage.setItem("highscore", this.score);
        }        
    },

    startGame: function() {
        this.scene.start('game');
    },

    enterButtonHoverState: function(button) {
        button.setScale(1.2,1.2);
    },

    enterButtonRestState: function(button) {
        button.setScale(1,1);
    },

});