<template>
  <div class="PageSearch lg:pt-8 dark:bg-dark-900 bg-slate-100">
    <div class="Search-Header">
      <SearchHeader />
    </div>
    <div class="space-y-16 lg:space-y-28">
      <main class="max-w-7xl mx-auto   my-16">
        <div class="Search-Tabs">
          <SearchTabs />
        </div>
        <div class="Tabs-Content">
          <SearchPosts />
        </div>
        <Pagination />
      </main>
 
    </div>
  </div>
</template>

<script setup>
import SearchHeader from "./SearchHeader.vue";
import SearchTabs from "./SearchTabs.vue";
import SearchPosts from "./SearchPosts.vue";
import Pagination from "@/components/TemplateParts/Pagination/pageination.vue";
</script>
