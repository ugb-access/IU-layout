$(document).ready(function () {
    $(".product-cards-carousel").owlCarousel(
        {
            nav: false,
            // items: 6,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            dots: false,
            nav: false,
            margin: 10,
            responsiveClass:true,
            responsive : {
                0: {
                    items: 1.75
                },
                375: {
                    items: 2.25
                },
                425: {
                    items: 2.75
                },
                550: {
                    items: 3
                },
                660: {
                    items: 3.5
                },
                768: {
                    items: 4
                },
                1025: {
                    items: 6
                }

            }
        }
    );

    let owl = $(".product-cards-carousel");
    // Custom Button
    $('.custom-next-btn').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.custom-prev-btn').click(function () {
        owl.trigger('prev.owl.carousel');
    });
});