import { Navigation } from 'swiper/modules'
export const swiperOptions = {
    spaceBetween: 10,
    centeredSlides: false,
    breakpoints: {
        0:    { slidesPerView: 4 },
        576:  { slidesPerView: 6 },
        768:  { slidesPerView: 8 },
        992:  { slidesPerView: 10 },
        1200: { slidesPerView: 15 }
    },
    modules: [Navigation],
    navigation: {
        prevEl: '.swiper-nav-button--prev',
        nextEl: '.swiper-nav-button--next'
    }
}
