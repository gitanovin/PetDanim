<template>
  <section>
    <div class="relative py-16 lg:py-28 bg-gray-50 lg:px-0 ">
      <div class="SliderPosts mx-auto max-w-7xl py-6 rounded-2xl">
        <div
          class="relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50 lg:px-0 px-6"
        >
          <div class="w-full flex items-center justify-between">
            <h2
              class="text-2xl md:text-3xl lg:text-2xl font-bold flex items-center"
            >
              <TopIcon
                class="w-16 rounded-lg ml-2 p-2 bg-primary fill-white"
              />
              <span> برترین ها </span>
            </h2>
            <div class="bg-orange-500 w-4 h-4 rounded-full"></div>
          </div>
        </div>
        <div class="expolor-Slider">
          <div class="">
            <div class="flow-root rounded-xl">
              <ul>
                <Splide
                  :options="{
                    perPage: 5,
                    type: 'loop',
                    direction: 'rtl',
                    gap: '10px',
                    //   padding: '0',
                    //   focus: 'center',
                    breakpoints: {
                      400: {
                        perPage: 1,
                        padding: '4rem',
                        gap: '1rem',
                      },
                      640: {
                        perPage: 1,
                        padding: '4rem',
                        gap: '1rem',
                      },

                       1080: {
                        perPage: 3,
                        padding: '4rem',
                        gap: '1rem',
                      },
                          1280: {
                        perPage: 3,
                        padding: '4rem',
                        gap: '1rem',
                      },
                    },
                  }"
                >
                  <SplideSlide class="splide__slide rounded-lg">
                    <li class="inline-block whitespace-normal h-full">
                      <div
                        class="flex flex-col group rounded-3xl overflow-hidden z-0 h-full w-full relative"
                      >
                        <div
                          class="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300"
                        >
                          <div
                            class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative"
                          >
                            <button
                              class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                              title="Liked"
                            >
                              <Heart />
                              <span
                                class="ml-1 text-neutral-900 dark:text-neutral-200"
                                >34</span
                              ></button
                            ><a
                              class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                              title="Comments"
                              href="/single/demo-slug#comments"
                              ><Comment /><span
                                class="ml-1 text-neutral-900 dark:text-neutral-200"
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

                        <div class="h-full w-full">
                          <div class="relative w-full h-full">
                            <img
                              alt="featured"
                              class="object-cover h-full w-full text-transparent"
                              src="@/assets/images/2.webp"
                            />
                            <div
                              class="nc-ButtonPlayMusicPlayer select-none absolute inset-0 bg-neutral-900/30 flex items-center justify-center"
                            >
                              <div
                                class="nc-PostTypeFeaturedIcon z-20 hover:scale-105 transform cursor-pointer transition-transform"
                              >
                                <span
                                  class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11"
                                >
                                  <Music />
                                </span>
                              </div>
                            </div>
                            <a
                              class="block absolute inset-0"
                              href="/single-audio/this-is-single-slug"
                            ></a>
                          </div>
                        </div>
                        <a
                          class="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-50"
                          href="/single-audio/this-is-single-slug"
                        ></a>
                        <div
                          class="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow"
                        >
                          <a
                            class="absolute inset-0"
                            href="/single-audio/this-is-single-slug"
                          ></a>
                          <div class="mb-3">
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
                          </div>
                          <div
                            class="inline-flex items-center text-xs text-neutral-300"
                          >
                            <div class="block">
                              <h2
                                class="block text-base sm:text-lg font-semibold text-white"
                              >
                                <span
                                  class="line-clamp-2"
                                  title="Microsoft announces "
                                  >برترین نژادهای سگ
                                </span>
                              </h2>
                              <a
                                class="flex mt-2.5 relative"
                                href="/author/hadisshadi"
                                ><span
                                  class="block text-neutral-200 hover:text-white font-medium truncate"
                                  >حدیث شادی</span
                                ><span class="mx-[6px] font-medium">·</span
                                ><span class="font-normal truncate"
                                  >28 اردیبهشت 1403</span
                                ></a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </SplideSlide>

                  <SplideSlide class="splide__slide rounded-lg">
                    <li class="inline-block whitespace-normal h-full">
                      <div
                        class="flex flex-col group rounded-3xl overflow-hidden z-0 h-full w-full relative"
                      >
                        <div
                          class="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300"
                        >
                          <div
                            class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative"
                          >
                            <button
                              class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                              title="Liked"
                            >
                              <Heart />
                              <span
                                class="ml-1 text-neutral-900 dark:text-neutral-200"
                                >34</span
                              ></button
                            ><a
                              class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                              title="Comments"
                              href="/single/demo-slug#comments"
                              ><Comment /><span
                                class="ml-1 text-neutral-900 dark:text-neutral-200"
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

                        <div class="h-full w-full">
                          <div class="relative w-full h-full">
                            <img
                              alt="featured"
                              class="object-cover h-full w-full text-transparent"
                              src="@/assets/images/1.jpg"
                            />
                            <div
                              class="nc-ButtonPlayMusicPlayer select-none absolute inset-0 bg-neutral-900/30 flex items-center justify-center"
                            >
                              <div
                                class="flex items-center justify-center z-20 hover:scale-105 transform cursor-pointer transition-transform"
                              >
                                <span
                                  class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11"
                                >
                                  <Video />
                                </span>
                              </div>
                            </div>
                            <a
                              class="block absolute inset-0"
                              href="/single-audio/this-is-single-slug"
                            ></a>
                          </div>
                        </div>
                        <a
                          class="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-50"
                          href="/single-audio/this-is-single-slug"
                        ></a>
                        <div
                          class="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow"
                        >
                          <a
                            class="absolute inset-0"
                            href="/single-audio/this-is-single-slug"
                          ></a>
                          <div class="mb-3">
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
                          </div>
                          <div
                            class="inline-flex items-center text-xs text-neutral-300"
                          >
                            <div class="block">
                              <h2
                                class="block text-base sm:text-lg font-semibold text-white"
                              >
                                <span
                                  class="line-clamp-2"
                                  title="Microsoft announces "
                                  >برترین نژادهای سگ
                                </span>
                              </h2>
                              <a
                                class="flex mt-2.5 relative"
                                href="/author/hadisshadi"
                                ><span
                                  class="block text-neutral-200 hover:text-white font-medium truncate"
                                  >حدیث شادی</span
                                ><span class="mx-[6px] font-medium">·</span
                                ><span class="font-normal truncate"
                                  >28 اردیبهشت 1403</span
                                ></a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </SplideSlide>

                  <SplideSlide class="splide__slide rounded-lg">
                    <li class="inline-block whitespace-normal h-full">
                      <div
                        class="flex flex-col group rounded-3xl overflow-hidden z-0 h-full w-full relative"
                      >
                        <div
                          class="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300"
                        >
                          <div
                            class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative"
                          >
                            <button
                              class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                              title="Liked"
                            >
                              <Heart />
                              <span
                                class="ml-1 text-neutral-900 dark:text-neutral-200"
                                >34</span
                              ></button
                            ><a
                              class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                              title="Comments"
                              href="/single/demo-slug#comments"
                              ><Comment /><span
                                class="ml-1 text-neutral-900 dark:text-neutral-200"
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

                        <div class="h-full w-full">
                          <div class="relative w-full h-full">
                            <img
                              alt="featured"
                              class="object-cover min-h-[350px] h-full w-full text-transparent"
                              src="@/assets/images/6.jpg"
                            />
                            <div
                              class="nc-ButtonPlayMusicPlayer select-none absolute inset-0 bg-neutral-900/30 flex items-center justify-center"
                            >
                              <div
                                class="flex items-center justify-center z-20 hover:scale-105 transform cursor-pointer transition-transform"
                              >
                                <span
                                  class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11"
                                >
                                  <Post />
                                </span>
                              </div>
                            </div>
                            <a
                              class="block absolute inset-0"
                              href="/single-audio/this-is-single-slug"
                            ></a>
                          </div>
                        </div>
                        <a
                          class="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-50"
                          href="/single-audio/this-is-single-slug"
                        ></a>
                        <div
                          class="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow"
                        >
                          <a
                            class="absolute inset-0"
                            href="/single-audio/this-is-single-slug"
                          ></a>
                          <div class="mb-3">
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
                          </div>
                          <div
                            class="inline-flex items-center text-xs text-neutral-300"
                          >
                            <div class="block">
                              <h2
                                class="block text-base sm:text-lg font-semibold text-white"
                              >
                                <span
                                  class="line-clamp-2"
                                  title="Microsoft announces "
                                  >برترین نژادهای سگ
                                </span>
                              </h2>
                              <a
                                class="flex mt-2.5 relative"
                                href="/author/hadisshadi"
                                ><span
                                  class="block text-neutral-200 hover:text-white font-medium truncate"
                                  >حدیث شادی</span
                                ><span class="mx-[6px] font-medium">·</span
                                ><span class="font-normal truncate"
                                  >28 اردیبهشت 1403</span
                                ></a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </SplideSlide>
                </Splide>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Bookmark from "@/components/icons/Bookmark.vue";
import Heart from "@/components/icons/Heart.vue";
import Comment from "@/components/icons/Comment.vue";
import Music from "@/components/icons/Music.vue";
import TopIcon from "@/components/icons/TopIcon.vue";
import Video from "@/components/icons/Video.vue";
import Post from "@/components/icons/Post.vue";
</script>
