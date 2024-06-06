<template>
  <article>
    <div
      class="relative flex group flex-row items-center p-4 rounded-3xl sm:bg-white sm:dark:!bg-dark-800 border border-neutral-200 dark:!border-dark-700/20 h-auto"
    >
      <a class="absolute inset-0 z-0" href="/single"></a>
      <div class="flex flex-col flex-grow">
        <div class="space-y-3 mb-4">
          <PostCategory />
        <PostListTitle/>
          <div
            class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
          >
            <Author />
            <span
              class="text-neutral-500 dark:!text-dark-700 mx-[6px] font-medium"
              >·</span
            >
            <Data />
          </div>
        </div>
        <div class="flex items-center flex-wrap justify-between mt-auto">
          <div class="flex items-center space-x-2 rtl:space-x-reverse relative">
            <LikeButton />
            <CommentButton />
          </div>
          <div
            class="flex items-center space-x-2 text-xs text-neutral-700 dark:!text-neutral-300 relative"
          >
            <BookmarkButton />
          </div>
        </div>
      </div>
      <PostListCover />
    </div>
  </article>
</template>

<script setup>
import PostListCover from "@/components/TemplateParts/Media/PostListCover.vue";
import PostCategory from "@/components/TemplateParts/Badge/PostCategory.vue";
import Author from "@/components/TemplateParts/MetaAction/Author/Author.vue";
import LikeButton from "@/components/TemplateParts/MetaAction/Like.vue";
import CommentButton from "@/components/TemplateParts/MetaAction/Comment.vue";
import BookmarkButton from "@/components/TemplateParts/MetaAction/Bookmark.vue";
import Data from "@/components/TemplateParts/MetaAction/Data.vue";
import PostListTitle from "@/components/TemplateParts/Title/PostListTitle.vue";
</script>