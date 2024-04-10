<script setup lang="ts">
const { d: formatDate } = useI18n()
defineProps({
    date: {
        type: Date,
        default: null
    },
    showMonth: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
  <div class="dateslider__item">
    <div class="dateslider__eltitle">
      <template v-if="showMonth && date">
        {{ formatDate(date, 'month') }}
      </template>
    </div>

    <div class="dateslider__iinner" :class="{active, 'dateslider__iinner--loading': loading}">
      <div class="dateslider__ititle" v-if="date">
        {{ formatDate(date, 'weekDay') }}
      </div>
      <div class="dateslider__idate" v-if="date">
        {{ formatDate(date, 'day2Digit') }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'styles/index';
</style>
