<template>
  <div class="russia-block-wrapper">
    <WidgetAfishaTitle :date="date" />
    <WidgetDateSlider v-model="date" />
    <WidgetAfishaBoard :date="date" />
  </div>
</template>

<script setup lang="ts">
import { WidgetAfishaTitle, WidgetAfishaBoard } from 'widgets/afisha'
import { WidgetDateSlider } from 'widgets/dateslider'
const date = ref(null)
</script>

<style scoped lang="scss">
@import 'styles';
</style>
