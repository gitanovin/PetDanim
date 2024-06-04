<template>
  <div class="items-center gap-x-4 hidden lg:flex dark:!text-dark-700">
    <Menu as="div" class="relative inline-block text-right">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75 dark:!text-dark-700"
        >
         سگ
          <ChevronDownIcon
            class="mr-2 h-5 w-5 dark:!stroke-dark-700 fill-dark-700"
            aria-hidden="true"
          />
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
          class="absolute right-0 mt-6 p-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none dark:!bg-dark-800 dark:!text-dark-700 dark:!divide-dark-700 dark:!border dark:!border-dark-700/20"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                سگ
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                گربه
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                پرنده
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                خزنده
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                دیگر
              </button>
            </MenuItem>
          </div>
        </MenuItems>  
      </transition>
    </Menu>

       <Menu as="div" class="relative inline-block text-right">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75 dark:!text-dark-700"
        >
        گربه
          <ChevronDownIcon
            class="mr-2 h-5 w-5 dark:!stroke-dark-700 fill-dark-700"
            aria-hidden="true"
          />
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
          class="absolute right-0 mt-6 p-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none dark:!bg-dark-800 dark:!text-dark-700 dark:!divide-dark-700 dark:!border dark:!border-dark-700/20"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                سگ
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                گربه
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                پرنده
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                خزنده
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                دیگر
              </button>
            </MenuItem>
          </div>
        </MenuItems>  
      </transition>
    </Menu>

       <Menu as="div" class="relative inline-block text-right">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75 dark:!text-dark-700"
        >
        خزندگان
          <ChevronDownIcon
            class="mr-2 h-5 w-5 dark:!stroke-dark-700 fill-dark-700"
            aria-hidden="true"
          />
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
          class="absolute right-0 mt-6 p-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none dark:!bg-dark-800 dark:!text-dark-700 dark:!divide-dark-700 dark:!border dark:!border-dark-700/20"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                سگ
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                گربه
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                پرنده
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                خزنده
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                دیگر
              </button>
            </MenuItem>
          </div>
        </MenuItems>  
      </transition>
    </Menu>

       <Menu as="div" class="relative inline-block text-right">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75 dark:!text-dark-700"
        >
         پرندگان
          <ChevronDownIcon
            class="mr-2 h-5 w-5 dark:!stroke-dark-700 fill-dark-700"
            aria-hidden="true"
          />
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
          class="absolute right-0 mt-6 p-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none dark:!bg-dark-800 dark:!text-dark-700 dark:!divide-dark-700 dark:!border dark:!border-dark-700/20"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                سگ
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                گربه
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                پرنده
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                خزنده
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                دیگر
              </button>
            </MenuItem>
          </div>
        </MenuItems>  
      </transition>
    </Menu>

       <Menu as="div" class="relative inline-block text-right">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75 dark:!text-dark-700"
        >
         مسئولیت اجتماعی
          <ChevronDownIcon
            class="mr-2 h-5 w-5 dark:!stroke-dark-700 fill-dark-700"
            aria-hidden="true"
          />
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
          class="absolute right-0 mt-6 p-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none dark:!bg-dark-800 dark:!text-dark-700 dark:!divide-dark-700 dark:!border dark:!border-dark-700/20"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
               درباره ما
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                گربه
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                پرنده
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                خزنده
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                دیگر
              </button>
            </MenuItem>
          </div>
        </MenuItems>  
      </transition>
    </Menu>

       <Menu as="div" class="relative inline-block text-right">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75 dark:!text-dark-700"
        >
          سرویس های ما
          <ChevronDownIcon
            class="mr-2 h-5 w-5 dark:!stroke-dark-700 fill-dark-700"
            aria-hidden="true"
          />
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
          class="absolute right-0 mt-6 p-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none dark:!bg-dark-800 dark:!text-dark-700 dark:!divide-dark-700 dark:!border dark:!border-dark-700/20"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                سگ
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                گربه
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                پرنده
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                خزنده
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:hover:!bg-dark-900 hover:bg-gray-50 duration-300 transition-colors',
                ]"
              >
                دیگر
              </button>
            </MenuItem>
          </div>
        </MenuItems>  
      </transition>
    </Menu>

  

  </div>
</template>

<script setup>
import ChevronDownIcon from "@/components/icons/ChevronDownIcon.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>
