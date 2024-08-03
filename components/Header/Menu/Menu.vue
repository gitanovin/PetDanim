<template>
  <div v-if="headerData.length != 0" class="items-center gap-x-4 hidden lg:flex dark:!text-dark-700">
    <div v-for="(item, index) in headerData" :key="index">
      <Menu v-if="item.childs.length != 0" as="div" class="relative inline-block text-right">
        <div>
          <MenuButton
            class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75 dark:!text-dark-700"
          >
          {{item.title}}
            <ChevronDownIcon
              v-if="item.childs.length != 0"
              class="mr-2 h-5 w-5 dark:!stroke-dark-700 fill-dark-700"
              aria-hidden="true"
            />
          </MenuButton>
        </div>

        <transition
          v-if="item.childs.length != 0"
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            key="123"
            class="absolute right-0 mt-6 p-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none dark:!bg-dark-800 dark:!text-dark-700 dark:!divide-dark-700 dark:!border dark:!border-dark-700/20"
          >
            <div class="px-1 py-1">
              <MenuItem v-for="(childCat , index) in item.childs" :key="index" v-slot="{ active }">
                <nuxt-link :to="`/archive/category/${childCat.slug}-${childCat.id}`"
                  :class="[
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                  ]"
                >
                  {{childCat.title}}
                </nuxt-link>
              </MenuItem>
            </div>
          </MenuItems>  
        </transition>
      </Menu>
      <div v-else>
        <nuxt-link :to="`/archive/category/${item.slug}-${item.id}`"
          class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75 dark:!text-dark-700"
        >
         {{item.title}}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import ChevronDownIcon from "@/components/icons/ChevronDownIcon.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const props = defineProps({
  headerData: {
    required: true,
    type: [Array , Object]
  }
})

</script>
