// Слайдер
new Swiper('.swiper', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        clickable: true,
    },
});