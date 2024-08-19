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



onMounted(() => {
    if(!route.params.slug) {
        router.push("/")
    }

    useHead({
        title: route.params.slug.split('-').join(' '),
        meta: [
            { name: 'title', content: postData.value.post.meta_title },
            { name: 'description', content: postData.value.post.meta_description },
            { name: 'keywords', content: postData.value.post.keywords },
            { name: 'author', content: postData.value.post.author.name +' '+ postData.value.post.author.family },
            { name: 'date', content: postData.value.post.date , scheme: 'YYYY-MM-DD' },
            { name: 'robots', content: 'index, follow' },
            { name: 'description', content: postData.value.post.meta_description },
            { property: 'og:title', content: postData.value.post.meta_title },
            { property: 'og:description', content: postData.value.post.meta_description },
            { property: 'og:image', content: `${appBaseUrl}/storage/${postData.value.post.image}` },
            { property: 'og:url', content: `https://blog.petoman.com/${postData.value.post.slug}` },
            { property: 'og:type', content: 'article' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: postData.value.post.meta_title },
            { name: 'twitter:description', content: postData.value.post.meta_description },
            { name: 'twitter:image', content: `${appBaseUrl}/storage/${postData.value.post.image}` },
            { name: 'twitter:site', content: '@YourTwitterHandle' },
        ],  
        link: [
            { rel: 'canonical', href: `https://blog.petoman.com/${postData.value.post.slug}` }
        ],
        script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": postData.value.post.meta_title,
                    "description": postData.value.post.meta_description,
                    "image": `${appBaseUrl}/storage/${postData.value.post.image}`,
                    "url": `https://blog.petoman.com/${postData.value.post.slug}`,
                    "datePublished": postData.value.post.date,
                    "author": {
                        "@type": "Person",
                        "name": postData.value.post.author.name +' '+ postData.value.post.author.family
                    }
                })
            }
        ]
    })
})


const getPostDetail = async () => {
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





</script>
