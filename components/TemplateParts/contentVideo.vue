<template>
  <article>
    <div class="relative flex flex-col h-full">
      
      <div
        class="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden z-0">
        <div>
          <div class="relative w-full h-full">
            <nuxt-link class="block absolute inset-0" :to="`/${post.slug}`">
              <img
                :alt="post.title"
                class="object-cover rounded-t-3xl h-full w-full"
                :src="`${appBaseUrl}/storage/${post.image}`"
              />
            </nuxt-link>

            
            <PostTypeIcon v-if="post.post_type == 'text'"  />
            <VideoIcon v-if="post.post_type == 'video'"  /> 
            <GalleryIcon v-if="post.post_type == 'gallery'" />
             
          </div>
        </div>
        <nuxt-link class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"
        :to="`/${post.slug}`"></nuxt-link>
      </div>
      <div class="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 rtl:space-x-reverse">
        <PostCategory :text="post.category.title" />
        <div class="PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300">
          <BookmarkButton @click="doBookmarkPost(post)" :isFill="authUser != null ? authUser.bookmarks.some(item => item.bookmarkable_id === post.id && item.bookmarkable_type === 'App\\Models\\AdminPost') : false" />
        </div>
      </div>
      <div class="space-y-2.5 mt-4 px-4">
        <div class="inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
          <div class="relative flex items-center space-x-2 rtl:space-x-reverse">

            <div>
              <h2 class="block font-semibold text-base text-gray-900 dark:!text-neutral-50">
                <nuxt-link class="line-clamp-1" :to="`/${post.slug}`">
                  {{ post.title }}    
                </nuxt-link>
              </h2>
              <div class="flex mt-1.5 items-center">
                  <Author>
                    <AuthorImage :authorImage="post.author.profile == null ? '/2.webp' : post.author.profile" />
                    <AuthorName :authorname="`${post.author.name} ${post.author.family}`" />
                  </Author>
                  <span class="text-gray-100 dark:text-neutral-400 mx-[6px] font-medium">·</span>
                  <Data :date="post.created_at" />
              </div>
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
import BookmarkButton from "@/components/TemplateParts/MetaAction/Bookmark.vue";
import Data from "@/components/TemplateParts/MetaAction/Data.vue";
import PostTypeIcon from "@/components/TemplateParts/PostType/PostCard.vue";
import VideoIcon from "@/components/icons/Video.vue";
import GalleryIcon from "@/components/icons/gallery.vue";
import {usePetdanimStore} from '@/store/petdanimStore.js'
import {storeToRefs} from 'pinia'

const emit = defineEmits(["showPrompt"])

const petStore = usePetdanimStore()
const {authUser} = storeToRefs(petStore)


const props = defineProps({
  post: {
    required: true,
    type: Object,
  }
})


const { appBaseUrl } = useRuntimeConfig().public





const doBookmarkPost = async (post) => {
  if(authUser.value != null) {
    const result = await petStore.doBookmarkPost({
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