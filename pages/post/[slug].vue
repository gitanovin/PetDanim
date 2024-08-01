<template>
    <single
        v-if="postData != null"
    />
</template>

<script setup>
import single from "@/components/TemplateParts/Content/UserPost/Single/Single.vue";
import {useRoute , useRouter} from 'vue-router'
import {usePetdanimStore} from '@/store/petdanimStore.js'
import {storeToRefs} from 'pinia'

const petdanimStore = usePetdanimStore()
const {postData} = storeToRefs(petdanimStore)


const {appBaseUrl} = useRuntimeConfig().public
const route = useRoute()
const router = useRouter()
const singlePostData = ref(null)
const pageMeataData = reactive({
    title: ""
})


onMounted(() => {
    if(!route.params.slug) {
        router.push("/")
    }
})


const getPostDetail = async () => {
    const { data } = await useFetch(`${appBaseUrl}/api/mag/userpost/get-post` , {
        params: { slug: route.params.slug }
    })
    const dataJson = data.value
    if(dataJson.status == 200) {
        postData.value = dataJson.result
    }
}

useHead({
    title: route.params.slug.split('-').join(' ')
})

getPostDetail()

</script>
