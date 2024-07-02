<template>
    <section>
        <Favorites />
    </section>
</template>


<script setup>
import Favorites from "@/components/Dashboard/Favorites.vue";

definePageMeta({
  layout: 'user-profile',  
  middleware: 'user-auth'
})
</script>