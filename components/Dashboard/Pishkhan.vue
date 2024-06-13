<template>
    <div class="relative w-full max-w-7xl mx-auto px-4 xl:px-0">
        <div class="mx-auto my-8">
            <div class="nc-PageDashboard">
                <div class="flex flex-col space-y-8 xl:space-y-0 xl:flex-row">
                    <Tabs />
                    <div class="border-t border-neutral-200 dark:border-dark-700/20 md:hidden"></div>
                    <!-- <Home/> -->
                    <!-- <SubmitPost /> -->
                    <!-- <EditProfile/> -->
                    <!-- <Posts/> -->
                    <Bookmarks />
                    <!-- <Saved /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Tabs from "./Tabs.vue";
import SubmitPost from "./SubmitPost.vue";
import EditProfile from "./EditProfile.vue";
import Posts from "./Posts.vue";
import Home from "./Home.vue";
import Bookmarks from "./Bookmarks.vue";
import Saved from "./Saved.vue";
</script>
