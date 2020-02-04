
/* ========== WOW =========*/
$(document).ready(function () {
    //animate on scroll
    new WOW().init();
})

/*    TIMELINE   */
$(function(){

    window.sr = ScrollReveal();

    if ($(window).width() < 768) {

        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    } else {

        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    }

    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });


});


/*    time   */
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


/* SPONSORS */
$(function () {
    $("#sponsors-list").owlCarousel({
        items: 5,
        autoplay: true, /*automatyczne przełączanie na kolejną osobę*/
        smartSpeed: 700, /*czas przełączania*/
        loop: true, /*ludzie w pętli*/
        autoplayHoverPause: true,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 3
            },
            768 : {
                items: 3
            },
            992 : {
                items: 3
            }

       }

    });
});


/* ========== NAVIGATIONA =========*/
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

/* ========== SMOOOTH SCROOLING =========*/
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
        $(".navbar-toggle").click();
    })
})
