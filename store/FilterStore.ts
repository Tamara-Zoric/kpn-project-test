import { defineStore } from 'pinia'
import filtersData from '~/data/filters.json'
import { Filters, Filter } from '~/types/Filters'

export const useFilterStore = defineStore({
  id: 'filterStore',

  state: () => ({
    filters: {} as Filters,
    selectedFilters: {} as Filters,
  }),

  actions: {
    setFilters() {
      if (filtersData) {
        this.filters = filtersData.filters as Filters
      }
    },
    addNewSelection(data: Filter) {
      this.selectedFilters[data.id as keyof Filters] = data
    },
  },
})
