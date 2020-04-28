$(document).ready(function () {
    $(".product-cards-carousel").owlCarousel(
        {
            nav: false,
            items: 6,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            dots: false,
            nav: false,
            margin: 10,
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