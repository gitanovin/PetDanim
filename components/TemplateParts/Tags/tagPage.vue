<template>
  <div class="PageArchive py-8 lg:px-0 px-4 mx-auto  w-full xl:max-w-7xl">
    <HeaderTag />
    <div class="">
      <div class="bg-white dark:bg-dark-800 p-4 rounded-t-lg mt-8">
        <ButtonTags />
      </div>
      <div class="bg-white/30 dark:bg-dark-700/20 p-4">
        <TagsPosts />
      </div>

      <Pagination />
    </div>
  </div>
</template>

<script setup>
import HeaderTag from "@/components/TemplateParts/Tags/HeaderTag.vue";
import ButtonTags from "@/components/TemplateParts/Tags/ButtonTags.vue";
import TagsPosts from "@/components/TemplateParts/Tags/TagPosts.vue";
import Pagination from "@/components/TemplateParts/Pagination/pageination.vue";
</script>
