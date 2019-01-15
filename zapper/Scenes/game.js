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
        this.gun;

        this.score;
        this.scoreText;
        this.lives;
        this.livesText;

        this.boop;

        this.Target = Object.freeze({ Human: 1, Animal: 2, Bomb: 3, Gun: 4 });
    },

    create: function ()
    {
        globalScene = this;
        this.score = 0;
        this.lives = 3;

        Guns = { "AK": false, "Duck": false, "Pie": false };

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
        timedEventTarget = this.time.addEvent({ delay: 1000, callback: createTarget, args: [[this.Target.Human, this.Target.Animal]], callbackScope: this, loop: true });
        timedEventBomb = this.time.addEvent({ delay: 5000, callback: createTarget, args: [[this.Target.Bomb]], callbackScope: this, loop: true });
        timedEventGun = this.time.addEvent({ delay: 10000, callback: createTarget, args: [[this.Target.Gun]], callbackScope: this, loop: true });

        this.gun = this.add.sprite(game.config.width/2, game.config.height-game.config.height/8, 'spritesheet','Gun.png');
        this.gun.rotationOffset = 1.57;
        this.gun.key = "AK";        

        boop = this.add.sprite(this.gun.x + 50, this.gun.y, 'spritesheet','Slicing-80.png');

        var bottomBar = this.add.image(game.config.width/2, game.config.height, 'spritesheet','Black-Rectangle.png');
        bottomBar.y -= bottomBar.displayHeight / 2.2;
        bottomBar.displayWidth = game.config.width;

        var boopIcon = this.add.image(game.config.width, game.config.height, 'spritesheet','Slicing-87.png');
        boopIcon.y -= boopIcon.displayHeight / 2.2;
        boopIcon.x -= boopIcon.displayWidth / 1.8;

        this.livesText = this.add.text(boopIcon.x/1.2, boopIcon.y, "x" + this.lives, { fontSize: '32px', fill: '#FFF' });

        gunIcon = [];
        index = 0;
        for(var key in Guns){
            gunIcon[key] = this.add.sprite((75 + (100 * index++)), bottomBar.y, 'spritesheet','Btn_' + key + '_BW.png');
        };

        targetGrid = [];
        for (var i = 0; i < 3; i++){
            targetSubGrid = []
            for (var j = 0; j < 3; j++) 
                targetSubGrid.push(false);
            targetGrid.push(targetSubGrid);
        }
          

        function createTarget(args) {

            paramLength = args.length;

            for (var i=0; i<paramLength; i++){
                createColouredTarget(args[i]);
            }

            function createColouredTarget(targetType){

                var image_number = 0;

                taken = true;
                while (taken){
                    var i = Phaser.Math.Between(0,2);
                    var j = Phaser.Math.Between(0,2);
                    taken = targetGrid[i][j];
                }
                targetGrid[i][j] = true;

                var x = (i+1) * game.config.width/4;
                var y = (j+1) * game.config.height/5;
               
                var target = targets.create()
                    .setPosition(x, y)
                    .setScale(0,0);
                target.type = targetType;
                target.posI = i;
                target.posJ = j;
                target.isDestroyed = false;

                switch(targetType){
                    case globalScene.Target.Animal: image_number = Phaser.Math.Between(23, 45);
                        spriteName = getSpriteName(image_number);
                        break;
                    case globalScene.Target.Human: image_number = Phaser.Math.Between(46, 65);
                        spriteName = getSpriteName(image_number);
                        break;
                    case globalScene.Target.Bomb: image_number = 19;
                        spriteName = getSpriteName(image_number);
                        bombAnimation(target);
                        target.setScale(1,1);
                        target.setAlpha(0);
                        break;
                    case globalScene.Target.Gun: target.gun = getNextGun();
                        spriteName = target.gun + '_Panel.png'
                        break;
                }

                function getSpriteName(image_number){
                    var spriteName = 'Slicing-' + image_number + '.png';
                    return spriteName;
                }
                
                target.setTexture('spritesheet', spriteName);

                globalScene.tweens.add({
                    targets: target,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                    ease: 'Sine.easeOut',
                    hold: 1000,
                    yoyo:true,
                    onComplete: onTargetAnimComplete,
                    onCompleteParams: [ target ]
                });
            }
        }

        this.input.on('pointermove', function (pointer) {
            var angle = Phaser.Math.Angle.BetweenPoints(globalScene.gun, pointer) + globalScene.gun.rotationOffset;
            globalScene.gun.rotation = Phaser.Math.Angle.RotateTo(angle);
        
            if (angle > 0) {
                boop.x = globalScene.gun.x - 75;
                boop.setFrame('Slicing-81.png');
            }
            else {
                boop.x = globalScene.gun.x + 75;
                boop.setFrame('Slicing-80.png');
            }
        }, this);

        this.input.on('pointerdown', function (pointer) {
            
            var bullet = this.physics.add.image(globalScene.gun.x, globalScene.gun.y, 'spritesheet', globalScene.gun.key + '_Projectile_Top.png');
            var angle = Phaser.Math.Angle.BetweenPoints(globalScene.gun, pointer) + 3.14;
            bullet.rotation = Phaser.Math.Angle.RotateTo(angle);

            this.tweens.add({
                targets: bullet,
                x: pointer.x,
                y: pointer.y,
                //ease: 'Sine.easeIn',
                duration: 250,
                paused: false,
                onComplete: onShotTargetReached,
                onCompleteParams: [ bullet ]
            });

        }, this);

        function onShotTargetReached(_tween, _targets, bullet){

            var hit = null;

            children = targets.getChildren();
            for(var i=children.length - 1; i >= 0; i--){
                var child = children[i];
                if (checkOverlap(bullet, child))
                {
                    if (child.type == globalScene.Target.Human) increaseScore(10);
                    else if (child.type == globalScene.Target.Animal) globalScene.decreaseLives(1);
                    else if (child.type == globalScene.Target.Gun) unlockGun(child.gun);
                    
                    hit = child;

                    break;
                }
            };
            
            if (hit != null) {
                hit.isDestroyed = true;
                destoryTarget(hit);
            }

            globalScene.add.sprite(bullet.x, bullet.y).play(globalScene.gun.key + '_Explosion');
        
            bullet.destroy();
        }

        function onTargetAnimComplete(tween, targets, image){
            destoryTarget(image);
        }

        function destoryTarget(target){
            targetGrid[target.posI][target.posJ] = false;
            target.destroy();
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

        function bombAnimation(target){
            globalScene.tweens.add({
                targets: target,
                alpha: 1,
                duration: 3000,
                ease: 'Bounce',
                onComplete: onBombAnimationComplete,
                onCompleteParams: [ target ]
            });
        }

        function onBombAnimationComplete(_tween, _targets, target){
            if (!target.isDestroyed) globalScene.decreaseLives(1);
            target.destroy();
        }

        function getNextGun(){
            for (var key in Guns) {
                if (Guns[key] == false) return key;
            }

            //if all guns have been unlocked
            timedEventGun.remove(false);
            return null;
        }

        function unlockGun(gunKey){
            globalScene.gun.key = gunKey;
            globalScene.gun.setTexture('spritesheet', gunKey + '_Top.png');
            globalScene.gun.rotationOffset = 3.14;
            Guns[gunKey] = true;
            gunIcon[gunKey].setTexture('spritesheet','Btn_' + gunKey + '.png')

            if (gunKey == "Pie") timedEventGun.remove(false);
        }

    },

    update: function (time, delta)
    {
        
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