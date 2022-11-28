<script setup lang="ts">
import ProductColorIcon from '~/components/elements/ProductColorIcon.vue'
import ProductImageWrapper from '~/components/elements/ProductImageWrapper.vue'

const props = defineProps<{
  image: string
  manufacturer: string
  model: string
  hasPromotion: boolean
  slug: string
  colors: string[]
  promotionAttributes: {
    promotion_label: string
    handset_cat_promotion_sticker: string
    promotion_bg_color: string
  }
}>()
</script>

<template>
  <div
    class="grid relative items-end bg-white border-r-2 p-2 bg-white border border-gray-200 rounded-lg shadow-md"
  >
    <div class="product absolute right-4 top-4 z-1">
      <product-color-icon
        v-for="color in props.colors"
        :key="color"
        :color="color"
      />
    </div>
    <product-image-wrapper
      class="product-image-wrapper max-w-sm"
      :promotion-attributes="props.promotionAttributes"
      :image="props.image"
      :has-promotion="props.hasPromotion"
    />
    <div class="product-title grid items-end grid-cols-2">
      <span> {{ props.manufacturer }}</span>
      <span
        class="text-2xl font-bold row-start-2 row-end-2 col-start-1 col-end-1"
        >{{ props.model }}</span
      >
      <button class="self-end row-start-2 row-end-2 col-start-2 col-end-2">
        <nuxt-link to="#">Bekijk</nuxt-link>
      </button>
    </div>
  </div>
</template>
