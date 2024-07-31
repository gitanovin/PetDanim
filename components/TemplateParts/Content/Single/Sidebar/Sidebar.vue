<template>
    <aside class="sidebar">
        <div class="w-full lg:col-span-4 col-span-12">
            <div class="SingleSidebar space-y-6 ">
                <div class="relative  z-20">
                    <widgetTopPosts 
                        v-if="postData.topPosts.length != 0"
                        :topsPosts="postData.topPosts"
                    />
                </div>

                <widgetsTopTags
                    v-if="postData.topTags.length != 0"
                    :topTags="postData.topTags"
                />
                <widgetTopCategory 
                    v-if="postData.topCategories.length != 0"
                    :topCategories="postData.topCategories"
                />
                <widgetNewsesAuthors 
                    v-if="postData.newesUsers.length != 0"
                    :newesUsers="postData.newesUsers"
                />
            </div>
        </div>
    </aside>
</template>
<script setup>
import widgetTopPosts from "./Widgets/widgetTopPosts.vue";
import widgetsTopTags from "./Widgets/widgetsTopTags.vue";
import widgetTopCategory from "./Widgets/widgetTopCategory.vue";
import widgetNewsesAuthors from "./Widgets/widgetNewsesAuthors.vue";

import {usePetdanimStore} from '@/store/petdanimStore.js'
import {storeToRefs} from 'pinia'

const petdanimStore = usePetdanimStore()
const {postData} = storeToRefs(petdanimStore)
</script>