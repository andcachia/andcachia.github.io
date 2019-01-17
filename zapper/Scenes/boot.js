var Boot = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Boot ()
    {
        Phaser.Scene.call(this, { key: 'boot' });
    },

    preload: function ()
    {
        this.load.setPath('zapper_assets');
        this.load.image('logo','FaceZapperLogo.png');
    },

    create: function ()
    {
        this.scene.start('preloader');
    }

});