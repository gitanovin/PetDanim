<template>
        <div
            class="nc-WidgetCategories rounded-3xl  overflow-hidden bg-white dark:bg-dark-800  border dark:border-dark-700/20">
            <div
                class="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 ">
                <h2 class="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">
                    ✨
                    موضوعات پرطرفدار</h2>
                <nuxt-link
                    class="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
                    rel="noopener noreferrer"
                    to="/archive/category"
                    >مشاهده همه</nuxt-link>
            </div>
            <div class="flow-root">
                <div class="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
                    <nuxt-link v-for="(category , index) in topCategories" :key="category.id" class="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-dark-700/20"
                        :to="`/archive/category/${category.slug}-${category.id}`">
                        <div class="relative flex-shrink-0 w-12 h-12 rounded-lg me-4 overflow-hidden">
                            <img :alt="category.title" class="object-cover w-full h-full" :src="`${appBaseUrl}/storage/categories/${category.cat_image}`">
                        </div>
                        <div>
                            <h2
                                class="text-base nc-card-title text-neutral-900 dark:text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold">
                                 {{ category.title }}</h2><span
                                class="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400 font-fd">{{ category.posts_count }}
                                مقاله</span>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
</template>

<script setup>
const props = defineProps({
    topCategories: {
     required: true,
     type: [Array, Object],
   },
 });
 
 const { appBaseUrl } = useRuntimeConfig().public;
</script>