<template>
  <div class="bg-slate-100 dark:bg-dark-900">
    <Loading :isShow="showLoading" />
    <Category 
      v-if="categoryData != null && showLoading == false"
      :categoryData="categoryData"
    />
    <!-- <CategoryVideo /> -->
  </div>
</template>

<script setup>
import Loading from '@/components/Loading/index.vue'
import Category from "@/components/TemplateParts/Category/categoryPage.vue";
// import CategoryVideo from "@/components/TemplateParts/Category/categoryVideo.vue";
import {useRoute , useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
const {appBaseUrl} = useRuntimeConfig().public
const categoryData = ref(null)
const showLoading = ref(true)

onMounted(() => {
  if(!route.params.slug) {
    router.push("/")
  }
})

const getCategoryDetail = async () => {
    const {data} = await useFetch(`${appBaseUrl}/api/mag/categories/get` , {
      params: {
        slug: route.params.slug
      }
    })
    if(data.value.status == 200) {
        setTimeout(() => {
            showLoading.value = false
        }, 500);
        categoryData.value = data.value.result
    }
}

getCategoryDetail()

useHead({
  title: route.params.slug.split('-').slice(0 , -1).join(' ')
})
</script>
