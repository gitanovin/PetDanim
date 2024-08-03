<template>
        <div
            class="relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0">
            <img v-if="category.cat_image != null" :alt="category.title" class="object-cover w-full h-full rounded-3xl md:rounded-[40px]"
                :src="`${appBaseUrl}/storage/categories/${category.cat_image}`" />
            <div class="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
                <h2 class="inline-block align-middle text-5xl font-semibold md:text-7xl">
                    {{ category.title }}
                </h2>
                <span class="block mt-4 text-neutral-300 font-fd">{{ category.posts.length }} مقاله</span>
            </div>
        </div>
</template>

<script setup>
    const props = defineProps({
        category: {
            required: true,
            type: [Array , Object]
        }
    })

    const {appBaseUrl} = useRuntimeConfig().public
</script>