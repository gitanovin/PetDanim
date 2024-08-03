<template>
  <div>
    <button
      type="button"
      @click="openMenu()"
      class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden border dark:!border-dark-700/20"
      aria-label="Open Menu"
    >
      <span class="flex-shrink-0" aria-hidden="true">
        <MenuList class="w-6 dark:!stroke-dark-700 stroke-dark-900" />
      </span>
    </button>
    <aside class="mobile-side lg:hidden">
      <TransitionGroup name="fade-animation">
        <div
           key="2"
          :class="menuState == false ? 'opacity-0 duration-300 invisible' : 'opacity-500 duration-300 visible'"
          class="h-screen w-full fixed top-0 z-50 transition-all duration-200 right-0"
        >
          <div
            @click="closeMenu()"
            :class="menuState == false ? 'opacity-0 duration-300 invisible' : 'opacity-500 duration-300 visible'"
            class="backdrop  transition bg-gray-500/50 dark:bg-dark-900/70 w-full h-screen"
          ></div>
          <div 
          @click="closeMenu()"
          class="close absolute left-3 top-4" v-if="menuState == true">
            <i class="fa fa-times text-2xl bg-white dark:bg-dark-800 dark:text-dark-700 cursor-pointer p-2 rounded-lg"
            ></i>
          </div>
          <div
            :class="menuState == false ? '-right-full' : 'right-0'"
            class="bg-white dark:bg-dark-800 transition-all duration-300 absolute z-50 w-64 top-0 h-screen"
          >
            <ul class="flex flex-col space-y-6 p-4 font-normal text-sm dark:text-gray-400 text-gray-700" v-if="headerData.length != 0">
              <li @click="closeMenu()" v-for="(item, index) in headerData" :key="item.id">
                <nuxt-link class="w-full block py-2" :to="`/archive/category/${item.slug}-${item.id}`">{{ item.title }}</nuxt-link>
              </li>
            </ul>
            <ul
              class="flex flex-col space-y-6 p-4 font-normal text-sm dark:text-gray-400 text-gray-700"
            > 
              <li>خانه</li>
              <li>تماس با ما</li>
              <li>درباره ما</li>
            </ul>
          </div>
        </div>
      </TransitionGroup>
    </aside>
  </div>
</template>

<script setup>
import MenuList from "@/components/icons/MenuList.vue";

const props = defineProps({
  headerData: {
    required: true,
    type: [Array , Object]
  }
})

const menuState = ref(false)

const openMenu = () => {
  menuState.value = true;
  document.body.style.overflowY = "hidden";
};

const closeMenu = () => {
  menuState.value = false;
  document.body.style.overflowY = "scroll";
};

</script>

<style>
  .fade-animation-enter-active {
    transition: transform 0.15s, opacity 0.45s !important;
  }
  .fade-animation-enter,
  .fade-animation-leave-to {
    transform: translateX(-60%) !important;
    opacity: 0 !important;
  }
</style>
