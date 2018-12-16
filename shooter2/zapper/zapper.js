//var game.config.width, game.config.height;

//game.config.height = window.innerHeight;
//game.config.width = game.config.height / 1.461538462;

//if(window.innerHeight > window.innerWidth){ game.config.width = window.innerWidth; game.config.height = window.innerHeight; }
//else { game.config.width = window.innerWidth / 3; game.config.height = window.innerHeight; }


var game;
var globalScene;
var timedEventTarget;
var targets;
var bomb;

var score = 0;
var scoreText;
var lives = 5;
var livesText;

var boop;


function preload()  {
    this.load.multiatlas('spritesheet', 'zapper_assets/assets.json', "zapper_assets");
    this.load.image('pie', '../assets/ball.png')
    this.load.image('explosion', '../assets/explosion.png')
}

function create(){
    
    globalScene = this;

    this.input.setDefaultCursor('url(../assets/cursor.png) 50 50, pointer');

    var background = this.add.sprite(0, 0,'spritesheet','Slicing-86.png');
    background.setDisplaySize(game.config.width, game.config.height);

    scoreText = this.add.text(75, 20, "Score: " + score, { fontSize: '32px', fill: '#FFF' });
    livesText = this.add.text(300, 20, "Lives: " + lives, { fontSize: '32px', fill: '#FFF' });

    targets = this.physics.add.group();
    timedEventTarget = this.time.addEvent({ delay: 1500, callback: createTarget, callbackScope: this, loop: true });
    timedEventBomb = this.time.addEvent({ delay: 5000, callback: createBomb, callbackScope: this, loop: true });

    var cannon = this.add.sprite(game.config.width/2, game.config.height-game.config.height/8, 'spritesheet','Gun.png');
    //cannon.setDisplaySize(75, 150);
    cannon.height = game.config.height/3.8;
    cannon.width = cannon.height/2.1739130;

    boop = this.add.sprite(cannon.x + 50, cannon.y + 50, 'spritesheet','Slicing-80.png');
    boop.height = game.config.height/5;
    boop.width = boop.height/1.407407;

    function createTarget() {

        createColouredTarget("red");
        createColouredTarget("green");
        
        function createColouredTarget(colour){

            var image_number = (colour == "red")
                ? Phaser.Math.Between(24, 47)
                : Phaser.Math.Between(48, 64);

            var direction = Phaser.Math.Between(0,1);
            //var x = direction * 800;
            var x = Phaser.Math.Between(game.config.width*0.2,game.config.width*0.8);
            var y = Phaser.Math.Between(game.config.width*0.1,game.config.width*0.7);
            var height = game.config.height/4.75; width = height/1.142857;
            var velocity = (direction == 0) ? Phaser.Math.Between(100, 400) : Phaser.Math.Between(-400, -100);

            var spriteName = 'Slicing-' + image_number + '.png';
            var target = targets.create(x, y, 'spritesheet', spriteName)
                .setDisplaySize(width, height)
                .setScale(0,0);
            //target.setVelocity(velocity,0);
            target.colour = colour;

            globalScene.tweens.add({
                targets: target,
                scaleX: 1,
                scaleY: 1,
                duration: 1500,
                ease: 'Bounce',
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

        var spriteName = 'Slicing-23.png';
        bomb = targets.create(x, y, 'spritesheet', spriteName).setDisplaySize(width, height);
        bomb.colour = "bomb";

        this.physics.moveToObject(bomb, cannon, 350);
    }

    this.input.on('pointermove', function (pointer) {
        var angle = Phaser.Math.Angle.BetweenPoints(cannon, pointer) + 1.57;
        cannon.rotation = Phaser.Math.Angle.RotateTo(angle);
       
        if (angle > 0) {
            boop.x = cannon.x - 50;
            boop.setFrame('Slicing-81.png');
        }
        else {
            boop.x = cannon.x + 50;
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

        targets.children.iterate(function (child) {
            if (checkOverlap(image, child))
            {
                if (child.colour == "green") scoreText.setText('Score: ' + ++score);
                if (child.colour == "red") livesText.setText('Lives: ' + --lives);
                
                hit = child;
            }
        });

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
}

function update()  {

    // targets.children.iterate(function (child) {

    //     if (child.x < -50 || child.x > 850) 
    //         child.disableBody(true,true);

    // });

    if (bomb != null && bomb.y > game.config.height - (game.config.height / 8)){
        var explosion = globalScene.physics.add.image(bomb.x, bomb.y, 'explosion');
        bomb.destroy();
        bomb = null;
        globalScene.tweens.add({
            targets: explosion,
            duration: 1000,
            alpha: 0,
            paused: false,
            onComplete: onExplosionComplete,
            onCompleteParams: [ explosion ]
        });
        livesText.setText('Lives: ' + --lives);
    }

    function onExplosionComplete(tween, targets, image){
        image.destroy();
    }
    
}

function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;

    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}

window.onload = function() {
    var config = {
        type: Phaser.AUTO,
        width: 650,
        height: 950,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };
    game = new Phaser.Game(config);
    resize();
    window.addEventListener("resize", resize, false);
}
