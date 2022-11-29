<script setup lang="ts">
import ProductWrapper from '~/components/elements/ProductWrapper.vue'
import { Product, ProductAttributes, Products } from '~/types/ProductType'
import FilterWrapper from '~/components/elements/FilterWrapper.vue'
import { useFilterStore } from '~/store/FilterStore'
import { useProductStore } from '~/store/ProductStore'
import { storeToRefs } from 'pinia'
import { computed, onBeforeMount } from 'vue'

const productStore = useProductStore()
const filterStore = useFilterStore()

const { products } = storeToRefs(productStore)
const { selectedFilters } = storeToRefs(filterStore)

onBeforeMount(() => {
  productStore.fetchProducts()
})

const filteredData = computed(() => {
  if (!Object.keys(selectedFilters.value).length) {
    return products.value.products
  } else {
    const allProducts = products.value.products
    const filteredProducts: Product[] = []
    if (allProducts) {
      allProducts.filter((product: Product) => {
        Object.entries(selectedFilters.value).forEach(([key, value]) => {
          if (
            value.values.includes(product[key as keyof Product] as string) ||
            !value.values.length
          ) {
            filteredProducts.push(product)
          }
        })
      })
    }
    return filteredProducts
  }
})

const createPromotionAttributes = (attributes: ProductAttributes) => {
  const { promotion_label, handset_cat_promotion_sticker, promotion_bg_color } =
    attributes
  return { promotion_label, handset_cat_promotion_sticker, promotion_bg_color }
}
</script>

<template>
  <h1 class="text-4xl text-green-500 pb-5">
    Kies uit <span class="font-bold">52 telefoons</span>
  </h1>
  <filter-wrapper></filter-wrapper>
  <div class="grid grid-cols-3">
    <product-wrapper
      v-for="product in filteredData"
      id="product.id"
      :key="product.id"
      :promotion-attributes="createPromotionAttributes(product.attributes)"
      image="https://picsum.photos/200"
      :has-promotion="product.has_promotion"
      :colors="product.colors"
      :slug="product.slug"
      :model="product.model"
      :manufacturer="product.manufacturer"
    ></product-wrapper>
  </div>
</template>
