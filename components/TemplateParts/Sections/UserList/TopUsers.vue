<template>
    <section class="bg-gray-50 py-16 px-5 dark:bg-dark-700/20">
        <div class="mx-auto  w-full xl:max-w-7xl">
            <div
                class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
                <div class="w-full flex items-center justify-between">
                    <h2 class="text-2xl md:text-3xl lg:text-2xl font-bold flex items-center">
                        <UserIcon class="w-12 rounded-lg ml-2 p-2 bg-orange-500 text-white" />
                        <span>نویسندگان برتر</span>
                    </h2>
                    <button
                        class="flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent text-sm sm:text-base font-medium !hidden md:!flex">
                        <span>مشاهده همه </span>
                        <IconsLeftArrow class="w-4" />
                    </button>
                </div>
            </div>
            <div class="nc-MySlider">
                <div class="relative flow-root">
                    <div class="flow-root overflow-hidden rounded-xl">
                        <div class="relative whitespace-nowrap rounded-xl">
                            <Splide :options="{
                                perPage: 5,
                                type: 'loop',
                                direction: 'rtl',
                                gap: '20px',
                                breakpoints: {
                                    400: {
                                        perPage: 1,
                                        padding: '4rem',
                                        gap: '1rem',
                                    },
                                    640: {
                                        perPage: 1,
                                        padding: '4rem',
                                        gap: '1rem',
                                    },
                                    768: {
                                        perPage: 3,
                                        padding: '4rem',
                                        gap: '1rem',
                                    },
                                    1080: {
                                        perPage: 4,
                                        padding: '4rem',
                                        gap: '1rem',
                                    },
                                },
                            }">
                                <SplideSlide v-for="(author , index) in topUsers" :key="author.id" class="splide__slide rounded-lg">
                                    <div class="relative inline-block whitespace-normal w-full">
                                        <nuxt-link :to="`/archive/author/${author.username}`" class="nc-CardAuthorBox2 flex flex-col overflow-hidden bg-white dark:bg-dark-800 rounded-3xl"
                                            >
                                            <div class="relative flex-shrink-0">
                                                <div>
                                                    <div class="flex aspect-w-7 aspect-h-5 w-full h-0">
                                                        <img alt="author" class="object-cover w-full h-full"
                                                        :src="author.profile == null ? '/2.webp' : `${appBaseUrl}/storage/avatars/${author.profile}`" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="-mt-8 m-8 text-center">
                                                <div
                                                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-16 h-16 text-2xl ring-2 ring-white">
                                                    <img alt="Truelock Alric"
                                                        class="absolute inset-0 w-full h-full object-cover"
                                                        :src="author.profile == null ? '/2.webp' : `${appBaseUrl}/storage/avatars/${author.profile}`" />
                                                </div>
                                                <div class="mt-3">
                                                    <h2 class="text-base font-medium">
                                                        <span class="line-clamp-1">{{ author.name }} {{ author.family }} </span>
                                                    </h2>
                                                    <span
                                                        class="block mt-1 text-sm text-orange-500 dark:text-neutral-400 ltr">@{{ author.username }}</span>
                                                </div>
                                            </div>
                                        </nuxt-link>
                                    </div>
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconsLeftArrow from "@/components/icons/LeftArrow.vue";
import UserIcon from "@/components/icons/UserIcon.vue";


const props = defineProps({
    topUsers: {
        required: true,
        type: [Array , Object]
    }
})

const {appBaseUrl} = useRuntimeConfig().public

</script>