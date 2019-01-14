var Preloader = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Preloader ()
    {
        Phaser.Scene.call(this, { key: 'preloader' });
    },

    preload: function ()
    {
        this.load.setPath('zapper_assets');
        this.load.multiatlas('spritesheet', 'assets.json');
        this.load.image('pie', '../assets/ball.png')
        this.load.image('explosion', '../assets/explosion.png')
    },

    create: function ()
    {
        this.anims.create({ key: 'AK_Explosion', frames: this.anims.generateFrameNames('spritesheet', { prefix: 'Bang_', suffix: '.png', start: 1, end: 8, zeroPad: 3 }), hideOnComplete: true });
        this.anims.create({ key: 'Duck_Explosion', frames: this.anims.generateFrameNames('spritesheet', { prefix: 'Bam_', suffix: '.png', start: 1, end: 8, zeroPad: 3 }), hideOnComplete: true });
        this.anims.create({ key: 'Pie_Explosion', frames: this.anims.generateFrameNames('spritesheet', { prefix: 'Spoof_', suffix: '.png', start: 1, end: 8, zeroPad: 3 }), hideOnComplete: true });

        this.scene.start('mainmenu');
    }

});