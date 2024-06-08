<template>
    <div id="comments" class="scroll-mt-20 max-w-screen-md mx-auto pt-5">
        <h3 class="text-xl font-semibold text-dark-800 dark:text-neutral-200">
            پاسخ ها (10)
        </h3>
        <form action="#" class="nc-SingleCommentForm mt-5">
            <textarea
                class="block w-full text-sm rounded-xl border-neutral-200 focus:border-orange-300 focus:ring-0 focus:ring-orange-200 focus:ring-opacity-50 bg-white dark:border-dark-700/20 dark:focus:ring-dark-700/20 dark:focus:ring-opacity-25 dark:bg-dark-900"
                rows="4" placeholder="دیدگاه خود را بنویسید"></textarea>
            <div class="mt-2 gap-2 flex">
                <button
                    class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-orange-700 hover:bg-orange-600 text-orange-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                    type="submit">
                    ثبت</button><button
                    class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                    type="button">
                    انصراف
                </button>
            </div>
        </form>
    </div>
</template>