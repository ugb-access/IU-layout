$(document).ready(function () {
    $(".iu-stories-inner-wrapper").owlCarousel(
        {
            nav: false,
            // items: 6,
            // loop: true,
            // autoplay: true,
            // autoplayTimeout: 4000,
            // autoplayHoverPause: true,
            dots: false,
            nav: false,
            margin: 10,
            responsive : {
                0: {
                    items: 6
                },
                375: {
                    items: 6.5
                },
                425: {
                    items: 7
                },
                475: {
                    items: 7.5
                },
                525: {
                    items: 8
                },
                660: {
                    items: 9.5
                },
                768: {
                    items: 10.5
                },
                800: {
                    items: 11.5
                },
                900: {
                    items: 12.5
                }
            }
        }
    );

});