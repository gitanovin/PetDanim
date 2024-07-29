<template>
  <span class="text-neutral-500 dark:!text-neutral-400 font-normal font-fd"
    >{{ date }}</span
  >
</template>

<script setup>
  const props = defineProps({
    date: {
      required: false,
      type: String,
      default: "-"
    }
  })
</script>
