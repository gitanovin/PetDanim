<template>
  <div>
    <!-- <AdvertisingBanner /> -->
    <Header />
    <TrackTitle />
    <div class="relative w-full max-w-7xl mx-auto px-4 xl:px-0">
      <div class="mx-auto my-8">
        <div class="nc-PageDashboard">
          <div class="flex flex-col space-y-8 xl:space-y-0 xl:flex-row">
            <Tabs />

            <div
              class="border-t border-neutral-200 dark:border-dark-700/20 md:hidden"
            ></div>
            <div class="w-full">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Tabs from "@/components/Dashboard/Tabs.vue";
import AdvertisingBanner from "@/components/Advertising/ads.vue";
import Header from "@/components/Header/Header.vue";
import TrackTitle from "@/components/Header/TrackTitle.vue";
import Footer from "@/components/Footer/footer.vue";
</script>
