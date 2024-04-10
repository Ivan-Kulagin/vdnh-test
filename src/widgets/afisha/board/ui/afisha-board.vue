<template>
  <afisha-categories v-model="selectedCategory" :loading="fetchingAfisha" :categories="categories" />
  <afisha-events :loading="fetchingAfisha" :items="filteredEvents" />
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { CategoryItem } from 'entities/category'
import type { EventItem } from 'entities/event'

import AfishaEvents from "./afisha-events.vue"
import AfishaCategories from './afisha-categories.vue'

import { applyFilters } from 'shared/utils/filters'
import { categoryFilter, dateFilter } from 'features/events/filters'
import { useAfishaEvents } from '../composables/useAfishaEvents'

interface Props {
    date: Date | null
}
const props = defineProps<Props>()

const defaultCategory: CategoryItem = { text: 'Все', value: null }
const selectedCategory: Ref<CategoryItem> = ref(defaultCategory)

const categories: Ref<CategoryItem[]> = ref([])
const events: Ref<EventItem[]> = ref([])

const fetchingAfisha = ref(true)
onMounted(async () => {
    const { categories: categoriesData, events: eventsData } = await useAfishaEvents()
    fetchingAfisha.value = false

    categories.value = [defaultCategory, ...categoriesData]
    events.value = eventsData
})

const filteredEvents = computed(() => {
    const category = selectedCategory.value
    const date = props.date
    const byCategory = (item: EventItem) => categoryFilter(item, category)
    const byDate = (item: EventItem) => dateFilter(item, date)

    return applyFilters(events.value, [byCategory, byDate])
})
</script>

<style scoped>

</style>
