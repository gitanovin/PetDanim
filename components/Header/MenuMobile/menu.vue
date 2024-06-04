<template>
  <button
    type="button"
    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm  p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden border dark:!border-dark-700/20"
    aria-label="Open Menu"
  >
    <span class="flex-shrink-0" aria-hidden="true">
      <MenuList class="w-6 dark:!stroke-dark-700" />
    </span>
  </button>
</template>
<script setup>
import MenuList from "@/components/icons/MenuList.vue";
</script>
