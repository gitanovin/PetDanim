<template>
  <div class="single-header">
    <header class="rounded-xl pt-16">
      <div class="max-w-screen-md mx-auto">
        <div class="nc-SingleHeader">
          <div class="space-y-5">


            <PostCategory />
            <h1
              class="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100 max-w-4xl"
              title="Trending web &amp; landing page designs in 2023">
              برترین نژادهای سگ در سال 2024
            </h1>
            <span class="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">شیائومی در سکوت خبری
              از
              گوشی جدید ردمی نوت 13R رونمایی کرد. این
              گوشی به‌جز ارتقاء دوربین‌ها تفاوت زیادی با ردمی نوت 12R
              ندارد.</span>
            <div class="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
            <div
              class="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse">
              <div
                class="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
                <a class="flex items-center space-x-2 rtl:space-x-reverse" href="/author/the-demo-author-slug">
                  <div
                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full shadow-inner h-10 w-10 sm:h-11 sm:w-11 text-xl ring-1 ring-white dark:ring-neutral-900">
                    <img alt="Foulcher Nathanil" class="absolute inset-0 w-full h-full object-cover"
                      src="@/assets/images/3.jpg" /><span class="wil-avatar__name">F</span>
                  </div>
                </a>
                <div class="ms-3">
                  <div class="flex items-center">
                    <a class="block font-semibold" href="/author/the-demo-author-slug">محبوب حسین زاده</a>
                  </div>
                  <div class="text-xs mt-[6px]">
                    <Data />
                    <span class="mx-2 font-semibold">·</span>
                    <ReadTime />
                  </div>
                </div>
              </div>
              <div class="nc-SingleMetaAction2">
                <div class="flex flex-row space-x-2.5 rtl:space-x-reverse items-center">
                  <div class="PostCardLikeAndComment flex items-center !space-x-2.5 rtl:!space-x-reverse">
                    <LikeButton />
                    <CommentButton />
                  </div>
                  <div class="px-1">
                    <div class="border-s border-neutral-200 dark:border-neutral-700 h-6"></div>
                  </div>
                  <BookmarkButton class="h-9 w-9 dark:hover:!bg-neutral-700" />
                  <ShareButton/>
                  <OptionButton/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <FeaturedImageOne />
  </div>

</template>

<script setup>
import FeaturedImageOne from "@/components/TemplateParts/Content/Single/header/FeaturedImage/HeaderArticleOne.vue";
import ReadTime from "@/components/TemplateParts/Content/Single/header/ReadTime/read.vue";
import PostCategory from "@/components/TemplateParts/Badge/PostCategory.vue";
import LikeButton from "@/components/TemplateParts/MetaAction/Like.vue";
import CommentButton from "@/components/TemplateParts/MetaAction/Comment.vue";
import BookmarkButton from "@/components/TemplateParts/MetaAction/Bookmark.vue";
import Data from "@/components/TemplateParts/MetaAction/Data.vue";
import ShareButton from "@/components/TemplateParts/Content/Single/MetaButton/Share.vue";
import OptionButton from "@/components/TemplateParts/Content/Single/MetaButton/Options.vue";
</script>