<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        <ContentPost v-for="(post , index) in category.posts" :key="post.id" :postItem="{post: post}" />
    </div>
</template>

<script setup>
import ContentPost from '../contentPost.vue';

    const props = defineProps({
        category: {
            required: true,
            type: [Array , Object]
        }
    })
</script>