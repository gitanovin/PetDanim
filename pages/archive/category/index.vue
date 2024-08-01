<template>
    <div class="bg-slate-100 dark:bg-dark-900">
        <BlogSection class="dark:!bg-dark-900/30 bg-gray-50 py-16 lg:py-16">
            <HeaderSection icon="list" title="دسته بندی ها" />
            <Grid class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <contentCategory 
                    v-if="categoriesList.length != 0"
                    :categories="categoriesList" 
                />
                <div v-else class="text-center w-full col-span-6">
                    <p>دسته بندی اضافه نشده</p>
                </div>
            </Grid>
        </BlogSection>
    </div>
</template>

<script setup>
import BlogSection from "@/components/TemplateParts/Section/BlogSection.vue";
import HeaderSection from "@/components/TemplateParts/Header/header.vue";
import Grid from "@/components/TemplateParts/Grid/Grid.vue";
import contentCategory from "@/components/TemplateParts/contentCategory.vue";

const {appBaseUrl} = useRuntimeConfig().public
const categoriesList = ref([])

const getCategories = async () => {
    const {data} = await useFetch(`${appBaseUrl}/api/mag/categories/get-all`)
    if(data.value.status == 200) {
        console.log(data.value.result)
        categoriesList.value = data.value.result
    }
}

getCategories()
</script>
