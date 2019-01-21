var Game = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Game ()
    {
        Phaser.Scene.call(this, { key: 'game' });
        window.GAME = this;
    },

    preload: function(){
        this.load.setPath('Assets');
        this.load.image('circle', 'Circle.png');
        this.load.image('obstacle', 'Obstacle.png');
        this.load.image('background', 'Background.png');
    },

    create: function ()
    {
        background = this.add.tileSprite(game.config.width/2, game.config.height/2, game.config.width, game.config.height, 'background');

        // Collision categories
        var pointerCollisionCategory = this.matter.world.nextCategory();
        var targetCollisionCategory = this.matter.world.nextCategory();

        // Draggable circle
        circle = this.matter.add.image(game.config.width/2, game.config.height/2, 'circle')
            .setIgnoreGravity(true)
            .setFrictionAir(1)
            .setMass(10)
            .setCollisionCategory(pointerCollisionCategory);
        this.matter.add.mouseSpring();

        // Targets
        timedEventTarget = this.time.addEvent({ delay: 3000, callback: createTarget, callbackScope: this, loop: true });
        function createTarget(){
            this.matter.add.image(game.config.width/2, 0 - 300, 'obstacle', null, { ignorePointer: true })
                .setMass(300)
                .setCollisionCategory(targetCollisionCategory);
        }

        // Boop
        boop = this.matter.add.image(game.config.width/2, game.config.height/1.15, 'circle')
            .setStatic(true)
            .setCollidesWith(targetCollisionCategory);

        this.matter.world.on('collisionstart', function (event) {
            console.log("boop hit!");
        });
    },

    update: function (time, delta)
    {
        background.tilePositionY -= 3;
    }
});