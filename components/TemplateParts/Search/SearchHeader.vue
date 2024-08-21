<template>
    <div class="w-full ">
        <div class="w-full max-w-7xl mx-auto">
            <div class="rounded-0 lg:rounded-[40px] relative aspect-w-16 aspect-h-9 lg:aspect-h-5 overflow-hidden z-0">
                <div class="absolute inset-0">
                    <img alt="search" class="object-cover w-full h-full absolute" src="@/assets/images/5.jpg" />
                </div>
            </div>
            <div class="relative  -mt-20 lg:-mt-48 mx-auto max-w-5xl">
                <div
                    class="bg-white dark:bg-dark-800 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[20px]  flex items-center">
                    <header class="w-full max-w-3xl mx-auto text-center flex flex-col items-center">
                        <h2 class="text-2xl sm:text-4xl font-semibold">{{ searchQuery }}</h2>
                        <span class="block text-xs sm:text-sm mt-4 text-neutral-500 dark:text-neutral-300">ما یافتیم
                            <strong class="font-medium text-neutral-800 dark:text-neutral-100 font-fd">{{ resultCount }}</strong>
                            نتیجه برای
                            <strong class="font-medium text-neutral-800 dark:text-neutral-100">{{ searchQuery }}</strong></span>
                        <div class="relative w-full mt-8 sm:mt-11 text-left">
                            <label for="search-input" class="text-neutral-500 dark:text-neutral-300"><span
                                    class="sr-only">جستجوی همه</span>
                                    <input
                                    class="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200/50 bg-white dark:border-neutral-500 dark:focus:ring-primary-500/30 dark:bg-neutral-900 rounded-full text-sm font-normal pr-14 py-5 pe-5 md:ps-16 "
                                    id="search-input" placeholder="متن مورد نظر برای جستجو را بنویسید" type="search"
                                    :value="searchValue"
                                    @keyup.enter="(e) => doSearch(e)"
                                    /><span
                                    class="absolute start-5 top-1/2 transform -translate-y-1/2 text-2xl md:start-6"><svg
                                        width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z">
                                        </path>
                                    </svg></span></label>
                        </div>
                        <div class="w-full text-sm text-start mt-4 text-neutral-500 dark:text-neutral-300">
                            <div v-if="topSearchResult.length != 0" class="inline-block space-x-2 sm:space-x-3 rtl:space-x-reverse">
                                <span class="">جستجوهای اخیر:</span>
                                <nuxt-link
                                    v-for="(search , index) in topSearchResult" :key="index"
                                    class="nc-NcLink text-primary hover:text-primary-800 dark:text-primary-500 dark:hover:text-orange-600 inline-block font-normal"
                                    :to="`/archive/search?query=${search.query_string.split(' ').join('-')}`">{{ search.query_string }}</nuxt-link>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePetdanimStore } from '~/store/petdanimStore';
const props = defineProps({
    searchQuery: {
        required: true,
        type: String
    },
    searchResultCount: {
        required: true,
        type: Number
    }
})

const emit = defineEmits([
    "doSearch"
])

const petdanimStore = usePetdanimStore()
const topSearchResult = ref([])
const searchValue = ref("")
const resultCount = ref("")

onMounted(async () => {
    searchValue.value = props.searchQuery
    resultCount.value = props.searchResultCount

    const result = await petdanimStore.get_top_search()
    if(result.status == 200) {
      topSearchResult.value = result.result
    }
})

watch(() => props.searchResultCount , (newVal) => {
    resultCount.value = newVal
})

watch(() => props.searchQuery , (newVal) => {
    searchValue.value = newVal
})

const doSearch = async (e) => {
    emit("doSearch" , e.target.value)
}
</script>