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
var targets;

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
    background.setDisplaySize(config.width, config.height);

    scoreText = this.add.text(75, 20, "Score: " + score, { fontSize: '32px', fill: '#FFF' });
    livesText = this.add.text(300, 20, "Lives: " + lives, { fontSize: '32px', fill: '#FFF' });

    targets = this.physics.add.group();
    timedEvent = this.time.addEvent({ delay: 3000, callback: createTarget, callbackScope: this, loop: true });

    var cannon = this.add.sprite(config.width/2, config.height-config.height/8, 'spritesheet','Gun.png');
    cannon.setDisplaySize(75, 150);
    boop = this.add.sprite(cannon.x + 50, cannon.y + 50, 'spritesheet','Slicing-80.png');
    boop.setDisplaySize(90, 140);

    function createTarget() {

        createColouredTarget("red");
        createColouredTarget("green");
        
        function createColouredTarget(colour){

            var image_number = (colour == "red")
                ? Phaser.Math.Between(24, 47)
                : Phaser.Math.Between(48, 64);

            var direction = Phaser.Math.Between(0,1);
            var x = direction * 800;
            var y = Phaser.Math.Between(100,600);
            var width = 100, height = 100;
            var velocity = (direction == 0) ? Phaser.Math.Between(100, 400) : Phaser.Math.Between(-400, -100);

            var spriteName = 'Slicing-' + image_number + '.png';
            var target = targets.create(x, y, 'spritesheet', spriteName).setDisplaySize(width, height);
            target.setVelocity(velocity,0);
            target.colour = colour;
        }
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

    function onShotTargetReached(tween, targets, image, enemies){

        var hit = null;

        enemies.children.iterate(function (child) {
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

    targets.children.iterate(function (child) {

        if (child.x < -50 || child.x > 850) 
            child.disableBody(true,true);

    });
    
}
