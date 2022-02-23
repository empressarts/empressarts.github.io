/*-----------------------------------------------------------------------------------

    Theme Name: Stonex - One Page Multipurpose Template
    Description: One Page Multipurpose Template
    Author: Chitrakoot Web
    Version: 2.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. scrollIt
        03. Add Class Reveal for Scroll to Top
        04. ScrollUp Active Code
        05. Sidemenu toggle
        06. Navbar scrolling background
        07. Vegas Active Code
        08. owlCarousel
        09. Gallery and Video
        10. Horizontal Tab
        11. Child Tab
        12. Vertical Tab
        
    ---------------------------------- */

$(function() {

    "use strict";

    var wind = $(window);

    // Preloader
    $('#preloader').fadeOut('normall', function() {
        $(this).remove();
    });


    // scrollIt
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -70 // offste (in px) for fixed top navigation
    });


    // Add Class Reveal for Scroll to Top
    wind.on('scroll', function() {
        if (wind.width() > 600) {
            if (wind.scrollTop() > 600) {
                $('#back-to-top').addClass('reveal');
            } else {
                $('#back-to-top').removeClass('reveal');
            }
        }
    });

    // ScrollUp Active Code
    $('#back-to-top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // Sidemenu toggle
    if ($("#sidebar_toggle").length) {
        $("body").addClass("sidebar-menu");
        $("#sidebar_toggle").on("click", function() {
            $(".sidebar-menu").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_sidebar").fadeIn(700)
        }), $("#close_sidebar").on("click", function() {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".sidebar-menu").removeClass("active")
        }), $("#btn_sidebar_colse").on("click", function() {
            $(".side-menu").removeClass("side-menu-active"), $("#close_sidebar").fadeOut(200), $(".sidebar-menu").removeClass("active")
        });
    }

    // Navbar scrolling background
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            lightbg = $(".bg-light-gray .logo> img"),
            logo = $(".navbar .logo> img");

        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');
            lightbg.attr('src', 'img/logo-dark.png');

        } else {
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
            lightbg.attr('src', 'img/logo-dark.png');
        }
    });

    var windowsize = wind.width();
    if (windowsize <= 991) {
        $('.navbar-nav .nav-link').on("click", function() {
            $('.navbar-collapse.show').removeClass('show');
        });
    }

    // Vegas Active Code
    $("body").vegas({
        delay: 7000,
        timer: false,
        shuffle: true,
        firstTransition: 'fade',
        firstTransitionDuration: 5000,
        transitionDuration: 2000,
        overlay: true,
        slides: [
            { src: "img/bg-1.jpg" },
            { src: "img/bg-2.jpg" },
            { src: "img/bg-3.jpg" },
            { src: "img/bg-4.jpg" },
        ]
    });

    $(document).ready(function() {

        // Default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            smartSpeed: 500
        });

        $('.gallery').each(function() {
            var $container = $(this);
            var $imageLinks = $container.find('.item');

            var items = [];
            $imageLinks.each(function() {
                var $item = $(this);
                var type = 'image';
                if ($item.hasClass('magnific-video')) {
                    type = 'iframe';
                }
                var magItem = {
                    src: $item.attr('href'),
                    type: type
                };
                magItem.title = $item.data('title');
                items.push(magItem);
            });

            $imageLinks.magnificPopup({
                mainClass: 'mfp-fade',
                items: items,
                gallery: {
                    enabled: true,
                    tPrev: $(this).data('prev-text'),
                    tNext: $(this).data('next-text')
                },
                type: 'image',
                callbacks: {
                    beforeOpen: function() {
                        var index = $imageLinks.index(this.st.el);
                        if (-1 !== index) {
                            this.goTo(index);
                        }
                    }
                }
            });
        });

    });

    //Horizontal Tab
    if ($(".horizontaltab").length !== 0) {
        $('.horizontaltab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    }

    // Child Tab
    if ($(".childverticaltab").length !== 0) {
        $('.childverticaltab').easyResponsiveTabs({
            type: 'vertical',
            width: 'auto',
            fit: true,
            tabidentify: 'ver_1', // The tab groups identifier
            activetab_bg: '#fff', // background color for active tabs in this group
            inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
            active_border_color: '#c1c1c1', // border color for active tabs heads in this group
            active_content_border_color: '#c1c1c1' // border color for active tabs contect in this group so that it matches the tab head border
        });
    }

    //Vertical Tab
    if ($(".verticaltab").length !== 0) {
        $('.verticaltab').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo2');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    }

});

//Video Modal
$(document).ready(function() {
    var url = $("#Geeks3").attr('src');
    $("#Geeks2").on('hide.bs.modal', function() {
        $("#Geeks3").attr('src', '');
    });
    $("#Geeks2").on('show.bs.modal', function() {
        $("#Geeks3").attr('src', url);
    });
});