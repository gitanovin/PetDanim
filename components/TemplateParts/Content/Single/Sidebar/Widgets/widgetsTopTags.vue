<template>
  <div
    class="nc-WidgetTags rounded-3xl overflow-hidden bg-white dark:bg-dark-800 border dark:border-dark-700/20"
  >
    <div
      class="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700"
    >
      <h2
        class="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow"
      >
        💡 برچسب ها
      </h2>
    </div>
    <div class="flex flex-wrap p-4 xl:p-5">
      <a
        v-for="(tag , index) in topTags" :key="tag.id"
        class="nc-Tag inline-block bg-gray-50 hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
        href="javascript:void(0)"
        >{{ tag.name }}<span class="text-xs font-normal"> ({{ tag.posts_count }})</span></a
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
   topTags: {
    required: true,
    type: [Array, Object],
  },
});

const { appBaseUrl } = useRuntimeConfig().public;
</script>
