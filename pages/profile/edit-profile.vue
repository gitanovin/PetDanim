<template>
    <section>
        <EditProfile />
    </section>
</template>


<script setup>
import EditProfile from "@/components/Dashboard/EditProfile.vue";

definePageMeta({
  layout: 'user-profile',  
  middleware: 'user-auth'
})
</script>