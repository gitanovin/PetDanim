<template>
  <article v-if="posts.length != 0">
    <div
      v-for="(post, index) in posts.slice(1, 3)"
      :key="index"
      class="relative flex group mb-3 flex-row items-center p-4 rounded-3xl sm:bg-white sm:dark:!bg-dark-800 border border-neutral-200 dark:!border-dark-700/20 h-auto"
    >
      <a class="absolute inset-0 z-0" href="/single"></a>
      <div class="flex flex-col flex-grow">
        <div class="space-y-3 mb-4">
          <PostCategory status="danger" :text="post.category.title" />
          <h2
            class="block font-semibold text-sm sm:text-base dark:!text-dark-700"
          >
            <a
              class="line-clamp-2 dark:!text-gray-300"
              title="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
              href="//single"
              >{{ post.title }}
            </a>
          </h2>
          <div
            class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
          >
            <Author>
              <AuthorImage />
              <AuthorName :authorname="`${post.author.name} ${post.author.family}`" />
            </Author>
            <span
              class="text-neutral-500 dark:!text-dark-700 mx-[6px] font-medium"
              >·</span
            >
            <Data :date="post.created_at" />
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
      <a
        class="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden z-0"
        href="javascript:void(0)"
        ><img
          :alt="post.title"
          class="object-cover w-full h-[120px]"
          :src="`${appBaseUrl}/storage/${post.image}`" /><span class="absolute bottom-1 start-1"
          ><div class="nc-PostTypeFeaturedIcon"></div></span
      ></a>
    </div>
  </article>
</template>

<script setup>
import PostListCover from "@/components/TemplateParts/Media/PostListCover.vue";
import PostCategory from "~/components/TemplateParts/Badge/index.vue";
import Author from "@/components/TemplateParts/MetaAction/Author/Author.vue";
import AuthorName from "@/components/TemplateParts/MetaAction/Author/AuthorName.vue";
import AuthorImage from "@/components/TemplateParts/MetaAction/Author/AuthorImage.vue";
import LikeButton from "@/components/TemplateParts/MetaAction/Like.vue";
import CommentButton from "@/components/TemplateParts/MetaAction/Comment.vue";
import BookmarkButton from "@/components/TemplateParts/MetaAction/Bookmark.vue";
import Data from "@/components/TemplateParts/MetaAction/Data.vue";
import PostListTitle from "@/components/TemplateParts/Title/PostListTitle.vue";


const {appBaseUrl} = useRuntimeConfig().public
const props = defineProps({
  posts: {
    required: true,
    type: [Array, Object],
  },
});
</script>
