<script setup lang="ts">
import ProductWrapper from '~/components/elements/ProductWrapper.vue'
import { ProductAttributes, Products } from '~/types/ProductType'
import FilterWrapper from '~/components/elements/FilterWrapper.vue'
import { useProductStore } from '~/store/ProductStore'
import { storeToRefs } from 'pinia'
import { onBeforeMount, onMounted, ref } from 'vue'

const productStore = useProductStore()

const { products } = storeToRefs(productStore)
onBeforeMount(() => {
  productStore.fetchProducts()
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
      v-for="product in products.products"
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
