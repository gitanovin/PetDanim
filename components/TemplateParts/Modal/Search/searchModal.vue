<template>
  <div
    class="relative z-[99] "
  >
    <div @click="closeModal()" class="fixed inset-0 bg-black/40 transition-opacity opacity-100  h-screen w-screen"></div>
    <div class="fixed inset-0 z-50  scrollbar-track-mahak p-4 sm:p-6 md:p-20 ">
      <div
        class="block mx-auto max-w-2xl transform overflow-hidden rounded-xl bg-white dark:!bg-dark-800 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all opacity-100 scale-100"
      >
        <div class="relative border-b dark:!border-dark-700/20">
          <SearchIcon class="pointer-events-none absolute top-0 left-4 h-5 w-5 text-gray-400"/>
          <input
            class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
            placeholder="جستجو..."
            @keyup.enter="(e) => doSearchAction(e)"
            role="combobox"
            type="text"
          />
        </div>
        <ul
          class="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2 my-4 mx-3"
          role="listbox"
        >
          <li>
            <h2 class="text-sm font-semibold text-gray-900 dark:!text-dark-700">بیشترین جستجو ها</h2>
            <ul v-if="topSearchResult.length != 0" class="-mx-4 mt-2 text-sm text-gray-700 dark:!text-dark-700">
              <li
                v-for="(search , index) in topSearchResult" :key="index"
                class="flex cursor-pointer select-none items-center px-4 py-1"
              >
                <nuxt-link @click="closeModal()" :to="`/archive/search?query=${search.query_string.split(' ').join('-')}`" class="flex rounded-lg cursor-pointer select-none items-center px-4 py-1 w-full hover:bg-gray-50" >
                  <HistoryIcon />
                  <span class="ms-3 flex-auto truncate"
                    >
                    {{ search.query_string }}
                  </span>
                </nuxt-link>
              </li>
            </ul>
            <div v-else class="flex justify-center items-center py-5">
              <div class="loader"></div>
            </div>
          </li>
        </ul>
        <div
          class="flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700 dark:!bg-dark-900"
        >
          <nuxt-link @click="closeModal()" to="/archive/search"
            class="mx-1 flex  py-2 px-3 items-center justify-center rounded border bg-white sm:mx-2 border-primary-6000 text-neutral-900 dark:!bg-dark-800 dark:!text-dark-700 dark:!border-dark-700/20"
            >نمایش  نتایج بیشتر</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import SearchIcon from "@/components/icons/SearchIcon.vue";
  import HistoryIcon from "@/components/icons/HistoryIcon.vue";
  import HashtagIcon from "@/components/icons/HashtagIcon.vue";
  import { useRouter } from "vue-router";
  import { usePetdanimStore } from "~/store/petdanimStore";

  const petdanimStore = usePetdanimStore()
  const emit = defineEmits(["closeModal"]);
  const router = useRouter()
  const topSearchResult = ref([])


  const closeModal = () => {
    emit("closeModal");
  };

  const doSearchAction = (e) => {
    closeModal()
    router.push(`/archive/search?query=${e.target.value.split(" ").join("-")}`)
  }

  onMounted( async () => {
    const result = await petdanimStore.get_top_search()
    if(result.status == 200) {
      topSearchResult.value = result.result
    }
  })
</script>

<style>
  .modal-enter-active, .modal-leave-active { transition: opacity .5s; }
  .modal-enter, .modal-leave-to { opacity: 0; }

  .loader {
    width: 40px;
    padding: 3px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: rgb(54, 54, 54);
    --_m: 
      conic-gradient(#0000 10%,#000),
      linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
            mask: var(--_m);
    -webkit-mask-composite: source-out;
            mask-composite: subtract;
    animation: l3 1s infinite linear;
  }
  @keyframes l3 {to{transform: rotate(1turn)}}
</style>

