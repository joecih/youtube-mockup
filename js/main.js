$(document).ready(function() {
    $("#home-sel").click(function() {
        $(".content-frame").load("views/page1.html");
        $(".sub-head h1").html("Home");
    });
    
    $("#videos-sel").click(function() {
        $(".content-frame").load("views/page2.html");
        $(".sub-head h1").html("Videos");     
    });
    
    $(".content-frame").load("views/page1.html");
    $(".sub-head h1").html("Home");
});