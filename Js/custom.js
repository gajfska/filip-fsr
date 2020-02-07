
/*  WOW   */
$(document).ready(function () {
    //animate on scroll
    new WOW().init();
});

/*    TIMELINE   */
$(function () {
    $("#prizes").magnificPopup({
        delegate:"a",
        type: 'image',
        gallery: {
            enabled: true
        }
    })
});


/*    GALLERY   */
$(function () {
    $("#gallery").magnificPopup({
        delegate:"a",
        type: 'image',
        gallery: {
            enabled: true
        }
    })
});


/*  SPONSORS  */
$(function () {
    $("#sponsors-list").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 2
            },
            768 : {
                items: 3
            },
            992 : {
                items: 4
            }

       }

    });
});


/*   NAVIGATION  */
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() < 50){
            //hide navbar
            $("nav").removeClass("filip-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("filip-top-nav");
            $("#back-to-top").fadeIn();
        }
    })
});

/*  SMOOOTH SCROOLING   */
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        // get/return id like #about if is clicked
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1250), "easeInOutExpo";
    });
})

/* close menu on click */
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function (){
        $(".navbar-toggler").click();
    })
})
