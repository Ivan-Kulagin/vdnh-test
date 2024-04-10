<script setup lang="ts">
import Angle from '../../icons/Angle.vue'
import { swiperOptions } from '../config/index'

const emit = defineEmits(['update:modelValue', 'slide:click'])

export interface Props {
    items?: Date[]
    modelValue: Date | null
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: null,
    navButtonClass: ''
})

const updateModel = (value: Date | null): void => {
    emit('update:modelValue', value)
}

const handleItemClick = (originalEvent: Event, date: Date): void => {
    console.log('handleItemClick')
    emit("slide:click", { originalEvent, date })
    isActive(date)
        ? updateModel(null)
        : updateModel(date)
}

const isActive = (date: Date): boolean => {
    return props.modelValue === date
}
</script>

<template>
  <div style="display: flex; width: 100%;">
    <button class="swiper__btn swiper__button--prev"><Angle /></button>
    <swiper
      v-bind="swiperOptions"
    >
      <swiper-slide v-for="(item, index) of items">
        <slot
          @click="(event) => handleItemClick(event, item)"
          :active="isActive(item)"
          :index="index"
          :item="item"
        />
      </swiper-slide>
    </swiper>
    <button class="swiper__btn swiper__button--next"><Angle right /></button>
  </div>
</template>

<style scoped lang="scss">
@import 'swiper';
</style>
