<template>
    <div
        class="relative bg-white dark:!bg-dark-800 dark:border dark:!border-neutral-700  rounded-t-lg flex flex-col md:flex-row border border-gray-100">
        <div class="w-full lg:w-40 flex-shrink-0 mt-4 sm:mt-0 px-4 lg:p-8 lg:block flex items-center">
            <div
                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold rounded-full lg:rounded-lg w-16 h-16 text-xl lg:text-2xl lg:w-36 lg:h-36 ring-4 ring-white dark:ring-0 z-0">
                <img alt="Avatar" class="object-cover absolute inset-0 w-16 h-16 lg:h-full lg:w-full"
                    src="@/assets/images/6.jpg" />
            </div>

            <ul
                class="flex 
                text-center p-2 text-gray-600 dark:!text-gray-400 leading-snug text-sm font-fd w-full gap-6 items-center pr-6 lg:hidden justify-center">
                <li>
                    <span class="font-bold text-black dark:!text-white block">136</span>
                    پست
                </li>

                <li>
                    <span class="font-bold text-black block dark:!text-white">40.5k</span>
                    دنبال کننده
                </li>
                <li>
                    <span class="font-bold text-black block dark:!text-white">302</span>
                    دنبال شونده
                </li>
            </ul>

        </div>
        <div class="flex-grow lg:mr-6">
            <div class="max-w-full space-y-4">
                <div class="flex justify-between items-center px-4 lg:pt-6 pt-3">
                    <h2 class="inline-flex items-center text-xl sm:text-3xl lg:text-4xl font-semibold dark:!text-white">
                        <span>محبوب حسین زاده</span><span class="mr-2">
                            <Verify />
                        </span>
                    </h2>

                </div>

                <span class="block text-sm text-neutral-500 dark:!text-neutral-400 text-justify px-4">محبوب حسین زاده
                    (زاده ۲۸ اردیبهشت ۱۳۶۹ در خوی) نوازنده، توسعه
                    دهنده ، سفیر صلح و دوستی ، و طراح ایرانی است. وی کارشناس حقوق و
                    کارشناس ارشد کسب و کار الکترونیک از دانشگاه بین المللی کیش
                    است.</span>


                <div class="flex  justify-start px-4 pb-4">
                    <button
                        class="nc-Button flex-shrink-0 relative  inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-orange-500 hover:bg-orange-600 text-orange-50 text-sm md:text-base font-medium px-4 py-1 md:py-2.5 h-8 md:!h-10 sm:px-6 lg:px-8">
                        <PlusIcon />
                        <span class="ms-2">دنبال کردن</span>
                    </button>
                    <div class="mx-2">
                        <div class="relative inline-block">
                            <Menu as="div" class="relative inline-block">
                                <div>
                                    <MenuButton
                                        class="flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:!bg-dark-900 dark:hover:!bg-dark-700/20 text-neutral-700 dark:text-neutral-200 rounded-full">
                                        <UserIcon class="w-5 dark:!fill-background/70" />
                                    </MenuButton>
                                </div>

                                <transition enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0">
                                    <MenuItems
                                        class="absolute right-0 mt-2 lg:w-56 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
                                        <div class="px-1 py-1">
                                            <MenuItem v-slot="{ active }">
                                            <button :class="[
                                                active
                                                    ? 'bg-gray-50 text-gray-700'
                                                    : ' fill-gray-500',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <FacebookIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800"
                                                    aria-hidden="true" />
                                                فیسبوک
                                            </button>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                            <button :class="[
                                                active
                                                    ? 'bg-gray-50 text-gray-700'
                                                    : 'text-gray-500',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <TwitterIcon :active="active" c class="ml-2 h-5 w-5 fill-gray-800"
                                                    aria-hidden="true" />
                                                توییتر
                                            </button>
                                            </MenuItem>

                                            <MenuItem v-slot="{ active }">
                                            <button :class="[
                                                active
                                                    ? 'bg-gray-50 text-gray-700'
                                                    : ' fill-gray-500',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <LinkedinIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800"
                                                    aria-hidden="true" />
                                                لینکدین
                                            </button>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                            <button :class="[
                                                active
                                                    ? 'bg-gray-50 text-gray-700'
                                                    : ' fill-gray-500',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <InstagramIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800"
                                                    aria-hidden="true" />
                                                اینستاگرام
                                            </button>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>
                    <div>
                        <div class="relative inline-block">
                            <Menu as="div" class="relative inline-block">
                                <div>
                                    <MenuButton
                                        class="text-neutral-500 dark:!text-neutral-400 flex items-center justify-center rounded-full h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:!bg-dark-900 dark:hover:!bg-dark-700/30 focus:outline-none">
                                        <MenuMoreIcon class=" dark:!fill-background/70" />
                                    </MenuButton>
                                </div>

                                <transition enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0">
                                    <MenuItems
                                        class="absolute right-0 mt-2 lg:w-56 w-40 z-50 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                        <div class="px-2 py-4 space-y-2">
                                            <MenuItem v-slot="{ active }">
                                            <button :class="[
                                                active
                                                    ? 'bg-gray-50 text-gray-700'
                                                    : ' fill-gray-500',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <CopyIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800"
                                                    aria-hidden="true" />
                                                کپی لینک
                                            </button>
                                            </MenuItem>

                                            <MenuItem v-slot="{ active }">
                                            <button :class="[
                                                active
                                                    ? 'bg-gray-50 text-gray-700'
                                                    : ' fill-gray-500',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <EyeSlashIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800"
                                                    aria-hidden="true" />
                                                مخفی کردن
                                            </button>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                            <button :class="[
                                                active
                                                    ? 'bg-gray-50 text-gray-700'
                                                    : ' fill-gray-500',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <ReportIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800"
                                                    aria-hidden="true" />
                                                گزارش
                                            </button>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Comment from "@/components/icons/Comment.vue";
import Share from "@/components/icons/Share.vue";
import InstagramIcon from "@/components/icons/social/instagram.vue";
import TwitterIcon from "@/components/icons/social/twitter.vue";
import LinkedinIcon from "@/components/icons/social/linkedin.vue";
import FacebookIcon from "@/components/icons/social/facebook.vue";
import MenuMoreIcon from "@/components/icons/MenuMoreIcon.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";

import EyeSlashIcon from "@/components/icons/EyeSlashIcon.vue";
import ReportIcon from "@/components/icons/ReportIcon.vue";
import CopyIcon from "@/components/icons/Copy.vue";
import UserIcon from "@/components/icons/UserIcon.vue";
import Verify from "@/components/icons/Verify.vue";
import WebIcon from "@/components/icons/WebIcon.vue";

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";



</script>