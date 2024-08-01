<template>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        <div v-for="(post , index) in tag.posts" :key="post.id">
            <ContentPost :postItem="{post: post}" />
        </div>
    </div>
</template>

<script setup>
import ContentPost from '../contentPostUser.vue';

const props = defineProps({
        tag: {
            required: true,
            type: [Array , Object]
        }
    })
</script>