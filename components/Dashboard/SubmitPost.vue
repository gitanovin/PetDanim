<template>
    <div class="flex-1">
        <div class="rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6">
            <form class="grid md:grid-cols-2 gap-6" action="#" method="post"><label class="block md:col-span-2"><span
                        class="nc-Label  text-neutral-800 font-medium text-sm dark:text-neutral-300"
                        data-nc-id="Label">عنوان پست *</span><input
                        class="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200/50 bg-white dark:border-neutral-500 dark:focus:ring-primary-500/30 dark:bg-neutral-900 rounded-full text-sm font-normal h-11 px-4 py-3 mt-1"
                        type="text"></label><label class="block md:col-span-2"><span
                        class="nc-Label  text-neutral-800 font-medium text-sm dark:text-neutral-300"
                        data-nc-id="Label">خلاصه مطلب</span><textarea
                        class="block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 mt-1"
                        rows="4"></textarea>
                    <p class="mt-1 text-sm text-neutral-500">Brief description for your article. URLs
                        are hyperlinked.</p>
                </label><label class="block"><span
                        class="nc-Label  text-neutral-800 font-medium text-sm dark:text-neutral-300"
                        data-nc-id="Label">Category</span><select
                        class="nc-Select h-11 mt-1 block w-full text-sm rounded-lg border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900">
                        <option value="-1">– select –</option>
                        <option value="ha'apai">Category 1</option>
                        <option value="tongatapu">Category 2</option>
                        <option value="vava'u">Category 3</option>
                    </select></label><label class="block"><span
                        class="nc-Label  text-neutral-800 font-medium text-sm dark:text-neutral-300"
                        data-nc-id="Label">Tags</span><input
                        class="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200/50 bg-white dark:border-neutral-500 dark:focus:ring-primary-500/30 dark:bg-neutral-900 rounded-full text-sm font-normal h-11 px-4 py-3 mt-1"
                        type="text"></label>
                <div class="block md:col-span-2"><span
                        class="nc-Label  text-neutral-800 font-medium text-sm dark:text-neutral-300"
                        data-nc-id="Label">Featured Image</span>
                    <div
                        class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-700 border-dashed rounded-md">
                        <div class="space-y-1 text-center"><svg class="mx-auto h-12 w-12 text-neutral-400"
                                stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                            <div class="flex flex-col sm:flex-row text-sm text-neutral-6000"><label for="file-upload"
                                    class="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"><span>Upload
                                        a file</span><input id="file-upload" class="sr-only" type="file"
                                        name="file-upload"></label>
                                <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs text-neutral-500">PNG, JPG, GIF up to 2MB</p>
                        </div>
                    </div>
                </div><label class="block md:col-span-2"><span
                        class="nc-Label  text-neutral-800 font-medium text-sm dark:text-neutral-300" data-nc-id="Label">
                        Post Content</span><textarea
                        class="block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 mt-1"
                        rows="16"></textarea></label><button
                    class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 md:col-span-2 "
                    type="submit">Submit post</button>
            </form>
        </div>
    </div>
</template>