<template>
    <div class="mt-8 md:mt-0 md:absolute md:top-0 md:end-0 md:bottom-0 md:w-1/2 lg:w-2/5 2xl:w-1/3">
        <div
            class="hidden md:block absolute top-0 start-0 bottom-0 w-2/4 from-neutral-900 dark:from-dark-800 bg-gradient-to-r rtl:bg-gradient-to-l">
        </div><img :alt="postData.post.title" class="block w-full h-full object-cover" 
        :src="`${appBaseUrl}/storage/posts/${postData.post.image}`">
    </div>
</template>

<script setup>
import {usePetdanimStore} from '@/store/petdanimStore.js'
import {storeToRefs} from 'pinia'

const {appBaseUrl} = useRuntimeConfig().public
const petdanimStore = usePetdanimStore()
const {postData} = storeToRefs(petdanimStore)
</script>