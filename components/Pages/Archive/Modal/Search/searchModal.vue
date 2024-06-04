<template>
  <div
    class="relative z-[99] "
   @click="closeModal()"
  >
    <div class="fixed inset-0 bg-black/40 transition-opacity opacity-100"></div>
    <div class="fixed inset-0 z-10 overflow-y-auto scrollbar-track-mahak p-4 sm:p-6 md:p-20 ">
      <form
        class="block mx-auto max-w-2xl transform overflow-hidden rounded-xl bg-white dark:!bg-dark-800 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all opacity-100 scale-100"
      >
        <div class="relative border-b dark:!border-dark-700/20">
          <SearchIcon class="pointer-events-none absolute top-0 left-4 h-5 w-5 text-gray-400"/>
          <input
            class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
            placeholder="جستجو..."
            role="combobox"
            type="text"
          />
        </div>
        <ul
          class="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2 my-4 mx-3"
          role="listbox"
        >
          <li>
            <h2 class="text-sm font-semibold text-gray-900 dark:!text-dark-700">مطالب</h2>
            <ul class="-mx-4 mt-2 text-sm text-gray-700 dark:!text-dark-700">
              <li
                class="flex select-none items-center px-4 py-2"
              >
               <HistoryIcon/>
                <span class="ms-3 flex-auto truncate"
                  >سگها حیوانات باهوشی هستند
                </span>
              </li>

                <li
                class="flex select-none items-center px-4 py-2"
              >
               <HistoryIcon/>
                <span class="ms-3 flex-auto truncate"
                  >پلنگ پیروز پیروز شد
                </span>
              </li>

                  <li
                class="flex select-none items-center px-4 py-2"
              >
               <HistoryIcon/>
                <span class="ms-3 flex-auto truncate"
                  >زیباترین سگ جهان در تهران به دام افتاد   
                </span>
              </li>
              


            </ul>
          </li>
          <li>
            <h2 class="text-sm font-semibold text-gray-900 dark:!text-dark-700">برچسب ها</h2>
            <ul class="-mx-4 mt-2 text-sm text-gray-700 dark:!text-dark-700">
              <li
                class="flex select-none items-center px-4 py-2"
              >
                 <HashtagIcon class="h-6 w-6 flex-none text-gray-400" />
                <span class="ms-3 flex-auto truncate">سگ ها</span>
              </li>

                <li
                class="flex select-none items-center px-4 py-2"
              >
                 <HashtagIcon class="h-6 w-6 flex-none text-gray-400" />
                <span class="ms-3 flex-auto truncate">گربه ها</span>
              </li>

                 <li
                class="flex select-none items-center px-4 py-2"
              >
                 <HashtagIcon class="h-6 w-6 flex-none text-gray-400" />
                <span class="ms-3 flex-auto truncate"> حیوانات خانگی</span>
              </li>

            </ul>
          </li>
          <li>
            <h2 class="text-sm font-semibold text-gray-900 dark:!text-dark-700">نویسندگان</h2>
            <ul class="-mx-4 mt-2 text-sm text-gray-700 dark:!text-dark-700">
              <li
                class="flex select-none items-center px-4 py-2"
              >
                <img
                  alt="author"
                  class="h-6 w-6 flex-none rounded-full"
                  src="@/assets/images/7.jpg"
                /><span class="ms-3 flex-auto truncate">علی آزادمند</span>
              </li>

            </ul>
          </li>
        </ul>
        <div
          class="flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700 dark:!bg-dark-900"
        >
          
 
          <nuxt-link to="/archive/search"
            class="mx-1 flex  py-2 px-3 items-center justify-center rounded border bg-white sm:mx-2 border-primary-6000 text-neutral-900 dark:!bg-dark-800 dark:!text-dark-700 dark:!border-dark-700/20"
            >جستجوی پیشرفته</nuxt-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
  import SearchIcon from "@/components/icons/SearchIcon.vue";
  import HistoryIcon from "@/components/icons/HistoryIcon.vue";
  import HashtagIcon from "@/components/icons/HashtagIcon.vue";
const emit = defineEmits(["closeModal"]);


const closeModal = () => {
  emit("closeModal");
};
</script>

<style>
  .modal-enter-active, .modal-leave-active { transition: opacity .5s; }
  .modal-enter, .modal-leave-to { opacity: 0; }
</style>

