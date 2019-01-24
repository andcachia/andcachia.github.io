var Game = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Game ()
    {
        Phaser.Scene.call(this, { key: 'game' });
        window.GAME = this;

        this.score;
        this.scoreText;
        this.targets;

        this.backgroundSequence = ['background_medium_shade', 'background_medium_shade', 'background_dark_shade', 'background_dark_shade'];
        this.sequenceNumber;

        this.scrollingSpeed;

        globalScene = this;
    },

    create: function ()
    {
        this.score = 0;
        this.sequenceNumber = 0;
        this.scrollingSpeed = 3;

        background1 = this.add.image(game.config.width/2, game.config.height, 'spritesheet', 'background_base.png').setOrigin(0.5,1);
        background2 = this.add.image(game.config.width/2, game.config.height - background1.displayHeight + 50, 'spritesheet', 'background_medium_shade.png').setOrigin(0.5,1);
        backgroundClouds1 = this.add.image(game.config.width/2, background1.y - background1.displayHeight, 'spritesheet', 'background_clouds_blue.png');
        backgroundClouds2 = this.add.image(game.config.width/2, background2.y - background2.displayHeight, 'spritesheet', 'background_clouds_purple.png');

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
        var atlasTexture = this.textures.get('spritesheet');
        var frames = atlasTexture.getFrameNames();
        var enemyFrames = searchStringInArray("enemy_", frames);
        function searchStringInArray(str, strArray) {
            var results = [];
            for (var j=0; j<strArray.length; j++)
                if (strArray[j].match(str)) results.push(strArray[j]);
            return results;
        }

        this.targets = this.add.group();
        timedEventTarget = this.time.addEvent({ delay: 3000, callback: createTargets, callbackScope: this, loop: true });
        function createTargets(){
            var loops = Phaser.Math.Between(0,5);
            for (var i=0; i<loops; i++){
                var enemyFrame = enemyFrames[Phaser.Math.Between(0,enemyFrames.length-1)];
                if (enemyFrame != "enemy_planet_01.png" && enemyFrame != "enemy_planet_02.png"){
                    var targetX = game.config.width/2 + Phaser.Math.Between(-100,100);
                    var targetY = -500-(i*100);
                    var target = this.matter.add.image(targetX, targetY, 'spritesheet', enemyFrame, { ignorePointer: true })
                        .setMass(100)
                        .setBounce(0)
                        .setRotation(Phaser.Math.Between(0,7))
                        .setCollisionCategory(targetCollisionCategory);
                    target.y -= target.displayHeight/2;
                    this.targets.add(target);
                }
            }
        }

        // Boop
        boop = this.matter.add.image(game.config.width/2, game.config.height/1.4, 'spritesheet', 'hero_01.png')
            .setStatic(true)
            .setCollidesWith(targetCollisionCategory);


        // Boop collision
        this.matter.world.on('collisionstart', function (event) {
            for (var i = 0; i < event.pairs.length; i++) {
                var bodyA = event.pairs[i].bodyA.gameObject;
                var bodyB = event.pairs[i].bodyB.gameObject;
    
                if ((bodyA === boop) || (bodyB === boop)) {
                    globalScene.scrollingSpeed = 1;
                    var bombAnim = globalScene.add.sprite(boop.x, boop.y).setOrigin(0.5,1);
                    bombAnim.on('animationcomplete', onBombAnimationComplete, this);
                    bombAnim.play('Explosion');

                    function onBombAnimationComplete(animation, frame){
                        globalScene.gameOver();
                    }
                }
            }
        });

        // Score
        var scoreBar = this.add.image(0, 0, 'spritesheet', 'ui_score.png');
        scoreBar.setPosition(scoreBar.displayWidth/2, scoreBar.displayHeight/3);
        this.scoreText = this.add.text(scoreBar.x, scoreBar.y + 40, "0").setOrigin(0.5);

    },

    update: function (time, delta)
    {
        background1.y += this.scrollingSpeed;
        background2.y += this.scrollingSpeed;
        backgroundClouds1.y += this.scrollingSpeed;
        backgroundClouds2.y += this.scrollingSpeed;

        // Recycle backgrounds
        if (backgroundClouds1.y > backgroundClouds1.displayHeight + game.config.height){
            background1.setPosition(game.config.width/2, background2.y - background2.displayHeight + 200);
            backgroundClouds1.setPosition(game.config.width/2, background1.y - background1.displayHeight);
            if (this.sequenceNumber < this.backgroundSequence.length)
                background1.setTexture('spritesheet', this.backgroundSequence[this.sequenceNumber++] + '.png');
        }

        else if (backgroundClouds2.y > backgroundClouds2.displayHeight + game.config.height){
            background2.setPosition(game.config.width/2, background1.y - background1.displayHeight + 200);
            backgroundClouds2.setPosition(game.config.width/2, background2.y - background2.displayHeight);
            if (this.sequenceNumber < this.backgroundSequence.length)
                background1.setTexture('spritesheet', this.backgroundSequence[this.sequenceNumber++] + '.png');
        }

        this.scoreText.setText(this.score++);

        // Remove fallen targets
        var chosen = null;
        this.targets.children.iterate(function(child){
            if (child.y > game.config.height + 100)
                chosen = child;
        });

        if (chosen !== null) globalScene.targets.remove(chosen, true, true);
    },

    gameOver: function(){
        globalScene.scene.start('gameover', { score: globalScene.score});
    },
});