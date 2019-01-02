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

        var logo = this.add.image(game.config.width/2, game.config.height/4,'spritesheet','Slicing-02.png');
        logo.setDisplaySize(game.config.width/2, game.config.height/3);
        logo.setAlpha(0);

        const startButton = this.add.sprite(game.config.width/2, game.config.height/1.8, 'spritesheet','Slicing-15.png')
                            .setInteractive()
                            .on('pointerdown', () => this.startGame() )
                            .on('pointerover', () => this.enterButtonHoverState(startButton) )
                            .on('pointerout', () => this.enterButtonRestState(startButton) );

        this.animation_fadeIn(logo);      
        this.animation_moveUp(startButton);
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

    animation_fadeIn: function(target){
        this.tweens.add({
            targets: target,
            alpha: 1,
            duration: 750,
            ease: 'Sine.easeOut'
        });
    }
});