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




  //   autoPlayYouTubeModal();   -------- Play with Later!

  // //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  // function autoPlayYouTubeModal() {
  //     var trigger = $("body").find('[data-toggle="modal"]');
  //     trigger.click(function () {
  //         var theModal = $(this).data("target"),
  //             videoSRC = $(this).attr("data-theVideo"),
  //             videoSRCauto = videoSRC + "?autoplay=1";
  //         $(theModal + ' iframe').attr('src', videoSRCauto);
  //         $(theModal + ' button.close').click(function () {
  //             $(theModal + ' iframe').attr('src', videoSRC);
  //         });
  //         $('.modal').click(function () {
  //             $(theModal + ' iframe').attr('src', videoSRC);
  //         });
  //     });
  // }

    // /* Get iframe src attribute value i.e. YouTube video url
    // and store it in a variable */
    // var url = $("#paintVid").attr('src');
    
    // /* Assign empty url value to the iframe src attribute when
    // modal hide, which stop the video playing */
    // $("#myModal").on('hide.paint.modal', function(){
    //     $("#paintVid").attr('src', '');
    // });
    
    // /* Assign the initially stored url back to the iframe src
    // attribute when modal is displayed again */
    // $("#myModal").on('show.paint.modal', function(){
    //     $("#paintVid").attr('src', url);
    // });

