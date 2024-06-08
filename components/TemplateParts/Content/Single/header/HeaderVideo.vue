<template>
    <header class=" relative pt-14 lg:py-20 flex flex-col lg:flex-row lg:items-center">
        <div
            class="absolute inset-y-0 transform translate-x-1/2 end-1/2 w-screen lg:translate-x-0 lg:w-[calc(100vw/2)] bg-orange-600 dark:bg-dark-800 lg:rounded-e-[40px]">
        </div>
        <div class="pb-10 lg:pb-0 lg:pl-10 relative">
            <div class="nc-SingleHeader ">
                <div class="space-y-5  text-neutral-100">

                    <PostCategory />
                    <h1 class=" lg:text-neutral-100 text-neutral-900 font-semibold text-3xl md:!leading-[120%] dark:text-neutral-100 max-w-4xl "
                        title="Julio Urías does it all as Dodgers sweep in San Francisco">این یک ویدیویی تست است
                    </h1>
                    <div class="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
                    <div class="flex flex-col space-y-5">
                        <div
                            class="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
                            <a class="flex items-center space-x-2 rtl:space-x-reverse"
                                href="/author/the-demo-author-slug">
                                <div
                                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full shadow-inner h-10 w-10 sm:h-11 sm:w-11 text-xl ring-1 ring-white dark:ring-neutral-900">
                                    <img alt="Foulcher Nathanil" class="absolute inset-0 w-full h-full object-cover"
                                        src="@/assets/images/7.jpg"><span class="wil-avatar__name">F</span>
                                </div>
                            </a>
                            <div class="ms-3">
                                <div class="flex items-center"><a
                                        class="block font-semibold lg:text-neutral-100 text-neutral-900"
                                        href="/author/the-demo-author-slug">محبوب حسین زاده</a></div>
                                <div class="text-xs mt-[6px]">
                                    <Data  class="text-white"/>
                                    <span class="mx-2 font-semibold lg:text-neutral-100 text-neutral-900">·</span>
                                    <ReadTime class="font-fd text-white" />
                                </div>
                            </div>
                        </div>
                        <div class="nc-SingleMetaAction2 ">
                            <div class="flex flex-row space-x-2.5 rtl:space-x-reverse items-center">
                                <div
                                    class="PostCardLikeAndComment flex items-center  !space-x-2.5 rtl:!space-x-reverse">
                                    <LikeButton />
                                    <CommentButton />
                                </div>
                                <div class="px-1">
                                    <div class="border-s border-neutral-200 dark:border-neutral-700 h-6"></div>
                                </div>
                                <BookmarkButton class="h-9 w-9 dark:hover:!bg-neutral-700" />
                                <div class="relative inline-block text-left">
                                    <Menu as="div" class="relative inline-block text-left z-10">
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
                                                            : 'text-gray-600',
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
                                                            : 'text-gray-600',
                                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                    ]">
                                                        <TwitterIcon :active="active" c
                                                            class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
                                                        توییتر
                                                    </button>
                                                    </MenuItem>

                                                    <MenuItem v-slot="{ active }">
                                                    <button :class="[
                                                        active
                                                            ? 'bg-gray-50 text-gray-700'
                                                            : 'text-gray-600',
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
                                                            : 'text-gray-600',
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
                                <div>
                                    <div class="relative inline-block text-left">
                                        <Menu as="div" class="relative inline-block text-left z-10">
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
                                                                : 'text-gray-600',
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
                                                                : 'text-gray-600',
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
                                                                : 'text-gray-600',
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative lg:w-8/12 flex-shrink-0">
            <div
                class="aspect-w-16  aspect-h-9 border-4 border-neutral-300 dark:border-neutral-800 shadow-2xl bg-neutral-800 rounded-3xl overflow-hidden z-0">
                <div>
                    <div class="lg:absolute inset-0 w-full">
                        <div class="w-full lg:h-full">
                            <video class="w-full object-cover h-full" controls>
                                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                                <!-- <source src="mov_bbb.ogg" type="video/ogg"> -->
                                Your browser does not support HTML video.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
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