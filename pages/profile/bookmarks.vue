<template>
    <section>
        <Bookmarks />
    </section>
</template>


<script setup>
import Bookmarks from "@/components/Dashboard/Bookmarks.vue";

definePageMeta({
  layout: 'user-profile',  
  middleware: 'user-auth'
})
</script>