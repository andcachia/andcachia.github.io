var HighScores = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function HighScores ()
    {
        Phaser.Scene.call(this, { key: 'highscores' });
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

        const playButton = this.add.sprite(game.config.width/2, game.config.height/1.3, 'spritesheet','Slicing-100.png')
                            .setInteractive()
                            .on('pointerdown', () => this.startGame() )
                            .on('pointerover', () => this.enterButtonHoverState(playButton) )
                            .on('pointerout', () => this.enterButtonRestState(playButton) );

        board.setScale(0,0);
        titleSign.y -= titleSign.height;

        this.animation_growIn(board);
        this.animation_fallDown(titleSign);
        this.animation_fadeIn(boop);
        this.animation_fadeIn(scoreText);
        this.animation_moveUp(playButton);
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

    animation_growIn: function(target){
        this.tweens.add({
            targets: target,
            scaleX: 1,
            scaleY: 1,
            duration: 750,
            ease: 'Sine.easeOut'
        });
    },

    animation_fallDown: function(target){
        this.tweens.add({
            targets: target,
            y: target.y+target.height,
            duration: 750,
            ease: 'Sine.easeOut'
        });
    },

    animation_fadeIn: function(target){
        this.tweens.add({
            targets: target,
            alpha: 1,
            duration: 750,
            delay: 750,
            ease: 'Sine.easeOut'
        });
    },

    animation_moveUp: function(target){
        this.tweens.add({
            targets: target,
            y: {
                getStart: () => game.config.height,
                getEnd: () => target.y,
              },
            duration: 750,
            ease: 'Sine.easeOut'
        });
    },

});