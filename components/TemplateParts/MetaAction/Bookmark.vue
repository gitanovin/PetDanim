<template>
  <button
    class="relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:hover:!bg-neutral-700 dark:bg-dark-700/20"
    title="Save to reading list">
    <Bookmark :isFill="isFill" />
  </button>
</template>

<script setup>
import Bookmark from "@/components/icons/Bookmark.vue";
const props = defineProps({
  isFill: {
    required: true,
    type: Boolean,
    default: false
  }
})
</script>
