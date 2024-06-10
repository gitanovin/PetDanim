<template>
    <div class="container relative pt-6 sm:pt-10 pb-16 lg:pt-20 lg:pb-28">
        <div
            class="p-5 mx-auto bg-white rounded-xl sm:rounded-3xl lg:rounded-[40px]  sm:p-10 lg:p-16 dark:bg-neutral-900">
            <div class="nc-PageDashboard">
                <header class="text-center max-w-2xl mx-auto - mb-14 sm:mb-16 lg:mb-24">
                    <h2
                        class="flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                        پیشخوان</h2><span
                        class="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200"></span>
                </header>
                <div class="flex flex-col space-y-8 xl:space-y-0 xl:flex-row">
                    <Tabs />
                    <div class="border-t border-neutral-500 dark:border-neutral-300 md:hidden"></div>
                    <SubmitPost />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Tabs from "./Tabs.vue";
import SubmitPost from "./SubmitPost.vue";
</script>
