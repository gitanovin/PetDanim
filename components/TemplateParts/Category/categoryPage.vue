<template>
  <div class="PageArchive py-8 lg:px-0 px-4 mx-auto  w-full xl:max-w-7xl">
    <HeaderCategories />
    <div class="">
      <div class="bg-white dark:bg-dark-800 p-4 rounded-t-lg mt-8">
        <ButtonCategories />
      </div>
      <div class="bg-white/30 dark:bg-dark-700/20 p-4">
        <CategoriesPosts />
      </div>

      <Pagination />
    </div>
  </div>
</template>

<script setup>
import HeaderCategories from "@/components/TemplateParts/Category/HeaderCategories.vue";
import ButtonCategories from "@/components/TemplateParts/Category/ButtonCategories.vue";
import CategoriesPosts from "@/components/TemplateParts/Category/CategoriesPosts.vue";
import Pagination from "@/components/TemplateParts/Pagination/pageination.vue";
</script>
