<template>
  <button
    class="relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:!bg-dark-900 dark:hover:!bg-dark-900/50"
    title="Save to reading list"
  >
    <Bookmark />
  </button>
</template>

<script setup>
import Bookmark from "@/components/icons/Bookmark.vue";
</script>
