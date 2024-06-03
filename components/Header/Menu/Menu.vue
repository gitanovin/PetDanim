<template>
  <div class="items-center gap-x-4 hidden lg:flex dark:!text-gray-200">
    <Menu as="div" class="relative inline-block text-right">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75 dark:!text-gray-200 dark:!text-gray-200"
        >
          حیوانات
          <ChevronDownIcon
            class="-ml-1 mr-2 h-5 w-5 dark:!stroke-gray-200"
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
          class="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none dark:!bg-neutral-900 dark:!text-gray-200 dark:!divide-gray-800"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                سگ
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                گربه
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                پرنده
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                خزنده
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                دیگر
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>

    <Menu as="div" class="relative inline-block text-right dark:!text-gray-200">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75 dark:!text-gray-200"
        >
          سبک زندگی
          <ChevronDownIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
          class="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                سگ
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                گربه
              </button>
            </MenuItem>
          </div>
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                پرنده
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                خزنده
              </button>
            </MenuItem>
          </div>

          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
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
          class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75 dark:!text-gray-200"
        >
          سفر و گردشگری
          <ChevronDownIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
          class="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                سگ
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                گربه
              </button>
            </MenuItem>
          </div>
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                پرنده
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                خزنده
              </button>
            </MenuItem>
          </div>

          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
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
          class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75 dark:!text-gray-200"
        >
          اخبار
          <ChevronDownIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
          class="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                سگ
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                گربه
              </button>
            </MenuItem>
          </div>
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                پرنده
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                خزنده
              </button>
            </MenuItem>
          </div>

          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
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
          class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75 dark:!text-gray-200"
        >
          مسئولیت اجتماعی
          <ChevronDownIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
          class="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                سگ
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                گربه
              </button>
            </MenuItem>
          </div>
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                پرنده
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                خزنده
              </button>
            </MenuItem>
          </div>

          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
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
