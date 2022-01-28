/* eslint-disable */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    speed: 1000,
    disableOnInteraction: true,
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
    }
});

$('.testimonial').mouseenter(() => {
    swiper.autoplay.stop();
});

$('.testimonial').mouseleave(() => {
    swiper.autoplay.start();
});