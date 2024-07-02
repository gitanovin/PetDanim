<template>
    <section>
        <Posts />
    </section>
</template>


<script setup>
import Posts from "@/components/Dashboard/Posts.vue";

definePageMeta({
  layout: 'user-profile',  
  middleware: 'user-auth'
})
</script>