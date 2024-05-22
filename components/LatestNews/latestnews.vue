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
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="ms-3 w-6 h-6 rtl:rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
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
                  class="text-neutral-500 dark:text-neutral-400 font-normal"
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
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                      clip-rule="evenodd"
                    ></path></svg
                  ><span class="ml-1 text-neutral-900 dark:text-neutral-200"
                    >34</span
                  ></button
                ><a
                  class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                  title="Comments"
                  href="/single/demo-slug#comments"
                  ><svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                    ></path></svg
                  ><span class="ml-1 text-neutral-900 dark:text-neutral-200"
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    stroke="currentColor"
                    class="w-[18px] h-[18px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="grid gap-6 md:gap-8">
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
                    class="text-neutral-500 dark:text-neutral-400 font-normal"
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
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                        clip-rule="evenodd"
                      ></path></svg
                    ><span class="ml-1 text-neutral-900 dark:text-neutral-200"
                      >34</span
                    ></button
                  ><a
                    class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                    title="Comments"
                    href="/single/demo-slug#comments"
                    ><svg
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                      ></path></svg
                    ><span class="ml-1 text-neutral-900 dark:text-neutral-200"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      fill="none"
                      stroke="currentColor"
                      class="w-[18px] h-[18px]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <a
              class="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden z-0"
              href="/single/this-is-single-slug"
              ><img
                alt="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover w-full h-full"
                src="@/assets/images/3.jpg" /><span
                class="absolute bottom-1 start-1"
                ><div
                  class="nc-PostTypeFeaturedIcon"
                  data-nc-id="PostTypeFeaturedIcon"
                ></div></span
            ></a>
          </div>
          <div
            class="relative flex group flex-row items-center p-4 rounded-3xl sm:bg-white sm:dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 h-full"
          >
            <a
              class="absolute inset-0 z-0"
              href="/single-video/this-is-single-slug"
            ></a>
            <div class="flex flex-col flex-grow">
              <div class="space-y-3 mb-4">
                <div
                  class="nc-CategoryBadgeList flex flex-wrap space-x-2"
                  data-nc-id="CategoryBadgeList"
                >
                  <a
                    class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                    href="/archive/the-demo-archive-slug"
                    >پرندگان</a
                  >
                </div>
                <h2 class="block font-semibold text-sm sm:text-base">
                  <a
                    class="line-clamp-2"
                    title="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis"
                    href="/single-video/this-is-single-slug"
                    >این مقاله تستی است</a
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
                        alt="Foulcher Nathanil"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="absolute inset-0 w-full h-full object-cover"
                        src="@/assets/images/6.jpg"
                      /><span class="wil-avatar__name">F</span>
                    </div>
                    <span
                      class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
                      >علی آزادمند</span
                    ></a
                  ><span
                    class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
                    >·</span
                  ><span
                    class="text-neutral-500 dark:text-neutral-400 font-normal"
                    >6 خرداد 1369</span
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
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                        clip-rule="evenodd"
                      ></path></svg
                    ><span class="ml-1 text-neutral-900 dark:text-neutral-200"
                      >34</span
                    ></button
                  ><a
                    class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                    title="Comments"
                    href="/single/demo-slug#comments"
                    ><svg
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                      ></path></svg
                    ><span class="ml-1 text-neutral-900 dark:text-neutral-200"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      fill="none"
                      stroke="currentColor"
                      class="w-[18px] h-[18px]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <a
              class="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden z-0"
              href="/single-video/this-is-single-slug"
              ><img
                alt="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis"
                class="object-cover w-full h-full"
                src="@/assets/images/7.jpg" /><span
                class="absolute bottom-1 start-1"
                ><div
                  class="nc-PostTypeFeaturedIcon"
                  data-nc-id="PostTypeFeaturedIcon"
                >
                  <span
                    class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white h-7 w-7"
                    ><svg
                      class="h-4 w-4"
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
            ></a>
          </div>
          <div
            class="relative flex group flex-row items-center p-4 rounded-3xl sm:bg-white sm:dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 h-full"
          >
            <a
              class="absolute inset-0 z-0"
              href="/single-video/this-is-single-slug"
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
                    >خزندگان</a
                  >
                </div>
                <h2 class="block font-semibold text-sm sm:text-base">
                  <a
                    class="line-clamp-2"
                    title="Xbox connects people to help through Crisis Text Line and Aenean lectus"
                    href="/single-video/this-is-single-slug"
                    >این یک مقاله تستی است</a
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
                      >پوریا فرهادی</span
                    ></a
                  ><span
                    class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
                    >·</span
                  ><span
                    class="text-neutral-500 dark:text-neutral-400 font-normal"
                    >28 اردیبهشت 1403</span
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
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                        clip-rule="evenodd"
                      ></path></svg
                    ><span class="ml-1 text-neutral-900 dark:text-neutral-200"
                      >34</span
                    ></button
                  ><a
                    class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                    title="Comments"
                    href="/single/demo-slug#comments"
                    ><svg
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                      ></path></svg
                    ><span class="ml-1 text-neutral-900 dark:text-neutral-200"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      fill="none"
                      stroke="currentColor"
                      class="w-[18px] h-[18px]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <a
              class="block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden z-0"
              href="/single-video/this-is-single-slug"
              ><img
                alt="Xbox connects people to help through Crisis Text Line and Aenean lectus"
                class="object-cover w-full h-full"
                src="@/assets/images/4.jpg" /><span
                class="absolute bottom-1 start-1"
                ><div
                  class="nc-PostTypeFeaturedIcon"
                >
                  <span
                    class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white h-7 w-7"
                    ><svg
                      class="h-4 w-4"
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
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import BlogIcon from "@/components/icons/BlogIcon.vue";
</script>