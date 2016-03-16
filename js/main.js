$(document).ready(function() {
    $("#home-sel").click(function() {
        $(".content-frame").load("views/page1.html");
    });
    
    $("#videos-sel").click(function() {
        $(".content-frame").load("views/page2.html");      
    });
    
    $(".content-frame").load("views/page1.html");
});