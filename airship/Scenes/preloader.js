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
        this.load.multiatlas('spritesheet', 'airship_launch_ver_1.json');
    },

    create: function ()
    {
        frames = this.anims.generateFrameNames('spritesheet', { prefix: 'explosion_ani_', suffix: '.png', start: 1, end: 6, zeroPad: 2 });
        console.log(frames);
        this.anims.create({ key: 'Explosion', frames: this.anims.generateFrameNames('spritesheet', { prefix: 'explosion_ani_', suffix: '.png', start: 1, end: 6, zeroPad: 2 }), hideOnComplete: true });

        this.scene.start('mainmenu');
    }

});