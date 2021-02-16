
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


let select = document.querySelector('select');
let button = document.querySelector('button');

// В данной функции элемент из списка удаляется по клику на него

select.addEventListener('change', function() {

    for (let i = 0; i < select.options.length; i++) {

        if(select.options[i].selected) {
            select.remove(i)
        };

    };
});




// Но если нужно чтобы элемент из списка удалялся по кпопке, то функция такая:

// button.addEventListener('click', function() {

//     for (let i = 0; i < select.options.length; i++) {

//         if(select.options[i].selected) {
//             select.remove(i)
//         };

//     };
// });