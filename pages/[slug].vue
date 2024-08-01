<template>
    <!-- <Loading :isShow="globalLoading" /> -->
    <single
        v-if="postData != null"
    />
</template>

<script setup>
import single from "@/components/TemplateParts/Content/Single/Single.vue";
import {useRoute , useRouter} from 'vue-router'
import {usePetdanimStore} from '@/store/petdanimStore.js'
import {storeToRefs} from 'pinia'

const petdanimStore = usePetdanimStore()
const {postData , globalLoading} = storeToRefs(petdanimStore)


const {appBaseUrl} = useRuntimeConfig().public
const route = useRoute()
const router = useRouter()
const singlePostData = ref(null)



onMounted(() => {
    if(!route.params.slug) {
        router.push("/")
    }
})


const getPostDetail = async () => {
    globalLoading.value = true
    const { data } = await useFetch(`${appBaseUrl}/api/mag/single/get-post` , {
        params: { slug: route.params.slug }
    })
    const dataJson = data.value
    if(dataJson.status == 200) {
        globalLoading.value = false
        postData.value = dataJson.result
        console.log(postData.value)
    }
}

getPostDetail()

useHead({
    title: route.params.slug.split('-').join(' ')
})



</script>
