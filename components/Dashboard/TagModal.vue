<template>
    <div class="fixed inset-0 z-[9999] overflow-y-auto">
    <div class="min-h-screen px-1 text-center md:px-4">
      <div
        @click="closeTagsModal()"
        class="fixed inset-0 bg-neutral-900 bg-opacity-50 dark:bg-opacity-80 opacity-100"
      ></div>
      <span class="inline-block h-screen align-middle" aria-hidden="true"
        >&ZeroWidthSpace;</span
      >
      <div
        class="inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transform bg-white border border-black border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-900 dark:text-neutral-300 max-w-screen-sm opacity-100 scale-100"
      >
        <div
          class="py-4 px-6 text-center relative border-b border-neutral-100 dark:border-neutral-700 md:py-5"
        >
          <button
            @click="closeTagsModal()"
            class="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4 focus:outline-none"
          >
            <span class="sr-only">Close</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <h3
            class="text-base font-semibold text-neutral-900 lg:text-xl dark:text-neutral-200 mx-10"
          >
          مشاهده برچسب ها
          </h3>
        </div>
        <div class="py-4 px-6 md:py-5">
          <div class="flex flex-wrap dark:text-neutral-200" v-if="tagsList.length != 0">
            <a
              v-for="(tag , index) in tagsList" :key="index"
              class="nc-Tag inline-block bg-gray-100 px-2 hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2  rounded-lg md:py-2.5 me-3 dark:bg-neutral-900  mb-2"
              href="javascript:void(0)"
              >#{{ tag.name.replace(" " , "_") }}<span class="text-xs font-normal font-fd"></span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    tagsList: {
        required: true,
        type: [Array , Object]
    }
})
const emit = defineEmits(['closeModal'])

const closeTagsModal = () => {
    emit("closeModal")
}
</script>