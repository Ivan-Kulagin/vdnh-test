<script setup lang="ts">
import { Title as DateTitle } from 'shared/ui/title'
const { d: formatDate } = useI18n()
interface Props {
    date: Date | null
}
defineProps<Props>()
</script>

<template>
  <DateTitle label="Афиша событий">
    <template v-if="date">
      на <span class="brand-text">{{ formatDate(date, 'regular') }}</span>
    </template>
  </DateTitle>
</template>

<style scoped lang="scss">

</style>
