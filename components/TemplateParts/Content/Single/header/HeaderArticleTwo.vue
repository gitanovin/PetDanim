<template>
    <header class="relative  pt-16 z-10 md:py-20 lg:py-28 bg-neutral-900 dark:bg-dark-800">
        <div class="relative z-10 mx-auto w-full max-w-7xl">
            <div class="max-w-screen-md">
                <div class="nc-SingleHeader px-4">
                    <div class="space-y-5">
                        <PostCategory :text="postData.post.category.title" />
                        <h1 class=" text-white font-semibold text-2xl md:text-3xl leading-[90px] lg:text-4xl dark:text-neutral-100 max-w-4xl "
                            title="Trending web &amp; landing page designs in 2023">
                            {{ postData.post.title }}
                        </h1>
                        <div class="w-full border-b border-neutral-800/70 dark:border-neutral-700"></div>
                        <div
                            class="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse">
                            <div
                                class="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
                                <a class="flex items-center space-x-2 rtl:space-x-reverse"
                                    href="javascript:void(0)">
                                    <div
                                        class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full shadow-inner h-10 w-10 sm:h-11 sm:w-11 text-xl ring-1 ring-white dark:ring-neutral-900">
                                        <img alt="Foulcher Nathanil" loading="lazy" decoding="async"
                                            class="absolute inset-0 w-full h-full object-cover"
                                            :src="postData.post.author.profile != null ? `${appBaseUrl}/storage/admin/${postData.post.author.profile}` : './2.webp'" >
                                    </div>
                                </a>
                                <div class="ms-3">
                                    <div class="flex items-center"><a class="block font-semibold text-white"
                                            href="javascript:void(0)">{{ postData.post.author.name }} {{ postData.post.author.family }}</a></div>
                                    <div class="text-xs mt-[6px]">
                                        <Data :date="postData.post.created_at" />
                                    </div>
                                </div>
                            </div>
                            <div class="nc-SingleMetaAction2 ">
                                <div  class="flex flex-row space-x-2.5 rtl:space-x-reverse items-center">
                                    <div
                                        class="nc-PostCardLikeAndComment flex items-center !space-x-2.5 rtl:!space-x-reverse">
                                        <LikeButton v-if="authUser != null"  @click="doLikePost(postData.post)" :count="postData.post.likes.length" :isRed="authUser != null ? authUser.likes.some(item => item.favoritable_id === postData.post.id && item.favoritable_type === 'App\\Models\\AdminPost') : false" />
                                        <CommentButton :count="postData.post.comments.length" />
                                    </div>
                                    <div class="px-1">
                                        <div class="border-s border-neutral-800/50 dark:border-neutral-700 h-6">
                                        </div>
                                    </div>
                                        <BookmarkButton v-if="authUser != null" @click="doBookmarkPost(postData.post)" :isFill="authUser != null ? authUser.bookmarks.some(item => item.bookmarkable_id === postData.post.id && item.bookmarkable_type === 'App\\Models\\AdminPost') : false"  class="h-9 w-9 dark:hover:!bg-neutral-700" />

                                    <ShareButton/>
                                    <OptionButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FeaturedImageTwo/>
    </header>
</template>

<script setup>
import FeaturedImageTwo from "@/components/TemplateParts/Content/Single/header/FeaturedImage/HeaderArticleTwo.vue";
import ReadTime from "@/components/TemplateParts/Content/Single/header/ReadTime/read.vue";
import PostCategory from "~/components/TemplateParts/Badge/index.vue";
import LikeButton from "@/components/TemplateParts/MetaAction/Like.vue";
import CommentButton from "@/components/TemplateParts/MetaAction/Comment.vue";
import BookmarkButton from "@/components/TemplateParts/MetaAction/Bookmark.vue";
import Data from "@/components/TemplateParts/MetaAction/Data.vue";
import ShareButton from "@/components/TemplateParts/Content/Single/MetaButton/Share.vue";
import OptionButton from "@/components/TemplateParts/Content/Single/MetaButton/Options.vue";

import {usePetdanimStore} from '@/store/petdanimStore.js'
import {storeToRefs} from 'pinia'

const {$toast} = useNuxtApp()

const {appBaseUrl} = useRuntimeConfig().public
const petdanimStore = usePetdanimStore()
const {postData , authUser} = storeToRefs(petdanimStore)

const doLikePost = async (post) => {
  if(authUser.value != null) {
    const result = await petdanimStore.doLikePost({
      post_id: post.id,
      type: "admin"
    })
    if(result.status == 200) {
      post.likes = result.result.post_likes
      authUser.value.likes = result.result.user_likes
    }
  } else {
    $toast("جهت پسندیدن این پست ابتدا باید وارد حساب کاربری خود شوید" , {
      "theme": "colored",
      "type": "error"
    });
  }
}

const doBookmarkPost = async (post) => {
  if(authUser.value != null) {
    const result = await petdanimStore.doBookmarkPost({
      post_id: post.id,
      type: "admin"
    })
    if(result.status == 200) {
      post.bookmarks = result.result.post_bookmarks
      authUser.value.bookmarks = result.result.user_bookmarks
    }
  } else {
    $toast("جهت افزودن این پست به ذخیره ها ابتدا باید وارد حساب کاربری خود شوید" , {
      "theme": "colored",
      "type": "error"
    });
  }
}
</script>