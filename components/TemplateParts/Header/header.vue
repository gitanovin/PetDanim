<template>
  <header>
    <div class="flex flex-col relative px-6 lg:px-0">
      <div
        class="relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:!text-neutral-50"
      >
        <div class="w-full flex items-center justify-between">
          <h2
            class="text-xl md:text-3xl lg:text-xl font-bold flex items-center"
          >
            <div class="w-12 rounded-lg ml-2 p-2 bg-primary text-white dark:!bg-dark-700/20 bg-orange-500 flex items-center justify-center">
              <i :class="`fa fa-${icon}`"></i>
            </div>
            <span> {{ title }}</span>
          </h2>
          <div
            class="bg-orange-500 w-4 h-4 rounded-full dark:!bg-dark-700"
          ></div>
        </div>
      </div>

      <slot></slot>
    </div>
  </header>
</template>

<script setup>
import MostanadIcon from "@/components/icons/Mostanad.vue";

const props = defineProps({
  title: {
    required: true,
    type: String
  },
  icon: {
    required: true,
    type: String
  }
})
</script>
