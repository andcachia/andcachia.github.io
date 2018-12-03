var width, height;

if(window.innerHeight > window.innerWidth){ width = 1080; height = 1750; }
else { width = 520; height = 900; }


var config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
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

var game = new Phaser.Game(config);
var globalScene;
var timedEvent;
var enemies;
var enemyKilled = false;
var currentUp = -1;
var moveDistance = 180;

function preload()  {
    this.load.multiatlas('spritesheet', 'zapper_assets/assets.json', "zapper_assets");
    this.load.image('pie', '../assets/ball.png')
    this.load.image('explosion', '../assets/explosion.png')
}

function create(){
    
    globalScene = this;

    this.input.setDefaultCursor('url(../assets/cursor.png) 50 50, pointer');

    var background = this.add.sprite(0, 0,'spritesheet','Slicing-86.png');
    background.setDisplaySize(config.width, config.height);

    enemies = this.physics.add.group();
    timedEvent = this.time.addEvent({ delay: 500, callback: createTarget, callbackScope: this, loop: true });

    var cannon = this.add.sprite(config.width/2, config.height-config.height/8, 'spritesheet','Gun.png');
    cannon.setDisplaySize(75, 150);
    var boop = this.add.sprite(cannon.x + 50, cannon.y + 50, 'spritesheet','Slicing-80.png');
    boop.setDisplaySize(90, 140);

    function createTarget() {

        var direction = Phaser.Math.Between(0,1);
        var x = direction * 800;
        var y = Phaser.Math.Between(0,600);
        var width = 100, height = 100;
        var velocity = (direction == 0) ? Phaser.Math.Between(100, 400) : Phaser.Math.Between(-400, -100);

        var spriteName = 'Slicing-42.png';
        var target = enemies.create(x, y, 'spritesheet', spriteName).setDisplaySize(width, height);
        target.setInteractive();
        target.setVelocity(velocity);
        target.allowGravity = false;
    }

    this.input.on('pointermove', function (pointer) {
        var angle = Phaser.Math.Angle.BetweenPoints(cannon, pointer) + 1.57;
        cannon.rotation = Phaser.Math.Angle.RotateTo(angle);
    }, this);

    this.input.on('pointerdown', function (pointer) {
        
        var pie = this.physics.add.image(cannon.x, cannon.y, 'pie');

        pie.moves = false;

        this.tweens.add({
            targets: pie,
            x: pointer.x,
            y: pointer.y,
            //ease: 'Sine.easeIn',
            duration: 250,
            paused: false,
            onComplete: onAnimComplete,
            onCompleteParams: [ pie, enemies]
        });

    }, this);

    function onAnimComplete(tween, targets, image, enemies){
        image.moves = true;
    
        enemies.children.iterate(function (child) {
            if (checkOverlap(image, child))
            {
                console.log("hit");
                child.disableBody(true,true);
            }
        });
    
        var explosion = globalScene.physics.add.image(image.x, image.y, 'explosion');
        globalScene.tweens.add({
            targets: explosion,
            duration: 1000,
            alpha: 0,
            paused: false,
            onComplete: onAnimComplete2,
            onCompleteParams: [ explosion ]
        });
    
        image.destroy();
    }

    function onAnimComplete2(tween, targets, image){
        image.destroy();
    }
    
    function checkOverlap(spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
    
        return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
    
    }
}

function update()  {

    enemies.children.iterate(function (child) {

        if (child.x < -50 || child.x > 850) 
            child.disableBody(true,true);

    });
    
}
