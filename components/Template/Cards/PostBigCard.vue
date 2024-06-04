<template>
  <div class="nc-Card2 group relative flex flex-col h-full">
    <div class="block flex-shrink-0 flex-grow relative w-full z-0">
      <img
        alt=""
        data-nimg="fill"
        class="object-cover rounded-t-3xl h-full w-full"
        src="@/assets/images/6.jpg"
      />
      <div class="nc-PostTypeFeaturedIcon absolute bottom-2 left-2"></div>
      <div
        class="nc-CategoryBadgeList flex flex-wrap space-x-2 absolute top-3 left-3"
        data-nc-id="CategoryBadgeList"
      >
        <a
          class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
          href="/archive/the-demo-archive-slug"
          >گربه ها</a
        >
      </div>
    </div>
    <a class="absolute inset-0" href="//single"></a>
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
            href="//single"
            >بهترین حیوان خانگی برای نگهداری در آپارتمان چیست؟</a
          >
        </h2>
        <span
          class="block text-neutral-500 dark:text-neutral-400 text-[15px] leading-6 px-4 text-justify"
          >امروزه خانواده های کمتری در ویلا زندگی می کنند و آپارتمان ها شهرها را
          تسخیر کرده اند. بنابراین سوال اینجاست که آیا می توان حیوانات خانگی را
          در آپارتمان نگهداری کرد؟ در حالی که در نگاه اول، فضای آپارتمان کوچک
          مانند یک مانع برای نگهداری حیوان خانگی به نظر می رسد، اما با انتخاب
          های درست می توان به راحتی بر این مانع غلبه کرد.</span
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
            <Like />
            <span class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
              >34</span
            ></button
          ><a
            class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
            title="Comments"
            href="/single/demo-slug#comments"
          >
            <Comment />
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
</template>
