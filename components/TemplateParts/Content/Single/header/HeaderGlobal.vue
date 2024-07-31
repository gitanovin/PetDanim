<template>
    <div class="global-headers">
        <!-- <HeaderArticleOne class="mx-auto w-full max-w-7xl lg:mt-16" /> -->
        <HeaderArticleTwo
            v-if="postData.post.post_type == 'text'" 
            class="mx-auto w-full border-y dark:border-dark-700/20" 
         /> 
        <HeaderGallery
            v-if="postData.post.post_type == 'gallery'" 
            class="mx-auto w-full max-w-7xl lg:mt-16" 
         />
        <HeaderVideo
            v-if="postData.post.post_type == 'video'" 
            class="mx-auto w-full max-w-7xl lg:mt-16 lg:px-0 px-4" 
         />
    </div>

</template>

<script setup>
import HeaderArticleOne from "./HeaderArticleOne.vue";
import HeaderArticleTwo from "./HeaderArticleTwo.vue";
import HeaderGallery from "./HeaderGallery.vue";
import HeaderVideo from "./HeaderVideo.vue";

import {usePetdanimStore} from '@/store/petdanimStore.js'
import {storeToRefs} from 'pinia'

const petdanimStore = usePetdanimStore()
const {postData} = storeToRefs(petdanimStore)
</script>