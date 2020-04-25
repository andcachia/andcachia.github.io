(function() {
    var search = window.location.search;
    var game = search.replace("?game=", "");

    var iFrame = document.getElementById("inlineFrame");

    if (game == "memory_game"){
        document.getElementById("phone").classList.toggle('portrait');
        document.getElementById("phone").classList.toggle('landscape');
        iFrame.classList.toggle('portrait');
        iFrame.classList.toggle('landscape');
    }

    var srcString = iFrame.getAttribute("src");
    var updatedSrc = srcString.replace("{0}", game);
    
    iFrame.setAttribute("src", updatedSrc);
})();

new Vue({
    el: '#editor',
    computed: {
    },
    methods: {
    },
    created: function() {
    }
})