<template>
  <a
    class="relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:!text-neutral-200 dark:!bg-dark-700/20 hover:bg-teal-50 dark:hover:!bg-teal-100 hover:text-teal-600 dark:hover:!text-teal-500 hidden sm:flex px-3 h-8 text-xs"
    title="Comments"
    href="javascript:void(0)"
  >
    <Comment />
    <span class="ml-1 font-fd">{{count}}</span>
  </a>
</template>

<script setup>
import Comment from "@/components/icons/Comment.vue";

const props = defineProps({
  count: {
    required: true,
    type: Number
  }
})
</script>
