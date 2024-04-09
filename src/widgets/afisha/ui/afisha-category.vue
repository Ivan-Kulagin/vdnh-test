<script setup lang="ts">
interface Props {
    active?: boolean,
    label?: string,
    loading?: boolean
}
defineProps<Props>()
</script>

<template>
  <div
    class="afisha-categories-element"
    :class="{'afisha-categories-element--active': active, 'afisha-categories-element--loading': loading}"
  >
    <div class="afisha-categories-element--text">{{ label }}</div>
  </div>
</template>

<style scoped>

</style>
