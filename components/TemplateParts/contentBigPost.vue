<template>
  <article>
    <div class="group relative flex flex-col h-full">
      <div class="block flex-shrink-0 flex-grow relative w-full z-0">
        <nuxt-link class="relative" :to="`/${post.slug}`">
          <img
            :alt="post.title"
            class="object-cover rounded-t-3xl h-[400px] w-full"
            :src="`${appBaseUrl}/storage/${post.image}`"
          />
        </nuxt-link>
        <span class="absolute top-3 left-3 z-50">
          <PostCategory :text="post.category.title" />
        </span>
      </div>
      <div
        class="flex flex-col border rounded-b-3xl dark:border-dark-700/20 dark:!bg-dark-800"
      >
        <div class="space-y-3">
          <div
            class="inline-flex items-center flex-wrap text-neutral-800 dark:!text-neutral-200 relative text-sm p-3"
          >
            <Author>
              <AuthorImage :authorImage="post.author.profile == null ? '/2.webp' : post.author.profile" />
              <AuthorName :authorname="`${post.author.name} ${post.author.family}`" />
            </Author>
            <span
              class="text-neutral-500 dark:!text-neutral-400 mx-[6px] font-medium"
            >·</span>
            <Data :date="post.created_at" />
          </div>
          <h2
            class="px-4 block font-semibold text-neutral-900 dark:!text-neutral-100 text-base sm:text-lg md:text-xl"
          >
            <nuxt-link
              class="line-clamp-2"
              title="Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities"
              :to="`/${post.slug}`"
            >
              {{ post.title }}
            </nuxt-link>
          </h2>
          <div
            class="block text-neutral-500 dark:!text-neutral-300 text-[15px] leading-6 px-4 text-justify h-[100px] overflow-hidden"
            v-html="post.content"
          >
          </div>
        </div>
        <div
          class="mt-5 border-t border-neutral-200 dark:!border-dark-700/20"
        ></div>
        <div class="flex items-center justify-between px-4 py-4">
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
    </div>
  </article>
</template>

<script setup>
import PostBigCover from "@/components/TemplateParts/Media/PostBigCover.vue";
import PostCategory from "~/components/TemplateParts/Badge/index.vue";
import Author from "@/components/TemplateParts/MetaAction/Author/Author.vue";
import AuthorName from "@/components/TemplateParts/MetaAction/Author/AuthorName.vue";
import AuthorImage from "@/components/TemplateParts/MetaAction/Author/AuthorImage.vue";
import LikeButton from "@/components/TemplateParts/MetaAction/Like.vue";
import CommentButton from "@/components/TemplateParts/MetaAction/Comment.vue";
import BookmarkButton from "@/components/TemplateParts/MetaAction/Bookmark.vue";
import Data from "@/components/TemplateParts/MetaAction/Data.vue";
import PostBigTitle from "@/components/TemplateParts/Title/PostBigTitle.vue";
import PostCardCaption from "@/components/TemplateParts/Caption/PostCardCaption.vue";

const { appBaseUrl } = useRuntimeConfig().public;

const props = defineProps({
  post: {
    required: true,
    type: [Array, Object],
  },
});
</script>
