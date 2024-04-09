<script setup lang="ts">
import type { ImageMeta } from '../types'

type VueComponentClass = (string | Record<string, boolean>)[] | string

interface Props {
    link: string
    image?: ImageMeta
    eventType?: string
    title?: string
    date?: string

    containerClass?: VueComponentClass
    wrapperClass?: VueComponentClass
    imageClass?: VueComponentClass
}

const props = withDefaults(defineProps<Props>(), {
    containerClass: () => ['afisha-element'],
    wrapperClass: () => ['afisha-element-image--wrapper'],
    imageClass: () => ['afisha-element-img']
})
</script>

<template>
  <a :class="containerClass" class="item-content-afisha" :href="link" target="_blank">
    <div :class="wrapperClass">
      <img v-if="image" :src="image.src" :alt="image.alt" loading="lazy" :class="imageClass">
    </div>
    <slot v-bind="props">
      <span class="afisha-element-type">{{ eventType }}</span>
      <span class="afisha-element-title">{{ title }}</span>
      <span class="afisha-element-time">{{ date }}</span>
    </slot>
  </a>
</template>

<style scoped>

</style>
