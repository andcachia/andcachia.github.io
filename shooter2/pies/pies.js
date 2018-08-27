var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 900,
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
    this.load.image('target1', '../assets/jowsef.png');
    this.load.image('target2', '../assets/simon.png');
    this.load.image('target3', '../assets/delia.png');
    this.load.image('pie', 'assets/ball.png')
    this.load.image('explosion', 'assets/explosion.png');
    this.load.image('crate','assets/crate.png');
}


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

function update()  {
    
}