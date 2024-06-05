<template>
  <ClientOnly>
    <main class="dark:bg-dark-900">
      <HeroSlider />
      <TopCategories />

      <!-- <=======START BLOG SECTION POST-V-2==========> -->
      <BlogSection class="dark:!bg-dark-700/25">
        <HeaderSection />
        <ContentPost>
          <Splide
            :options="{
              perPage: 4,
              type: 'loop',
              direction: 'rtl',
              gap: '20px',
              breakpoints: {
                400: {
                  perPage: 1,
                  padding: '4rem',
                  gap: '1rem',
                },
                640: {
                  perPage: 1,
                  padding: '4rem',
                  gap: '1rem',
                },
                768: {
                  perPage: 2,
                  padding: '4rem',
                  gap: '1rem',
                },

                     819: {
                  perPage: 2,
                  padding: '4rem',
                  gap: '1rem',
                },

                1080: {
                  perPage: 3,
                  padding: '4rem',
                  gap: '1rem',
                },
                1280: {
                  perPage: 3,
                  padding: '4rem',
                  gap: '1rem',
                },
              },
            }"
          >
            <SplideSlide class="splide__slide rounded-lg SliderPost">
              <content2 />
            </SplideSlide>
          </Splide>
        </ContentPost>
      </BlogSection>
      <!-- <=======END BLOG SECTION POST-V-2==========> -->

      <!-- <=======START BLOG SECTION POST-V-1==========> -->
      <BlogSection class="dark:!bg-dark-800">
        <HeaderSection>
          <TabsSection />
        </HeaderSection>

        <ContentPost
          class="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  px-6 lg:px-0"
        >
          <content />
        </ContentPost>
      </BlogSection>
      <!-- <=======END BLOG SECTION POST-V-1==========> -->

      <!-- <=======START BLOG SECTION POST-V-1==========> -->
      <BlogSection class="dark:!bg-dark-900/30">
        <HeaderSection> </HeaderSection>

        <ContentPost>
          <Splide
            :options="{
              perPage: 4,
              type: 'loop',
              direction: 'rtl',
              gap: '20px',
              breakpoints: {
                400: {
                  perPage: 1,
                  padding: '4rem',
                  gap: '1rem',
                },
                640: {
                  perPage: 1,
                  padding: '4rem',
                  gap: '1rem',
                },
                768: {
                  perPage: 2,
                  padding: '4rem',
                  gap: '1rem',
                },
                 819: {
                  perPage: 2,
                  padding: '4rem',
                  gap: '1rem',
                },
                1080: {
                  perPage: 3,
                  padding: '4rem',
                  gap: '1rem',
                },
              },
            }"
          >
            <SplideSlide class="splide__slide rounded-lg">
              <content />
            </SplideSlide>
          </Splide>
        </ContentPost>
      </BlogSection>
      <!-- <=======END BLOG SECTION POST-V-1==========> -->

      <!-- <=======START BLOG SECTION POST-V-1==========> -->
      <BlogSection class="dark:!bg-dark-800">
        <Header-Section>
          <TabsSection />
        </Header-Section>

        <Content-Post-Big-Slot class="  px-6 lg:px-0">
          <content-Big-Post />
          <Content-List-Slot>
            <content-List />
          </Content-List-Slot>
        </Content-Post-Big-Slot>
      </BlogSection>
      <!-- <=======END BLOG SECTION POST-V-1==========> -->


      <BannerAds />







     <!-- <=======START BLOG SECTION POST-V-1==========> -->
      <BlogSection class="dark:!bg-dark-800/70">
        <HeaderSection> </HeaderSection>

        <ContentPost>
       <Splide :options="{
              perPage: 3,
              type: 'loop',
              direction: 'rtl',
              gap: '10px',
              //   padding: '0',
              //   focus: 'center',
              breakpoints: {
                400: {
                  perPage: 1,
                  padding: '2rem',
                  gap: '1rem',
                },
                640: {
                  perPage: 1,
                  padding: '2rem',
                  gap: '1rem',
                },
                768: {
                  perPage: 1,
                  padding: '2rem',
                  gap: '1rem',
                },
              },
            }">
            <SplideSlide class="splide__slide rounded-lg">
              <contentVideo />
            </SplideSlide>
          </Splide>
        </ContentPost>
      </BlogSection>
      <!-- <=======END BLOG SECTION POST-V-1==========> -->









      <Tags />
    </main>
  </ClientOnly>
</template>

<script setup>
import HeroSlider from "@/components/HeroSlider/Hero.vue";
import TopCategories from "@/components/TopCategories/categories.vue";
import Videos from "~/components/TopVideos/videos.vue";
import BlogSection from "@/components/TemplateParts/Section/BlogSection.vue";
import ContentListSlot from "@/components/TemplateParts/Content/ContentListSlot.vue";
import ContentPostBigSlot from "@/components/TemplateParts/Content/ContentPostBigSlot.vue";
import ContentPost from "@/components/TemplateParts/Content/ContentPost.vue";
import HeaderSection from "@/components/TemplateParts/Header/header.vue";
import TabsSection from "@/components/TemplateParts/Header/Tabs/tabs.vue";

import content from "@/components/TemplateParts/contentPost.vue";
import content2 from "@/components/TemplateParts/contentPost2.vue";
import contentBigPost from "@/components/TemplateParts/contentBigPost.vue";
import contentList from "@/components/TemplateParts/contentList.vue";
import contentVideo from "@/components/TemplateParts/contentVideo.vue";
import BannerAds from "@/components/Banner/banner.vue";
import Tags from "@/components/Tags/tags.vue";
</script>
