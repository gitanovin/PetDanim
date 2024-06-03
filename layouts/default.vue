<template>
  <AdvertisingBanner />
  <Header />
  <TrackTitle />
  <slot />
  <Footer />
  <transition-group name="modal">
    <SearchModal v-if="OpenSearchModal" @closeModal="OpenSearchModal = false" />
  </transition-group>
</template>

<script setup>
import AdvertisingBanner from "@/components/Advertising/ads.vue";
import Header from "@/components/Header/Header.vue";
import TrackTitle from "@/components/Header/TrackTitle.vue";
import Footer from "@/components/Footer/footer.vue";
import SearchModal from "@/components/Pages/Archive/Modal/Search/searchModal.vue";
definePageMeta({
  colorMode: "light",
});
</script>
