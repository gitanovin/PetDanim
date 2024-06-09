<template>
    <div>
        <div class="mt-10 px-6 mx-auto w-full max-w-7xl my-8 lg:px-0">
            <div
                class="SingleContent space-y-10 dark:!text-gray-300">
                <div 
                    class="relative rounded-lg lg:bg-white lg:dark:bg-dark-800 lg:border lg:dark:border-dark-700/20 lg:p-4">
                    <ContentPage />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ContentPage from "~/components/TemplateParts/Content/Single/TheContent/ContentPage.vue";
</script>