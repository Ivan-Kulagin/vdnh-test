<script setup lang="ts">
import { Category as AfishaCategory, type CategoryItem } from 'entities/category';

interface Props {
    categories: CategoryItem[]
    modelValue: CategoryItem,
    loading?: boolean
}

interface OnClickType {
    originalEvent: Event,
    category: CategoryItem
}

const props = defineProps<Props>()
const emit  = defineEmits<{
    'click:type': [value: OnClickType]
    'update:modelValue': [value: CategoryItem | null]
}>()

const handleCategoryClick = (event: Event, category: CategoryItem): void => {
    emit('click:type', {originalEvent: event, category})
    if (!isActive(category)) {
        updateModel(category)
    }
}

const updateModel = (value: CategoryItem): void => {
    emit('update:modelValue', value)
}

const isActive = (category: CategoryItem): boolean => {
    return props.modelValue.value === category.value
}
</script>

<template>
  <div class="russia-afisha-categories">
    <template v-if="loading">
      <afisha-category
        v-for="category in 10"
        :loading="loading"
      />
    </template>
    <template v-else>
      <afisha-category
        v-for="category of categories"
        :key="category.value"
        :label="category.text"
        :active="isActive(category)"
        @click="handleCategoryClick($event, category)"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
@import 'styles';
</style>
