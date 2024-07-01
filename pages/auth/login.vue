<template>
  <main class="font-iransans">
    <Login />
  </main>
</template>
<script setup>
import Login from "@/components/Auth/Login.vue";

definePageMeta({
  layout: 'login',
  middleware: 'user-guest'
})
</script>