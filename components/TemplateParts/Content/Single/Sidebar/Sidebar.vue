<template>
    <aside class="sidebar">
        <div class="w-full lg:col-span-4 col-span-12">
            <div class="SingleSidebar space-y-6 ">
                <div class="lg:sticky relative top-20 z-20">
                                    <widgetTopPosts />
                </div>

                <widgetsTopTags />
                <widgetTopCategory />
                <widgetTopAuthors />
            </div>
        </div>
    </aside>
</template>
<script setup>
import widgetTopPosts from "./Widgets/widgetTopPosts.vue";
import widgetsTopTags from "./Widgets/widgetsTopTags.vue";
import widgetTopCategory from "./Widgets/widgetTopCategory.vue";
import widgetTopAuthors from "./Widgets/widgetTopAuthors.vue";
</script>