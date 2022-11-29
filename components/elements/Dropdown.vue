<script setup lang="ts">
import { DropdownEmitObject } from '~/types/Dropdown'

const props = defineProps<{
  id: string
  name: string
  options: string[]
}>()

const emit = defineEmits<{
  (e: 'change', data: DropdownEmitObject): void
}>()

const selectedValues: string[] = []
const handleClick = (option: string) => {
  if (selectedValues.includes(option)) {
    selectedValues.splice(selectedValues.indexOf(option), 1)
  } else {
    selectedValues.push(option)
  }

  emit('change', { id: props.id, name: props.name, values: selectedValues })
}
</script>

<template>
  <div :id="props.id" class="relative inline-block group">
    <button
      class="inline-flex items-center px-4 py-2 font-semibold text-gray-800"
    >
      <span class="mr-1">{{ props.name }}</span>
      <svg
        class="h-4 w-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </button>
    <ul class="absolute z-10 hidden pt-1 text-gray-700 group-hover:block">
      <li
        v-for="option in options"
        :key="option"
        class="block flex items-center hover:bg-gray-200 bg-white px-4 py-2 whitespace-no-wrap"
      >
        <input
          :id="`checkbox-${name}${option}`"
          type="checkbox"
          class="h-4 w-4 rounded border-gray-300 bg-gray-600 text-gray-100 ring-offset-gray-700 focus:ring-1 focus:ring-blue-500"
          @change="handleClick(option)"
        />
        <label
          :for="`checkbox-${name}${option}`"
          class="pl-2 w-full rounded text-sm font-medium text-gray-700 cursor-pointer"
          >{{ option }}</label
        >
      </li>
    </ul>
  </div>
</template>
