<script setup lang="ts">
const props = defineProps<{
  promotionAttributes: {
    promotion_label: string
    handset_cat_promotion_sticker: string
    promotion_bg_color: string
  }
  image: string
  hasPromotion: boolean
}>()

const promotionImageLink = () => {
  if (
    props.promotionAttributes.handset_cat_promotion_sticker === 'snelpakker'
  ) {
    return '/assets/images/bfsnelpakker.svg'
  }
}
</script>

<template>
  <div class="bg-fixed rounded-t-lg">
    <a>
      <div class="relative">
        <img :src="props.image" class="text-center h-60 w-max" />
        <div v-if="props.hasPromotion" class="absolute left-0 bottom-5">
          <img
            :src="promotionImageLink"
            :alt="props.promotionAttributes.handset_cat_promotion_sticker"
            class="max-w-2xl h-10"
          />
          <div
            :class="`bg-${props.promotionAttributes.promotion_bg_color} block`"
          >
            {{ props.promotionAttributes.promotion_label }}
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
