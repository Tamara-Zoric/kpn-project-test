<script setup lang="ts">
import Dropdown from '~/components/elements/Dropdown.vue'
import { useFilterStore } from '~/store/FilterStore'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
import { Filter } from '~/types/Filters'

const filterStore = useFilterStore()

const { filters } = storeToRefs(filterStore)
const { setFilters, addNewSelection } = filterStore
onBeforeMount(() => {
  setFilters()
})

const handleDropdownChange = (data: Filter) => {
  addNewSelection(data)
}
</script>

<template>
  <div class="flex bg-white mb-5 rounded">
    <dropdown
      v-for="(filter, key) in filters"
      :id="key"
      :key="key"
      :name="filter.name"
      :options="filter.values"
      @change="handleDropdownChange"
    ></dropdown>
  </div>
</template>
