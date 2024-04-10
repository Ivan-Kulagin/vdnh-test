<script setup lang="ts">
import { Slider } from 'shared/ui/slider'
import { getNextDates } from '../utils/dates'
import DateSliderItem from './dateslideritem.vue'

export interface Props { modelValue: Date | null }

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const dates = await getNextDates(30)
</script>

<template>
  <div style="display: flex; width: 100%;">
    <slider
      :items="dates"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
    >
      <template #default="{ onClick, active, index, item }">
        <date-slider-item
          @click="onClick"
          :active="active"
          :date="item"
          :show-month="index === 0 || item?.getDate() === 1"
        />
      </template>
    </slider>
  </div>
</template>
