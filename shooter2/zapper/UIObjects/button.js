var Button = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

    function Button (scene, image, hoverImage, x, y)
    {
        Phaser.GameObjects.Image.call(this, scene);

        this
            .setTexture('spritesheet', image)
            .setInteractive()
            .setPosition(x, y)
            //.on('pointerdown', () => this.startGame() )
            .on('pointerover', () => this.changeButtonImage(this,hoverImage) )
            .on('pointerout', () => this.changeButtonImage(this,image) );
    },

    changeButtonImage: function(button, image) {
        button.setTexture('spritesheet', image);
    }

});