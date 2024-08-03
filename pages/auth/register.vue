<template>
  <main class="font-iransans">
    <Loading :isShow="showLoading" />
    <SignUp v-if="showLoading == false"/>
  </main>
</template>
<script setup>
import Loading from '@/components/Loading/index.vue'
import SignUp from "@/components/Auth/SignUp.vue";

const showLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    showLoading.value = false
  }, 500);
})



definePageMeta({
  layout: 'login',
  middleware: 'user-guest'
})
</script>
