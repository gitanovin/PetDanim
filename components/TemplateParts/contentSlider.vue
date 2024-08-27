<template>
  <article class="inline-block whitespace-normal h-full lg:h-[300px] w-full">
    <div class="flex flex-col group rounded-3xl overflow-hidden z-0 h-full w-full relative">
      <div
        class="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300">
        <div class="PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative">
          <LikeButton @click="doLikePost(post)" :count="post.likes.length" :isRed="authUser != null ? authUser.likes.some(item => item.favoritable_id === post.id && item.favoritable_type === 'App\\Models\\AdminPost') : false" />
          <CommentButton :count="post.comments.length" />
        </div>
        <div
          class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
          <BookmarkButton @click="doBookmarkPost(post)" :isFill="authUser != null ? authUser.bookmarks.some(item => item.bookmarkable_id === post.id && item.bookmarkable_type === 'App\\Models\\AdminPost') : false" />
        </div>
      </div>

      <div class="h-full w-full">
        <div class="relative w-full h-full">
          <img
            :alt="post.title"
            class="object-cover rounded-t-3xl h-full w-full"
            :src="`${appBaseUrl}/storage/${post.image}`"
          />
          <div
            class="nc-ButtonPlayMusicPlayer select-none absolute inset-0 bg-neutral-900/30 flex items-center justify-center">
            <div class="nc-PostTypeFeaturedIcon z-20 hover:scale-105 transform cursor-pointer transition-transform">
              <nuxt-link :to="`/${post.slug}`"
                class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11">
                <PostTypeIcon v-if="post.post_type == 'text'" />
                <VideoIcon v-if="post.post_type == 'video'" />
                <GalleryIcon v-if="post.post_type == 'gallery'" />
              </nuxt-link>
            </div>
          </div>
          <nuxt-link class="block absolute inset-0" :to="`/${post.slug}`"></nuxt-link>
        </div>
      </div>
      <nuxt-link class="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-50"
      :to="`/${post.slug}`"></nuxt-link>
      <div class="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow">
        <nuxt-link class="absolute inset-0" :to="`/${post.slug}`"></nuxt-link>
        <div class="mb-3">
          <PostCategory :text="post.category.title"/>
        </div>
        <div class="inline-flex items-center text-xs text-neutral-300">
          <div class="block">
            <h2 class="block text-base sm:text-lg font-semibold text-white">
              <span class="line-clamp-2" title="Microsoft announces ">  
                {{ post.title }}
              </span>
            </h2>
            <div class="flex mt-2.5 relative items-center">
              <Author>
                <AuthorImage :authorImage="post.author.profile == null ? '/2.webp' : post.author.profile" />
                <AuthorName :authorname="`${post.author.name} ${post.author.family}`" class="text-white"/>
              </Author>


              <span class="mx-[6px] font-medium">·</span>
              <Data class="text-white" :date="post.created_at" />

            </div>

          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import PostCover from "@/components/TemplateParts/Media/Cover.vue";
import PostCategory from "~/components/TemplateParts/Badge/index.vue";
import Author from "@/components/TemplateParts/MetaAction/Author/Author.vue";
import AuthorName from "@/components/TemplateParts/MetaAction/Author/AuthorName.vue";
import AuthorImage from "@/components/TemplateParts/MetaAction/Author/AuthorImage.vue";
import LikeButton from "@/components/TemplateParts/MetaAction/Like.vue";
import CommentButton from "@/components/TemplateParts/MetaAction/Comment.vue";
import BookmarkButton from "@/components/TemplateParts/MetaAction/Bookmark.vue";
import Data from "@/components/TemplateParts/MetaAction/Data.vue";
import PostTypeIcon from "@/components/TemplateParts/PostType/PostCard.vue";
import VideoIcon from "@/components/icons/Video.vue";
import GalleryIcon from "@/components/icons/gallery.vue";
import {usePetdanimStore} from '@/store/petdanimStore'
import {storeToRefs} from 'pinia'

const {$toast} = useNuxtApp()

const petdanimStore = usePetdanimStore()
const {authUser} = storeToRefs(petdanimStore)

const props = defineProps({
  post: {
    required: true,
    type: Object,
  }
})

const {appBaseUrl} = useRuntimeConfig().public

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