// eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/ban-types
export type UspOffer = {}

export type VariantsAttributes = {
  color: string
  color_code: string
  color_name: string
  memory: string
  handset_cat_promotion_sticker: string
  promotion_label: string
  promotion_slider_source: string
  promotion_bg_color: string
  handset_cat_promotion_sticker_kz: null | string
  promotion_label_kz: string
  promotion_slider_source_kz: string
  promotion_bg_color_kz: null | string
}

export type ProductAttributes = {
  handset_cat_promotion_sticker: string
  promotion_label: string
  promotion_slider_source: string
  promotion_bg_color: string
  handset_cat_promotion_sticker_kz?: any
  promotion_label_kz: string
  promotion_slider_source_kz: string
  promotion_bg_color_kz?: any
}

export type Variant = {
  id: number
  name: string
  slug: string
  next_ship_date: string
  usp_offer: UspOffer
  attributes: VariantsAttributes
  ui_suggested_sort_order: number
}

export type Product = {
  id: number
  name: string
  slug: string
  manufacturer: string
  model: string
  operating_system: string
  sim_card_capacity: string
  refurbished: boolean
  has_usp: boolean
  has_5g: boolean
  has_esim: boolean
  colors: string[]
  sort_order: number
  release_date: string
  default: string
  variants: Variant[]
  attributes: ProductAttributes
  has_promotion: boolean
}

export type Products = {
  products: Product[] | undefined[]
}
