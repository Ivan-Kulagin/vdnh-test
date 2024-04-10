<script setup lang="ts">
import Angle from './icon/Angle.vue'
import Dateslideritem from './dateslideritem.vue'

const emit = defineEmits(['update:modelValue', 'slide:click'])

export interface Props {
    items?: Date[]
    modelValue: Date | null
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: null
})

const updateModel = (value: Date | null): void => {
    emit('update:modelValue', value)
}

const handleItemClick = (originalEvent: Event, date: Date): void => {
    emit("slide:click", { originalEvent, date })
    isActive(date)
        ? updateModel(null)
        : updateModel(date)
}

const isActive = (date: Date): boolean => {
    return props.modelValue === date
}

const swiperOptions = {
    spaceBetween: 10,
    centeredSlides: false,
    breakpoints: {
        0:    { slidesPerView: 4 },
        576:  { slidesPerView: 6 },
        768:  { slidesPerView: 8 },
        992:  { slidesPerView: 10 },
        1200: { slidesPerView: 15 }
    },
    navigation: {
        prevEl: '.dateslider__btn--prev',
        nextEl: '.dateslider__btn--next'
    }
}
</script>

<template>
  <div style="display: flex; width: 100%;">
    <button class="dateslider__btn dateslider__btn--prev"><Angle /></button>
    <swiper
      v-bind="swiperOptions"
    >
      <swiper-slide v-for="(date, index) of items">
        <slot>
          <dateslideritem
            @click="handleItemClick($event, date)"
            :active="isActive(date)"
            :date="date"
            :show-month="index === 0 || date.getDate() === 1"
          />
        </slot>
      </swiper-slide>
    </swiper>
    <button class="dateslider__btn dateslider__btn--next"><Angle right /></button>
  </div>
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
