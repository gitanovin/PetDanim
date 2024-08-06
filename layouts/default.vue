<template>
  <div>
  <!-- <AdvertisingBanner /> -->
  <Header />
  <TrackTitle />
    <slot />
  <Footer />
  </div>

</template>

<script setup>
import AdvertisingBanner from "@/components/Advertising/ads.vue";
import Header from "@/components/Header/Header.vue";
import TrackTitle from "@/components/Header/TrackTitle.vue";
import Footer from "@/components/Footer/footer.vue";
// definePageMeta({
//   colorMode: "light",
// });
</script>
