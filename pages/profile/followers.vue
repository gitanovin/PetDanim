<template>
    <section>
        <Followers />
    </section>
</template>


<script setup>
import Followers from "@/components/Dashboard/Followers.vue";

definePageMeta({
  layout: 'user-profile',  
  middleware: 'user-auth'
})
</script>