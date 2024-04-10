<script setup lang="ts">
import { Event as AfishaEvent, type EventItem } from 'entities/event'
import moreEventsImage from '/images/more-events.jpg'
import arrow from '/images/arrow.svg'

interface Props {
    items: EventItem[]
    loading?: boolean
}
withDefaults(defineProps<Props>(), {
    loading: true
})
</script>

<template>
  <div class="vdnh-events items-list-afisha">
    <template v-if="loading">
      <template v-for="element in 16">
        <afisha-event link="#" wrapper-class="vdnh-event-img" />
      </template>
    </template>
    <template v-else>
      <template v-for="element in items" :key="element.id">
        <afisha-event
          :title="element.title"
          :date="element.date"
          :image="element.img"
          :link="element.href"
          :event-type="element.type"
        />
      </template>
      <afisha-event
        link="https://vdnh.ru/events/"
        severity="red"
        wrapper-class="vdnh-event-red-img--wrapper"
        container-class="vdnh-event-red"
        image-class="vdnh-event-red-img"
        :image="{ src: moreEventsImage, alt: 'more-events' }"
      >
        <div class="vdnh-event-red--content">
                <span class="vdnh-event-red-title">
                  Больше событий на сайте ВДНХ
                </span>
          <img :src="arrow" alt="arrow">
        </div>
      </afisha-event>
    </template>
  </div>
</template>

<style scoped lang="scss">
@import 'styles';
@import 'entities/event/ui/styles';
</style>
