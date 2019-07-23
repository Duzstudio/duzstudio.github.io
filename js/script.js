/* 
=================================
            Preloader
=================================
*/
$(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
});
/* 
=================================
            Team
=================================
*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
    });
});
/* 
=================================
          Progress Bars
=================================
*/
$(function () {
    $("#progress-elements").waypoint(function () {
//          this.destroy();
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
    }, {
     
        offset: 'bottom-in-view'
    });
});


/* 
=================================
            Testimonial
=================================
*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
    });
});
/* 
=================================
           clients
=================================
*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
    });
});
/* 
=================================
           stats
=================================
*/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/* 
=================================
           Navigation
=================================
*/

$(function () {
    $(window).scroll( function(){


        if( $(window).scrollTop() > 50 ) {
            //show white nav
            $("nav").addClass("white-nav-top");
            //show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png ");

            //show back to top
            $("#back-to-top").fadeIn();

        }else{
            //hide white nav bar
             $("nav").removeClass("white-nav-top");
             //show logo
              $(".navbar-brand img").attr("src", "img/logo/logo.png");

               //hide back to top
            $("#back-to-top").fadeOut();
        }
    });
});



/* 
=================================
        Responsive Tabs
=================================
*/
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});







