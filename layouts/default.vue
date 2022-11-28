<script setup lang="ts">
import NavBar from '~/components/layout/NavBar.vue'
</script>

<template>
  <div>
    <div class="w-full bg-white border-b-2 mb-4"><NavBar /></div>
    <div class="h-screen max-w-6xl mx-auto"><slot /></div>
  </div>
</template>
