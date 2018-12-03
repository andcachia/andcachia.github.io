var config = {
    type: Phaser.AUTO,
    width: 480,
    height: 800,
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

    var width = 100, height = 100;

    enemies = this.physics.add.group();
    enemies.create(100, 200, 'spritesheet', 'Slicing-42.png').setDisplaySize(width, height);
    enemies.create(220, 200, 'spritesheet', 'Slicing-44.png').setDisplaySize(width, height);
    enemies.create(340, 200, 'spritesheet', 'Slicing-28.png').setDisplaySize(width, height);

    var cannon = this.add.sprite(config.width/2, config.height-config.height/8, 'spritesheet','Gun.png');
    cannon.setDisplaySize(75, 150);

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

/*
function create()  {
    globalScene = this;

    timedEvent = this.time.addEvent({ delay: 2000, callback: onEvent, callbackScope: this, loop: true });

    var width = 160, height = 180;

    enemies = this.physics.add.group();
    enemies.create(200, 500, 'target1').setDisplaySize(width, height);
    enemies.create(500, 500, 'target2').setDisplaySize(width, height);
    enemies.create(800, 500, 'target3').setDisplaySize(width, height);

    enemies.children.iterate(function (enemy) {
        var left = enemy.x - enemy.width/2;
        var top = enemy.y;

        var crate = globalScene.physics.add.image(enemy.x, enemy.y, 'crate').setScale(3, 3);;
    });

    this.input.on('pointerdown', function (pointer) {
        
        var pie = this.physics.add.image(400, 600, 'pie');

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
}

function onAnimComplete(tween, targets, image, enemies){
    image.moves = true;

    enemies.children.iterate(function (child) {
        if (checkOverlap(image, child))
        {
            lowerDown(child)
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

function onEvent ()
{
    if (currentUp != -1)
        lowerDown(enemies.children.entries[currentUp]);
    else{
        var choice = Phaser.Math.Between(0, 2);
        currentUp = choice;
        globalScene.tweens.add({
            targets: enemies.children.entries[choice],
            y: enemies.children.entries[choice].y - moveDistance,
            //ease: 'Sine.easeIn',
            duration: 250,
            paused: false
        });
    }
}

function lowerDown(target){
    globalScene.tweens.add({
        targets: target,
        y: target.y + moveDistance,
        //ease: 'Sine.easeIn',
        duration: 250,
        paused: false
    });
    currentUp = -1;
}
*/
function update()  {
    
}
