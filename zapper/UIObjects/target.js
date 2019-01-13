var Target = new Phaser.Class({

    Extends: Phaser.GameObjects.Sprite,

    initialize:

    function Target (scene, image, type, x, y)
    {
        //Phaser.GameObjects.Image.call(this, scene);
        super(scene);

        this.type = type;

        this
            .setTexture('spritesheet', image)
            .setPosition(x, y)
            .setScale(0,0);
            //.on('pointerover', () => this.buttonHoverState(this) )
            //.on('pointerout', () => this.buttonNormalState(this) );

        //scene.targets.create(x, y, 'spritesheet', spriteName)
        this.scene.targets.add(this, true);

        if (type == this.scene.Target.Bomb){
            bombAnimation(target);
            this.setScale(1,1);
            this.setAlpha(0);
        }
        else{
            this.scene.tweens.add({
                targets: this,
                scaleX: 1,
                scaleY: 1,
                duration: 500,
                ease: 'Sine.easeOut',
                hold: 1000,
                yoyo:true,
                completeDelay: 1500,
                onComplete: onExplosionComplete,
                onCompleteParams: [ this ]
            });
        }

        function onExplosionComplete(tween, targets, image){
            image.destroy();
        }
    },

    // buttonHoverState: function(button) {
    //     button.setTexture('spritesheet', this.hoverImage);
    // },

    // buttonNormalState: function(button) {
    //     button.setTexture('spritesheet', this.image);
    // },

    // changeButtonImage: function(button, image, hoverImage) {
    //     button.setTexture('spritesheet', hoverImage);
    //     this.image = image;
    //     this.hoverImage = hoverImage;
    // },

});