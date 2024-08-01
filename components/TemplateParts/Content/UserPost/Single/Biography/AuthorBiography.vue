<template>
    <section class="author-box !my-8 block relative">
        <div class="max-w-screen-md mx-auto border rounded-lg p-4 dark:border-dark-700/10 dark:bg-dark-800">
            <div class="nc-SingleAuthor flex">
                <a href="javascript:void(0)">
                    <div
                        class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-12 w-12 text-lg sm:text-xl sm:h-24 sm:w-24 ring-1 ring-white dark:ring-neutral-900">
                        <img alt="Birrell Chariot" class="absolute inset-0 w-full h-full object-cover"
                            :src="authorImage == '' ? '/2.webp' : `${appBaseUrl}/storage/avatars/${authorImage}`" />
                    </div>
                </a>
                <div class="flex flex-col mr-3 max-w-lg sm:ml-5">
                    <span class="text-xs text-neutral-400 uppercase tracking-wider">نویسنده</span>
                    <div class="flex items-center">
                        <h2 class="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
                            <a href="javascript:void(0)"> {{ authorName }} </a>
                        </h2>
                        <button v-if="showFollowButton"
                            class="mr-2 nc-Button flex-shrink-0 relative inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-orange-500 hover:bg-orange-600 text-orange-50 text-xs font-medium px-4 py-1">
                            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    aria-hidden="true" class="w-5 h-5 sm:-ms-2.5">
                                    <path fill-rule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                                        clip-rule="evenodd"></path>
                                </svg></div><span class="ms-2">دنبال کردن</span>
                        </button>
                    </div>


                    <span v-if="showBiography" class="block mt-3 text-sm text-neutral-500 sm:text-base dark:text-neutral-300 font-fd">محبوب
                        حسین زاده متولد 1369 در شهرستان خوی می باشد این متن تست
                        بیوگرافی است
                    </span>
                    <span v-if="showRegisterDate" class="block mt-3 text-sm text-neutral-500 sm:text-base dark:text-neutral-300 font-fd">
                        تاریخ عضویت : {{authorRegisterDate}}
                    </span>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
    const props = defineProps({
        authorName: {
            required: true,
            type: String
        },
        authorImage: {
            required: true,
            type: String
        },
        authorRegisterDate: {
            required: true,
            type: String
        },
        showFollowButton: {
            required: true,
            type: Boolean
        },
        showBiography: {
            required: true,
            type: Boolean
        },
        showRegisterDate: {
            required: true,
            type: Boolean
        }
    })

    const {appBaseUrl} = useRuntimeConfig().public
</script>