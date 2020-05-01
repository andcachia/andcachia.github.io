var Button = new Phaser.Class({

    Extends: Phaser.GameObjects.Sprite,

    initialize:

    function Button (scene, spritesheetName, imageName, x, y, onClickFunction)
    {
        Phaser.GameObjects.Sprite.call(this, scene);

        this.image = imageName;

        this
            .setTexture(spritesheetName, imageName)
            .setInteractive()
            .setPosition(x, y)
            .on('pointerover', () => this.buttonHoverState(this) )
            .on('pointerout', () => this.buttonNormalState(this) )
            .on('pointerdown', () => this.onButtonClick(this, onClickFunction));
    },

    buttonHoverState: function(button) {
        button.setTint(0xff0000);
    },

    buttonNormalState: function(button) {
        button.clearTint();
    },

    onButtonClick: function(button, onClickFunction) {
        onClickFunction();
    }
});

export { Button }