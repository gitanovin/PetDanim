<script setup lang="ts">
import Sun from "@/components/icons/Sun.vue";
import Night from "@/components/icons/Night.vue";
type Theme = 'light' | 'dark';

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}

</script>

<template>

          <button class="ml-5" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
              <svg
                v-if="$colorMode.value == 'dark'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-50"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
              </svg>
            </button>
       <!-- <button aria-label="Color Mode" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-orange-400 inline-flex items-center"
                            @click="changeColor">
                     
                           <span class="flex-shrink-0 h-5 w-5" aria-hidden="true">
                            <Night v-if="colorMode.value === 'dark'" name="heroicons-outline:moon" class="text-xl text-black" />
                            <Sun v-else name="heroicons-outline:sun" class="text-xl h-5 w-5  stroke-white" />
                           </span>
                    </button> -->
</template>


