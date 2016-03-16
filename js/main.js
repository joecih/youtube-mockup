$(document).ready(function() {
    $("#home-sel").click(function() {
        $(".content-frame").load("page1.html");
    });
    
    $("#videos-sel").click(function() {
        $(".content-frame").load("page2.html");      
    });
});