<template>
  <div
    class="relative inline-flex border dark:!border dark:!border-dark-700/20 transition-all duration-300 rounded-lg"
  >
    <nuxt-link to="/auth/login"
      v-if="authUser == null"
      class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 inline-flex items-center dark:!text-dark-700 transition-all duration-300 border-0 px-4"
    >
      <span class="flex-shrink-0 h-5 w-5" aria-hidden="true">
        <UserIcon />
      </span>
      ورود / ثبت نام
    </nuxt-link>
    <Menu as="div" class="relative inline-block text-right" v-else>
      <a href="javascript:void(0)">
        <MenuButton
          class="w-[160px] focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 inline-flex items-center dark:!text-dark-700 transition-all duration-300 border-0 px-4"
        >
          <span class="flex-shrink-0 h-5 w-5" aria-hidden="true">
            <UserIcon />
          </span>
          <span class="w-full break-words truncate">{{ authUser.name }}</span>
        </MenuButton>
      </a>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute ml-0 pl-0 left-0 mt-6 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none dark:!bg-dark-800 dark:!text-dark-700"
        >
          <div class="pb-1 space-y-2">
            <nuxt-link
              to="/profile"
              class="profile flex gap-3 items-center py-4 px-4  bg-dark-700/10 rounded-t-md"
            >
              <div class="avatar w-10 h-10 object-cover border-3 rounded-full">
                <img
                  src="@/assets/images/1.jpg"
                  class="h-full w-full object-cover rounded-full"
                />
              </div>
              <div class="nama text-dark-900 dark:!text-dark-700">{{ authUser.name }}</div>
            </nuxt-link>

            <div class="px-2 space-y-3">
              <MenuItem v-slot="{ active }">
                <nuxt-link
                  to="/profile/create-post"
                  :class="[
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-dark-700/10',
                  ]"
                >
                  <AddPostIcon
                    class="w-6 ml-2 dark:!stroke-dark-700 stroke-gray-800"
                  />
                  نوشتن پست جدید
                </nuxt-link>
              </MenuItem>

              <MenuItem v-slot="{ active }">
                <nuxt-link
                  to="/profile/edit-profile"
                  :class="[
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-dark-700/10',
                  ]"
                >
                  <UserIcon
                    class="w-6 ml-2 dark:!stroke-dark-700 stroke-gray-800"
                  />
                  تنظیمات حساب کاربری
                </nuxt-link>
              </MenuItem>

              <MenuItem v-slot="{ active }">
                <nuxt-link
                  to="/profile/posts"
                  :class="[
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-dark-700/10',
                  ]"
                >
                  <PostsIcon
                    class="w-6 ml-2 dark:!stroke-dark-700 stroke-gray-800"
                  />

                  پست ها و پیش نویس ها
                </nuxt-link>
              </MenuItem>

              <MenuItem v-slot="{ active }">
                <nuxt-link
                  to="/profile/bookmarks"
                  :class="[
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-dark-700/10',
                  ]"
                >
                  <BookmarkIcon
                    class="w-6 ml-2 dark:!stroke-dark-700 stroke-gray-800"
                  />
                  ذخیره شده ها
                </nuxt-link>
              </MenuItem>

              <MenuItem v-slot="{ active }">
                <nuxt-link
                  to="/profile/favorites"
                  :class="[
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-dark-700/10',
                  ]"
                >
                  <HeartIcon
                    class="w-6 ml-2 dark:!stroke-dark-700 stroke-gray-800"
                  />
                  پست های مورد علاقه
                </nuxt-link>
              </MenuItem>
            </div>

            <div @click="openModalPrompt()" class="border-t dark:!border-dark-700/20 px-2">
              <MenuItem>
                <button
                  :class="[
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <LogoutIcon
                    class="w-6 ml-2 stroke-gray-800 dark:!stroke-dark-700"
                  />
                  خروج
                </button>
              </MenuItem>
            </div>
          </div>
        </MenuItems>
      </transition>
    </Menu>

  </div>
  
</template>

<script setup>

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import UserIcon from "@/components/icons/UserIcon.vue";
import LogoutIcon from "@/components/icons/Logout.vue";
import AddPostIcon from "@/components/icons/AddPost.vue";
import PostsIcon from "@/components/icons/PostsIcon.vue";
import Bookmark from "@/components/icons/Bookmark.vue";
import BookmarkIcon from "@/components/icons/BookmarkIcon.vue";
import Heart from "@/components/icons/Heart.vue";
import HeartIcon from "@/components/icons/HeartIcon.vue";
import { usePetdanimStore } from '~/store/petdanimStore.js'
import {storeToRefs} from 'pinia'


const emit = defineEmits(['openPrompt']);
const petdanimStore = usePetdanimStore()
const {authUser} = storeToRefs(petdanimStore)


const openModalPrompt = () => {
  emit("openPrompt")
}


</script>
