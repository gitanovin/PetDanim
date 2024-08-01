<template>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        <div v-for="(post , index) in category.posts" :key="post.id">
            <ContentPost :postItem="{post: post}" />
        </div>
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