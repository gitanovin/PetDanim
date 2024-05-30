<template>
  <AdvertisingBanner />

  <Header />

  <main class="bg-gray-100/50">

    <!-- <singleArticle /> -->
    <!-- <singleArticle2 /> -->
    <!-- <singleArticle3 /> -->
    <singleGallery />
    <!-- <singleVideo /> -->

    <Footer />
  </main>
</template>

<script setup>
import AdvertisingBanner from "@/components/Advertising/ads.vue";
import singleArticle from "@/components/Pages/SinglePage/singleArticle.vue";
import singleArticle2 from "@/components/Pages/SinglePage/singleArticle2.vue";
import singleArticle3 from "@/components/Pages/SinglePage/singleArticle3.vue";
import singleGallery from "@/components/Pages/SinglePage/singleGallery.vue";
import singleVideo from "@/components/Pages/SinglePage/singleVideo.vue";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/footer.vue";
</script>
