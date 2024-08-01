<template>
    <div class="max-w-screen-md mx-auto pb-16">
        <ul class="nc-SingleCommentLists space-y-5">
            <div class="nc-CommentCard flex">
                <div
                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4">
                    <img alt="John Doe" class="absolute inset-0 w-full h-full object-cover"
                        src="@/assets/images/7.jpg" /><span class="wil-avatar__name">J</span>
                </div>
                <div
                    class="flex-grow flex flex-col p-4 ms-2 text-sm border border-neutral-200 rounded-xl sm:ms-3 sm:text-base dark:border-neutral-700">
                    <div class="relative flex items-center pe-6">
                        <div class="absolute -end-3 -top-3">
                            <div class="relative inline-block text-left">
                                <Menu as="div" class="relative inline-block text-left">
                                    <div>
                                        <MenuButton
                                            class="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 sm:hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none">
                                            <MenuMoreIcon />
                                        </MenuButton>
                                    </div>

                                    <transition enter-active-class="transition duration-100 ease-out"
                                        enter-from-class="transform scale-95 opacity-0"
                                        enter-to-class="transform scale-100 opacity-100"
                                        leave-active-class="transition duration-75 ease-in"
                                        leave-from-class="transform scale-100 opacity-100"
                                        leave-to-class="transform scale-95 opacity-0">
                                        <MenuItems
                                            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
                                            <div class="px-2 py-4 space-y-2">
                                                <MenuItem v-slot="{ active }">
                                                <button :class="[
                                                    active
                                                        ? 'bg-gray-50 text-gray-700'
                                                        : ' fill-gray-500',
                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                ]">
                                                    <EditIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800"
                                                        aria-hidden="true" />
                                                    ویرایش
                                                </button>
                                                </MenuItem>

                                                <MenuItem v-slot="{ active }">
                                                <button :class="[
                                                    active
                                                        ? 'bg-gray-50 text-gray-700'
                                                        : ' fill-gray-500',
                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                ]">
                                                    <DeleteIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800"
                                                        aria-hidden="true" />
                                                    حذف
                                                </button>
                                                </MenuItem>

                                                <MenuItem v-slot="{ active }">
                                                <button :class="[
                                                    active
                                                        ? 'bg-gray-50 text-gray-700'
                                                        : ' fill-gray-500',
                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                ]">
                                                    <ReplayIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800"
                                                        aria-hidden="true" />
                                                    پاسخ
                                                </button>
                                                </MenuItem>
                                                <MenuItem v-slot="{ active }">
                                                <button :class="[
                                                    active
                                                        ? 'bg-gray-50 text-gray-700'
                                                        : ' fill-gray-500',
                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                ]">
                                                    <ReportIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800"
                                                        aria-hidden="true" />
                                                    گزارش
                                                </button>
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </transition>
                                </Menu>
                            </div>
                        </div>
                        <a class="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
                            href="/author/the-demo-author-slug">محبوب حسین زاده</a><span class="mx-2">·</span><span
                            class="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm">28
                            اردیبهست 1403</span>
                    </div>
                    <span class="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300">این
                        یک متن تستی است برای تست نظر</span>
                    <!-- هنگام زدن دکمه پاسخ این قسمت نمایش داده میشود و دکمه های لایک و پاسخ حذف می شود -->
                    <div class="Comment-Replay hidden">
                        <form action="#" class="nc-SingleCommentForm flex-grow">
                            <textarea
                                class="block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900"
                                rows="4" placeholder="پاسخ خود را بنویسید" required=""></textarea>
                            <div class="mt-2 space-x-3">
                                <button
                                    class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                    type="submit">
                                    ثبت</button><button
                                    class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                    type="button">
                                    انصراف
                                </button>
                            </div>
                        </form>
                    </div>
                    <!-- هنگام زدن دکمه پاسخ این قسمت نمایش داده میشود و دکمه های لایک و پاسخ حذف می شود -->

                    <div class="flex items-center space-x-2 rtl:space-x-reverse">
                        <button
                            class="min-w-[68px] flex items-center rounded-full leading-none px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 hover:text-rose-600 dark:hover:text-rose-500"
                            title="Liked">
                            <span class="text-neutral-900 dark:text-neutral-200">96</span>
                        </button><button
                            class="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none"
                            title="Reply">
                            <span
                                class="text-xs leading-none text-neutral-900 dark:text-neutral-200">پاسخ</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="nc-NcModal hidden">
                <div class="fixed inset-0 z-50 overflow-y-auto">
                    <div class="min-h-screen px-1 text-center md:px-4">
                        <div class="fixed inset-0 bg-neutral-900 bg-opacity-50 dark:bg-opacity-80 opacity-100">
                        </div>
                        <span class="inline-block h-screen align-middle" aria-hidden="true">&ZeroWidthSpace;</span>
                        <div
                            class="inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transform bg-white border border-black border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-900 dark:text-neutral-300 max-w-screen-md opacity-100 scale-100">
                            <div
                                class="py-4 px-6 text-center relative border-b border-neutral-100 dark:border-neutral-700 md:py-5">
                                <button
                                    class="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4 focus:outline-none">
                                    <span class="sr-only">Close</span><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                        <path fill-rule="evenodd"
                                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                                <h3 class="text-base font-semibold text-neutral-900 lg:text-xl dark:text-neutral-200 mx-10"
                                    id="headlessui-dialog-title-:r8i:" data-headlessui-state="open">
                                    Editing comment
                                </h3>
                            </div>
                            <div class="py-4 px-6 md:py-5">
                                <form action="#" class="nc-SingleCommentForm mt-0">
                                    <textarea
                                        class="block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900"
                                        rows="8" placeholder="Add to discussion" required="">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur perferendis maxime quia, quisquam eveniet asperiores fuga laudantium necessitatibus assumenda!</textarea>
                                    <div class="mt-2 space-x-3">
                                        <button
                                            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                            type="submit">
                                            Submit</button><button
                                            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                            type="button">
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nc-NcModal hidden">
                <div class="fixed inset-0 z-50 overflow-y-auto" id="headlessui-dialog-:r8o:" role="dialog"
                    aria-modal="true" data-headlessui-state="open" aria-labelledby="headlessui-dialog-title-:r8q:">
                    <div class="min-h-screen px-1 text-center md:px-4">
                        <div class="fixed inset-0 bg-neutral-900 bg-opacity-50 dark:bg-opacity-80 opacity-100"
                            id="headlessui-dialog-overlay-:r8p:" aria-hidden="true" data-headlessui-state="open"></div>
                        <span class="inline-block h-screen align-middle" aria-hidden="true">&ZeroWidthSpace;</span>
                        <div
                            class="inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transform bg-white border border-black border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-900 dark:text-neutral-300 max-w-screen-md opacity-100 scale-100">
                            <div
                                class="py-4 px-6 text-center relative border-b border-neutral-100 dark:border-neutral-700 md:py-5">
                                <button
                                    class="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4 focus:outline-none">
                                    <span class="sr-only">Close</span><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                        <path fill-rule="evenodd"
                                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                                <h3 class="text-base font-semibold text-neutral-900 lg:text-xl dark:text-neutral-200 mx-10"
                                    id="headlessui-dialog-title-:r8q:" data-headlessui-state="open">
                                    Report Abuse
                                </h3>
                            </div>
                            <div class="py-4 px-6 md:py-5">
                                <form action="#">
                                    <div id="headlessui-radiogroup-:r8r:" role="radiogroup"
                                        aria-labelledby="headlessui-label-:r8s:">
                                        <label class="sr-only" id="headlessui-label-:r8s:" role="none">Problem
                                            Plans</label>
                                        <div class="grid grid-cols-2 lg:grid-cols-4 gap-2" role="none">
                                            <div class="bg-primary-6000 text-white dark:bg-primary-700 relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-5 sm:py-4 focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                id="headlessui-radiogroup-option-:r8t:" role="radio" aria-checked="true"
                                                tabindex="0" data-headlessui-state="checked"
                                                aria-labelledby="headlessui-label-:r8u:">
                                                <div class="flex items-center justify-between w-full">
                                                    <div class="flex items-center">
                                                        <div class="text-sm">
                                                            <p class="font-medium line-clamp-1 text-white"
                                                                id="headlessui-label-:r8u:">
                                                                Violence
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="flex-shrink-0 text-white">
                                                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                                            <circle cx="12" cy="12" r="12" fill="#fff" opacity="0.2">
                                                            </circle>
                                                            <path d="M7 13l3 3 7-7" stroke="#fff" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bg-white border-t border-neutral-50 relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-5 sm:py-4 focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                id="headlessui-radiogroup-option-:r8v:" role="radio"
                                                aria-checked="false" tabindex="-1"
                                                aria-labelledby="headlessui-label-:r90:">
                                                <div class="flex items-center justify-between w-full">
                                                    <div class="flex items-center">
                                                        <div class="text-sm">
                                                            <p class="font-medium line-clamp-1 text-neutral-900"
                                                                id="headlessui-label-:r90:">
                                                                Trouble
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bg-white border-t border-neutral-50 relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-5 sm:py-4 focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                id="headlessui-radiogroup-option-:r91:" role="radio"
                                                aria-checked="false" tabindex="-1"
                                                aria-labelledby="headlessui-label-:r92:">
                                                <div class="flex items-center justify-between w-full">
                                                    <div class="flex items-center">
                                                        <div class="text-sm">
                                                            <p class="font-medium line-clamp-1 text-neutral-900"
                                                                id="headlessui-label-:r92:">
                                                                Spam
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bg-white border-t border-neutral-50 relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-5 sm:py-4 focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                id="headlessui-radiogroup-option-:r93:" role="radio"
                                                aria-checked="false" tabindex="-1"
                                                aria-labelledby="headlessui-label-:r94:">
                                                <div class="flex items-center justify-between w-full">
                                                    <div class="flex items-center">
                                                        <div class="text-sm">
                                                            <p class="font-medium line-clamp-1 text-neutral-900"
                                                                id="headlessui-label-:r94:">
                                                                Other
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <h4 class="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
                                            Message
                                        </h4>
                                        <span class="text-sm text-neutral-6000 dark:text-neutral-400">Please
                                            provide any additional information or
                                            context that will help us understand and handle
                                            the situation.</span><textarea
                                            class="block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 mt-3"
                                            rows="4" placeholder="..." required="" id="report-message"></textarea>
                                    </div>
                                    <div class="mt-4 space-x-3 rtl:space-x-reverse">
                                        <button
                                            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                            type="submit">
                                            Submit</button><button
                                            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-neutral-700 dark:hover:ring-neutral-500 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                            type="button">
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Delete hidden">
                <div class="fixed inset-0 z-50 overflow-y-auto" id="headlessui-dialog-:r9a:" role="dialog"
                    aria-modal="true" data-headlessui-state="open">
                    <div class="min-h-screen px-1 text-center md:px-4">
                        <div class="fixed inset-0 bg-neutral-900 bg-opacity-50 dark:bg-opacity-80 opacity-100"
                            id="headlessui-dialog-overlay-:r9b:" aria-hidden="true" data-headlessui-state="open"></div>
                        <span class="inline-block h-screen align-middle" aria-hidden="true">&ZeroWidthSpace;</span>
                        <div
                            class="inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transform bg-white border border-black border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-900 dark:text-neutral-300 max-w-screen-sm opacity-100 scale-100">
                            <div
                                class="py-4 px-6 text-center relative border-b border-neutral-100 dark:border-neutral-700 md:py-5">
                                <button
                                    class="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4 focus:outline-none">
                                    <span class="sr-only">Close</span><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                        <path fill-rule="evenodd"
                                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="py-4 px-6 md:py-5">
                                <form action="#">
                                    <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
                                        Delete comment
                                    </h3>
                                    <span class="text-sm">Are you sure you want to delete this comment?
                                        You
                                        cannot undo this action.</span>
                                    <div class="mt-4 space-x-3 rtl:space-x-reverse">
                                        <button
                                            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 !bg-red-500"
                                            type="submit">
                                            Delete</button><button
                                            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-neutral-700 dark:hover:ring-neutral-500 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                            type="button">
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button
                class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-orange-700 hover:bg-orange-600 text-orange-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 dark:bg-dark-900 w-full">
                مشاهده همه نظرات (+117 نظر)
            </button>
        </ul>
        <div></div>
    </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>