<template>
  <artivle>
    <div class="relative flex flex-col h-full">
      <div
        class="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden z-0">
        <div>
          <div class="relative w-full h-full">
            <a class="block absolute inset-0" href="/single-video/this-is-single-slug">
              <img
                :alt="post.title"
                class="object-cover rounded-t-3xl h-full w-full"
                :src="`${appBaseUrl}/storage/${post.image}`"
              />
            </a>
            <PostTypeIcon />

          </div>
        </div>
        <a class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"
          href="/single-video/this-is-single-slug"></a>
      </div>
      <div class="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 rtl:space-x-reverse">
        <PostCategory />
        <div class="PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300">
          <BookmarkButton />
        </div>
      </div>
      <div class="space-y-2.5 mt-4 px-4">
        <div class="inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
          <div class="relative flex items-center space-x-2 rtl:space-x-reverse">

            <div>
              <h2 class="block font-semibold text-base text-gray-900 dark:!text-neutral-50">
                <a class="line-clamp-1" href="/single-video/this-is-single-slug">
                  {{ post.title }}    
                </a>
              </h2>
              <div class="flex mt-1.5 items-center">
                <Author>
                  <AuthorImage/>
                  <AuthorName/>
                  </Author>
                <span class="text-gray-100 dark:text-neutral-400 mx-[6px] font-medium">·</span>
                <Data />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </artivle>
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


const props = defineProps({
  post: {
    required: true,
    type: Object,
  }
})

const {appBaseUrl} = useRuntimeConfig().public
</script>