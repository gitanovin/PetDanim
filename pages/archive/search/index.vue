<template>
<div class="Search-Page">
    <Loading :isShow="showLoading" />
    <SearchPage
        v-if="showLoading == false"
        :searchQuery="searchQuery"
        :searchResultCount="searchResultCount"
        @doSearch="(queryString) => doSearch(queryString)"
        :postsResult="postsResult"
        :categoryResult="categoryResult"
        :tagsResult="tagsResult"
        :authorResult="authorResult"
    />
</div>
</template>

<script setup>
import Loading from '@/components/Loading/index.vue'
import SearchPage from "~/components/TemplateParts/Search/SearchPage.vue";
import { useRoute , useRouter } from "vue-router";
import { usePetdanimStore } from "~/store/petdanimStore";

const petdanimStore = usePetdanimStore()
const route = useRoute()
const router = useRouter()
const searchQuery = ref("")
const searchResultCount = ref(0)
const showLoading = ref(true)
const postsResult = ref([])
const categoryResult = ref([])
const tagsResult = ref([])
const authorResult = ref([])

onMounted(async () => {
    if(!route.query.query) {
        router.push("/")
    }else {
        await getSearchResult()
        searchQuery.value = route.query.query.split("-").join(" ")
    }
})

watch(() => route.query.query , (newVal , oldVal) => {
    if(newVal !== oldVal) { 
        searchQuery.value = newVal.split("-").join(" ")
        getSearchResult()
    }
})

const getSearchResult = async () => {
    searchQuery.value = route.query.query.split("-").join(" ");
    const result = await petdanimStore.get_search_result({
        queryString: searchQuery.value
    })

    if(result.status == 200) {
        console.log(result)
        postsResult.value = result.result.admin_posts.concat(result.result.userPostsResult)
        categoryResult.value = result.result.categoryResult
        tagsResult.value = result.result.tagsResult
        authorResult.value = result.result.authorResult

        showLoading.value = false
        searchResultCount.value = result.result.resultCount
    }
}

const doSearch = async (text) => {
    showLoading.value = true
    searchQuery.value = text;
    const result = await petdanimStore.get_search_result({
        queryString: searchQuery.value
    })

    if(result.status == 200) {
        console.log(result)
        postsResult.value = result.result.admin_posts.concat(result.result.userPostsResult)
        categoryResult.value = result.result.categoryResult
        tagsResult.value = result.result.tagsResult
        authorResult.value = result.result.authorResult
        
        showLoading.value = false
        searchResultCount.value = result.result.resultCount
    }
}
</script>
