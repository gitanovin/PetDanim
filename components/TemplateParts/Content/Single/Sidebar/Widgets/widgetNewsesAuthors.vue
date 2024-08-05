<template>
    <div class="nc-WidgetAuthors rounded-3xl overflow-hidden bg-white dark:bg-dark-800  border dark:border-dark-700/20">
        <div
            class="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 ">
            <h2 class="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">
                🎭
                نویسندکان</h2>
                <a
                class="flex-shrink-0 hidden text-primary-700 dark:text-primary-500 font-semibold text-sm"
                rel="noopener noreferrer" href="/javascript:void(0)">مشاهده همه</a>
        </div>
        <div class="flow-root">
            <div class="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
                <nuxt-link :to="`/archive/author/${author.username}`"  v-for="(author , index) in newesUsers" :key="author.id" class="nc-CardAuthor flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-dark-700/20"
                    >
                    <div
                        class="wil-avatar relative inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-base flex-shrink-0 me-4">
                        <img :alt="author.name" class="absolute inset-0 w-full h-full object-cover"
                            :src="author.profile == null ? '/2.webp' : `${appBaseUrl}/storage/avatars/${author.profile}`">
                    </div>
                    <div>
                        <h2
                            class="text-sm sm:text-base text-neutral-900 dark:text-neutral-100 font-medium sm:font-semibold">
                             {{ author.name }} {{ author.family }}</h2><span
                            class="block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400">نویسنده</span>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        newesUsers: {
            required: true,
            type: [Array , Object]
        }
    })

    const {appBaseUrl} = useRuntimeConfig().public
</script>