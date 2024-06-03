<template>
  <div
    class="relative inline-flex border dark:!border dark:!border-gray-700 transition-all duration-300 rounded-lg py-1 px-2"
  >
    <Menu as="div" class="relative inline-block text-right">
      <div>
        <MenuButton
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 inline-flex items-center dark:!text-gray-50 transition-all duration-300 border-0"
        >
          <span class="flex-shrink-0 h-5 w-5" aria-hidden="true">
            <UserIcon />
          </span>
          پنل کاربری
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none dark:!bg-nightbg dark:!text-gray-200"
        >
          <div class="px-1 py-1 space-y-2">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-muted/10',
                ]"
              >
                <AddPostIcon
                  class="w-6 ml-2 dark:!stroke-background stroke-gray-800"
                />
                نوشتن پست جدید
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-muted/10',
                ]"
              >
                <UserIcon
                  class="w-6 ml-2 dark:!stroke-background stroke-gray-800"
                />
                تنظیمات حساب کاربری
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-muted/10',
                ]"
              >
                <PostsIcon
                  class="w-6 ml-2 dark:!stroke-background stroke-gray-800"
                />

                پست ها و پیش نویس ها
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-muted/10',
                ]"
              >
                <BookmarkIcon
                  class="w-6 ml-2 dark:!stroke-background stroke-gray-800"
                />
                ذخیره شده ها
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-muted/10',
                ]"
              >
                <HeartIcon
                  class="w-6 ml-2 dark:!stroke-background stroke-gray-800"
                />
                پست های مورد علاقه
              </button>
            </MenuItem>

            <div class="border-t dark:!border-gray-500/20">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <LogoutIcon
                    class="w-6 ml-2 stroke-gray-800 dark:!stroke-background"
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
</script>
