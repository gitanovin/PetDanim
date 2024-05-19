<template>
  <div class="bg-[#111827] dark:bg-black dark:bg-opacity-20 text-neutral-100">
    <div class="relative max-w-7xl mx-auto">
      <div class="nc-SectionGridPosts relative py-16 lg:py-28">
        <div
          class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50"
        >
          <div class="text-center w-full max-w-2xl mx-auto">
            <h2
              class="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-50"
            >
              Explore latest video articles
            </h2>
            <span
              class="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400"
              >Hover on the post card and preview video 🥡</span
            >
          </div>
        </div>
        <div class="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="relative flex flex-col h-full">
            <div
              class="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden z-0"
            >
              <div>
                <div class="nc-PostFeaturedMedia relative w-full h-full">
                  <img
                    alt="featured"
                    class="object-cover"
                    src="@/assets/images/1.jpg"
                  /><span
                    class="absolute inset-0 flex items-center justify-center"
                    ><div
                      class="nc-PostTypeFeaturedIcon hover:scale-105 transform cursor-pointer transition-transform"
                      data-nc-id="PostTypeFeaturedIcon"
                    >
                      <span
                        class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11"
                        ><svg
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path></svg
                      ></span></div></span
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
              <div
                class="nc-CategoryBadgeList flex flex-wrap space-x-2"
                data-nc-id="CategoryBadgeList"
              >
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
                  class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                  title="Save to reading list"
                >
                  <Bookmark />
                </button>
              </div>
            </div>
            <div class="space-y-2.5 mt-4 px-4">
              <div
                class="inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
              >
                <div
                  class="relative flex items-center space-x-2 rtl:space-x-reverse"
                >
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
                    <h2 class="block font-semibold text-base text-gray-50">
                      <a
                        class="line-clamp-1"
                        href="/single-video/this-is-single-slug"
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
                        class="text-gray-400 dark:text-neutral-400 font-normal"
                        >28 اردیبهشت 1403</span
                      ></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-20 justify-center items-center">
          <button
            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
          >
          <Spiner/>
           مشاهده همه 
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Bookmark from "@/components/icons/Bookmark.vue";
import Spiner from "@/components/icons/Spiner.vue";
</script>
