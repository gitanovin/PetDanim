<template>
  <AdvertisingBanner />

  <Header />

  <main class="bg-gray-100/50">

     <singleArticle />

 



    <Footer />
  </main>
</template>

<script setup>
import AdvertisingBanner from "@/components/Advertising/ads.vue";
import singleArticle from "@/components/Pages/SinglePage/singleArticle.vue";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/footer.vue";
</script>
