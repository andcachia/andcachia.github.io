var Boot = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Boot ()
    {
        Phaser.Scene.call(this, { key: 'boot' });
    },

    preload: function ()
    {
        this.load.setPath('../../common/assets');
        this.load.spine('logo', 'animations/splashscreen/splashscreen.json', [ 'animations/splashscreen/splashscreen.atlas' ], true);
    },

    create: function ()
    {        
        this.scene.start('preloader');
    }

});

export { Boot }