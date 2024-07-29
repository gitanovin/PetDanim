<template>
    <span class="block text-neutral-700 hover:text-black dark:!text-neutral-300 dark:hover:text-white font-medium">
        {{ authorname }}
    </span>
</template>

<script setup>
    const props = defineProps({
        authorname: {
            required: false,
            type: String,
            default: "کاربر مهمان"
        }
    })
</script>