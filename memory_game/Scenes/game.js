var Game = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Game ()
    {
        Phaser.Scene.call(this, { key: 'game' });
        window.GAME = this;

        this.numOfCards = 16;
        this.cardsGrid = [];
    },

    preload: function()
    {
        this.load.setPath('Assets');
        this.load.multiatlas('spritesheet', 'assets.json');
        this.load.image('circle','Circle.png');
    },

    create: function ()
    {
        globalScene = this;
        currentChosen = null;

        var availableImages = [];
        for (var i = 23; i <= 65; i++) {
            availableImages.push('Slicing-' + i + '.png');
        }

        var placeholderGroup = this.make.group({
            classType: Phaser.GameObjects.Image,
            key: 'spritesheet',
            frame: 'Slicing-66.png',
            frameQuantity: 16,
            setScale: {
                x:0.5,
                y:0.5
            },
            gridAlign: {
                width: 4,
                height: 4,
                cellWidth: 190,
                cellHeight: 130,
                position: Phaser.Display.Align.CENTER,
                x: 150,
                y: 80
            }
        });

        var itemsGroup = this.make.group({
            classType: Phaser.GameObjects.Image,
            key: 'spritesheet',
            frame: availableImages,
            randomFrame: true,
            frameQuantity: 2,
            max:16,
            setScale: {
                x:0,
                y:0
            },
            gridAlign: {
                width: 4,
                height: 4,
                cellWidth: 190,
                cellHeight: 130,
                position: Phaser.Display.Align.CENTER,
                x: 150,
                y: 80
            }
        });

        placeholderGroupChildren = placeholderGroup.getChildren();
        itemsChildren = itemsGroup.getChildren();

        placeholderGroup.children.iterate(function (item, index) {
            item.id = ~~(index/2);
            item.referenceItem = itemsChildren[index];
        });

       
        placeholderGroup.children.iterate(function (item, index) {
            
            var randPos = Phaser.Math.Between(0, placeholderGroupChildren.length-1);
            var switchedItem = placeholderGroupChildren[randPos];

            var newX = switchedItem.x;
            var newY = switchedItem.y;
            switchedItem.setPosition(item.x, item.y);
            switchedItem.referenceItem.setPosition(item.x, item.y);
            item.setPosition(newX,newY);
            item.referenceItem.setPosition(newX,newY);
        });


        this.input.setHitArea(placeholderGroup.getChildren()).on('gameobjectover', function(pointer, gameObject) {
            gameObject.setTint(0xff0000);
        });

        this.input.setHitArea(placeholderGroup.getChildren()).on('gameobjectout', function(pointer, gameObject) {
            gameObject.clearTint();
        });

        this.input.setHitArea(placeholderGroup.getChildren()).on('gameobjectdown', function(pointer, gameObject) {
            
            globalScene.tweens.add({
                targets: gameObject.referenceItem,
                scaleX: 0.5,
                scaleY: 0.5,
                duration: 500,
                ease: 'Sine.easeOut'
            });

            if (currentChosen === null) currentChosen = gameObject;
            else {
                if (currentChosen.id == gameObject.id) {
                    console.log("Match");
                    currentChosen.setVisible(false);
                    gameObject.setVisible(false);
                }
                else{
                    globalScene.tweens.add({
                        targets: [gameObject.referenceItem, currentChosen.referenceItem],
                        scaleX: 0,
                        scaleY: 0,
                        duration: 500,
                        ease: 'Sine.easeOut',
                        delay: 1000
                    });
                }

                currentChosen = null;
            }
        });
    },

    update: function (time, delta)
    {
        
    }
});