class Target {

    constructor(spriteName)
    {
        create(spriteName)
    }

    create(spriteName) {

        var direction = Phaser.Math.Between(0,1);

        var x = direction * 800;
        var y = Phaser.Math.Between(0,600);

        var velocity = (direction == 0) ? Phaser.Math.Between(100, 400) : Phaser.Math.Between(-400, -100);

        var target = this.add.sprite(x, y, 'spritesheet', spriteName);
        target.setInteractive();
        target.setVelocity(velocity);
        //ball.allowGravity = false;

       // ball.on('pointerdown', hit);
    }
}