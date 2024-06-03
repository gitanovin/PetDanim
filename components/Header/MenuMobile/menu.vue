<template>
  <button
    type="button"
    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden"
    aria-label="Open Menu"
  >
    <span class="flex-shrink-0 h-5 w-5" aria-hidden="true">
      <MenuList />
    </span>
  </button>
</template>
<script setup>
import MenuList from "@/components/icons/MenuList.vue";
</script>
