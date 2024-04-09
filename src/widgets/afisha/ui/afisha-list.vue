<script setup lang="ts">
import type { EventItem } from "../types"
interface Props {
    items: EventItem[]
    loading?: boolean
}
withDefaults(defineProps<Props>(), {
    loading: true
})

import AfishaCard from './afisha-card.vue'
</script>

<template>
  <div class="afisha-elements items-list-afisha">
    <template v-if="loading">
      <template v-for="element in 16">
        <afisha-card link="#" wrapper-class="afisha-element-img" />
      </template>
    </template>
    <template v-else>
      <template v-for="element in items" :key="element.id">
        <afisha-card
          :title="element.title"
          :date="element.date"
          :image="element.img"
          :link="element.href"
          :event-type="element.type"
        />
      </template>

    </template>
  </div>
</template>

<style scoped>

</style>
