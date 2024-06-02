<template>
  <AdvertisingBanner />

  <Header />

  <main class="bg-gray-100/50">

    <!-- <SearchPage /> -->
        <SearchPage2 />

    <Footer />
  </main>
</template>

<script setup>
import AdvertisingBanner from "@/components/Advertising/ads.vue";
import SearchPage from "@/components/Pages/Archive/Search/SearchPage.vue";
import SearchPage2 from "@/components/Pages/Archive/Search/SearchPage2.vue";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/footer.vue";
</script>
