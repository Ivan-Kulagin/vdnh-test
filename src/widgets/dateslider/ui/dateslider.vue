<script setup lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
import Angle from '~/src/widgets/dateslider/ui/icon/Angle.vue'
import Dateslideritem from '~/src/widgets/dateslider/ui/dateslideritem.vue'
SwiperCore.use([Navigation]);

const onSwiper = (swiper: any) => {
    console.log(swiper);
}
const onSlideChange = () => {
    console.log("slide change");
}
</script>

<template>
  <div style="display: flex; width: 100%;">
    <button class="dateslider__btn dateslider__btn--prev"><Angle /></button>
    <swiper
      :spaceBetween="10"
      :centeredSlides="false"
      :slides-per-view="'auto'"
      :breakpoints="{
        0: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 8,
        },
        992: {
          slidesPerView: 10
        },
        1200: {
          slidesPerView: 15
        }
      }"
      :navigation="{
        prevEl: '.dateslider__btn--prev',
        nextEl: '.dateslider__btn--next',
      }"
    >
      <swiper-slide v-for="i in 30">
        <dateslideritem  />
      </swiper-slide>
    </swiper>
    <button class="dateslider__btn dateslider__btn--next"><Angle right /></button>
  </div>
<!--  <div class="dateslider">-->
<!--    <button class="dateslider__btn dateslider__btn&#45;&#45;prev"></button>-->

<!--    <div class="swiper dateslider__container swiper-initialized swiper-horizontal swiper-free-mode">-->
<!--      <div class="swiper-wrapper dateslider__wrapper js-dates-slider">-->
<!--        <dateslideritem v-for="i in 10" />-->
<!--      </div>-->
<!--    </div>-->

<!--    <button class="dateslider__btn dateslider__btn&#45;&#45;next"></button>-->
<!--  </div>-->
</template>

<style scoped>
.swiper-container {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
