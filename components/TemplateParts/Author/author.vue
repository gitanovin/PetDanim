<template>
  <div class="PageAuthor bg-gray-50/10 dark:!bg-dark-900 ">
    <div class="w-full mx-auto xl:max-w-7xl  lg:pt-16">
      <AuthorHeader :authorData="authorData" />
    </div>
    <div class="w-full mx-auto  xl:max-w-7xl lg:pb-28 ">
      <AuthorTabs />
      <AuthorPosts 
        v-if="authorData.posts.length != 0" 
        :postsList="authorData.posts"
        :authorData="authorData"
       />

       <div v-else class="posts flex items-center justify-center border border-gray-200 dark:border-dark-700/20 rounded-lg card dark:bg-dark-800 p-4"
       >
        <p class="py-5">هنوز هیچ مقاله ای توسط این کاربر نوشته نشده </p>
       </div>
      <!-- <Pagination /> -->

      <!-- Related--------------- -->
    </div>
  </div>
</template>

<script setup>
import AuthorHeader from "./AuthorHeader.vue";
import AuthorTabs from "./AuthorTabs.vue";
import AuthorPosts from "./AuthorPosts.vue";
import Pagination from "@/components/TemplateParts/Pagination/pageination.vue";

const props = defineProps({
  authorData: {
    required: true,
    type: [Array , Object]
  }
})
</script>
