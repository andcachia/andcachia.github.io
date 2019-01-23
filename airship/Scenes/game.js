var Game = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Game ()
    {
        Phaser.Scene.call(this, { key: 'game' });
        window.GAME = this;
    },

    create: function ()
    {
        background = this.add.tileSprite(game.config.width/2, game.config.height/2, game.config.width, game.config.height, 'spritesheet', 'background_static.png');

        // Collision categories
        var pointerCollisionCategory = this.matter.world.nextCategory();
        var targetCollisionCategory = this.matter.world.nextCategory();

        // Draggable circle
        circle = this.matter.add.image(game.config.width/2, game.config.height/2, 'spritesheet', 'paddle.png')
            .setIgnoreGravity(true)
            .setFrictionAir(1)
            .setMass(10)
            .setCollisionCategory(pointerCollisionCategory);
        this.matter.add.mouseSpring();

        // Targets
        timedEventTarget = this.time.addEvent({ delay: 3000, callback: createTarget, callbackScope: this, loop: true });
        function createTarget(){
            this.matter.add.image(game.config.width/2, 0 - 300, 'spritesheet', 'enemy_rock_01.png', null, { ignorePointer: true })
                .setMass(300)
                .setCollisionCategory(targetCollisionCategory);
        }

        // Boop
        boop = this.matter.add.image(game.config.width/2, game.config.height/1.4, 'spritesheet', 'hero_01.png')
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