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
          <TabsSection 
          @activeCat="(index) => activeCategoryTab(index)"
          :categories="template.categories" class="mb-8"
          :activeCatIndex="activeCatIndex" />
        </Header-Section>

        <Grid v-if="template.categories.length != 0" class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-4">
          <contentBigPost 
            v-if="template.categories[activeCatIndex].posts.length != 0"
            :post="template.categories[activeCatIndex].posts[0]"
          />
          <div class="ContentList">
            <div class="grid gap-6 md:gap-4">
              <content-List :posts="template.categories[activeCatIndex].posts" />
            </div>
          </div>
        </Grid>
      </BlogSection>
      <!-- <=======END BLOG SECTION POST-V-1==========> -->

      <BlogSection v-if="template.type == 'sectionFive'" class="dark:!bg-dark-800/70 py-16 lg:py-16">
        <HeaderSection :icon="template.icon" :title="template.title"> </HeaderSection>

        <ContentPost>
          <Splide :options="postSliderNews">
            <SplideSlide v-for="(post , index) in template.categories[0].posts" :key="index"  class="splide__slide rounded-lg">
              <contentVideo @showPrompt="(data) => openPrompt(data)" :post="post" />
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

    <promptModal
        :show="showPromptModal"
        :title="promptTitle"
        :message="promptText"
        @confirm="handleConfirm('bookmark')"
        @cancel="handleCancel"
        :isLoading="isLoadingPrompt"
    />
  </main>
</template>

<script setup>
import promptModal from '@/components/TemplateParts/Modal/promptModal.vue'
import sliderConfig from "@/configs/sliderConfig";
import BlogSection from "@/components/TemplateParts/Section/BlogSection.vue";
import TopSliderSection from "@/components/TemplateParts/Section/TopSliderSection.vue";
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
import {useRouter} from 'vue-router'
import {storeToRefs} from 'pinia'

const petdanimStore = usePetdanimStore()
const {authUser} = storeToRefs(petdanimStore)
const router = useRouter()
const activeCatIndex = ref(0)
const postSliderOptions = ref(sliderConfig[0]);
const isLoadingPrompt = ref(false)

const promptTitle = ref("")
const promptText = ref("")
const promptPostId = ref(null)
const bookmarkState = ref(false)

const postSliderNews = ref(sliderConfig[1]);
const templateData = ref([])

const showPromptModal = ref(false)
const {appBaseUrl} = useRuntimeConfig().public

const getTemplatesData = async () => {
  const { data } = await useFetch(`${appBaseUrl}/api/mag/home/get-template-data`)
  const dataJson = data.value

  if(dataJson.status == 200) {
    templateData.value = dataJson.result
  }
}

const activeCategoryTab = (index) => {
  activeCatIndex.value = index
}

getTemplatesData()

const openPrompt = (data) => {
  showPromptModal.value = true
  if(authUser.value == null) {
    promptTitle.value = "ورود به حساب"
    promptText.value = "جهت ذخیره پست ابتدا باید وارد حساب کاربری شوید ، آیا میخواهید وارد شوید؟"
    promptPostId.value = data.post_id
    bookmarkState.value = data.bookmarkState
  }else {  
    promptTitle.value = data.bookmarkState == true ? "حذف از لیست ذخیره ها" : "ذخیره نوشته"
    promptText.value  =  data.bookmarkState == true ? "آیا میخواهید این نوشته از لیست ذخیره های شما حذف شود؟" : "آیا میخواهید این نوشته به لیست ذخیره های شما اضافه شود؟" 
    promptPostId.value = data.post_id
    bookmarkState.value = data.bookmarkState
  }
}

const handleConfirm = (type) => {
  if(type == "bookmark") {
    if(authUser.value == null) {
      router.push("/auth/login")
    }else {
      isLoadingPrompt.value = true
      if(bookmarkState.value == false) {
        saveToBookmark(promptPostId.value)
      }else {
        removeFromBookmark(promptPostId.value)
      }
    }
  }
}

const handleCancel = () => {
  showPromptModal.value = false
}

const saveToBookmark = async (postId) => {
  const result = await petdanimStore.saveToBookmark({postId: postId})
  if(result.status == 200) {
    isLoadingPrompt.value = false
    showPromptModal.value = false
    authUser.value.bookmarks = result.result
    // console.log(result.result)
  }else {
    isLoadingPrompt.value = false
  }
}

const removeFromBookmark = async (postId) => {
  const result = await petdanimStore.removeFromBookmark({postId: postId})
  if(result.status == 200) {
    isLoadingPrompt.value = false
    showPromptModal.value = false
    console.log(result.result)
  }else {
    isLoadingPrompt.value = false
  }
}
</script>


