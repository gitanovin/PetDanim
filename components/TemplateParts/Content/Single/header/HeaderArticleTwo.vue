<template>
    <header class="relative  pt-16 z-10 md:py-20 lg:py-28 bg-neutral-900 dark:bg-dark-800">
        <div class="relative z-10 mx-auto w-full max-w-7xl">
            <div class="max-w-screen-md">
                <div class="nc-SingleHeader px-4">
                    <div class="space-y-5">
                        <PostCategory />
                        <h1 class=" text-white font-semibold text-2xl md:text-3xl leading-[90px] lg:text-4xl dark:text-neutral-100 max-w-4xl "
                            title="Trending web &amp; landing page designs in 2023">لورم ایپسوم متن ساختگی با
                            تولید سادگی پ</h1>
                        <div class="w-full border-b border-neutral-800/70 dark:border-neutral-700"></div>
                        <div
                            class="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse">
                            <div
                                class="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
                                <a class="flex items-center space-x-2 rtl:space-x-reverse"
                                    href="/author/the-demo-author-slug">
                                    <div
                                        class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full shadow-inner h-10 w-10 sm:h-11 sm:w-11 text-xl ring-1 ring-white dark:ring-neutral-900">
                                        <img alt="Foulcher Nathanil" loading="lazy" decoding="async"
                                            class="absolute inset-0 w-full h-full object-cover"
                                            src="@/assets/images/1.jpg"><span class="wil-avatar__name">F</span>
                                    </div>
                                </a>
                                <div class="ms-3">
                                    <div class="flex items-center"><a class="block font-semibold text-white"
                                            href="/author/the-demo-author-slug">محبوب حسین زاده</a></div>
                                    <div class="text-xs mt-[6px]">
                                        <Data class="text-white/60" />
                                        <span class="mx-2 font-semibold">·</span>
                                        <ReadTime  class="text-white/50"/>
                                    </div>
                                </div>
                            </div>
                            <div class="nc-SingleMetaAction2 ">
                                <div class="flex flex-row space-x-2.5 rtl:space-x-reverse items-center">
                                    <div
                                        class="nc-PostCardLikeAndComment flex items-center !space-x-2.5 rtl:!space-x-reverse">
                                        <LikeButton />
                                        <CommentButton />
                                    </div>
                                    <div class="px-1">
                                        <div class="border-s border-neutral-800/50 dark:border-neutral-700 h-6">
                                        </div>
                                    </div>
                                    <BookmarkButton class="h-9 w-9 dark:hover:!bg-neutral-700" />

                                    <div class="relative inline-block text-left">
                                        <Menu as="div" class="relative inline-block text-left">
                                            <div>
                                                <MenuButton
                                                    class="text-neutral-500 dark:text-neutral-400 flex items-center justify-center rounded-full h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-dark-700/20 dark:hover:bg-neutral-700 focus:outline-none">
                                                    <MenuMoreIcon />
                                                </MenuButton>
                                            </div>

                                            <transition enter-active-class="transition duration-100 ease-out"
                                                enter-from-class="transform scale-95 opacity-0"
                                                enter-to-class="transform scale-100 opacity-100"
                                                leave-active-class="transition duration-75 ease-in"
                                                leave-from-class="transform scale-100 opacity-100"
                                                leave-to-class="transform scale-95 opacity-0">
                                                <MenuItems
                                                    class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                    <div class="px-2 py-4 space-y-2">
                                                        <MenuItem v-slot="{ active }">
                                                        <button :class="[
                                                            active
                                                                ? 'bg-gray-50 text-gray-700'
                                                                : ' fill-gray-500',
                                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                        ]">
                                                            <CopyIcon :active="active"
                                                                class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
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
                                                            <CommentIcon :active="active"
                                                                class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
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
                                                            <ReportIcon :active="active"
                                                                class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
                                                            گزارش این مقاله
                                                        </button>
                                                        </MenuItem>
                                                    </div>
                                                </MenuItems>
                                            </transition>
                                        </Menu>

                                    </div>
                                    <div>
                                        <Menu as="div" class="relative inline-block text-left">
                                            <div>
                                                <MenuButton
                                                    class="flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-dark-700/20 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">
                                                    <Share />
                                                </MenuButton>
                                            </div>

                                            <transition enter-active-class="transition duration-100 ease-out"
                                                enter-from-class="transform scale-95 opacity-0"
                                                enter-to-class="transform scale-100 opacity-100"
                                                leave-active-class="transition duration-75 ease-in"
                                                leave-from-class="transform scale-100 opacity-100"
                                                leave-to-class="transform scale-95 opacity-0">
                                                <MenuItems
                                                    class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                    <div class="px-1 py-1">
                                                        <MenuItem v-slot="{ active }">
                                                        <button :class="[
                                                            active
                                                                ? 'bg-gray-50 text-gray-700'
                                                                : ' fill-gray-500',
                                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                        ]">
                                                            <FacebookIcon :active="active"
                                                                class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
                                                            فیسبوک
                                                        </button>
                                                        </MenuItem>
                                                        <MenuItem v-slot="{ active }">
                                                        <button :class="[
                                                            active
                                                                ? 'bg-gray-50 text-gray-700'
                                                                : 'text-gray-900',
                                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                        ]">
                                                            <TwitterIcon :active="active" c class="ml-2 h-5 w-5"
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
                                                            <LinkedinIcon :active="active"
                                                                class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
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
                                                            <InstagramIcon :active="active"
                                                                class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
                                                            اینستاگرام
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
            </div>
        </div>
        <div class="mt-8 md:mt-0 md:absolute md:top-0 md:end-0 md:bottom-0 md:w-1/2 lg:w-2/5 2xl:w-1/3">
            <div
                class="hidden md:block absolute top-0 start-0 bottom-0 w-2/4 from-neutral-900 dark:from-dark-800 bg-gradient-to-r rtl:bg-gradient-to-l">
            </div><img alt="" class="block w-full h-full object-cover" src="@/assets/images/6.jpg">
        </div>
    </header>
</template>

<script setup>
import ReadTime from "@/components/TemplateParts/Content/Single/header/ReadTime/read.vue";
import PostCategory from "@/components/TemplateParts/Badge/PostCategory.vue";
import LikeButton from "@/components/TemplateParts/MetaAction/Like.vue";
import CommentButton from "@/components/TemplateParts/MetaAction/Comment.vue";
import BookmarkButton from "@/components/TemplateParts/MetaAction/Bookmark.vue";
import Data from "@/components/TemplateParts/MetaAction/Data.vue";
import Share from "@/components/icons/Share.vue";
import InstagramIcon from "@/components/icons/social/instagram.vue";
import TwitterIcon from "@/components/icons/social/twitter.vue";
import LinkedinIcon from "@/components/icons/social/linkedin.vue";
import FacebookIcon from "@/components/icons/social/facebook.vue";
import MenuMoreIcon from "@/components/icons/MenuMoreIcon.vue";
import ReportIcon from "@/components/icons/ReportIcon.vue";
import CopyIcon from "@/components/icons/Copy.vue";
import CommentIcon from "@/components/icons/Cm.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>