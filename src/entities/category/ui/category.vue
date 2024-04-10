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
    class="category"
    :class="{
      'category--active': active,
      'category--loading': loading
    }"
  >
    <div class="category--text">{{ label }}</div>
  </div>
</template>

<style scoped lang="scss">
@import 'styles';
</style>
