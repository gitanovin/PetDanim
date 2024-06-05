<template>
  <div class="flex justify-between">
    <nav
      class="nc-Nav relative flex w-full overflow-x-auto text-sm md:text-base"
    >
      <ul class="flex sm:space-x-2 rtl:space-x-reverse">
        <li class="relative flex-shrink-0">
          <button
            class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-orange-500 text-neutral-50 dark:bg-neutral-100 dark:text-black"
          >
            جدیدترین ها
          </button>
        </li>

        <li class="relative flex-shrink-0">
          <button
            class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:!text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:!bg-dark-800"
          >
            سگ ها
          </button>
        </li>
        <li class="relative flex-shrink-0">
          <button
            class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:!text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:!bg-dark-800"
          >
            گربه ها
          </button>
        </li>

        <li class="relative flex-shrink-0">
          <button
            class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:!text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:!bg-dark-800"
          >
            پرندگان
          </button>
        </li>
      </ul>
    </nav>
    <button
      class="flex-shrink-0 relative h-auto items-center justify-center rounded-full transition-colors border-transparent text-neutral-900 dark:!text-neutral-200 text-sm sm:text-base font-medium !hidden md:!flex"
    >
      <span>مشاهده همه </span>
      <IconsLeftArrow class="w-6 pr-1" />
    </button>
  </div>
</template>
<script setup>
import IconsLeftArrow from "@/components/icons/LeftArrow.vue";
</script>
