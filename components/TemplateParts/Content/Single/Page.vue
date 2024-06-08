<template>
    <div>
        <div class="Headers">
            <HeaderGlobal />
        </div>
        <div class="test py-4 max-w-7xl mx-auto w-full flex gap-6">
            <button @click="GridMode = !GridMode" class="bg-red-500 p-4 text-white">نمایش بدون ستون کناری</button>
        </div>

        <div class="mt-10 px-6 mx-auto w-full max-w-7xl my-8 lg:px-0">
            <div :class="GridMode == true ? 'grid grid-cols-12 gap-4 !space-y-0' : ' '"
                class="SingleContent space-y-10 dark:!text-gray-300">
                <div :class="'w-full lg:col-span-8 col-span-12'"
                    class="relative rounded-lg lg:bg-white lg:dark:bg-dark-800 lg:border lg:dark:border-dark-700/20 lg:p-4">
                    <ContentArticle />
                </div>
                <div :class="GridMode == false ? 'hidden' : ''" class="w-full lg:col-span-4 col-span-12">
                    <SidebarLeft />
                </div>

                <Sticky />
            </div>
        </div>
    </div>
</template>

<script setup>
import HeaderGlobal from "@/components/TemplateParts/Content/Single/header/HeaderGlobal.vue";
import ContentArticle from "~/components/TemplateParts/Content/Single/TheContent/ContentArticle.vue";
import Tags from "@/components/TemplateParts/Content/Single/Tags/singleTags.vue";
import AuthorBiography from "@/components/TemplateParts/Content/Single/Biography/AuthorBiography.vue";
import AddComment from "@/components/TemplateParts/Content/Single/Comment/AddComment.vue";
import CommentList from "@/components/TemplateParts/Content/Single/Comment/CommentList.vue";
import Sticky from "@/components/TemplateParts/Content/Single/Sticky/sticky.vue";
import SidebarLeft from "@/components/TemplateParts/Content/Single/Sidebar/Sidebar.vue"

const GridMode = ref(false)
const Sidebar = ref(false)
</script>