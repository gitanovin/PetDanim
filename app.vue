<template>
  <!-- https://demo.tmrwstudio.net/atlas/default/ -->
  <!-- https://ncmaz-react.vercel.app/ -->
<AdvertisingBanner/>

  <Header />

  <main class="">
    <section>
      <div class="top-slider"></div>
    </section>

    <TopCategories />

    <TopPosts />
    <News />
    <LatestNews />
    <Videos />
    <Tags />
   

    <Footer />
  </main>
</template>

<script setup>
import AdvertisingBanner from "@/components/Advertising/ads.vue";
import TopCategories from "@/components/TopCategories/categories.vue";
import TopPosts from "@/components/TopPosts/posts.vue";
import Videos from "@/components/TopVideos/videos.vue";
import News from "@/components/News/News.vue";
import LatestNews from "@/components/LatestNews/latestnews.vue";
import Tags from "@/components/Tags/tags.vue";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/footer.vue";
</script>
