<template>
    <span class="absolute inset-0 flex items-center justify-center">
        <div class="hover:scale-105 transform cursor-pointer transition-transform">
            <span
                class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11">
                <PostTypeIcon />
            </span>
        </div>
    </span>
</template>
<script setup>
import PostTypeIcon from "@/components/icons/Video.vue";
</script>