<template>
  <section class="Latest-News">
    <div class="w-full xl:max-w-7xl py-16 lg:py-16 mx-auto lg:px-0 px-6">
      <div class="flex flex-col mb-8 relative">
        <div
          class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50"
        >
          <div class="w-full flex items-center justify-between">
            <h2
              class="text-xl md:text-3xl lg:text-xl font-bold flex items-center"
            >
              <BlogIcon
                class="w-12 rounded-lg ml-2 p-2 bg-primary fill-white"
              />
              <span> جدیدترین مقالات </span>
            </h2>
            <div class="bg-orange-500 w-4 h-4 rounded-full"></div>
          </div>
        </div>
        <div class="flex justify-between">
          <nav
            class="nc-Nav relative flex w-full overflow-x-auto text-sm md:text-base"
            data-nc-id="Nav"
          >
            <ul class="flex sm:space-x-2 rtl:space-x-reverse">
              <li class="relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-orange-500 text-neutral-50 dark:bg-neutral-100 dark:text-black"
                >
                  جدیدترین مطالب
                </button>
              </li>
              <li class="relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  داغ🔥
                </button>
              </li>
              <li class="relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  سگ ها
                </button>
              </li>
              <li class="relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  گربه ها
                </button>
              </li>

              <li class="relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  پرندگان
                </button>
              </li>
            </ul>
          </nav>
          <button
            class="flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 text-sm sm:text-base font-medium !hidden md:!flex"
          >
            <span>مشاهده همه </span>
            <IconsLeftArrow />
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-4">
        <PostBigCard />

        <div class="grid gap-6 md:gap-4">
         <PostCardList/>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import BlogIcon from "@/components/icons/BlogIcon.vue";
import IconsLeftArrow from "@/components/icons/LeftArrow.vue";
import PostBigCard from "../Template/Cards/PostBigCard.vue";
import PostCardList from "../Template/Cards/PostCardList.vue";
</script>
