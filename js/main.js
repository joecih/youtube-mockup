$(document).ready(function() {

    var winWidth = 0;
    var winHeight = 0;


    $(window).resize(function() {
        winWidth = window.innerWidth;
        winHeight = window.innerHeight;

        if (winWidth <= 480) {
            console.log("Win Width: " + winWidth);
            $(".yt3").css("padding-top", "0");
            $(".form-inline").css("padding-top","0");
        }
    });

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