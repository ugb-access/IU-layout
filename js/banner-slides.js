// $('.banner-slides-inner-wrapper').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: false,
//     items: 1,
//     singleItem: true,
// })

$(document).ready(function () {
    $(".banner-slides-inner-wrapper").owlCarousel(
        {
            nav: false,
            items: 1,
            singleItem: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            animateOut: 'fadeOut'
        }
    );
});