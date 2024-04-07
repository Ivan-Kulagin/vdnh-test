<template>
  <div class="vdnh-ru-main">
    <div class="vdnh-div-wrapper">
      <div class="vdnh-div-content">
        <div class="russia-block-wrapper">

          <h2 class="russia-block-title">
            Афиша событий
            <template v-if="selectedDate">
              на <span class="brand-text">{{ formattedDate }}</span>
            </template>
          </h2>
          <dateslider />
          <div class="russia-afisha-categories">
            <div
              v-for="afishaType of afishaTypes"
              class="afisha-categories-element"
              :key="afishaType.value"
              @click="selectedType = afishaType"
              :class="{'afisha-categories-element--active': afishaType.value === selectedType.value}"
            >
              <div class="afisha-categories-element--text">{{ afishaType.text }}</div>
            </div>
          </div>


          <div class="afisha-elements items-list-afisha">
            <a v-for="afishaElement in filteredAfishaElements" class="afisha-element item-content-afisha" :href="afishaElement.href" target="_blank">
              <div class="afisha-element-image--wrapper">
                <img :src="afishaElement.img.src" :alt="afishaElement.img.alt" loading="lazy" class="afisha-element-img">
              </div>
              <span class="afisha-element-type">{{ afishaElement.type }}</span>
              <span class="afisha-element-title">{{ afishaElement.title }}</span>
              <span class="afisha-element-time">{{ afishaElement.date }}</span>
            </a>
            <a class="afisha-element-red" href="https://vdnh.ru/events/">
              <div class="afisha-element-red-img--wrapper">
                <img src="https://vdnh.ru/local/templates/russia_forum/img/small_sprite.jpg" alt="" class="afisha-element-red-img">
              </div>

              <div class="afisha-element-red--content">
                <span class="afisha-element-red-title">
                  Больше событий на сайте ВДНХ
                </span>
                <img src="https://vdnh.ru/local/templates/russia_forum/img/BIG_ARROW.svg" alt="">
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Dateslider from '~/src/widgets/dateslider/ui/dateslider.vue'

const afishaElements = ref([])
const afishaTypes = ref([])
const { d: formatDate } = useI18n()
const selectedType = ref({ text: 'Все', value: null })
const selectedDate = ref(new Date())
const formattedDate = computed(() => formatDate(selectedDate.value, 'regular'))
const weekDay = computed(() => formatDate(selectedDate.value, 'weekDay'))
const filteredAfishaElements = computed(() => {
    if (selectedType.value.value) {
        return afishaElements.value.filter(item => item.type.toLowerCase() === selectedType.value.value.toLowerCase())
    } else {
        return afishaElements.value
    }
})

async function fetchEvents() {
    // https://vdnh.ru/api_v1/events/getEvents/?date=1712485338&periodDateTo=1714990938
    const response = await fetch("https://run.mocky.io/v3/23fcdfc7-0df7-46b4-8470-7c442f4983e7");
    const data = await response.json();
    afishaTypes.value = [{ text: 'Все', value: null }, ...data.labels]
    afishaElements.value = data.events ?? []
}
await fetchEvents()
</script>

<style>
</style>
