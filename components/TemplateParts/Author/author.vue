<template>
  <div class="PageAuthor bg-gray-50/10 dark:!bg-dark-900 ">
    <div class="w-full mx-auto xl:max-w-7xl  lg:pt-16">
      <AuthorHeader />
    </div>
    <div class="w-full mx-auto  xl:max-w-7xl lg:pb-28 ">
      <AuthorTabs />
      <AuthorBookmark />
      <Pagination />

      <!-- Related--------------- -->
    </div>
  </div>
</template>

<script setup>
import AuthorHeader from "./AuthorHeader.vue";
import AuthorTabs from "./AuthorTabs.vue";
import AuthorBookmark from "./AuthorBookmark.vue";
import Pagination from "@/components/TemplateParts/Pagination/pageination.vue";
</script>
