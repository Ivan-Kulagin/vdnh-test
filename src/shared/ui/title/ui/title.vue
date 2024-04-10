<script setup lang="ts">
interface Props {
    label: string
}
defineProps<Props>()
</script>

<template>
  <h2 class="title">
    {{ label }}
    <slot></slot>
  </h2>
</template>

<style scoped lang="scss">
@import 'styles';
</style>
