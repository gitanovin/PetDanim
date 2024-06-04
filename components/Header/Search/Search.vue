<template>
  <div class="relative inline-flex">
    <button
      @click="OpenSearchModal = true"
      type="button"
      class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:!text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:!bg-dark-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-orange-500 dark:!focus-visible:ring-orange-400 inline-flex items-center"
    >
      <span
        class="flex-shrink-0 h-5 w-5 flex items-center justify-center"
        aria-hidden="true"
      >
        <Search
          class="dark:!fill-dark-700 dark:!text-dark-700 dark:!stroke-dark-700 w-5 stroke-dark-900"
        />
      </span>
    </button>
  </div>
   


</template>

<script setup>
import Search from "@/components/icons/Search.vue";
const OpenSearchModal = ref(false);
</script>
