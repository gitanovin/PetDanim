<template>
  <div class="top-header-ads hidden">
    <a
      href=""
      rel="noopener noreferrer"
      target="_blank"
      class="block relative bg-primary hover:bg-primary/90 transition-[background] backdrop-blur z-50 app-banner"
      ><div class="mx-auto px-4 sm:px-6 lg:px-8 w-screen xl:max-w-screen-2xl py-2">
        <div class="flex items-center justify-between gap-2">
          <div class="lg:flex-1 hidden lg:flex items-center"></div>
          <div class="text-sm font-medium text-white dark:text-gray-900">
            <div class="flex items-center gap-2">
              <span class="w-5 h-5 flex-shrink-0 pointer-events-none">
                <Events class="fill-white dark:fill-gray-900" /> </span
              ><span class="sm:hidden"
                >قرار حمایت از حیوانات بی سرپرست شمیرانات</span
              ><span class="hidden sm:inline-block"
                >قرار حمایت از حیوانات بی سرپرست شمیرانات</span
              ><button
                type="button"
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-xs gap-x-1 px-2 py-1 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center rounded-full text-center justify-center"
              >
                <span class="">مشاهده</span
                ><span class="flex-shrink-0 h-4 w-4" aria-hidden="true">
                  <LeftArrow />
                </span>
              </button>
            </div>
          </div>
          <div class="flex items-center justify-end lg:flex-1">
            <button class="p-1.5 rounded-md inline-flex hover:bg-primary/90">
              <span class="w-5 h-5">
                <Times class="fill-white dark:fill-gray-900" />
              </span>
            </button>
          </div>
        </div></div
    ></a>
  </div>
</template>
