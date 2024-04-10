<template>
  <afisha-categories v-model="selectedCategory" :loading="fetchingAfisha" :categories="categories" />
  <afisha-events :loading="fetchingAfisha" :items="filteredEvents" />
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { useCategoryAPI, type CategoryItem } from 'entities/category'
import { useEventAPI, type EventItem } from 'entities/event'

import AfishaEvents from "./afisha-events.vue"
import AfishaCategories from './afisha-categories.vue'

import { applyFilters } from 'shared/utils/filters'
import { categoryFilter, dateFilter } from 'features/events/filters'

interface Props {
    date: Date | null
}
const props = defineProps<Props>()

const defaultCategory: CategoryItem = { text: 'Все', value: null }
const selectedCategory: Ref<CategoryItem> = ref(defaultCategory)

const fetchingAfisha = ref(true)
const categories: Ref<CategoryItem[]> = ref([])
const events: Ref<EventItem[]> = ref([])

onMounted(async () => {
    const { events: eventsData } = await useEventAPI().fetchEvents()
    const { labels: categoriesData } = await useCategoryAPI().fetchCategories()
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
