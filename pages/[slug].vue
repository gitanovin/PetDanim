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

useHead({
    title: route.params.slug.split('-').join(' ')
})



</script>
