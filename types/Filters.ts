export type Filter = {
  id: string
  name: string
  values: string[]
}

export type Filters = {
  manufacturer: Filter
  colors: Filter
  has_5g: Filter
  operating_system: Filter
  has_esim: Filter
  refurbished: Filter
}
