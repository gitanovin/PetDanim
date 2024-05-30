<template>
    <div class="relative z-40">
        <div class="fixed inset-0 bg-white opacity-100"></div>
        <div class="fixed inset-0 overflow-y-auto">
            <div class="sticky z-10 top-0 p-4 xl:px-10 flex items-center justify-between bg-white"><button
                    class="focus:outline-none focus:ring-0 w-10 h-10 rounded-full flex items-center justify-center hover:bg-neutral-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" aria-hidden="true" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"></path>
                    </svg>
                </button>
                <div class="flow-root">
                    <div class="flex text-neutral-700 dark:text-neutral-300 text-sm -mx-3 -my-1.5"><span
                            class="py-1.5 px-3 flex rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                            </svg>
                            <span class="hidden sm:block ms-2">اشتراک گذاری</span></span><span
                            class="py-1.5 px-3 flex rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                </path>
                            </svg>
                            <span class="hidden sm:block ms-2">ذخیره</span></span></div>
                </div>
            </div>
            <div class="flex min-h-full items-center justify-center sm:p-4 pt-0 text-center">
                <div
                    class="w-full max-w-screen-lg mx-auto transform p-4 pt-0 text-left transition-all opacity-100 translate-y-0">
                    <div class=" ">
                        <div class="columns-1 gap-4 sm:columns-2 xl:columns-3">
                            <div
                                class="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight focus:outline-none">
                                <img alt="chisfis listing gallery "
                                    class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 focus:outline-none"
                                    src="@/assets/images/1.jpg" </div>
                                <div
                                    class="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight focus:outline-none">
                                    <img alt="chisfis listing gallery "
                                        class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 focus:outline-none"
                                        src="@/assets/images/1.jpg">
                                </div>
                                <div
                                    class="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight focus:outline-none">
                                    <img alt="chisfis listing gallery "
                                        class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 focus:outline-none"
                                        src="@/assets/images/1.jpg">
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>