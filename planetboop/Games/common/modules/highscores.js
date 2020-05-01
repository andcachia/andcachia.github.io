import { Button } from './UIObjects/button.js';

var Highscores = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Highscores ()
    {
        Phaser.Scene.call(this, { key: 'highscores' });
    },

    init: function (data)
    {
        this.width = data.width;
        this.height = data.height;
    },
    
    create: function ()
    {
        var backgroundImage = (this.width > this.height) ? 'comingsoon_landscape.png' : 'comingsoon_portrait.png';
        var background = this.add.image(this.width/2, this.height/2, 'comingsoon', backgroundImage);
        background.setDisplaySize(this.width, this.height);

        var backButton = this.children.add(new Button(this,'comingsoon','back_button.png', this.width/2, this.height * 4/5, this.openMenu.bind(this)));
    },

    openMenu: function() {
        this.scene.start('mainmenu');
    }
});

export { Highscores }