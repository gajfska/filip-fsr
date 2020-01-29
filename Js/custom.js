
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
                items: 5
            },
            992 : {
                items: 5
            }

        }

    });
});