<template>
    <div class="sticky mt-8 bottom-8 z-40 justify-center hidden">
        <div
            class="bg-white dark:bg-neutral-800 shadow-lg rounded-full ring-1 ring-offset-1 ring-neutral-900/5 p-1.5 flex items-center justify-center space-x-2 rtl:space-x-reverse text-xs">
            <button
                class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-9 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                title="Liked">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1"
                        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                        clip-rule="evenodd"></path>
                </svg><span class="ml-1 text-neutral-900 dark:text-neutral-200">34</span>
            </button>
            <div class="border-s h-4 border-neutral-200 dark:border-neutral-700"></div>
            <a href="#comments"
                class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex px-3 h-9 text-xs"
                title="Comments"><svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
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
                </svg><span class="ml-1 text-neutral-900 dark:text-neutral-200">110</span></a>
            <div class="border-s h-4 border-neutral-200 dark:border-neutral-700"></div>
            <button
                class="w-9 h-9 items-center justify-center bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 rounded-full flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="w-4 h-4">
                    <path fill-rule="evenodd"
                        d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            <button class="w-9 h-9 items-center justify-center hidden" title="Go to top">
                216%
            </button>
        </div>
    </div>
</template>