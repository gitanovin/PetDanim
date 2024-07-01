<template>
  <main class="font-iransans">
    <SignUp />
  </main>
</template>
<script setup>
import SignUp from "@/components/Auth/SignUp.vue";
definePageMeta({
  layout: 'login',
  middleware: 'user-guest'
})
</script>
