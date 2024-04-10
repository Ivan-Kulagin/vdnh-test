<script setup lang="ts">
import type { ImageMeta } from '../types'
import type { VueComponentStyleClass } from 'shared/types'

interface Props {
    link: string
    image?: ImageMeta
    eventType?: string
    title?: string
    date?: string

    containerClass?: VueComponentStyleClass
    wrapperClass?: VueComponentStyleClass
    imageClass?: VueComponentStyleClass
}

const props = withDefaults(defineProps<Props>(), {
    containerClass: () => ['vdnh-event'],
    wrapperClass: () => ['vdnh-event-image--wrapper'],
    imageClass: () => ['vdnh-event-img']
})
</script>

<template>
  <a :class="containerClass" class="item-content-afisha" :href="link" target="_blank">
    <div :class="wrapperClass">
      <img v-if="image" :src="image.src" :alt="image.alt" loading="lazy" :class="imageClass">
    </div>
    <slot v-bind="props">
      <span class="vdnh-event-type">{{ eventType }}</span>
      <span class="vdnh-event-title">{{ title }}</span>
      <span class="vdnh-event-time">{{ date }}</span>
    </slot>
  </a>
</template>

<style scoped lang="scss">
@import 'styles';
</style>
