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

    const keywords = postData.value.post.tags.map(tag => tag.name).join(', ');

    useHead({
        title: route.params.slug.split('-').join(' '),
        meta: [
            { name: 'title', content: route.params.slug.split('-').join(' ') },
            { name: 'description', content: postData.value.post.summary_description },
            { name: 'keywords', content: keywords },
            { name: 'author', content: postData.value.post.user.name },
            { name: 'date', content: postData.value.post.date , scheme: 'YYYY-MM-DD' },
            { name: 'robots', content: 'index, follow' },
            { name: 'description', content: postData.value.post.summary_description },
            { property: 'og:title', content: route.params.slug.split('-').join(' ') },
            { property: 'og:description', content: postData.value.post.summary_description },
            { property: 'og:image', content: `${appBaseUrl}/storage/${postData.value.post.image}` },
            { property: 'og:url', content: `http://locahost:3000/post/${postData.value.post.slug}-${postData.value.post.id}` },
            { property: 'og:type', content: 'article' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: route.params.slug.split('-').join(' ') },
            { name: 'twitter:description', content: postData.value.post.summary_description },
            { name: 'twitter:image', content: `${appBaseUrl}/storage/${postData.value.post.image}` },
            { name: 'twitter:site', content: '@YourTwitterHandle' },
        ],  
        link: [
            { rel: 'canonical', href: `http://locahost:3000/post/${postData.value.post.slug}-${postData.value.post.id}` }
        ],
        script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": route.params.slug.split('-').join(' '),
                    "description": postData.value.post.summary_description,
                    "image": `${appBaseUrl}/storage/${postData.value.post.image}`,
                    "url": `http://locahost:3000/post/${postData.value.post.slug}-${postData.value.post.id}`,
                    "datePublished": postData.value.post.date,
                    "author": {
                    "@type": "Person",
                    "name": postData.value.post.user.name
                    }
                })
            }
        ]
    })
})


const getPostDetail = async () => {
    const { data } = await useFetch(`${appBaseUrl}/api/mag/userpost/get-post` , {
        params: { slug: route.params.slug }
    })
    const dataJson = data.value
    if(dataJson.status == 200) {
        setTimeout(() => {
            showLoading.value = false
        }, 500)
        postData.value = dataJson.result
        console.log(postData.value)
    }
}



getPostDetail()

</script>
