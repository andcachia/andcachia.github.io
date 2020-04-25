Vue.component('games-component', {
    props: ['game'],
    template: `
        <div class="games-component">
            <img class="card-image responsive-img" v-bind:src="'Assets/Thumbnails/800_x_600-' + game.thumbnail_source + '.png'">
        </div>
    `
})

new Vue({
    el: '#editor',
    data: {
        trending_games: [
            { id:1, title: 'Face Zapper', url_param: 'zapper', thumbnail_source: "FaceZapper" },
            { id:2, title: 'zBoop', url_param: 'zboop', thumbnail_source: "zBoop"  },
            { id:3, title: 'Airship Release',  url_param: 'airship', thumbnail_source: "AirshipRelease"  },
            { id:4, title: 'Match-A-Boop',  url_param: 'memory_game', thumbnail_source: "MatchABoop"  },
            { id:5, title: 'Stack-A-Boop',  url_param: 'stack_a_boop', thumbnail_source: "StackABoop" }
        ],
        selected_game: { },
        carouselNumber: 2,
        gamesListIndex: 0,
        current_games: [],
        ratio: 0
    },
    computed:{
        thumbnailPath: function(){
            debugger;
            return "Assets/Thumbnails/" + "" + ".png";
        }
    },
    methods: {
        selectGame: function(game){
            var gameViewer = document.getElementById("selected-new-game");

            if (!gameViewer.classList.contains('closed') && this.selected_game == game){
                gameViewer.classList.add('closed');
                gameViewer.classList.remove('opened');
            }
            else{
                this.selected_game = game;
                if (gameViewer.classList.contains('closed')) {
                    gameViewer.classList.remove('closed');
                    gameViewer.classList.add('opened');
                }
            }
        },
        getUrl: function(url_param){
            location.href='play.html?game=' + url_param;
        }
    },
    created: function() {
    }
})

$(document).ready(function(){
    $('.games-carousel-new').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

