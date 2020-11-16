

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

let swiper = new Swiper('.swiper__container', {
    wrapperClass: 'swiper__wrapper',
    slideClass: 'swiper__item',
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper__arrow--next',
        prevEl: '.swiper__arrow--prev'
    }
    
});
    
