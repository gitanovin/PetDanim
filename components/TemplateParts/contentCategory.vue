<template>
  <div  class="relative inline-block whitespace-normal" v-for="(category , index) in categories" :key="index">
    <nuxt-link class="relative block group" :to="`/archive/category/${category.slug}-${category.id}`"
      ><div
        class="flex-shrink-0 relative w-full aspect-w-8 aspect-h-5 h-0 rounded-lg overflow-hidden z-0 group"
      >
        <img
          :alt="category.title"
          class="object-cover w-full h-full rounded-2xl"
          :src="`${appBaseUrl}/storage/categories/${category.cat_image}`"
        /><span
          class="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-colors"
        ></span>
      </div>
      <span
        class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute top-3 end-3 text-indigo-800 bg-indigo-100"
        ><div class="flex items-center font-fd">{{ category.posts.length }}</div></span
      >
      <div
        class="absolute inset-0 flex items-center justify-center w-full h-full"
      >
        <h2
          class="text-base px-4 py-2 sm:px-6 sm:py-3 bg-dark-900/20 backdrop-filter rounded-lg w-full h-full items-center text-center flex justify-center font-bold text-white"
        >
          {{ category.title }}
        </h2>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    required: true,
    type: [Array , Object]
  }
})

const {appBaseUrl} = useRuntimeConfig().public
</script>
