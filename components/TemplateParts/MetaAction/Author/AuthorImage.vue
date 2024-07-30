<template>
    <div
        class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-dark-900">
        <img alt="Falconar Agnes" class="absolute inset-0 w-full h-full object-cover"
            :src="authorImage == '/2.webp' ? '/2.webp' : `${appBaseUrl}/storage/admin/${authorImage}`" /><span class="wil-avatar__name">F</span>
    </div>
</template>

<script setup>

    const {appBaseUrl} = useRuntimeConfig().public
    const props = defineProps({
        authorImage: {
            required: false,
            type: String,
            default: "/2.webp"
        }
    })
</script>