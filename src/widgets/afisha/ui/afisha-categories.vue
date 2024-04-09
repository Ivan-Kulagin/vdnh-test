<script setup lang="ts">
import type { AfishaType } from '../types'
import AfishaCategory from './afisha-category.vue'

interface Props {
    categories: AfishaType[]
    modelValue: AfishaType,
    loading?: boolean
}

interface OnClickType {
    originalEvent: Event,
    category: AfishaType
}

const props = defineProps<Props>()
const emit  = defineEmits<{
    'click:type': [value: OnClickType]
    'update:modelValue': [value: AfishaType | null]
}>()

const handleCategoryClick = (event: Event, category: AfishaType): void => {
    emit('click:type', {originalEvent: event, category})
    if (!isActive(category)) {
        updateModel(category)
    }
}

const updateModel = (value: AfishaType): void => {
    emit('update:modelValue', value)
}

const isActive = (category: AfishaType): boolean => {
    return props.modelValue.value === category.value
}
</script>

<template>
  <div class="russia-afisha-categories">
    <template v-if="loading">
      <template v-for="category in 10">
        <afisha-category :loading="loading" />
      </template>
    </template>
    <template v-for="category of categories" :key="category.value">
      <afisha-category
        :label="category.text"
        :active="isActive(category)"
        @click="handleCategoryClick($event, category)"
      />
    </template>
  </div>
</template>

<style scoped>

</style>
