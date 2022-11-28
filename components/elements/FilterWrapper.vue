<script setup lang="ts">
import Dropdown from '~/components/elements/Dropdown.vue'
import filters from '~/filters.json'

const handleDropdownChange = (e: Event) => {
  console.log(e)
}
</script>

<template>
  <div class="flex bg-white mb-5 rounded">
    <dropdown
      v-for="(filter, key) in filters.filters"
      :key="key"
      :name="key"
      :options="filter"
      @change="handleDropdownChange"
    ></dropdown>
  </div>
</template>
