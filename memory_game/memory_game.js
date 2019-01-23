function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;

    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}

window.onload = function() {
    var config = {
        type: Phaser.AUTO,
        width: 950,
        height: 650,
        physics: {
            default: 'arcade',
            // arcade: {
            //     gravity: { y: 0.3 },
            //     debug: true
            // }
        },
        scene: [ Game ]
    };
    game = new Phaser.Game(config);
    resize();
    window.addEventListener("resize", resize, false);
}