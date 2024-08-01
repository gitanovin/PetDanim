<template>
    <div class="global-headers">
        <HeaderArticleTwo
            class="mx-auto w-full border-y dark:border-dark-700/20" 
        /> 
    </div>

</template>

<script setup>
import HeaderArticleTwo from "./HeaderArticleTwo.vue";

import {usePetdanimStore} from '@/store/petdanimStore.js'
import {storeToRefs} from 'pinia'

const petdanimStore = usePetdanimStore()
const {postData} = storeToRefs(petdanimStore)
</script>