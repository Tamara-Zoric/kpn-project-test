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
</script>

<template>
  <div class="bg-fixed rounded-t-lg">
    <a>
      <div class="relative">
        <img :src="props.image" class="text-center h-60 w-max" />
        <div v-if="props.hasPromotion" class="absolute left-1 bottom-5">
          <img
            v-if="
              props.promotionAttributes.handset_cat_promotion_sticker ===
              'snelpakker'
            "
            src="~/assets/images/bfsnelpakker.svg"
            :alt="props.promotionAttributes.handset_cat_promotion_sticker"
            class="max-w-3xl h-20"
          />
          <div class="bg-green-500 max-w-[15rem] rounded px-2">
            {{ props.promotionAttributes.promotion_label }}
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
