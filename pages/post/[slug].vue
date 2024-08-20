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
import single from "@/components/TemplateParts/Content/UserPost/Single/Single.vue";
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
})


watch(postData, async (newValue) => {
  if (newValue) {
    const keywords = newValue.post.tags.map(tag => tag.name).join(', ');

    useHead({
        title: route.params.slug.split('-').join(' '),
        meta: [
            { name: 'title', content: route.params.slug.split('-').join(' ') },
            { name: 'description', content: newValue.post.summary_description },
            { name: 'keywords', content: keywords },
            { name: 'author', content: newValue.post.user.name },
            { name: 'date', content: newValue.post.date , scheme: 'YYYY-MM-DD' },
            { name: 'robots', content: 'index, follow' },
            { name: 'description', content: newValue.post.summary_description },
            { property: 'og:title', content: route.params.slug.split('-').join(' ') },
            { property: 'og:description', content: newValue.post.summary_description },
            { property: 'og:image', content: `${appBaseUrl}/storage/${newValue.post.image}` },
            { property: 'og:url', content: `https://blog.petoman.com/post/${newValue.post.slug}-${newValue.post.id}` },
            { property: 'og:type', content: 'article' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: route.params.slug.split('-').join(' ') },
            { name: 'twitter:description', content: newValue.post.summary_description },
            { name: 'twitter:image', content: `${appBaseUrl}/storage/${newValue.post.image}` },
            { name: 'twitter:site', content: '@YourTwitterHandle' },
        ],  
        link: [
            { rel: 'canonical', href: `https://blog.petoman.com/post/${newValue.post.slug}-${newValue.post.id}` }
        ],
        script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": route.params.slug.split('-').join(' '),
                    "description": newValue.post.summary_description,
                    "image": `${appBaseUrl}/storage/${newValue.post.image}`,
                    "url": `https://blog.petoman.com/post/${newValue.post.slug}-${newValue.post.id}`,
                    "datePublished": newValue.post.date,
                    "author": {
                        "@type": "Person",
                        "name": newValue.post.user.name
                    }
                })
            }
        ]
    })

    await addToVisitCount()
  }
});


const getPostDetail = async () => {
    postData.value = null
    const { data } = await useFetch(`${appBaseUrl}/api/mag/userpost/get-post` , {
        params: { slug: route.params.slug }
    })
    const dataJson = data.value
    if(dataJson.status == 200) {
        setTimeout(() => {
            showLoading.value = false
        }, 500)
        postData.value = dataJson.result
    }
}



getPostDetail()


const addToVisitCount = async () => {
    await petdanimStore.add_to_visit_count({
        type: "userpost",
        item_id: postData.value.post.id
    })
}
</script>
