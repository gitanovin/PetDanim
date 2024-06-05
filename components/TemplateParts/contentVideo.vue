<template>
  <artivle>
    <div class="relative flex flex-col h-full">
      <div
        class="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden z-0"
      >
        <div>
          <div class="relative w-full h-full">
            <img
              alt="featured"
              class="object-cover"
              src="@/assets/images/3.jpg"
            /><span class="absolute inset-0 flex items-center justify-center">
              <div
                class="hover:scale-105 transform cursor-pointer transition-transform"
              >
                <span
                  class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11"
                >
                  <Play />
                </span>
              </div> </span
            ><a
              class="block absolute inset-0"
              href="/single-video/this-is-single-slug"
            ></a>
          </div>
        </div>
        <a
          class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"
          href="/single-video/this-is-single-slug"
        ></a>
      </div>
      <div
        class="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 rtl:space-x-reverse"
      >
        <div class="flex flex-wrap space-x-2">
          <a
            class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
            href="/archive/the-demo-archive-slug"
            >سگ ها</a
          >
        </div>
        <div
          class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300"
        >
          <button
            class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:!bg-dark-800 dark:hover:!bg-dark-700"
            title="Save to reading list"
          >
            <Bookmark class="dark:!fill-white fill-gray-700" />
          </button>
        </div>
      </div>
      <div class="space-y-2.5 mt-4 px-4">
        <div
          class="inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
        >
          <div class="relative flex items-center space-x-2 rtl:space-x-reverse">
            <div
              class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-lg h-9 w-9 text-base ring-1 ring-white dark:ring-neutral-900"
            >
              <img
                alt="Birrell Chariot"
                class="absolute inset-0 w-full h-full object-cover"
                src="@/assets/images/1.jpg"
              /><span class="wil-avatar__name">B</span>
            </div>
            <div>
              <h2
                class="block font-semibold text-base text-gray-900 dark:!text-neutral-50"
              >
                <a class="line-clamp-1" href="/single-video/this-is-single-slug"
                  >سگ ها حیوانات باهوشی هستند
                </a>
              </h2>
              <a class="flex mt-1.5" href="/author/the-demo-author-slug"
                ><span
                  class="block text-gray-400 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
                  >محبوب حسین زاده</span
                ><span
                  class="text-gray-100 dark:text-neutral-400 mx-[6px] font-medium"
                  >·</span
                ><span
                  class="text-gray-400 dark:text-neutral-400 font-normal font-fd"
                  >28 اردیبهشت 1403</span
                ></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </artivle>
</template>
<script setup>
import Bookmark from "@/components/icons/Bookmark.vue";
import Play from "@/components/icons/Video.vue";
import VideoIcon from "@/components/icons/VideoIcon.vue";
</script>
