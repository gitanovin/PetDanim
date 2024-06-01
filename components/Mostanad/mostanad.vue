<template>
  <section>
    <div class="relative w-screen xl:max-w-screen-2xl mx-auto lg:px-0 px-6 py-16 lg:py-24">
      <div class="flex flex-col mb-8 relative">
        <div
          class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50"
        >
          <div class="w-full flex items-center justify-between">
            <h2
              class="text-xl md:text-3xl lg:text-xl font-bold flex items-center"
            >
              <Mostanad
                class="w-12 rounded-lg ml-2 p-2 bg-primary fill-white"
              />
              <span>مستندات پت ها</span>
            </h2>
            <div class="bg-orange-500 w-4 h-4 rounded-full mr-4"></div>
          </div>
        </div>
        <div class="flex justify-between">
          <nav
            class="nc-Nav relative flex w-full overflow-x-auto text-sm md:text-base"
            data-nc-id="Nav"
          >
            <ul class="flex sm:space-x-2 rtl:space-x-reverse">
              <li class="nc-NavItem relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-black"
                >
                  همه
                </button>
              </li>
              <li class="nc-NavItem relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  پرندگان
                </button>
              </li>
              <li class="nc-NavItem relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  سگ ها
                </button>
              </li>
              <li class="nc-NavItem relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  گربه ها
                </button>
              </li>
              <li class="nc-NavItem relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  خزندگان
                </button>
              </li>
            </ul>
          </nav>
          <button
            class="nc-Button flex-shrink-0 relative h-auto items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 text-sm sm:text-base font-medium !hidden md:!flex"
          >
            <span>مشاهده همه</span>
            <ReadMore />
          </button>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <article>
          <div
            class="border relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 h-full"
          >
            <div
              class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-5 aspect-h-3"
            >
              <div>
                <div class="nc-PostFeaturedMedia relative w-full h-full">
                  <img
                    alt="featured"
                    class="object-cover"
                    src="@/assets/images/7.jpg"
                  /><span
                    class="absolute inset-0 flex items-center justify-center"
                    ><div
                      class="hover:scale-105 transform cursor-pointer transition-transform"
                    >
                      <span
                        class=" bg-gray-900/20  rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11"
                        ><Mostanad
                          class="text-white fill-white rounded-full w-[24px]"
                        />
                      </span></div></span
                  ><a
                    class="block absolute inset-0"
                    href="/single-video/this-is-single-slug"
                  ></a>
                </div>
              </div>
            </div>
            <a
              class="absolute inset-0"
              href="/single-video/this-is-single-slug"
            ></a
            ><span class="absolute top-3 inset-x-3 z-10"
              ><div class="nc-CategoryBadgeList flex flex-wrap space-x-2">
                <a
                  class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800"
                  href="/archive/the-demo-archive-slug"
                  >مستند</a
                >
              </div></span
            >
            <div class="p-4 flex flex-col space-y-3">
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
                      alt="Falconar Agnes"
                      class="absolute inset-0 w-full h-full object-cover"
                      src="@/assets/images/4.jpg"
                    /><span class="wil-avatar__name">F</span>
                  </div>
                  <span
                    class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
                    >محبوب حسین زاده</span
                  ></a
                ><span
                  class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
                  >·</span
                ><span
                  class="text-neutral-500 dark:text-neutral-400 font-normal font-fd"
                  >21 اردیبهشت 1403</span
                >
              </div>
              <h3
                class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100"
              >
                <span
                  class="line-clamp-2"
                  title="How AI and Teams are benefitting the littlest of patients "
                  >باهوش ترین سگ ایرانی
                </span>
              </h3>
              <div class="flex items-end justify-between mt-auto">
                <div
                  class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative"
                >
                  <button
                    class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                    title="Liked"
                  >
                    <Like />
                    <span class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                      >34</span
                    ></button
                  ><a
                    class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                    title="Comments"
                    href="/single/demo-slug#comments"
                    ><Comment />
                    <span class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                      >110</span
                    ></a
                  >
                </div>
                <div
                  class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative"
                >
                  <button
                    class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                    title="Save to reading list"
                  >
                    <Bookmark />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<script setup>
import Bookmark from "@/components/icons/Bookmark.vue";
import Like from "@/components/icons/Heart.vue";
import Comment from "@/components/icons/Comment.vue";
import Mostanad from "@/components/icons/Mostanad.vue";
import ReadMore from "@/components/icons/ReadMore.vue";
</script>
