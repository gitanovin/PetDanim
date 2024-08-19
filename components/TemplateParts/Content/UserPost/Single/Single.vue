<template>
    <div v-if="postData.post != null">
        <div class="Headers">
            <HeaderGlobal />
        </div>
        <div class="test py-4 max-w-7xl mx-auto w-full gap-6 hidden">
            <button @click="GridMode = !GridMode" class="bg-red-500 p-4 text-white">نمایش بدون ستون کناری</button>
        </div>

        <div class="lg:mt-10 px-6 mx-auto w-full max-w-7xl my-8 lg:px-0">
            <div :class="GridMode == false ? 'grid grid-cols-12 gap-4 !space-y-0' : ' '"
                class="SingleContent space-y-10 dark:!text-gray-300">
                <div :class="'w-full lg:col-span-8 col-span-12'"
                    class="relative rounded-lg lg:bg-white lg:dark:bg-dark-800 lg:border lg:dark:border-dark-700/20 lg:p-4">
                    <ContentArticle :content="postData.post.content" />
                    <Tags class="hidden" />
                    <AuthorBiography
                        :authorName="`${postData.post.user.name}`"
                        :authorImage="postData.post.user.profile == null ? '' : postData.post.user.profile"
                        :authorRegisterDate="postData.post.user.created_at"
                        :showFollowButton="true"
                        :showBiography="false"
                        :showRegisterDate="true"
                    />
                    <AddComment 
                        v-if="authUser != null"
                        @submitComment="(data) => submitComment(data)"
                        :commentLoading="commentLoading"
                    />
                    <CommentList
                     v-if="postData.comments.length != 0"
                     :comments="postData.comments"
                     class="mt-10" />
                </div>
                <div :class="GridMode == false ? '' : 'hidden'" class="w-full lg:col-span-4 col-span-12">
                    <SidebarLeft />
                </div>

                <Sticky />
            </div>
        </div>
        <div
            class="top-cat py-16  dark:border-dark-700/20 dark:bg-dark-700/20 border w-full max-w-7xl mx-auto my-8 p-8 rounded-2xl">
            <TopCategories 
                v-if="postData.topCategories.length != 0"
                :topCategories="postData.topCategories"
            />
        </div>

        <TopUsers
            v-if="postData.topUsers.length != 0"
            :topUsers="postData.topUsers"
        />

    </div>
</template>

<script setup>
import HeaderGlobal from "@/components/TemplateParts/Content/UserPost/Single/header/HeaderGlobal.vue";
import ContentArticle from "~/components/TemplateParts/Content/Single/TheContent/ContentArticle.vue";
import Tags from "@/components/TemplateParts/Content/Single/Tags/singleTags.vue";
import AuthorBiography from "@/components/TemplateParts/Content/UserPost/Single/Biography/AuthorBiography.vue";
import AddComment from "@/components/TemplateParts/Content/Single/Comment/AddComment.vue";
import CommentList from "@/components/TemplateParts/Content/Single/Comment/CommentList.vue";
import Sticky from "@/components/TemplateParts/Content/Single/Sticky/sticky.vue";
import SidebarLeft from "@/components/TemplateParts/Content/UserPost/Single/Sidebar/Sidebar.vue"
import TopCategories from "@/components/TemplateParts/Sections/CategoryList/TopCategories.vue";
import TopUsers from "@/components/TemplateParts/Sections/UserList/TopUsers.vue";
const GridMode = ref(false)
const Sidebar = ref(false)

import {usePetdanimStore} from '@/store/petdanimStore.js'
import {storeToRefs} from 'pinia'
const {$toast} = useNuxtApp()
const petdanimStore = usePetdanimStore()
const {postData , authUser} = storeToRefs(petdanimStore)

const commentLoading = ref(false)

const submitComment = async (data) => {
    commentLoading.value = true
    const result = await petdanimStore.submitComment({
        ...data,
        post_id: postData.value.post.id,
        type: "user",
    })

    if(result.status == 200) {
        commentLoading.value = false

        postData.value.comments = result.result
        $toast(result.message , {
            "theme": "colored",
            "type": "success"
        });
    }else {
        commentLoading.value = false
        $toast(result.message , {
            "theme": "colored",
            "type": "error"
        });
    }
}
</script>