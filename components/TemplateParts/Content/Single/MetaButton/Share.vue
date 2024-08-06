<template>
    <div class="relative inline-block text-left">
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton
                    class="flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-dark-700/20 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">
                    <Share />
                </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <MenuItems
                    key="emzedam"
                    class="absolute right-[-30px] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none !z-[1000]">
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                        <a target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?u=https://petdanim.petoman.com${$route.fullPath}`" :class="[
                            active
                                ? 'bg-gray-50 text-gray-700'
                                : ' fill-gray-500',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <FacebookIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
                            فیسبوک
                        </a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <a target="_blank" :href="`https://twitter.com/intent/tweet?url=https://petdanim.petoman.com${$route.fullPath}`" :class="[
                            active
                                ? 'bg-gray-50 text-gray-700'
                                : 'text-gray-500',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <TwitterIcon :active="active" c class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
                            توییتر
                        </a>
                        </MenuItem>

                        <MenuItem v-slot="{ active }">
                        <a target="_blank" :href="`https://www.linkedin.com/sharing/share-offsite/?url=https://petdanim.petoman.com${$route.fullPath}`" :class="[
                            active
                                ? 'bg-gray-50 text-gray-700'
                                : ' fill-gray-500',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <LinkedinIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
                            لینکدین
                        </a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <a target="_blank" :href="`https://t.me/share/url?url=https://petdanim.petoman.com${$route.fullPath}`"  :class="[
                            active
                                ? 'bg-gray-50 text-gray-700'
                                : ' fill-gray-500',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <telegramIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
                            تلگرام
                        </a>
                        </MenuItem>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>

<script setup>
import Share from "@/components/icons/Share.vue";
import telegramIcon from "@/components/icons/social/telegram.vue";
import TwitterIcon from "@/components/icons/social/twitter.vue";
import LinkedinIcon from "@/components/icons/social/linkedin.vue";
import FacebookIcon from "@/components/icons/social/facebook.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>