var Game = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Game ()
    {
        Phaser.Scene.call(this, { key: 'game' });
        window.GAME = this;

        this.score = 0;
        this.scoreText;
        this.targets;

        globalScene = this;
    },

    create: function ()
    {
        background1 = this.add.image(game.config.width/2, game.config.height, 'spritesheet', 'background_base.png').setOrigin(0.5,1);
        background2 = this.add.image(game.config.width/2, game.config.height - background1.displayHeight + 50, 'spritesheet', 'background_medium_shade.png').setOrigin(0.5,1);
        background3 = this.add.tileSprite(game.config.width/2, background2.y - background2.displayheight + 50, game.config.width, game.config.height, 'spritesheet', 'background_dark_shade.png').setOrigin(0.5,1);
        //this.matter.add.image(game.config.width/2, game.config.height, 'spritesheet', 'base_ground.png').setOrigin(0.5,1);

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
        this.targets = this.add.group();
        timedEventTarget = this.time.addEvent({ delay: 3000, callback: createTarget, callbackScope: this, loop: true });
        function createTarget(){
            var target = this.matter.add.image(game.config.width/2, 0 - 300, 'spritesheet', 'enemy_rock_01.png', { ignorePointer: true })
                .setMass(300)
                .setCollisionCategory(targetCollisionCategory);
            this.targets.add(target);
        }

        // Boop
        boop = this.matter.add.image(game.config.width/2, game.config.height/1.4, 'spritesheet', 'hero_01.png')
            .setStatic(true)
            .setCollidesWith(targetCollisionCategory);

        this.matter.world.on('collisionstart', function (event) {
            console.log("boop hit!");
        });

        // Score
        var scoreBar = this.add.image(0, 0, 'spritesheet', 'ui_score.png');
        scoreBar.setPosition(scoreBar.displayWidth/2, scoreBar.displayHeight/3);
        this.scoreText = this.add.text(scoreBar.x, scoreBar.y + 40, "0").setOrigin(0.5);

    },

    update: function (time, delta)
    {
        background1.y += 3;
        background2.y += 3;
        background3.tilePositionY -= 3;
        this.scoreText.setText(this.score++);

        var chosen = null;
        this.targets.children.iterate(function(child){
            if (child.y > game.config.height + 100)
                chosen = child;
        });

        if (chosen !== null) globalScene.targets.remove(chosen, true, true);
    }
});