<template>
    <section>
        <div class="relative lg:px-0 px-4 max-w-7xl mx-auto">
            <div class="relative">
                <div
                    class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
                    <div class="w-full flex items-center justify-between">
                        <h2 class="text-2xl md:text-3xl lg:text-2xl font-bold flex items-center">
                            <CategoryIcon class="w-12 rounded-lg ml-2 p-2 bg-orange-500" />
                            <span>پربازدیدترین دسته ها</span>
                        </h2>
                        <button
                            class="flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent text-sm sm:text-base font-medium !hidden md:!flex">
                            <span class="ml-2">مشاهده همه </span>
                            <IconsLeftArrow class="w-4" />
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-4 md:gap-4">
                    <nuxt-link :to="`/archive/category/${category.slug}-${category.id}`" v-for="(category , index) in topCategories" :key="category.id" class="relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-gray-50 dark:bg-dark-800 rounded-lg transition-colors"
                        >
                        <div class="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden z-0">
                            <img :alt="category.title" class="object-cover w-full h-full" :src="`${appBaseUrl}/storage/categories/${category.cat_image}`" />
                        </div>
                        <div class="mt-3">
                            <h2 class="text-base font-semibold">{{ category.title }}</h2>
                            <span class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400 font-fd">{{ category.posts_count }}
                                مقاله</span>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import CategoryIcon from "@/components/icons/CategoryIcon.vue";
import IconsLeftArrow from "@/components/icons/LeftArrow.vue";

const props = defineProps({
    topCategories: {
     required: true,
     type: [Array, Object],
   },
 });
 
 const { appBaseUrl } = useRuntimeConfig().public;
</script>

