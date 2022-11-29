<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  color: string
}>()

const classes = computed(() => {
  return `w-1 h-1 border border-neutral-700 rounded-full w-5 h-5 mb-1.5 bg-${props.color}`
})
</script>

<template>
  <ul class="flex-wrap flex p-0 cursor-pointer list-none">
    <li :title="props.color" :class="classes"></li>
  </ul>
</template>
