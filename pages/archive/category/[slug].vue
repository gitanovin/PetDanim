<template>
  <div class="bg-slate-100 dark:bg-dark-900">
    <Category 
      v-if="categoryData != null"
      :categoryData="categoryData"
    />
    <!-- <CategoryVideo /> -->
  </div>
</template>

<script setup>
import Category from "@/components/TemplateParts/Category/categoryPage.vue";
// import CategoryVideo from "@/components/TemplateParts/Category/categoryVideo.vue";
import {useRoute , useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
const {appBaseUrl} = useRuntimeConfig().public
const categoryData = ref(null)

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
    console.log(data.value)
    if(data.value.status == 200) {
        categoryData.value = data.value.result
    }
}

getCategoryDetail()

useHead({
  title: route.params.slug.split('-').slice(0 , -1).join(' ')
})
</script>
