<script setup lang="ts">
defineProps({
    right: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
  <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg" :style="{transform: right ? 'scaleX(-1)' : ''}">
    <path d="M12.4805 0.825962C12.8756 1.22107 12.9115 1.83934 12.5883 2.27502L12.4805 2.39984L2.88084 12L12.4805
    21.6002C12.8756 21.9953 12.9115 22.6135 12.5882 23.0492L12.4805 23.174C12.0854 23.5691 11.4671 23.6051 11.0314
    23.2818L10.9066 23.174L0.519516 12.7869C0.12441 12.3918 0.0884913 11.7736 0.411759 11.3379L0.519516 11.2131L10.9066
    0.825962C11.3412 0.391346 12.0459 0.391346 12.4805 0.825962Z" fill="black">
    </path>
  </svg>
</template>

<style scoped>

</style>
