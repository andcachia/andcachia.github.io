$(function() {
    var search = window.location.search;
    var game = search.replace("?game=", "");

    var srcString = $("#inlineFrame").attr("src");
    var updatedSrc = srcString.replace("{0}", game);
    
    $("#inlineFrame").attr("src", updatedSrc);
});

