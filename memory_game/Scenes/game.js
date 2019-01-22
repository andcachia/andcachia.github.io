var Game = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Game ()
    {
        Phaser.Scene.call(this, { key: 'game' });
        window.GAME = this;
    },

    preload: function()
    {
        this.load.setPath('Assets');
        this.load.multiatlas('spritesheet', 'assets.json');
        this.load.image('circle','Circle.png');
    },

    create: function ()
    {
        var atlasTexture = this.textures.get('spritesheet');
        console.log(atlasTexture.getFrameNames());
        this.add.image(game.config.width/2, game.config.height/5, 'spritesheet','Slicing-66.png');

        var group = this.make.group({
            classType: Phaser.GameObjects.Image,
            key: 'circle',
            frameQuantity: 16,
            setXY: {
                x:200,
                y:200
            },
            setScale: {
                x:0.5,
                y:0.5
            },
            gridAlign: {
                width: 4,
                height: 4,
                cellWidth: 100,
                cellHeight: 100,
            }
        });

        this.input.setHitArea(group.getChildren()).on('gameobjectover', function(pointer, gameObject) {
            gameObject.setTint(0xff0000);
        });

        this.input.setHitArea(group.getChildren()).on('gameobjectout', function(pointer, gameObject) {
            gameObject.clearTint();
        });
    },

    update: function (time, delta)
    {
        
    }
});