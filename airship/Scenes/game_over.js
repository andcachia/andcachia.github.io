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
        var background = this.add.image(game.config.width/2, game.config.height/2, 'spritesheet', 'background_static.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var board = this.add.image(game.config.width/2, 0, 'spritesheet','ui_game_over.png').setOrigin(0.5,0);

        var scoreText = this.add.text(game.config.width/2, board.y + board.displayHeight/2, this.score, { font: '32px Courier', fill: '#00ff00' });
        scoreText.setOrigin(0.5);
        scoreText.setAlpha(0); 

        var restartButton = this.children.add(new Button(this, 'btn_replay.png', game.config.width/2.7, game.config.height + 100));
        restartButton.on('pointerdown', () => this.startGame() );

        var menuButton = this.children.add(new Button(this, 'btn_menu.png', game.config.width/1.55, game.config.height + 100));
        menuButton.on('pointerdown', () => this.openMenu() );

        //board.setScale(0,0);
        board.y -= board.displayHeight;

        var animations = new UIAnimations(this);
        //animations.growIn(board);
        animations.fallDown(board);
        //animations.fadeIn2(boop);
        animations.fadeIn2(scoreText);
        animations.moveUp(restartButton, game.config.height/1.55, 500, 750);
        animations.moveUp(menuButton, game.config.height/1.55, 500, 900);

        var highScore = localStorage.getItem("highscore_airship");
        if (highScore === null || this.score > highScore){
            localStorage.setItem("highscore_airship", this.score);
        }        
    },

    startGame: function() {
        this.scene.start('game');
    },

    openMenu: function() {
        this.scene.start('mainmenu');
    }

});