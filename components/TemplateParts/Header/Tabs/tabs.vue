<template>
  <div class="flex justify-between">
    <nav
      class="nc-Nav relative flex w-full overflow-x-auto text-sm md:text-base"
    >
      <ul v-if="categories.length != 0" class="flex sm:space-x-2 rtl:space-x-reverse">
        <li 
          class="relative flex-shrink-0" 
          v-for="(category , index) in categories" :key="index"
          @click="activeCat(index)"
          >
          <button
            :class="activeCatIndex == index ? 'bg-orange-500 text-neutral-50' : 'text-neutral-500'"
            class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full  dark:bg-neutral-100 dark:text-black"
          >
            {{ category.title }}
          </button>
        </li>
      </ul>
    </nav>
    <button
      class="flex-shrink-0 relative h-auto items-center justify-center rounded-full transition-colors border-transparent text-neutral-900 dark:!text-neutral-200 text-sm sm:text-base font-medium !hidden md:!flex"
    >
      <nuxt-link :to="`/archive/category/${categories[activeCatIndex].slug}-${categories[activeCatIndex].id}`">مشاهده همه </nuxt-link>
      <IconsLeftArrow class="w-6 pr-1" />
    </button>
  </div>
</template>
<script setup>
import IconsLeftArrow from "@/components/icons/LeftArrow.vue";

const emit = defineEmits(["activeCat"])

const props = defineProps({
  categories: {
    required: true,
    type: [Array , Object]
  },
  activeCatIndex: {
    required: true,
    type: Number
  }
})

const activeCat = (index) => {
  emit("activeCat" , index)
}
</script>
