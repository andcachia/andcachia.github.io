var UIAnimations = new Phaser.Class({

    //Extends: Phaser.GameObjects.Image,

    initialize:

    function UIAnimations (scene)
    {
        this.scene = scene;
    },

    moveUp: function(target, to, duration, delay){
        this.scene.tweens.add({
            targets: target,
            y: to,
            duration: duration,
            delay: delay,
            ease: 'Sine.easeOut'
        });
    },

    fadeIn: function(target){
        this.scene.tweens.add({
            targets: target,
            alpha: 1,
            duration: 750,
            ease: 'Sine.easeOut'
        });
    },

    growIn: function(target){
        this.scene.tweens.add({
            targets: target,
            scaleX: 1,
            scaleY: 1,
            duration: 750,
            ease: 'Sine.easeOut'
        });
    },

    fallDown: function(target){
        this.scene.tweens.add({
            targets: target,
            y: target.y+target.height,
            duration: 750,
            ease: 'Sine.easeOut'
        });
    },

    fadeIn2: function(target){
        this.scene.tweens.add({
            targets: target,
            alpha: 1,
            duration: 750,
            delay: 750,
            ease: 'Sine.easeOut'
        });
    },

});