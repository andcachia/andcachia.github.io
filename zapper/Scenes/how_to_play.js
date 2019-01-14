var HowToPlay = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function HowToPlay ()
    {
        Phaser.Scene.call(this, { key: 'howtoplay' });
        window.OVER = this;
    },

    create: function ()
    {
        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet','Slicing-01.png');
        background.setDisplaySize(game.config.width, game.config.height);
        
        var text = this.add.image(game.config.width/2, game.config.height/2,'spritesheet','Avoid-These.png');

        var startButton = this.children.add(new Button(this, 'Slicing-100.png', 'Slicing-100.png', game.config.width/2, game.config.height + 100));
        startButton.on('pointerdown', () => this.startGame() );

        var animations = new UIAnimations(this);
        animations.moveUp(startButton, game.config.height/1.15, 250, 0);
    },

    startGame: function() {
        this.scene.start('game');
    }
});