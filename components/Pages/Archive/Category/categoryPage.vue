<template>
    <div class="nc-PageArchive">
        <div class="w-full px-2 xl:max-w-screen-2xl mx-auto">
            <div
                class="relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0">
                <img alt="archive"
                    class="object-cover w-full h-full rounded-3xl md:rounded-[40px]"
                     src="@/assets/images/3.jpg"
                    >
                <div
                    class="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
                    <h2 class="inline-block align-middle text-5xl font-semibold md:text-7xl ">سگ ها</h2><span
                        class="block mt-4 text-neutral-300 font-fd">115 مقاله</span>
                </div>
            </div>
        </div>
        <div class="container pt-10 pb-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
            <div>
                <div class="flex flex-col sm:justify-between sm:flex-row">
                    <div class="flex space-x-2.5 rtl:space-x-reverse">
                        <div class="nc-ModalCategories">
                            <div class="nc-NcModal"><button
                                    class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-neutral-700 dark:hover:ring-neutral-500 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6  ">
                                    <div><span class="hidden sm:inline">دیکر</span> دسته بندی ها</div><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        aria-hidden="true" class="w-4 h-4 ms-2 -me-1">
                                        <path fill-rule="evenodd"
                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button></div>
                        </div>
                        <div class="nc-ModalTags">
                            <div class="nc-NcModal"><button
                                    class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-neutral-700 dark:hover:ring-neutral-500 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6  ">
                                    <div><span class="hidden sm:inline">دیگر</span> برچسب ها</div><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        aria-hidden="true" class="w-4 h-4 ms-2 -me-1">
                                        <path fill-rule="evenodd"
                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button></div>
                        </div>
                    </div>
                    <div class="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
                    <div class="flex justify-end">
                        <div class="nc-ArchiveFilterListBox flex-shrink-0 ">
                            <div class="relative">
                                <div 
                                    ><button
                                        class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-neutral-700 dark:hover:ring-neutral-500 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6  ">
                                        Most
                                        Recent
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            fill="currentColor" aria-hidden="true" class="w-4 h-4 ms-2 -me-1">
                                            <path fill-rule="evenodd"
                                                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                clip-rule="evenodd"></path>
                                        </svg></button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
                    <div
                        class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 h-full">
                        <div
                            class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-4 aspect-h-3">
                            <div>
                                <div class="nc-PostFeaturedMedia relative w-full h-full"><img alt="featured"
                                        class="object-cover"
                                        src="@/assets/images/4.jpg"
                                        ><a
                                        class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100"
                                        href="/single/this-is-single-slug"></a></div>
                            </div>
                        </div><a class="absolute inset-0" href="/single/this-is-single-slug"></a><span
                            class="absolute top-3 inset-x-3 z-10">
                            <div class="nc-CategoryBadgeList flex flex-wrap space-x-2"><a
                                    class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                                    href="/archive/the-demo-archive-slug">سگ ها</a></div>
                        </span>
                        <div class="p-4 flex flex-col space-y-3">
                            <div
                                class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
                                <a class="relative flex items-center space-x-2 rtl:space-x-reverse"
                                    href="/author/the-demo-author-slug">
                                    <div
                                        class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                                        <img alt="Foulcher Nathanil"
                                            class="absolute inset-0 w-full h-full object-cover"
                                             src="@/assets/images/5.jpg"
                                            ><span
                                            class="wil-avatar__name">F</span></div><span
                                        class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
محبوب حسین زاده
                                    </span>
                                </a><span
                                    class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                                    class="text-neutral-500 dark:text-neutral-400 font-normal font-fd">24 اردیبهشت 1403</span></div>
                            <h3
                                class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
                                <span class="line-clamp-2"
                                    title="Lenovo’s smarter devices stoke professional passions ">این یک متن تستی است </span></h3>
                            <div class="flex items-end justify-between mt-auto">
                                <div
                                    class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative">
                                    <button
                                        class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                                        title="Liked">
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="1"
                                                d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <span
                                            class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd">34</span></button><a
                                        class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs "
                                        title="Comments" href="/single/demo-slug#comments">
                                        <svg width="24" height="24"
                                            fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="1"
                                                d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                            </path>
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z">
                                            </path>
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z">
                                            </path>
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z">
                                            </path>
                                        </svg>
                                        <span class="ml-1 text-neutral-900 dark:text-neutral-200">110</span></a>
                                </div>
                                <div
                                    class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
                                    <button
                                        class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                                        title="Save to reading list"><svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor"
                                            class="w-[18px] h-[18px]">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
                                            </path>
                                        </svg></button></div>
                            </div>
                        </div>
                    </div>


                </div>
                <div
                    class="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                    <nav class="nc-Pagination inline-flex space-x-1 rtl:space-x-reverse text-base font-medium "><span
                            class="inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white focus:outline-none">1</span><a
                            class="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                            href="/">2</a><a
                            class="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                            href="/">3</a><a
                            class="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                            href="/">4</a></nav><button
                        class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ">Show
                        me more</button>
                </div>
            </div>
            <div class="relative py-16">
                <div
                    class="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100 dark:bg-black dark:bg-opacity-20">
                    <span class="sr-only hidden">bg</span></div>
                <div class="nc-SectionGridCategoryBox relative ">
                    <div
                        class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
                        <div class="text-center w-full max-w-2xl mx-auto ">
                            <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold">Top trending topics</h2><span
                                class="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">Discover
                                over 100 topics</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
                        <a class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors "
                            href="/archive/the-demo-archive-slug"><span
                                class="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100  ">#1</span>
                            <div class="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                                <img alt="categories" loading="lazy" decoding="async" data-nimg="fill"
                                    class="object-cover " sizes="80px"
                                    srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090161767-e6ffed986c88%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=3840&amp;q=75"
                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                            </div>
                            <div class="mt-3">
                                <h2 class="text-base font-semibold">Garden</h2><span
                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">13 Articles</span>
                            </div>
                        </a><a
                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors "
                            href="/archive/the-demo-archive-slug"><span
                                class="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-red-800 bg-red-100  ">#2</span>
                            <div class="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                                <img alt="categories" loading="lazy" decoding="async" data-nimg="fill"
                                    class="object-cover " sizes="80px"
                                    srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485841890310-6a055c88698a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D550%26q%3D80&amp;w=3840&amp;q=75"
                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                            </div>
                            <div class="mt-3">
                                <h2 class="text-base font-semibold">Jewelry</h2><span
                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">16 Articles</span>
                            </div>
                        </a><a
                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors "
                            href="/archive/the-demo-archive-slug"><span
                                class="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-yellow-800 bg-yellow-100  ">#3</span>
                            <div class="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                                <img alt="categories" loading="lazy" decoding="async" data-nimg="fill"
                                    class="object-cover " sizes="80px"
                                    srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1459411552884-841db9b3cc2a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75"
                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                            </div>
                            <div class="mt-3">
                                <h2 class="text-base font-semibold">Industrial</h2><span
                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">15 Articles</span>
                            </div>
                        </a><a
                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors "
                            href="/archive/the-demo-archive-slug">
                            <div class="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                                <img alt="categories" loading="lazy" decoding="async" data-nimg="fill"
                                    class="object-cover " sizes="80px"
                                    srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1491406213019-05b162a72c20%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75"
                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                            </div>
                            <div class="mt-3">
                                <h2 class="text-base font-semibold">Tools</h2><span
                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">21 Articles</span>
                            </div>
                        </a><a
                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors "
                            href="/archive/the-demo-archive-slug">
                            <div class="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                                <img alt="categories" loading="lazy" decoding="async" data-nimg="fill"
                                    class="object-cover " sizes="80px"
                                    srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528297506728-9533d2ac3fa4%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75"
                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                            </div>
                            <div class="mt-3">
                                <h2 class="text-base font-semibold">Automotive</h2><span
                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">16 Articles</span>
                            </div>
                        </a><a
                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors "
                            href="/archive/the-demo-archive-slug">
                            <div class="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                                <img alt="categories" loading="lazy" decoding="async" data-nimg="fill"
                                    class="object-cover " sizes="80px"
                                    srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534349762230-e0cadf78f5da%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75"
                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                            </div>
                            <div class="mt-3">
                                <h2 class="text-base font-semibold">Toys</h2><span
                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">25 Articles</span>
                            </div>
                        </a><a
                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors "
                            href="/archive/the-demo-archive-slug">
                            <div class="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                                <img alt="categories" loading="lazy" decoding="async" data-nimg="fill"
                                    class="object-cover " sizes="80px"
                                    srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498049794561-7780e7231661%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75"
                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                            </div>
                            <div class="mt-3">
                                <h2 class="text-base font-semibold">Outdoors</h2><span
                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">14 Articles</span>
                            </div>
                        </a><a
                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors "
                            href="/archive/the-demo-archive-slug">
                            <div class="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                                <img alt="categories" loading="lazy" decoding="async" data-nimg="fill"
                                    class="object-cover " sizes="80px"
                                    srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512686096451-a15c19314d59%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75"
                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                            </div>
                            <div class="mt-3">
                                <h2 class="text-base font-semibold">Health</h2><span
                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">4 مقاله</span>
                            </div>
                        </a><a
                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors "
                            href="/archive/the-demo-archive-slug">
                            <div class="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                                <img alt="categories" loading="lazy" decoding="async" data-nimg="fill"
                                    class="object-cover " sizes="80px"
                                    srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546015018-8f2e2f225773%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75"
                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                            </div>
                            <div class="mt-3">
                                <h2 class="text-base font-semibold">گربه ها</h2><span
                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">7 مقاله</span>
                            </div>
                        </a><a
                            class="nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors "
                            href="/archive/the-demo-archive-slug">
                            <div class="relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0">
                                <img alt="categories"
                                    class="object-cover " sizes="80px"
                                   src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512658740823-0ebb97b3b86e%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D80&amp;w=3840&amp;q=75"
>
                            </div>
                            <div class="mt-3">
                                <h2 class="text-base font-semibold">سگ ها</h2><span
                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">26 مقاله</span>
                            </div>
                        </a></div>
                </div>
                <div class="text-center mx-auto mt-10 md:mt-16"><button 
                        class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-secondary-500 hover:bg-secondary-6000 text-secondary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  "><svg
                            class="animate-spin -ms-1 me-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>مشاهده بیشتر</button></div>
            </div>
            <div class="nc-SectionSliderNewAuthors ">
                <div
                    class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
                    <div class="text-center w-full max-w-2xl mx-auto ">
                        <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold">Top elite authors</h2><span
                            class="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">Discover
                            our elite writers</span>
                    </div>
                </div>
                <div class="nc-MySlider ">
                    <div class="relative flow-root">
                        <div class="flow-root overflow-hidden rounded-xl">
                            <ul class="relative whitespace-nowrap -mx-2 xl:-mx-4 ">
                                <li class="relative inline-block px-2 xl:px-4 whitespace-normal"
                                    style="width: calc(33.3333%); transform: translateX(0%) translateZ(0px);"><a
                                        class="nc-CardAuthorBox2 flex flex-col overflow-hidden bg-white dark:bg-neutral-800 rounded-3xl "
                                        href="/author/the-demo-author-slug">
                                        <div class="relative flex-shrink-0 ">
                                            <div>
                                                <div class="flex aspect-w-7 aspect-h-5 w-full h-0"><img alt="author"
                                                        loading="lazy" decoding="async" data-nimg="fill"
                                                        class="object-cover w-full h-full"
                                                        sizes="(max-width: 600px) 480px, 33vw"
                                                        srcset="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F912410%2Fpexels-photo-912410.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F912410%2Fpexels-photo-912410.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F912410%2Fpexels-photo-912410.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F912410%2Fpexels-photo-912410.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F912410%2Fpexels-photo-912410.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F912410%2Fpexels-photo-912410.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F912410%2Fpexels-photo-912410.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F912410%2Fpexels-photo-912410.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F912410%2Fpexels-photo-912410.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F912410%2Fpexels-photo-912410.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75 3840w"
                                                        src="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F912410%2Fpexels-photo-912410.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75"
                                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                                                </div>
                                            </div>
                                            <div class="absolute top-3 inset-x-3 flex">
                                                <div
                                                    class=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
                                                    40 <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true"
                                                        class="w-5 h-5 text-yellow-600 ms-3 rtl:rotate-180">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                                    </svg></div>
                                            </div>
                                        </div>
                                        <div class="-mt-8 m-8 text-center">
                                            <div
                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-16 h-16 text-2xl ring-2 ring-white">
                                                <img alt="Truelock Alric" loading="lazy" decoding="async"
                                                    data-nimg="fill" class="absolute inset-0 w-full h-full object-cover"
                                                    sizes="100px"
                                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=3840&amp;q=75 3840w"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5ff2f842.jpg&amp;w=3840&amp;q=75"
                                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"><span
                                                    class="wil-avatar__name">T</span></div>
                                            <div class="mt-3">
                                                <h2 class="text-base font-medium"><span class="line-clamp-1">Truelock
                                                        Alric</span></h2><span
                                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">@Author
                                                    Job</span>
                                            </div>
                                        </div>
                                    </a></li>
                                <li class="relative inline-block px-2 xl:px-4 whitespace-normal"
                                    style="width: calc(33.3333%); transform: translateX(0%) translateZ(0px);"><a
                                        class="nc-CardAuthorBox2 flex flex-col overflow-hidden bg-white dark:bg-neutral-800 rounded-3xl "
                                        href="/author/the-demo-author-slug">
                                        <div class="relative flex-shrink-0 ">
                                            <div>
                                                <div class="flex aspect-w-7 aspect-h-5 w-full h-0"><img alt="author"
                                                        loading="lazy" decoding="async" data-nimg="fill"
                                                        class="object-cover w-full h-full"
                                                        sizes="(max-width: 600px) 480px, 33vw"
                                                        srcset="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7354542%2Fpexels-photo-7354542.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7354542%2Fpexels-photo-7354542.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7354542%2Fpexels-photo-7354542.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7354542%2Fpexels-photo-7354542.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7354542%2Fpexels-photo-7354542.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7354542%2Fpexels-photo-7354542.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7354542%2Fpexels-photo-7354542.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7354542%2Fpexels-photo-7354542.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7354542%2Fpexels-photo-7354542.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7354542%2Fpexels-photo-7354542.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75 3840w"
                                                        src="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7354542%2Fpexels-photo-7354542.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75"
                                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                                                </div>
                                            </div>
                                            <div class="absolute top-3 inset-x-3 flex">
                                                <div
                                                    class=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
                                                    113 <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true"
                                                        class="w-5 h-5 text-yellow-600 ms-3 rtl:rotate-180">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                                    </svg></div>
                                            </div>
                                        </div>
                                        <div class="-mt-8 m-8 text-center">
                                            <div
                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-16 h-16 text-2xl ring-2 ring-white">
                                                <img alt="Birrell Chariot" loading="lazy" decoding="async"
                                                    data-nimg="fill" class="absolute inset-0 w-full h-full object-cover"
                                                    sizes="100px"
                                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=3840&amp;q=75 3840w"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.53c38b54.jpg&amp;w=3840&amp;q=75"
                                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"><span
                                                    class="wil-avatar__name">B</span></div>
                                            <div class="mt-3">
                                                <h2 class="text-base font-medium"><span class="line-clamp-1">Birrell
                                                        Chariot</span></h2><span
                                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">@Author
                                                    Job</span>
                                            </div>
                                        </div>
                                    </a></li>
                                <li class="relative inline-block px-2 xl:px-4 whitespace-normal"
                                    style="width: calc(33.3333%); transform: translateX(0%) translateZ(0px);"><a
                                        class="nc-CardAuthorBox2 flex flex-col overflow-hidden bg-white dark:bg-neutral-800 rounded-3xl "
                                        href="/author/the-demo-author-slug">
                                        <div class="relative flex-shrink-0 ">
                                            <div>
                                                <div class="flex aspect-w-7 aspect-h-5 w-full h-0"><img alt="author"
                                                        loading="lazy" decoding="async" data-nimg="fill"
                                                        class="object-cover w-full h-full"
                                                        sizes="(max-width: 600px) 480px, 33vw"
                                                        srcset="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3651577%2Fpexels-photo-3651577.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3651577%2Fpexels-photo-3651577.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3651577%2Fpexels-photo-3651577.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3651577%2Fpexels-photo-3651577.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3651577%2Fpexels-photo-3651577.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3651577%2Fpexels-photo-3651577.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3651577%2Fpexels-photo-3651577.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3651577%2Fpexels-photo-3651577.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3651577%2Fpexels-photo-3651577.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3651577%2Fpexels-photo-3651577.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75 3840w"
                                                        src="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3651577%2Fpexels-photo-3651577.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75"
                                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                                                </div>
                                            </div>
                                            <div class="absolute top-3 inset-x-3 flex">
                                                <div
                                                    class=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
                                                    43 <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true"
                                                        class="w-5 h-5 text-yellow-600 ms-3 rtl:rotate-180">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                                    </svg></div>
                                            </div>
                                        </div>
                                        <div class="-mt-8 m-8 text-center">
                                            <div
                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-16 h-16 text-2xl ring-2 ring-white">
                                                <img alt="Foulcher Nathanil" loading="lazy" decoding="async"
                                                    data-nimg="fill" class="absolute inset-0 w-full h-full object-cover"
                                                    sizes="100px"
                                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=3840&amp;q=75 3840w"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&amp;w=3840&amp;q=75"
                                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"><span
                                                    class="wil-avatar__name">F</span></div>
                                            <div class="mt-3">
                                                <h2 class="text-base font-medium"><span class="line-clamp-1">Foulcher
                                                        Nathanil</span></h2><span
                                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">@Author
                                                    Job</span>
                                            </div>
                                        </div>
                                    </a></li>
                                <li class="relative inline-block px-2 xl:px-4 whitespace-normal"
                                    style="width: calc(33.3333%); transform: translateX(0%) translateZ(0px);"><a
                                        class="nc-CardAuthorBox2 flex flex-col overflow-hidden bg-white dark:bg-neutral-800 rounded-3xl "
                                        href="/author/the-demo-author-slug">
                                        <div class="relative flex-shrink-0 ">
                                            <div>
                                                <div class="flex aspect-w-7 aspect-h-5 w-full h-0"><img alt="author"
                                                        loading="lazy" decoding="async" data-nimg="fill"
                                                        class="object-cover w-full h-full"
                                                        sizes="(max-width: 600px) 480px, 33vw"
                                                        srcset="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4064835%2Fpexels-photo-4064835.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4064835%2Fpexels-photo-4064835.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4064835%2Fpexels-photo-4064835.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4064835%2Fpexels-photo-4064835.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4064835%2Fpexels-photo-4064835.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4064835%2Fpexels-photo-4064835.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4064835%2Fpexels-photo-4064835.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4064835%2Fpexels-photo-4064835.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4064835%2Fpexels-photo-4064835.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4064835%2Fpexels-photo-4064835.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75 3840w"
                                                        src="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4064835%2Fpexels-photo-4064835.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75"
                                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                                                </div>
                                            </div>
                                            <div class="absolute top-3 inset-x-3 flex">
                                                <div
                                                    class=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
                                                    36 <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true"
                                                        class="w-5 h-5 text-yellow-600 ms-3 rtl:rotate-180">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                                    </svg></div>
                                            </div>
                                        </div>
                                        <div class="-mt-8 m-8 text-center">
                                            <div
                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-16 h-16 text-2xl ring-2 ring-white">
                                                <img alt="Falconar Agnes" loading="lazy" decoding="async"
                                                    data-nimg="fill" class="absolute inset-0 w-full h-full object-cover"
                                                    sizes="100px"
                                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=3840&amp;q=75 3840w"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&amp;w=3840&amp;q=75"
                                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"><span
                                                    class="wil-avatar__name">F</span></div>
                                            <div class="mt-3">
                                                <h2 class="text-base font-medium"><span class="line-clamp-1">Falconar
                                                        Agnes</span></h2><span
                                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">@Author
                                                    Job</span>
                                            </div>
                                        </div>
                                    </a></li>
                                <li class="relative inline-block px-2 xl:px-4 whitespace-normal"
                                    style="width: calc(33.3333%); transform: translateX(0%) translateZ(0px);"><a
                                        class="nc-CardAuthorBox2 flex flex-col overflow-hidden bg-white dark:bg-neutral-800 rounded-3xl "
                                        href="/author/the-demo-author-slug">
                                        <div class="relative flex-shrink-0 ">
                                            <div>
                                                <div class="flex aspect-w-7 aspect-h-5 w-full h-0"><img alt="author"
                                                        loading="lazy" decoding="async" data-nimg="fill"
                                                        class="object-cover w-full h-full"
                                                        sizes="(max-width: 600px) 480px, 33vw"
                                                        srcset="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3330118%2Fpexels-photo-3330118.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3330118%2Fpexels-photo-3330118.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3330118%2Fpexels-photo-3330118.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3330118%2Fpexels-photo-3330118.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3330118%2Fpexels-photo-3330118.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3330118%2Fpexels-photo-3330118.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3330118%2Fpexels-photo-3330118.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3330118%2Fpexels-photo-3330118.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3330118%2Fpexels-photo-3330118.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3330118%2Fpexels-photo-3330118.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75 3840w"
                                                        src="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3330118%2Fpexels-photo-3330118.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75"
                                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                                                </div>
                                            </div>
                                            <div class="absolute top-3 inset-x-3 flex">
                                                <div
                                                    class=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
                                                    38 <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true"
                                                        class="w-5 h-5 text-yellow-600 ms-3 rtl:rotate-180">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                                    </svg></div>
                                            </div>
                                        </div>
                                        <div class="-mt-8 m-8 text-center">
                                            <div
                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-16 h-16 text-2xl ring-2 ring-white">
                                                <img alt="Tousy Vita" loading="lazy" decoding="async" data-nimg="fill"
                                                    class="absolute inset-0 w-full h-full object-cover" sizes="100px"
                                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=3840&amp;q=75 3840w"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.4288b93b.jpg&amp;w=3840&amp;q=75"
                                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"><span
                                                    class="wil-avatar__name">T</span></div>
                                            <div class="mt-3">
                                                <h2 class="text-base font-medium"><span class="line-clamp-1">Tousy
                                                        Vita</span></h2><span
                                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">@Author
                                                    Job</span>
                                            </div>
                                        </div>
                                    </a></li>
                                <li class="relative inline-block px-2 xl:px-4 whitespace-normal"
                                    style="width: calc(33.3333%); transform: translateX(0%) translateZ(0px);"><a
                                        class="nc-CardAuthorBox2 flex flex-col overflow-hidden bg-white dark:bg-neutral-800 rounded-3xl "
                                        href="/author/the-demo-author-slug">
                                        <div class="relative flex-shrink-0 ">
                                            <div>
                                                <div class="flex aspect-w-7 aspect-h-5 w-full h-0"><img alt="author"
                                                        loading="lazy" decoding="async" data-nimg="fill"
                                                        class="object-cover w-full h-full"
                                                        sizes="(max-width: 600px) 480px, 33vw"
                                                        srcset="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4066850%2Fpexels-photo-4066850.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4066850%2Fpexels-photo-4066850.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4066850%2Fpexels-photo-4066850.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4066850%2Fpexels-photo-4066850.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4066850%2Fpexels-photo-4066850.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4066850%2Fpexels-photo-4066850.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4066850%2Fpexels-photo-4066850.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4066850%2Fpexels-photo-4066850.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4066850%2Fpexels-photo-4066850.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4066850%2Fpexels-photo-4066850.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75 3840w"
                                                        src="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4066850%2Fpexels-photo-4066850.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75"
                                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                                                </div>
                                            </div>
                                            <div class="absolute top-3 inset-x-3 flex">
                                                <div
                                                    class=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
                                                    31 <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true"
                                                        class="w-5 h-5 text-yellow-600 ms-3 rtl:rotate-180">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                                    </svg></div>
                                            </div>
                                        </div>
                                        <div class="-mt-8 m-8 text-center">
                                            <div
                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-16 h-16 text-2xl ring-2 ring-white">
                                                <img alt="Friar Donna" loading="lazy" decoding="async" data-nimg="fill"
                                                    class="absolute inset-0 w-full h-full object-cover" sizes="100px"
                                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=3840&amp;q=75 3840w"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.6b888d5b.jpg&amp;w=3840&amp;q=75"
                                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"><span
                                                    class="wil-avatar__name">F</span></div>
                                            <div class="mt-3">
                                                <h2 class="text-base font-medium"><span class="line-clamp-1">Friar
                                                        Donna</span></h2><span
                                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">@Author
                                                    Job</span>
                                            </div>
                                        </div>
                                    </a></li>
                                <li class="relative inline-block px-2 xl:px-4 whitespace-normal"
                                    style="width: calc(33.3333%); transform: translateX(0%) translateZ(0px);"><a
                                        class="nc-CardAuthorBox2 flex flex-col overflow-hidden bg-white dark:bg-neutral-800 rounded-3xl "
                                        href="/author/the-demo-author-slug">
                                        <div class="relative flex-shrink-0 ">
                                            <div>
                                                <div class="flex aspect-w-7 aspect-h-5 w-full h-0"><img alt="author"
                                                        loading="lazy" decoding="async" data-nimg="fill"
                                                        class="object-cover w-full h-full"
                                                        sizes="(max-width: 600px) 480px, 33vw"
                                                        srcset="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F931887%2Fpexels-photo-931887.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F931887%2Fpexels-photo-931887.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F931887%2Fpexels-photo-931887.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F931887%2Fpexels-photo-931887.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F931887%2Fpexels-photo-931887.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F931887%2Fpexels-photo-931887.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F931887%2Fpexels-photo-931887.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F931887%2Fpexels-photo-931887.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F931887%2Fpexels-photo-931887.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F931887%2Fpexels-photo-931887.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75 3840w"
                                                        src="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F931887%2Fpexels-photo-931887.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75"
                                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                                                </div>
                                            </div>
                                            <div class="absolute top-3 inset-x-3 flex">
                                                <div
                                                    class=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
                                                    102 <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true"
                                                        class="w-5 h-5 text-yellow-600 ms-3 rtl:rotate-180">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                                    </svg></div>
                                            </div>
                                        </div>
                                        <div class="-mt-8 m-8 text-center">
                                            <div
                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-16 h-16 text-2xl ring-2 ring-white">
                                                <img alt="Royal Sergei" loading="lazy" decoding="async" data-nimg="fill"
                                                    class="absolute inset-0 w-full h-full object-cover" sizes="100px"
                                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=3840&amp;q=75 3840w"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&amp;w=3840&amp;q=75"
                                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"><span
                                                    class="wil-avatar__name">R</span></div>
                                            <div class="mt-3">
                                                <h2 class="text-base font-medium"><span class="line-clamp-1">Royal
                                                        Sergei</span></h2><span
                                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">@Author
                                                    Job</span>
                                            </div>
                                        </div>
                                    </a></li>
                                <li class="relative inline-block px-2 xl:px-4 whitespace-normal"
                                    style="width: calc(33.3333%); transform: translateX(0%) translateZ(0px);"><a
                                        class="nc-CardAuthorBox2 flex flex-col overflow-hidden bg-white dark:bg-neutral-800 rounded-3xl "
                                        href="/author/the-demo-author-slug">
                                        <div class="relative flex-shrink-0 ">
                                            <div>
                                                <div class="flex aspect-w-7 aspect-h-5 w-full h-0"><img alt="author"
                                                        loading="lazy" decoding="async" data-nimg="fill"
                                                        class="object-cover w-full h-full"
                                                        sizes="(max-width: 600px) 480px, 33vw"
                                                        srcset="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7175377%2Fpexels-photo-7175377.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7175377%2Fpexels-photo-7175377.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7175377%2Fpexels-photo-7175377.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7175377%2Fpexels-photo-7175377.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7175377%2Fpexels-photo-7175377.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7175377%2Fpexels-photo-7175377.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7175377%2Fpexels-photo-7175377.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7175377%2Fpexels-photo-7175377.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7175377%2Fpexels-photo-7175377.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7175377%2Fpexels-photo-7175377.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75 3840w"
                                                        src="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7175377%2Fpexels-photo-7175377.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75"
                                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                                                </div>
                                            </div>
                                            <div class="absolute top-3 inset-x-3 flex">
                                                <div
                                                    class=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
                                                    35 <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true"
                                                        class="w-5 h-5 text-yellow-600 ms-3 rtl:rotate-180">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                                    </svg></div>
                                            </div>
                                        </div>
                                        <div class="-mt-8 m-8 text-center">
                                            <div
                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-16 h-16 text-2xl ring-2 ring-white">
                                                <img alt="Sleite Claudetta" loading="lazy" decoding="async"
                                                    data-nimg="fill" class="absolute inset-0 w-full h-full object-cover"
                                                    sizes="100px"
                                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=3840&amp;q=75 3840w"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.2b513d56.jpg&amp;w=3840&amp;q=75"
                                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"><span
                                                    class="wil-avatar__name">S</span></div>
                                            <div class="mt-3">
                                                <h2 class="text-base font-medium"><span class="line-clamp-1">Sleite
                                                        Claudetta</span></h2><span
                                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">@Author
                                                    Job</span>
                                            </div>
                                        </div>
                                    </a></li>
                                <li class="relative inline-block px-2 xl:px-4 whitespace-normal"
                                    style="width: calc(33.3333%); transform: translateX(0%) translateZ(0px);"><a
                                        class="nc-CardAuthorBox2 flex flex-col overflow-hidden bg-white dark:bg-neutral-800 rounded-3xl "
                                        href="/author/the-demo-author-slug">
                                        <div class="relative flex-shrink-0 ">
                                            <div>
                                                <div class="flex aspect-w-7 aspect-h-5 w-full h-0"><img alt="author"
                                                        loading="lazy" decoding="async" data-nimg="fill"
                                                        class="object-cover w-full h-full"
                                                        sizes="(max-width: 600px) 480px, 33vw"
                                                        srcset="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7663205%2Fpexels-photo-7663205.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7663205%2Fpexels-photo-7663205.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7663205%2Fpexels-photo-7663205.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7663205%2Fpexels-photo-7663205.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7663205%2Fpexels-photo-7663205.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7663205%2Fpexels-photo-7663205.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7663205%2Fpexels-photo-7663205.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7663205%2Fpexels-photo-7663205.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7663205%2Fpexels-photo-7663205.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7663205%2Fpexels-photo-7663205.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75 3840w"
                                                        src="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7663205%2Fpexels-photo-7663205.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75"
                                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                                                </div>
                                            </div>
                                            <div class="absolute top-3 inset-x-3 flex">
                                                <div
                                                    class=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
                                                    21 <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true"
                                                        class="w-5 h-5 text-yellow-600 ms-3 rtl:rotate-180">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                                    </svg></div>
                                            </div>
                                        </div>
                                        <div class="-mt-8 m-8 text-center">
                                            <div
                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-16 h-16 text-2xl ring-2 ring-white">
                                                <img alt="Pillifant Vern" loading="lazy" decoding="async"
                                                    data-nimg="fill" class="absolute inset-0 w-full h-full object-cover"
                                                    sizes="100px"
                                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=3840&amp;q=75 3840w"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.076c6e3f.jpg&amp;w=3840&amp;q=75"
                                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"><span
                                                    class="wil-avatar__name">P</span></div>
                                            <div class="mt-3">
                                                <h2 class="text-base font-medium"><span class="line-clamp-1">Pillifant
                                                        Vern</span></h2><span
                                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">@Author
                                                    Job</span>
                                            </div>
                                        </div>
                                    </a></li>
                                <li class="relative inline-block px-2 xl:px-4 whitespace-normal"
                                    style="width: calc(33.3333%); transform: translateX(0%) translateZ(0px);"><a
                                        class="nc-CardAuthorBox2 flex flex-col overflow-hidden bg-white dark:bg-neutral-800 rounded-3xl "
                                        href="/author/the-demo-author-slug">
                                        <div class="relative flex-shrink-0 ">
                                            <div>
                                                <div class="flex aspect-w-7 aspect-h-5 w-full h-0"><img alt="author"
                                                        loading="lazy" decoding="async" data-nimg="fill"
                                                        class="object-cover w-full h-full"
                                                        sizes="(max-width: 600px) 480px, 33vw"
                                                        srcset="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F973505%2Fpexels-photo-973505.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F973505%2Fpexels-photo-973505.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F973505%2Fpexels-photo-973505.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F973505%2Fpexels-photo-973505.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F973505%2Fpexels-photo-973505.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F973505%2Fpexels-photo-973505.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F973505%2Fpexels-photo-973505.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F973505%2Fpexels-photo-973505.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F973505%2Fpexels-photo-973505.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F973505%2Fpexels-photo-973505.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75 3840w"
                                                        src="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F973505%2Fpexels-photo-973505.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&amp;w=3840&amp;q=75"
                                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                                                </div>
                                            </div>
                                            <div class="absolute top-3 inset-x-3 flex">
                                                <div
                                                    class=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
                                                    111 <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true"
                                                        class="w-5 h-5 text-yellow-600 ms-3 rtl:rotate-180">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                                    </svg></div>
                                            </div>
                                        </div>
                                        <div class="-mt-8 m-8 text-center">
                                            <div
                                                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-16 h-16 text-2xl ring-2 ring-white">
                                                <img alt="Fones Mimi" loading="lazy" decoding="async" data-nimg="fill"
                                                    class="absolute inset-0 w-full h-full object-cover" sizes="100px"
                                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=3840&amp;q=75 3840w"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b54fe3c6.jpg&amp;w=3840&amp;q=75"
                                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"><span
                                                    class="wil-avatar__name">F</span></div>
                                            <div class="mt-3">
                                                <h2 class="text-base font-medium"><span class="line-clamp-1">Fones
                                                        Mimi</span></h2><span
                                                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">@Author
                                                    Job</span>
                                            </div>
                                        </div>
                                    </a></li>
                            </ul>
                        </div><button
                            class="NextBtn w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -end-3 xl:-end-6 z-[1] top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full inline-flex items-center justify-center hover:border-neutral-300 focus:outline-none"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                aria-hidden="true" class="w-5 h-5 rtl:rotate-180">
                                <path fill-rule="evenodd"
                                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                    clip-rule="evenodd"></path>
                            </svg></button>
                    </div>
                </div>
            </div>
            <div class="nc-SectionSubscribe2 relative flex flex-col lg:flex-row items-center ">
                <div class="flex-shrink-0 mb-14 lg:mb-0 lg:me-10 lg:w-2/5">
                    <h2 class="font-semibold text-4xl">Join our newsletter 🎉</h2><span
                        class="block mt-6 text-neutral-500 dark:text-neutral-400">Read and share new perspectives on
                        just about any topic. Everyone’s welcome.</span>
                    <ul class="space-y-5 mt-10">
                        <li class="flex items-center space-x-4 rtl:space-x-reverse"><span
                                class="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  ">01</span><span
                                class="font-medium text-neutral-700 dark:text-neutral-300">Get more discount</span></li>
                        <li class="flex items-center space-x-4 rtl:space-x-reverse"><span
                                class="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100  ">02</span><span
                                class="font-medium text-neutral-700 dark:text-neutral-300">Get premium magazines</span>
                        </li>
                    </ul>
                    <form class="mt-10 relative max-w-sm"><input
                            class="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200/50 bg-white dark:border-neutral-500 dark:focus:ring-primary-500/30 dark:bg-neutral-900 rounded-full text-sm font-normal h-11 px-4 py-3 "
                            required="" aria-required="true" placeholder="Enter your email" type="email"><button
                            class="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-slate-900 hover:bg-slate-800 
        text-slate-50 absolute transform top-1/2 -translate-y-1/2 end-1 dark:bg-neutral-300 dark:text-black  w-9 h-9  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                            type="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="currentColor" aria-hidden="true" class="w-5 h-5 rtl:rotate-180">
                                <path fill-rule="evenodd"
                                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                                    clip-rule="evenodd"></path>
                            </svg></button></form>
                </div>
                <div class="flex-grow"><img alt="subsc" loading="lazy" width="1120" height="803" decoding="async"
                        data-nimg="1" sizes="(max-width: 768px) 100vw, 50vw"
                        srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSVG-subcribe2.3bac6033.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSVG-subcribe2.3bac6033.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSVG-subcribe2.3bac6033.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSVG-subcribe2.3bac6033.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSVG-subcribe2.3bac6033.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSVG-subcribe2.3bac6033.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSVG-subcribe2.3bac6033.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSVG-subcribe2.3bac6033.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSVG-subcribe2.3bac6033.png&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSVG-subcribe2.3bac6033.png&amp;w=3840&amp;q=75"
                        style="color: transparent;"></div>
            </div>
        </div>
    </div>
</template>