<template>
    <div class="flex items-center justify-center bg-gray-100 h-full lg:h-[500px]">
      <div class="text-center">
        <svg
          class="mx-auto h-12 w-12 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 13l-3 3m0 0l-3-3m3 3V8m6-4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2z"
          />
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-900">
          {{ title }}
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          {{ description }}
        </p>
        <div class="mt-6" v-if="isShowButton">
          <nuxt-link
            :to="buttonData.link"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {{ buttonData.text }}
          </nuxt-link>
        </div>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    isShowButton: {
      required: false,
      type: Boolean,
      default: false
    },
    buttonData: {
      required: false,
      type: [Array , Object],
      default: {}
    }
})
</script>