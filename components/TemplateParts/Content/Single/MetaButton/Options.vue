<template>
    <div>
        <div class="relative inline-block text-left">
            <Menu as="div" class="relative inline-block text-left">
                <div>
                    <MenuButton
                        class="text-neutral-500 dark:text-neutral-400 flex items-center justify-center rounded-full h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-dark-700/20 dark:hover:bg-neutral-700 focus:outline-none">
                        <MenuMoreIcon />
                    </MenuButton>
                </div>

                <transition enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                    <MenuItems
                        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-slate-700 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-dark-800">
                        <div class="px-2 py-4 space-y-2">
                            <MenuItem v-slot="{ active }">
                            <button :class="[
                                active
                                    ? 'bg-gray-50 text-gray-700'
                                    : ' fill-gray-500',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]">
                                <CopyIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
                                کپی لینک مقاله
                            </button>
                            </MenuItem>

                            <MenuItem v-slot="{ active }">
                            <button :class="[
                                active
                                    ? 'bg-gray-50 text-gray-700'
                                    : ' fill-gray-500',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]">
                                <CommentIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
                                افزودن نظر به این مقاله
                            </button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <button :class="[
                                active
                                    ? 'bg-gray-50 text-gray-700'
                                    : ' fill-gray-500',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]">
                                <ReportIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
                                گزارش این مقاله
                            </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
    </div>
</template>

<script setup>
import Share from "@/components/icons/Share.vue";
import MenuMoreIcon from "@/components/icons/MenuMoreIcon.vue";
import ReportIcon from "@/components/icons/ReportIcon.vue";
import CopyIcon from "@/components/icons/Copy.vue";
import CommentIcon from "@/components/icons/Cm.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>