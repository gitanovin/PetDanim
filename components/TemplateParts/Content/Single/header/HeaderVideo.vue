<template>
  <header
    class="relative pt-14 lg:py-20 flex flex-col lg:flex-row lg:items-center"
  >
    <div
      class="absolute inset-y-0 transform translate-x-1/2 end-1/2 w-screen lg:translate-x-0 lg:w-[calc(100vw/2)] bg-orange-600 dark:bg-dark-800 lg:rounded-e-[40px]"
    ></div>
    <div class="pb-10 lg:pb-0 lg:pl-10 relative">
      <div class="nc-SingleHeader">
        <div class="space-y-5 text-neutral-100">
          <PostCategory :text="postData.post.category.title" />
          <h1
            class="lg:text-neutral-100 text-neutral-900 font-semibold text-3xl md:!leading-[120%] dark:text-neutral-100 max-w-4xl"
            title="Julio Urías does it all as Dodgers sweep in San Francisco"
          >
            {{ postData.post.title }}
          </h1>
          <div
            class="w-full border-b border-neutral-100 dark:border-neutral-800"
          ></div>
          <div class="flex flex-col space-y-5">
            <div
              class="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0"
            >
              <a
                class="flex items-center space-x-2 rtl:space-x-reverse"
                href="javascript:void(0)"
              >
                <div
                  class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full shadow-inner h-10 w-10 sm:h-11 sm:w-11 text-xl ring-1 ring-white dark:ring-neutral-900"
                >
                  <img
                    :alt="`${postData.post.author.name} ${postData.post.author.family}`"
                    class="absolute inset-0 w-full h-full object-cover"
                    :src="postData.post.author.profile != null ? `${appBaseUrl}/storage/admin/${postData.post.author.profile}` : './2.webp'"
                  />
                </div>
              </a>
              <div class="ms-3">
                <div class="flex items-center">
                  <a
                    class="block font-semibold lg:text-neutral-100 text-neutral-900"
                    href="javascript:void(0)"
                    >{{ postData.post.author.name }}
                    {{ postData.post.author.family }}
                  </a>
                </div>
                <div class="text-xs mt-[6px]">
                  <Data :date="postData.post.created_at" class="text-white" />
                </div>
              </div>
            </div>
            <div class="nc-SingleMetaAction2">
              <div
                class="flex flex-row space-x-2.5 rtl:space-x-reverse items-center"
              >
                <div
                  class="PostCardLikeAndComment flex items-center !space-x-2.5 rtl:!space-x-reverse"
                >
                  <LikeButton v-if="authUser != null"  @click="doLikePost(postData.post)" :count="postData.post.likes.length" :isRed="authUser != null ? authUser.likes.some(item => item.favoritable_id === postData.post.id && item.favoritable_type === 'App\\Models\\AdminPost') : false" />
                  <CommentButton :count="postData.post.comments.length" />
                </div>
                <div class="px-1">
                  <div
                    class="border-s border-neutral-200 dark:border-neutral-700 h-6"
                  ></div>
                </div>
                <BookmarkButton v-if="authUser != null" @click="doBookmarkPost(postData.post)" :isFill="authUser != null ? authUser.bookmarks.some(item => item.bookmarkable_id === postData.post.id && item.bookmarkable_type === 'App\\Models\\AdminPost') : false"  class="h-9 w-9 dark:hover:!bg-neutral-700" />

                <ShareButton />
                <OptionButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HeaderVideo />
  </header>
</template>

<script setup>
import HeaderVideo from "@/components/TemplateParts/Content/Single/header/FeaturedImage/HeaderVideo.vue";
import ReadTime from "@/components/TemplateParts/Content/Single/header/ReadTime/read.vue";
import PostCategory from "~/components/TemplateParts/Badge/index.vue";
import LikeButton from "@/components/TemplateParts/MetaAction/Like.vue";
import CommentButton from "@/components/TemplateParts/MetaAction/Comment.vue";
import BookmarkButton from "@/components/TemplateParts/MetaAction/Bookmark.vue";
import Data from "@/components/TemplateParts/MetaAction/Data.vue";
import ShareButton from "@/components/TemplateParts/Content/Single/MetaButton/Share.vue";
import OptionButton from "@/components/TemplateParts/Content/Single/MetaButton/Options.vue";

import { usePetdanimStore } from "@/store/petdanimStore.js";
import { storeToRefs } from "pinia";

const {$toast} = useNuxtApp()
const {appBaseUrl} = useRuntimeConfig().public
const petdanimStore = usePetdanimStore();
const { postData , authUser } = storeToRefs(petdanimStore);

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
