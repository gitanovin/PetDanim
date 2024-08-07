<template>
    <div v-if="postData.post.gallery_images.length != 0" class="relative grid grid-cols-3 sm:grid-cols-4 gap-2 my-10">
        <div v-for="(gallery , index) in postData.post.gallery_images" :key="gallery.id" 
        :class="index == 0 ? 'col-span-2 row-span-2 relative rounded-xl overflow-hidden cursor-pointer z-0' : 'relative rounded-xl overflow-hidden lg:block z-0'">
            <div :class="index == 0 ? 'absolute inset-0' : 'aspect-w-6 aspect-h-5'">
                <img :alt="postData.post.title" class="object-cover w-full h-full rounded-xl" 
                :src="`${appBaseUrl}/storage/${gallery.image_path}`" />
            </div>
            <div class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity">
            </div>
        </div>
        <!-- <div
            class="absolute hidden md:flex md:items-center md:justify-center right-3 bottom-3 px-4 py-2 rounded-full bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10">
            <GridIcon />
            <span class="ms-2 text-neutral-800 text-sm font-medium">مشاهده همه تصاویر</span>
        </div> -->
    </div>
</template>
<script setup>
import {usePetdanimStore} from '@/store/petdanimStore.js'
import {storeToRefs} from 'pinia'

const {appBaseUrl} = useRuntimeConfig().public
const petdanimStore = usePetdanimStore()
const {postData} = storeToRefs(petdanimStore)
</script>