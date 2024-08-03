<template>
  <main class="font-iransans">
    <Loading :isShow="showLoading" />
    <Login v-if="showLoading == false" />
  </main>
</template>
<script setup>
import Loading from '@/components/Loading/index.vue'
import Login from "@/components/Auth/Login.vue";

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