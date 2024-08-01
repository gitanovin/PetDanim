<template>

    <div  class="fixed inset-0 z-[9999] overflow-y-auto">
      <div class="min-h-screen px-1 text-center md:px-4">
        <div
          @click="closeModal()"
          class="fixed inset-0 bg-dark-900 bg-opacity-50 dark:!bg-opacity-80 opacity-100"
        ></div>
        <span class="inline-block h-screen align-middle" aria-hidden="true"
          >&ZeroWidthSpace;</span
        >
        <div
          class="inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transform bg-white border border-black border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:!bg-dark-800 dark:!border-dark-700/20 text-neutral-900 dark:!text-dark-700 max-w-screen-xl opacity-100 scale-100"
        >
          <div
            class="py-4 px-6 text-center relative border-b border-neutral-100 dark:!border-dark-700/20 md:py-5"
          >
            <button
              @click="closeModal()"
              class="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:!text-dark-700 hover:bg-neutral-100 dark:hover:!bg-dark-900 absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4 focus:outline-none"
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
              class="text-base font-semibold text-neutral-900 lg:text-xl dark:!text-dark-700 mx-10"
            >
              مشاهده دسته های دیگر
            </h3>
          </div>
          <div class="py-4 px-6 md:py-5">
            <div
              class="grid gap-6 sm:grid-cols-2 sm:py-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5"
            >
              <nuxt-link
                v-for="(category , index) in categoriesList" :key="category.id"
                class="nc-CardCategory1 flex items-center"
                :to="`/archive/category/${category.slug}-${category.id}`"
                ><div
                  class="relative flex-shrink-0 w-12 h-12 rounded-lg me-4 overflow-hidden"
                >
                  <img
                    :alt="category.title"
                    class="object-cover absolute inset-0 h-full"
                    :src="`${appBaseUrl}/storage/categories/${category.cat_image}`"
                  />
                </div>
                <div>
                  <h2
                    class="nc-card-title text-neutral-900 dark:!text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold"
                  >
                    {{ category.title }}
                  </h2>
                  <span
                    class="text-xs block mt-[2px] text-neutral-500 dark:!text-dar-400 font-fd"
                    >{{ category.posts.length }} پست</span
                  >
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
 
</template>
<script setup>
const emit = defineEmits(["closeModal"]);
// const props = defineProps(["CatModal"]);


const {appBaseUrl} = useRuntimeConfig().public
const categoriesList = ref([])

const getCategories = async () => {
    const {data} = await useFetch(`${appBaseUrl}/api/mag/categories/get-all`)
    if(data.value.status == 200) {
        console.log(data.value.result)
        categoriesList.value = data.value.result
    }
}

getCategories()

const closeModal = () => {
  emit("closeModal");
};
</script>

<style>
  .modal-enter-active, .modal-leave-active { transition: opacity .5s; }
  .modal-enter, .modal-leave-to { opacity: 0; }
</style>
