var Game = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Game ()
    {
        Phaser.Scene.call(this, { key: 'game' });
        window.GAME = this;
    
        this.game;
        this.globalScene;
        this.timedEventTarget;
        this.targets;
        this.bomb;

        this.score;
        this.scoreText;
        this.lives;
        this.livesText;

        this.boop;
    },

    create: function ()
    {
        globalScene = this;
        this.score = 0;
        this.lives = 3;

        this.input.setDefaultCursor('url(../assets/cursor.png) 50 50, pointer');

        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet','Slicing-102.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var menuButton = this.children.add(new Button(this, 'Slicing-68.png', 'Slicing-69.png', game.config.width/1.15, game.config.height/12));
        menuButton.on('pointerdown', () => this.openMenu() );

        var soundButton = this.children.add(new Button(this, 'Slicing-72.png', 'Slicing-70.png', game.config.width/8, game.config.height/12));
        soundButton.status = true;
        soundButton.on('pointerdown', () => this.toggleSound(soundButton) );

        this.scoreText = this.add.text(game.config.width/2, game.config.height/14, this.score, { fontSize: '32px', fill: '#FFF' });
        this.scoreText.setOrigin(0);

        targets = this.physics.add.group();
        timedEventTarget = this.time.addEvent({ delay: 1500, callback: createTarget, callbackScope: this, loop: true });
        timedEventBomb = this.time.addEvent({ delay: 5000, callback: createBomb, callbackScope: this, loop: true });

        var cannon = this.add.sprite(game.config.width/2, game.config.height-game.config.height/8, 'spritesheet','Gun.png');
        cannon.displayHeight = game.config.height/3.8;
        cannon.displayWidth = cannon.height/2.1739130;

        boop = this.add.sprite(cannon.x + 50, cannon.y, 'spritesheet','Slicing-80.png');

        var bottomBar = this.add.image(game.config.width/2, game.config.height, 'spritesheet','Black-Rectangle.png');
        bottomBar.y -= bottomBar.displayHeight / 2.2;
        bottomBar.displayWidth = game.config.width;

        var boopIcon = this.add.image(game.config.width, game.config.height, 'spritesheet','Slicing-87.png');
        boopIcon.y -= boopIcon.displayHeight / 2.2;
        boopIcon.x -= boopIcon.displayWidth / 1.8;

        this.livesText = this.add.text(boopIcon.x/1.2, boopIcon.y, "x" + this.lives, { fontSize: '32px', fill: '#FFF' });

        function createTarget() {

            createColouredTarget("red");
            createColouredTarget("green");
            
            function createColouredTarget(colour){

                var image_number = (colour == "red")
                    ? Phaser.Math.Between(23, 45)
                    : Phaser.Math.Between(46, 65);

                var direction = Phaser.Math.Between(0,1);
                var x = Phaser.Math.Between(game.config.width*0.2,game.config.width*0.8);
                var y = Phaser.Math.Between(game.config.width*0.3,game.config.width*0.7);
                var velocity = (direction == 0) ? Phaser.Math.Between(100, 400) : Phaser.Math.Between(-400, -100);

                var spriteName = 'Slicing-' + image_number + '.png';
                var target = targets.create(x, y, 'spritesheet', spriteName)
                    .setScale(0,0);
                target.colour = colour;

                globalScene.tweens.add({
                    targets: target,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 1500,
                    ease: 'Bounce',
                    hold: 1000,
                    yoyo:true,
                    completeDelay: 1500,
                    onComplete: onExplosionComplete,
                    onCompleteParams: [ target ]
                });
            }
        }

        function createBomb(){
            var x = game.config.width/2;
            var y = 0;
            var height = game.config.height/4.75; width = height/1.142857;

            var spriteName = 'Slicing-19.png';
            globalScene.bomb = targets.create(x, y, 'spritesheet', spriteName).setDisplaySize(width, height);
            globalScene.bomb.colour = "bomb";

            this.physics.moveToObject(globalScene.bomb, cannon, 350);
        }

        this.input.on('pointermove', function (pointer) {
            var angle = Phaser.Math.Angle.BetweenPoints(cannon, pointer) + 1.57;
            cannon.rotation = Phaser.Math.Angle.RotateTo(angle);
        
            if (angle > 0) {
                boop.x = cannon.x - 75;
                boop.setFrame('Slicing-81.png');
            }
            else {
                boop.x = cannon.x + 75;
                boop.setFrame('Slicing-80.png');
            }
        }, this);

        this.input.on('pointerdown', function (pointer) {
            
            var pie = this.physics.add.image(cannon.x, cannon.y, 'pie');

            this.tweens.add({
                targets: pie,
                x: pointer.x,
                y: pointer.y,
                //ease: 'Sine.easeIn',
                duration: 250,
                paused: false,
                onComplete: onShotTargetReached,
                onCompleteParams: [ pie, targets]
            });

        }, this);

        function onShotTargetReached(tween, targets, image, targets){

            var hit = null;

            children = targets.getChildren();
            for(var i=children.length - 1; i >= 0; i--){
                var child = children[i];
                if (checkOverlap(image, child))
                {
                    if (child.colour == "green") increaseScore(10);
                    if (child.colour == "red") globalScene.decreaseLives(1);
                    
                    hit = child;

                    break;
                }
            };

            if (hit != null) hit.destroy();
        
            var explosion = globalScene.physics.add.image(image.x, image.y, 'explosion');
            globalScene.tweens.add({
                targets: explosion,
                duration: 1000,
                alpha: 0,
                paused: false,
                onComplete: onExplosionComplete,
                onCompleteParams: [ explosion ]
            });
        
            image.destroy();
        }

        function onExplosionComplete(tween, targets, image){
            image.destroy();
        }
        
        function checkOverlap(spriteA, spriteB) {
            var boundsA = spriteA.getBounds();
            var boundsB = spriteB.getBounds();
        
            return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
        }

        function increaseScore(points){
            globalScene.score += points;
            globalScene.scoreText.setText(globalScene.score);
        }

    },

    update: function (time, delta)
    {
        if (globalScene.bomb != null && globalScene.bomb.y > game.config.height - (game.config.height / 8)){
            var explosion = globalScene.physics.add.image(globalScene.bomb.x, globalScene.bomb.y, 'explosion');
            globalScene.bomb.destroy();
            globalScene.bomb = null;
            globalScene.tweens.add({
                targets: explosion,
                duration: 1000,
                alpha: 0,
                paused: false,
                onComplete: onExplosionComplete,
                onCompleteParams: [ explosion ]
            });
            globalScene.decreaseLives(1);
        }
    
        function onExplosionComplete(tween, targets, image){
            image.destroy();
        }
    },

    decreaseLives: function(amount){
        this.lives -= amount;
        this.livesText.setText('x' + globalScene.lives);
    
        if (this.lives <= 0) this.gameOver();
    },

    gameOver: function(){
        globalScene.scene.start('gameover', { score: globalScene.score});
    },

    toggleSound: function(soundButton){
        if (soundButton.status == true){
            soundButton.changeButtonImage(soundButton,'Slicing-75.png', 'Slicing-74.png')
            soundButton.status = false;
        }
        else{
            soundButton.changeButtonImage(soundButton,'Slicing-72.png', 'Slicing-70.png')
            soundButton.status = true;
        }
    },

    openMenu: function() {
        this.scene.start('mainmenu');
    },

});