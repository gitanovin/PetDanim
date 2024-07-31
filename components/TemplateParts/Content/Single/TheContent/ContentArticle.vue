<template>
    <div v-html="content" class="prose lg:prose-lg  mx-auto dark:!text-gray-300 marker:dark:!text-gray-300 text-justify p-4"></div>
</template>

<script setup>
    const props = defineProps({
        content: {
            required: true,
            type: String
        }
    })
</script>