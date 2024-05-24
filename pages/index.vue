<template>
  <ClientOnly>
    <AdvertisingBanner />
    <Header />
    <!-- <TrackTitle /> -->
    <main class="">
      <HeroSlider />
      <TopCategories />
      <TopPosts />
      <Mostand />
      <News />
      <LatestNews />
      <BannerAds />
      <Videos />
      <Tags />
      <Footer />
    </main>
  </ClientOnly>
</template>

<script setup>
import AdvertisingBanner from "@/components/Advertising/ads.vue";
import HeroSlider from "@/components/HeroSlider/Hero.vue";
import TopCategories from "@/components/TopCategories/categories.vue";
import TopPosts from "@/components/TopPosts/posts.vue";
import Videos from "~/components/TopVideos/videos.vue";
import News from "@/components/News/news.vue";
import Mostand from "@/components/Mostanad/mostanad.vue";
import LatestNews from "@/components/LatestNews/latestnews.vue";
import BannerAds from "@/components/Banner/banner.vue";
import Tags from "@/components/Tags/tags.vue";
import Header from "@/components/Header/Header.vue";
// import TrackTitle from "@/components/Header/TrackTitle.vue";
import Footer from "@/components/Footer/footer.vue";
</script>
