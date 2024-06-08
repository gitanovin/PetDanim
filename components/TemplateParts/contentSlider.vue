<template>
  <article class="inline-block whitespace-normal h-full lg:h-[300px] w-full">
    <div class="flex flex-col group rounded-3xl overflow-hidden z-0 h-full w-full relative">
      <div
        class="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300">
        <div class="PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative">
          <LikeButton />
          <CommentButton />
        </div>
        <div
          class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
          <BookmarkButton />
        </div>
      </div>

      <div class="h-full w-full">
        <div class="relative w-full h-full">
          <PostCover />
          <div
            class="nc-ButtonPlayMusicPlayer select-none absolute inset-0 bg-neutral-900/30 flex items-center justify-center">
            <div class="nc-PostTypeFeaturedIcon z-20 hover:scale-105 transform cursor-pointer transition-transform">
              <span
                class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11">
                <PostTypeIcon />
              </span>
            </div>
          </div>
          <a class="block absolute inset-0" href="/single-audio/this-is-single-slug"></a>
        </div>
      </div>
      <a class="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-50"
        href="/single-audio/this-is-single-slug"></a>
      <div class="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow">
        <a class="absolute inset-0" href="/single-audio/this-is-single-slug"></a>
        <div class="mb-3">
          <PostCategory/>
        </div>
        <div class="inline-flex items-center text-xs text-neutral-300">
          <div class="block">
            <h2 class="block text-base sm:text-lg font-semibold text-white">
              <span class="line-clamp-2" title="Microsoft announces ">برترین نژادهای سگ
              </span>
            </h2>
            <div class="flex mt-2.5 relative items-center">
              <Author>
                <AuthorImage />
                <AuthorName class="text-white"/>
              </Author>


              <span class="mx-[6px] font-medium">·</span>
              <Data class="text-white"/>
            </div>

          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import PostCover from "@/components/TemplateParts/Media/Cover.vue";
import PostCategory from "@/components/TemplateParts/Badge/PostCategory.vue";
import Author from "@/components/TemplateParts/MetaAction/Author/Author.vue";
import AuthorName from "@/components/TemplateParts/MetaAction/Author/AuthorName.vue";
import AuthorImage from "@/components/TemplateParts/MetaAction/Author/AuthorImage.vue";
import LikeButton from "@/components/TemplateParts/MetaAction/Like.vue";
import CommentButton from "@/components/TemplateParts/MetaAction/Comment.vue";
import BookmarkButton from "@/components/TemplateParts/MetaAction/Bookmark.vue";
import Data from "@/components/TemplateParts/MetaAction/Data.vue";
import PostTypeIcon from "@/components/TemplateParts/PostType/PostCard.vue";
</script>