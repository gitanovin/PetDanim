<template>
  <ClientOnly>
    <main class="dark:bg-dark-900">
      <HeroSlider />
      <TopCategories />
      <TopPosts />
      <Mostand />
      <News />
      <LatestNews />
      <BannerAds />
      <Videos />
      <Tags />
    </main>
  </ClientOnly>
</template>

<script setup>
import HeroSlider from "@/components/HeroSlider/Hero.vue";
import TopCategories from "@/components/TopCategories/categories.vue";
import TopPosts from "@/components/TopPosts/posts.vue";
import Videos from "~/components/TopVideos/videos.vue";
import News from "@/components/News/news.vue";
import Mostand from "@/components/Mostanad/mostanad.vue";
import LatestNews from "@/components/LatestNews/latestnews.vue";
import BannerAds from "@/components/Banner/banner.vue";
import Tags from "@/components/Tags/tags.vue";

</script>