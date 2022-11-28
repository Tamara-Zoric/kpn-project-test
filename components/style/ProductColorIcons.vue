<script setup lang="ts">
const props = defineProps<{
  color: string
}>()
</script>

<template>
  <ul class="flex-wrap flex p-0 cursor-pointer list-none">
    <li
      :title="props.color"
      class="w-1 h-1 border border-r-neutral-700 rounded-full w-5 h-5 mb-1.5"
      :class="`bg-${props.color}`"
    ></li>
  </ul>
</template>
