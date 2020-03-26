Vue.component('games-component', {
    props: ['game'],
    template: `
        <div class="games-component">
            <img class="card-image responsive-img" v-bind:src="game.thumbnail_source">
        </div>
    `
})

new Vue({
    el: '#editor',
    data: {
        trending_games: [
            { id:1, title: 'Face Zapper', url_param: 'zapper', thumbnail_source: "Assets/Zapper Thumbnail.png", gameplay_img_src: "Assets/Zapper Thumbnail.png" },
            { id:2, title: 'zBoop', url_param: 'zboop', thumbnail_source: "Assets/PlanetBoop - Coming Soon.jpeg", gameplay_img_src: "Assets/PlanetBoop - Coming Soon.jpeg" },
            { id:3, title: 'Airship Release',  url_param: 'airship', thumbnail_source: "Assets/Airship Thumbnail.png", gameplay_img_src: "Assets/Airship Thumbnail.png" },
            { id:4, title: 'Memory Game',  url_param: 'memory_game', thumbnail_source: "Assets/Memory Game Thumbnail2.png", gameplay_img_src: "Assets/Memory Game Thumbnail2.png" },
            { id:5, title: 'Stack-A-Boop',  url_param: 'stack_a_boop', thumbnail_source: "Assets/PlanetBoop - Coming Soon.jpeg", gameplay_img_src: "Assets/PlanetBoop - Coming Soon.jpeg" }
        ],
        selected_game: { },
        carouselNumber: 2,
        gamesListIndex: 0,
        current_games: [],
        ratio: 0
    },
    computed: {
    },
    methods: {
        selectGame: function(game){
            var gameViewer = document.getElementById("selected-new-game");

            if (!gameViewer.classList.contains('closed') && this.selected_game == game){
                gameViewer.classList.add('closed');
            }
            else{
                this.selected_game = game;
                if (gameViewer.classList.contains('closed')) {
                    gameViewer.classList.remove('closed');
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

