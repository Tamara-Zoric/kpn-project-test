import { defineStore } from 'pinia'
import { Products } from '~/types/ProductType'

export const useProductStore = defineStore({
  id: 'productStore',

  state: () => ({ products: {} as Products }),

  actions: {
    async fetchProducts() {
      $fetch('http://localhost:3020', {
        method: 'GET',
      }).then((res) => {
        this.products = res as Products
      })
    },
  },
})
