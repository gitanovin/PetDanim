<template>
  <article>
    <div
      class="relative flex group flex-row items-center p-4 rounded-3xl sm:bg-white sm:dark:!bg-dark-800 border border-neutral-200 dark:!border-dark-700/20 h-auto"
    >
      <a class="absolute inset-0 z-0" href="//single"></a>
      <div class="flex flex-col flex-grow">
        <div class="space-y-3 mb-4">
          <div
            class="nc-CategoryBadgeList flex flex-wrap space-x-2"
            data-nc-id="CategoryBadgeList"
          >
            <a
              class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
              href="/archive/the-demo-archive-slug"
              >گربه ها</a
            >
          </div>
          <h2
            class="block font-semibold text-sm sm:text-base dark:!text-dark-700"
          >
            <a
              class="line-clamp-2 dark:!text-gray-300"
              title="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
              href="//single"
              >بازی مورد علاقه گربه ها</a
            >
          </h2>
          <div
            class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
          >
            <a
              class="relative flex items-center space-x-2 rtl:space-x-reverse"
              href="/author/the-demo-author-slug"
              ><div
                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900"
              >
                <img
                  alt="Pillifant Vern"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  class="absolute inset-0 w-full h-full object-cover"
                  src="@/assets/images/6.jpg"
                /><span class="wil-avatar__name">P</span>
              </div>
              <span
                class="block text-neutral-700 hover:text-black dark:!text-dark-700 dark:hover:text-white font-medium"
                >محبوب حسین زاده</span
              ></a
            ><span
              class="text-neutral-500 dark:!text-dark-700 mx-[6px] font-medium"
              >·</span
            ><span
              class="text-neutral-500 dark:!text-gray-400 font-normal font-fd"
              >30 اردیبهشت 1403</span
            >
          </div>
        </div>
        <div class="flex items-center flex-wrap justify-between mt-auto">
          <div
            class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative"
          >
            <button
              class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:!text-neutral-200 dark:!bg-dark-900 hover:bg-rose-50 dark:hover:!bg-rose-100 hover:text-rose-600 dark:hover:!text-rose-500"
              title="Liked"
            >
              <Like /><span class="ml-1 font-fd">34</span></button
            ><a
              class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:!text-neutral-200 dark:!bg-dark-900 hover:bg-teal-50 dark:hover:!bg-teal-100 hover:!text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
              title="Comments"
              href="/single/demo-slug#comments"
            >
              <Comment /><span class="ml-1 font-fd">58</span>
            </a>
          </div>
          <div
            class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:!text-neutral-300 relative"
          >
            <button
              class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:!bg-dark-900 dark:hover:!bg-neutral-700"
              title="Save to reading list"
            >
              <Bookmark />
            </button>
          </div>
        </div>
      </div>
      <a
        class="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden z-0"
        href="//single"
        ><img
          alt="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
          class="object-cover w-full h-full"
          src="@/assets/images/3.jpg" /><span class="absolute bottom-1 start-1"
          ><div class="nc-PostTypeFeaturedIcon"></div></span
      ></a>
    </div>
  </article>
</template>

<script setup>
import Bookmark from "@/components/icons/Bookmark.vue";
import Like from "@/components/icons/Heart.vue";
import Comment from "@/components/icons/Comment.vue";
</script>
