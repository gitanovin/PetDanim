<template>
    <div>
        <Loading :isShow="showLoading" />
        <single
            v-if="postData != null"
        />
    </div>
</template>

<script setup>
import Loading from '@/components/Loading/index.vue'
import single from "@/components/TemplateParts/Content/Single/Single.vue";
import {useRoute , useRouter} from 'vue-router'
import {usePetdanimStore} from '@/store/petdanimStore.js'
import {storeToRefs} from 'pinia'

const petdanimStore = usePetdanimStore()
const {postData} = storeToRefs(petdanimStore)


const {appBaseUrl} = useRuntimeConfig().public
const route = useRoute()
const router = useRouter()
const showLoading = ref(true)



onMounted(async () => {
    if(!route.params.slug) {
        router.push("/")
    }
})

watch(postData, (newValue) => {
  if (newValue) {
    useHead({
        title: route.params.slug.split('-').join(' '),
        meta: [
            { name: 'title', content: newValue.post.meta_title },
            { name: 'description', content: newValue.post.meta_description },
            { name: 'keywords', content: newValue.post.keywords },
            { name: 'author', content: newValue.post.author.name +' '+ newValue.post.author.family },
            { name: 'date', content: newValue.post.date , scheme: 'YYYY-MM-DD' },
            { name: 'robots', content: 'index, follow' },
            { name: 'description', content: newValue.post.meta_description },
            { property: 'og:title', content: newValue.post.meta_title },
            { property: 'og:description', content: newValue.post.meta_description },
            { property: 'og:image', content: `${appBaseUrl}/storage/${newValue.post.image}` },
            { property: 'og:url', content: `https://blog.petoman.com/${newValue.post.slug}` },
            { property: 'og:type', content: 'article' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: newValue.post.meta_title },
            { name: 'twitter:description', content: newValue.post.meta_description },
            { name: 'twitter:image', content: `${appBaseUrl}/storage/${newValue.post.image}` },
            { name: 'twitter:site', content: '@YourTwitterHandle' },
        ],  
        link: [
            { rel: 'canonical', href: `https://blog.petoman.com/${newValue.post.slug}` }
        ],
        script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": newValue.post.meta_title,
                    "description": newValue.post.meta_description,
                    "image": `${appBaseUrl}/storage/${newValue.post.image}`,
                    "url": `https://blog.petoman.com/${newValue.post.slug}`,
                    "datePublished": newValue.post.date,
                    "author": {
                        "@type": "Person",
                        "name": newValue.post.author.name +' '+ newValue.post.author.family
                    }
                })
            }
        ]
    })

    addToVisitCount()
  }
});


const getPostDetail = async () => {
    postData.value = null
    const { data } = await useFetch(`${appBaseUrl}/api/mag/single/get-post` , {
        params: { slug: route.params.slug }
    })
    const dataJson = data.value
    if(dataJson.status == 200) {
        setTimeout(() => {
            showLoading.value = false
        }, 500);

        postData.value = dataJson.result
    }
}

getPostDetail()


const addToVisitCount = async () => {
    await petdanimStore.add_to_visit_count({
        type: "adminpost",
        item_id: postData.value.post.id
    })
}




</script>
