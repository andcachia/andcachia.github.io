var Preloader = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Preloader ()
    {
        Phaser.Scene.call(this, { key: 'preloader' });
    },

    preload: function ()
    {
        this.add.image(game.config.width/2, game.config.height/5, 'logo');

        this.add.text(game.config.width/2, game.config.height/2, "Loading...")
            .setOrigin(0.5);

        var progress = this.add.graphics();
        this.load.on('progress', function (value) {

            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, game.config.height/1.7, 800 * value, 60);
    
        });
        this.load.on('complete', function () {

            progress.destroy();
    
        });
        
        this.load.setPath('Assets');
        this.load.multiatlas('spritesheet', 'assets.json');
        //this.load.multiatlas('bomb_animation', 'Explosion60fps.json');
    },

    create: function ()
    {
        // this.anims.create({ key: 'AK_Explosion', frames: this.anims.generateFrameNames('spritesheet', { prefix: 'Bang_', suffix: '.png', start: 1, end: 8, zeroPad: 3 }), hideOnComplete: true });
        // this.anims.create({ key: 'Duck_Explosion', frames: this.anims.generateFrameNames('spritesheet', { prefix: 'Bam_', suffix: '.png', start: 1, end: 8, zeroPad: 3 }), hideOnComplete: true });
        // this.anims.create({ key: 'Pie_Explosion', frames: this.anims.generateFrameNames('spritesheet', { prefix: 'Spoof_', suffix: '.png', start: 1, end: 8, zeroPad: 3 }), hideOnComplete: true });
        
        // this.anims.create({ key: 'Bomb_Anim', frames: this.anims.generateFrameNames('bomb_animation'), hideOnComplete: true });

        this.scene.start('mainmenu');
    }

});