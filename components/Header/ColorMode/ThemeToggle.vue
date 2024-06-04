<script setup lang="ts">
import Sun from "@/components/icons/Sun.vue";
import Night from "@/components/icons/Night.vue";
type Theme = "light" | "dark";

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>

<template>
  <div class="relative inline-flex">
    <button
      aria-label="Color Mode"
    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:!text-dark-700 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:!bg-dark-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-orange-500 dark:!focus-visible:ring-orange-400 inline-flex items-center"
      @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
    >
      <span class="flex-shrink-0 h-5 w-5" aria-hidden="true">
        <Night
          v-if="$colorMode.value == 'dark'"
          class="text-xl h-5 w-5 dark:!fill-gray-50 dark:!text-dark-700 dark:!stroke-dark-700 stroke-dark-800"
        />
        <Sun
          v-else
          class="text-xl h-5 w-5 dark:!text-dark-700 dark:!stroke-dark-700 stroke-dark-800"
        />
      </span>
    </button>
  </div>
</template>
