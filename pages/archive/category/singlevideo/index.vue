<template>
  <AdvertisingBanner />

  <Header />

  <main class="bg-gray-100/50">

    <CategoryVideo />

    <Footer />
  </main>
</template>

<script setup>
import AdvertisingBanner from "@/components/Advertising/ads.vue";
import CategoryVideo from "@/components/Pages/Archive/Category/categoryVideo.vue";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/footer.vue";
</script>
