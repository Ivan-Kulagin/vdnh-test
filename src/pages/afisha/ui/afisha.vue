<script setup lang="ts">
import type { Ref } from 'vue'
import type { EventItem, AfishaType } from "../../../widgets/afisha/types/index"
import AfishaList from "../../../widgets/afisha/ui/afisha-list.vue"
import AfishaCategories from '../../../widgets/afisha/ui/afisha-categories.vue'
import AfishaTitle from '../../../widgets/afisha/ui/afisha-title.vue'
import DateSlider from '../../../widgets/dateslider/ui/dateslider.vue'
import { getNextDates } from '../../../widgets/dateslider/utils/dates'
import { dateToUnix, isSameUnixDay } from '../../../shared/utils/dates'
import { useAfishaEvents } from '../../../widgets/afisha/composables/useAfishaEvents'

const { d: formatDate } = useI18n()

const selectedDate = ref(null)
const dates: Ref<Date[]> = ref([])
dates.value = await getNextDates(30)

const defaultCategory: AfishaType = { text: 'Все', value: null }
const selectedCategory: Ref<AfishaType> = ref(defaultCategory)

const categories: Ref<AfishaType[]> = ref([])
const events: Ref<EventItem[]> = ref([])
const fetchingAfisha = ref(false)

onMounted(async () => {
    fetchingAfisha.value = true
    const { categories: categoriesData, events: eventsData } = await useAfishaEvents()
    fetchingAfisha.value = false

    categories.value = [defaultCategory, ...categoriesData]
    events.value = eventsData
})

const filteredEvents = computed(() => {
    const category = selectedCategory.value.value
    const date = selectedDate.value
    const categoryFilter = (item: EventItem): boolean => category ? item.type.toLowerCase() === category.toLowerCase() : true
    const dateFilter = (item: EventItem): boolean => date ? isSameUnixDay(item.unix, dateToUnix(date)) : true
    return events.value.filter(item => categoryFilter(item) && dateFilter(item))
})
</script>

<template>
  <afisha-title>
    <template v-if="selectedDate">
      на <span class="brand-text">{{ formatDate(selectedDate, 'regular') }}</span>
    </template>
  </afisha-title>
  <date-slider v-model="selectedDate" :items="dates" />
  <afisha-categories v-model="selectedCategory" :loading="fetchingAfisha" :categories="categories" />
  <afisha-list :loading="fetchingAfisha" :items="filteredEvents" />
</template>

<style scoped>

</style>
