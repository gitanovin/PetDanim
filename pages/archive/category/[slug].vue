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
import {usePetdanimStore} from '@/store/petdanimStore.js'

const petdanimStore = usePetdanimStore()

const route = useRoute()
const router = useRouter()
const {appBaseUrl} = useRuntimeConfig().public
const categoryData = ref(null)
const showLoading = ref(true)

onMounted(async () => {
  if(!route.params.slug) {
    router.push("/")
  }
})


watch(categoryData, (newValue) => {
  if (newValue) {
    useHead({
      title: `دسته‌بندی: ${newValue.title}`,
      meta: [
        { name: 'title', content: `دسته‌بندی: ${newValue.title}` },
        { name: 'description', content: newValue.title },
        { name: 'keywords', content: `${newValue.title}, مقالات مرتبط, تخصص‌ها` },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `دسته‌بندی: ${newValue.title}` },
        { property: 'og:description', content: newValue.title },
        { property: 'og:image', content: `${appBaseUrl}/storage/categories/${newValue.cat_image}` },
        { property: 'og:url', content: `https://blog.petoman.com/archive/category/${newValue.title}-${newValue.id}` },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fa_IR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `دسته‌بندی: ${newValue.title}` },
        { name: 'twitter:description', content: newValue.title },
        { name: 'twitter:image', content: `${appBaseUrl}/storage/categories/${newValue.cat_image}` },
        { name: 'twitter:site', content: '@YourTwitterHandle' },
      ],
      link: [
        { rel: 'canonical', href: `https://blog.petoman.com/archive/category/${newValue.title}-${newValue.id}` }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Category",
            "name": newValue.title,
            "description": newValue.title,
            "url": `https://blog.petoman.com/archive/category/${newValue.title}-${newValue.id}`,
            "image": `${appBaseUrl}/storage/categories/${newValue.cat_image}`
          })
        }
      ]
    });

    addToVisitCount()
  }
});

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


const addToVisitCount = async () => {
    await petdanimStore.add_to_visit_count({
        type: "category",
        item_id: categoryData.value.id
    })
}


</script>
