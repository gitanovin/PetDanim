<template>
    <section>
        <CreatePost />
    </section>
</template>


<script setup>
import CreatePost from "@/components/Dashboard/SubmitPost.client.vue";

definePageMeta({
  layout: 'user-profile',  
  middleware: 'user-auth'
})
</script>