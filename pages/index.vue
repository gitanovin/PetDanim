<template>
  <main class="dark:bg-dark-900" v-if="templateData.length != 0">
    <div class="w-full" v-for="(template , index) in templateData" :key="index">
      <TopSliderSection v-if="template.type == 'sectionOne'" class="dark:!bg-dark-900/30 bg-gray-50 py-4 lg:py-16">
        <Splide :options="{
            perPage: 3,
            perMove: 1,
            direction: 'rtl',
            type: 'loop',
            gap: '20px',
            padding: '4rem',
            pagination: false,
            autoplay: true,
            interval: 300000,
            arrows: true,
            focus: 'center',

            breakpoints: {
              400: {
                perPage: 1,
                padding: '4rem',
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
              1080: {
                perPage: 2,
                padding: '4rem',
                gap: '1rem',
              },
              1920: {
                perPage: 3,
                padding: '4rem',
                gap: '1rem',
              },
              3000: {
                perPage: 3,
                padding: '4rem',
                gap: '1rem',
              },
              4000: {
                perPage: 3,
                padding: '4rem',
                gap: '1rem',
              },
            },
          }">
          <SplideSlide v-for="(post , index) in template.categories[0].posts" :key="index" class="splide__slide rounded-lg">
            <contentSlider :post="post" />
          </SplideSlide>
        </Splide>
      </TopSliderSection>

      <BlogSection v-if="template.type == 'sectionTwo'" class="dark:!bg-dark-900/30 bg-gray-50 py-16 lg:py-16">
        <HeaderSection :icon="template.icon" :title="template.title" />
        <Grid class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <contentCategory :categories="template.categories" />
        </Grid>
      </BlogSection>

      <!-- <=======START BLOG SECTION POST-V-2==========> -->
      <BlogSection v-if="template.type == 'sectionThree'" class="dark:!bg-dark-700/25 bg-gray-50 py-16 lg:py-16">
        <HeaderSection :icon="template.icon" :title="template.title" />
        <ContentPost>
          <Splide :options="{
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
            }">
            <SplideSlide v-for="(post , index) in template.categories[0].posts" :key="index" class="splide__slide rounded-lg">
              <content2 :post="post" />
            </SplideSlide>
          </Splide>
        </ContentPost>
      </BlogSection>
      <!-- <=======END BLOG SECTION POST-V-2==========> -->

      <!-- <=======START BLOG SECTION POST-V-1==========> -->
      <BlogSection v-if="template.type == 'sectionFour'" class="dark:!bg-dark-800 bg-white py-16 lg:py-16">
        <Header-Section :icon="template.icon" :title="template.title">
          <TabsSection class="mb-8" />
        </Header-Section>

        <Grid class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-4">
          <contentBigPost />
          <Content-List-Slot>
            <content-List />
          </Content-List-Slot>
        </Grid>
      </BlogSection>
      <!-- <=======END BLOG SECTION POST-V-1==========> -->

      <BlogSection v-if="template.type == 'sectionFive'" class="dark:!bg-dark-800/70 py-16 lg:py-16">
        <HeaderSection :icon="template.icon" :title="template.title"> </HeaderSection>

        <ContentPost>
          <Splide :options="postSliderNews">
            <SplideSlide v-for="(post , index) in template.categories[0].posts" :key="index"  class="splide__slide rounded-lg">
              <contentVideo :post="post" />
            </SplideSlide>
          </Splide>
        </ContentPost>
      </BlogSection>
      <!-- <=======END BLOG SECTION POST-V-1==========> -->

      <BlogSection v-if="template.type == 'sectionSix'" class="dark:!bg-dark-900/30 bg-gray-50 py-16 lg:py-16">
        <HeaderSection :icon="template.icon" :title="template.title"></HeaderSection>
        <Grid class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <contentTag :tags="template.tags" />
        </Grid>
      </BlogSection>
    </div>

    <!-- <=======START BLOG SECTION POST-V-1==========> -->
    <!-- <BlogSection class="dark:!bg-dark-800 bg-white py-16 lg:py-16">
      <HeaderSection>
        <TabsSection class="mb-8" />
      </HeaderSection>

      <ContentPost
        class="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 lg:px-0">
        <content />

        <contentGallerySlide />
      </ContentPost>
    </BlogSection> -->
    <!-- <=======END BLOG SECTION POST-V-1==========> -->

    <!-- <=======START BLOG SECTION POST-V-1==========> -->
    <!-- <BlogSection class="dark:!bg-dark-900/30 bg-gray-50 py-16 lg:py-16">
      <HeaderSection/>

      <ContentPost>
        <Splide :options="postSliderOptions">
          <SplideSlide class="splide__slide rounded-lg">
            <content />
          </SplideSlide>
        </Splide>
      </ContentPost>
    </BlogSection> -->
    <!-- <=======END BLOG SECTION POST-V-1==========> -->

    <!-- <BlogSection class="dark:!bg-dark-900/30 bg-gray-50 py-16 lg:py-16">
      <BannerAds class="px-6 lg:px-0" />
    </BlogSection> -->

    <!-- <=======START BLOG SECTION POST-V-1==========> -->
  </main>
</template>

<script setup>
import sliderConfig from "@/configs/sliderConfig";
import BlogSection from "@/components/TemplateParts/Section/BlogSection.vue";
import TopSliderSection from "@/components/TemplateParts/Section/TopSliderSection.vue";
import ContentListSlot from "@/components/TemplateParts/Content/ContentListSlot.vue";
import ContentPost from "~/components/TemplateParts/Content/ContentPostSlot.vue";
import HeaderSection from "@/components/TemplateParts/Header/header.vue";
import TabsSection from "@/components/TemplateParts/Header/Tabs/tabs.vue";
import Grid from "@/components/TemplateParts/Grid/Grid.vue";
import content from "@/components/TemplateParts/contentPost.vue";
import content2 from "@/components/TemplateParts/contentPost2.vue";
import contentBigPost from "@/components/TemplateParts/contentBigPost.vue";
import contentList from "@/components/TemplateParts/contentList.vue";
import contentVideo from "@/components/TemplateParts/contentVideo.vue";
import contentSlider from "@/components/TemplateParts/contentSlider.vue";
import contentTag from "@/components/TemplateParts/contentTag.vue";
import contentGallerySlide from "@/components/TemplateParts/contentGallerySlide.vue";
import contentCategory from "@/components/TemplateParts/contentCategory.vue";
import BannerAds from "@/components/Banner/banner.vue";
import {usePetdanimStore} from '@/store/petdanimStore.js'


const petdanimStore = usePetdanimStore()
const postSliderOptions = ref(sliderConfig[0]);

const postSliderNews = ref(sliderConfig[1]);
const templateData = ref([])


onMounted(async () => {
  const result = await petdanimStore.getTemplatesData()
  if(result.status == 200) {
    templateData.value = result.result
  }
})
</script>


