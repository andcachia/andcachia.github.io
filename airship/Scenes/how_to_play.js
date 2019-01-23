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
        var background = this.add.image(game.config.width/2, game.config.height/2, 'spritesheet', 'background_static.png');
        background.setDisplaySize(game.config.width, game.config.height);
        
        this.add.image(game.config.width/2, game.config.height, 'spritesheet', 'base_ground.png').setOrigin(0.5,1);
        this.add.image(game.config.width/2, game.config.height/1.4, 'spritesheet', 'hero_01.png');
        this.add.image(game.config.width/2, game.config.height/2,'spritesheet','screen_tutorial.png');

        var startButton = this.children.add(new Button(this, 'btn_launch.png', game.config.width/2, game.config.height + 100));
        startButton.on('pointerdown', () => this.startGame() );

        var animations = new UIAnimations(this);
        animations.moveUp(startButton, game.config.height/1.15, 250, 0);
    },

    startGame: function() {
        this.scene.start('game');
    }
});