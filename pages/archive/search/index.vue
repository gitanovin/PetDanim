<template>
<div class="Search-Page">
    <SearchPage />
</div>
</template>

<script setup>
import SearchPage from "~/components/TemplateParts/Search/SearchPage.vue";
import { useRoute , useRouter } from "vue-router";
import { usePetdanimStore } from "~/store/petdanimStore";

const petdanimStore = usePetdanimStore()
const route = useRoute()
const router = useRouter()

onMounted(async () => {
    if(!route.query.query) {
        router.push("/")
    }
    await getSearchResult()
})

const getSearchResult = async () => {
    const searchQuery = route.query.query.split("-").join(" ");
    const result = await petdanimStore.get_search_result({
        queryString: searchQuery
    })

    if(result.status == 200) {
        console.log(result)
    }
}


</script>
