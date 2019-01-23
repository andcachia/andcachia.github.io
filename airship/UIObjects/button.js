var Button = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

    function Button (scene, image, x, y)
    {
        Phaser.GameObjects.Image.call(this, scene);

        this.image = image;

        this
            .setTexture('spritesheet', image)
            .setInteractive()
            .setPosition(x, y)
            .on('pointerover', () => this.buttonHoverState(this) )
            .on('pointerout', () => this.buttonNormalState(this) );
    },

    buttonHoverState: function(button) {
        button.setTint(0xff0000);
    },

    buttonNormalState: function(button) {
        button.clearTint();
    }

    // changeButtonImage: function(button, image) {
    //     button.setTexture('spritesheet');
    //     this.image = image;
    //     this.hoverImage = hoverImage;
    // },

});