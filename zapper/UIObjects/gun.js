var Gun = new Phaser.Class({

    //Extends: Phaser.GameObjects.Image,

    initialize:

    function Gun (targetIcon, mainIcon, small)
    {
        Phaser.GameObjects.Image.call(this, scene);

        this.image = image;
        this.hoverImage = hoverImage;

        this
            .setTexture('spritesheet', image)
            .setInteractive()
            .setPosition(x, y)
            .on('pointerover', () => this.buttonHoverState(this) )
            .on('pointerout', () => this.buttonNormalState(this) );
    },

    buttonHoverState: function(button) {
        button.setTexture('spritesheet', this.hoverImage);
    },

    buttonNormalState: function(button) {
        button.setTexture('spritesheet', this.image);
    },

    changeButtonImage: function(button, image, hoverImage) {
        button.setTexture('spritesheet', hoverImage);
        this.image = image;
        this.hoverImage = hoverImage;
    },

});