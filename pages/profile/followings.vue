<template>
    <section>
        <Following />
    </section>
</template>


<script setup>
import Following from "@/components/Dashboard/Following.vue";

definePageMeta({
  layout: 'user-profile',  
  middleware: 'user-auth'
})
</script>