<template>
  <div class="bg-slate-100 dark:bg-dark-900">
    <Loading :isShow="showLoading" />
    <TagPage 
      v-if="showLoading == false && tagData != null"
      :tagData="tagData"
    />
  </div>
</template>

<script setup>
import Loading from '@/components/Loading/index.vue'
import TagPage from "@/components/TemplateParts/Tags/tagPage.vue";

import {useRoute , useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
const {appBaseUrl} = useRuntimeConfig().public
const tagData = ref(null)
const showLoading = ref(true)

onMounted(() => {
  if(!route.params.slug) {
    router.push("/")
  }
})

const getTagDetail = async () => {
    const {data} = await useFetch(`${appBaseUrl}/api/mag/tags/get` , {
      params: {
        slug: route.params.slug
      }
    })

    if(data.value.status == 200) {
      setTimeout(() => {
        showLoading.value = false
      }, 500);
      tagData.value = data.value.result
    }
}

getTagDetail()

useHead({
  title: route.params.slug.split('-').slice(0 , -1).join(' ')
})
</script>
