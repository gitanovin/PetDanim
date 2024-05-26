<template>
  <section class="Latest-News">
    <div class="max-w-7xl py-16 lg:py-16 mx-auto lg:px-0 px-6">
      <div class="flex flex-col mb-8 relative">
        <div
          class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50"
        >
          <div class="w-full  flex items-center justify-between">
            <h2
              class="text-2xl md:text-3xl lg:text-2xl font-bold  flex items-center"
            >
              <BlogIcon class="w-16  rounded-lg ml-2 p-2 bg-primary fill-white" />
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
            <span>مشاهده همه </span
            >
            <IconsLeftArrow/>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-4">
        <div class="nc-Card2 group relative flex flex-col h-full">
          <div class="block flex-shrink-0 flex-grow relative w-full z-0">
            <img
              alt=""
              data-nimg="fill"
              class="object-cover rounded-t-3xl h-full w-full"
              src="@/assets/images/6.jpg"
            />
            <div
              class="nc-PostTypeFeaturedIcon absolute bottom-2 left-2"
            ></div>
            <div
              class="nc-CategoryBadgeList flex flex-wrap space-x-2 absolute top-3 left-3"
              data-nc-id="CategoryBadgeList"
            >
              <a
                class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
                href="/archive/the-demo-archive
                
                
                
                
                
                
                
                
                
                -slug"
                >گربه ها</a
              >
            </div>
          </div>
          <a class="absolute inset-0" href="/single/this-is-single-slug"></a>
          <div class="flex flex-col border rounded-b-3xl">
            <div class="space-y-3">
              <div
                class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 relative text-sm"
              >
                <a
                  class="relative flex items-center space-x-2 rtl:space-x-reverse p-4"
                  href="/author/the-demo-author-slug"
                  ><div
                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-8 w-8 text-sm ring-1 ring-white dark:ring-neutral-900"
                  >
                    <img
                      alt="Pillifant Vern"
                      class="absolute inset-0 w-full h-full object-cover"
                      src="@/assets/images/6.jpg"
                    /><span class="wil-avatar__name">P</span>
                  </div>
                  <span
                    class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
                    >حدیث شادی</span
                  ></a
                ><span
                  class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
                  >·</span
                ><span
                  class="text-neutral-500 dark:text-neutral-400 font-normal font-fd"
                  >29 اردیبهشت 1403</span
                >
              </div>
              <h2
                class="px-4 block font-semibold text-neutral-900 dark:text-neutral-100 text-base sm:text-lg md:text-xl"
              >
                <a
                  class="line-clamp-2"
                  title="Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities"
                  href="/single/this-is-single-slug"
                  >بهترین حیوان خانگی برای نگهداری در آپارتمان چیست؟</a
                >
              </h2>
              <span
                class="block text-neutral-500 dark:text-neutral-400 text-[15px] leading-6 px-4 text-justify"
                >امروزه خانواده های کمتری در ویلا زندگی می کنند و آپارتمان ها
                شهرها را تسخیر کرده اند. بنابراین سوال اینجاست که آیا می توان
                حیوانات خانگی را در آپارتمان نگهداری کرد؟ در حالی که در نگاه
                اول، فضای آپارتمان کوچک مانند یک مانع برای نگهداری حیوان خانگی
                به نظر می رسد، اما با انتخاب های درست می توان به راحتی بر این
                مانع غلبه کرد.</span
              >
            </div>
            <div
              class="mt-5 border-t border-neutral-200 dark:border-neutral-700"
            ></div>
            <div class="flex items-center justify-between px-4 py-4">
              <div
                class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative"
              >
                <button
                  class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                  title="Liked"
                >
                  <Like/>
                  <span class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                    >34</span
                  ></button
                ><a
                  class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                  title="Comments"
                  href="/single/demo-slug#comments"
                  >
                  <Comment/>
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
                  <Bookmark/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="grid gap-6 md:gap-4">
          <div
            class="relative flex group flex-row items-center p-4 rounded-3xl sm:bg-white sm:dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 h-full"
          >
            <a
              class="absolute inset-0 z-0"
              href="/single/this-is-single-slug"
            ></a>
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
                <h2 class="block font-semibold text-sm sm:text-base">
                  <a
                    class="line-clamp-2"
                    title="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
                    href="/single/this-is-single-slug"
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
                      class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
                      >محبوب حسین زاده</span
                    ></a
                  ><span
                    class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
                    >·</span
                  ><span
                    class="text-neutral-500 dark:text-neutral-400 font-normal font-fd"
                    >30 اردیبهشت 1403</span
                  >
                </div>
              </div>
              <div class="flex items-center flex-wrap justify-between mt-auto">
                <div
                  class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative"
                >
                  <button
                    class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                    title="Liked"
                  >
                    <Like/><span class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                      >34</span
                    ></button
                  ><a
                    class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                    title="Comments"
                    href="/single/demo-slug#comments"
                    >
                     <Comment/><span class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                      >58</span
                    >
                    </a
                  >
                </div>
                <div
                  class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative"
                >
                  <button
                    class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                    title="Save to reading list"
                  >
                   <Bookmark/>
                  </button>
                </div>
              </div>
            </div>
            <a
              class="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden z-0"
              href="/single/this-is-single-slug"
              ><img
                alt="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
                class="object-cover w-full h-full"
                src="@/assets/images/3.jpg" /><span
                class="absolute bottom-1 start-1"
                ><div
                  class="nc-PostTypeFeaturedIcon"
                ></div></span
            ></a>
          </div>

               <div
            class="relative flex group flex-row items-center p-4 rounded-3xl sm:bg-white sm:dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 h-full"
          >
            <a
              class="absolute inset-0 z-0"
              href="/single/this-is-single-slug"
            ></a>
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
                <h2 class="block font-semibold text-sm sm:text-base">
                  <a
                    class="line-clamp-2"
                    title="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
                    href="/single/this-is-single-slug"
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
                      class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
                      >محبوب حسین زاده</span
                    ></a
                  ><span
                    class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
                    >·</span
                  ><span
                    class="text-neutral-500 dark:text-neutral-400 font-normal font-fd"
                    >30 اردیبهشت 1403</span
                  >
                </div>
              </div>
              <div class="flex items-center flex-wrap justify-between mt-auto">
                <div
                  class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative"
                >
                  <button
                    class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                    title="Liked"
                  >
                    <Like/><span class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                      >34</span
                    ></button
                  ><a
                    class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                    title="Comments"
                    href="/single/demo-slug#comments"
                    >
                     <Comment/><span class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                      >58</span
                    >
                    </a
                  >
                </div>
                <div
                  class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative"
                >
                  <button
                    class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                    title="Save to reading list"
                  >
                   <Bookmark/>
                  </button>
                </div>
              </div>
            </div>
            <a
              class="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden z-0"
              href="/single/this-is-single-slug"
              ><img
                alt="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
                class="object-cover w-full h-full"
                src="@/assets/images/3.jpg" /><span
                class="absolute bottom-1 start-1"
                ><div
                  class="nc-PostTypeFeaturedIcon"
                ></div></span
            ></a>
          </div>

               <div
            class="relative flex group flex-row items-center p-4 rounded-3xl sm:bg-white sm:dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 h-full"
          >
            <a
              class="absolute inset-0 z-0"
              href="/single/this-is-single-slug"
            ></a>
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
                <h2 class="block font-semibold text-sm sm:text-base">
                  <a
                    class="line-clamp-2"
                    title="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
                    href="/single/this-is-single-slug"
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
                      class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
                      >محبوب حسین زاده</span
                    ></a
                  ><span
                    class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
                    >·</span
                  ><span
                    class="text-neutral-500 dark:text-neutral-400 font-normal font-fd"
                    >30 اردیبهشت 1403</span
                  >
                </div>
              </div>
              <div class="flex items-center flex-wrap justify-between mt-auto">
                <div
                  class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative"
                >
                  <button
                    class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                    title="Liked"
                  >
                    <Like/><span class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                      >34</span
                    ></button
                  ><a
                    class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                    title="Comments"
                    href="/single/demo-slug#comments"
                    >
                     <Comment/><span class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                      >58</span
                    >
                    </a
                  >
                </div>
                <div
                  class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative"
                >
                  <button
                    class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                    title="Save to reading list"
                  >
                   <Bookmark/>
                  </button>
                </div>
              </div>
            </div>
            <a
              class="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden z-0"
              href="/single/this-is-single-slug"
              ><img
                alt="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
                class="object-cover w-full h-full"
                src="@/assets/images/3.jpg" /><span
                class="absolute bottom-1 start-1"
                ><div
                  class="nc-PostTypeFeaturedIcon"
                ></div></span
            ></a>
          </div>

          

        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import BlogIcon from "@/components/icons/BlogIcon.vue";
import IconsLeftArrow from "@/components/icons/LeftArrow.vue";
import Bookmark from "@/components/icons/Bookmark.vue";
import Like from "@/components/icons/Heart.vue";
import Comment from "@/components/icons/Comment.vue";
</script>