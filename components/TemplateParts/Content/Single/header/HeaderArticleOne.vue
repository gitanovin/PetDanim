<template>
  <div class="single-header">
    <header class="rounded-xl pt-16">
      <div class="max-w-screen-md mx-auto">
        <div class="nc-SingleHeader">
          <div class="space-y-5">


            <PostCategory />
            <h1
              class="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100 max-w-4xl"
              title="Trending web &amp; landing page designs in 2023">
              برترین نژادهای سگ در سال 2024
            </h1>
            <span class="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">شیائومی در سکوت خبری
              از
              گوشی جدید ردمی نوت 13R رونمایی کرد. این
              گوشی به‌جز ارتقاء دوربین‌ها تفاوت زیادی با ردمی نوت 12R
              ندارد.</span>
            <div class="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
            <div
              class="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse">
              <div
                class="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
                <a class="flex items-center space-x-2 rtl:space-x-reverse" href="/author/the-demo-author-slug">
                  <div
                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full shadow-inner h-10 w-10 sm:h-11 sm:w-11 text-xl ring-1 ring-white dark:ring-neutral-900">
                    <img alt="Foulcher Nathanil" class="absolute inset-0 w-full h-full object-cover"
                      src="@/assets/images/3.jpg" /><span class="wil-avatar__name">F</span>
                  </div>
                </a>
                <div class="ms-3">
                  <div class="flex items-center">
                    <a class="block font-semibold" href="/author/the-demo-author-slug">محبوب حسین زاده</a>
                  </div>
                  <div class="text-xs mt-[6px]">
                    <Data />
                    <span class="mx-2 font-semibold">·</span>
                    <ReadTime />
                  </div>
                </div>
              </div>
              <div class="nc-SingleMetaAction2">
                <div class="flex flex-row space-x-2.5 rtl:space-x-reverse items-center">
                  <div class="PostCardLikeAndComment flex items-center !space-x-2.5 rtl:!space-x-reverse">
                    <LikeButton />
                    <CommentButton />
                  </div>
                  <div class="px-1">
                    <div class="border-s border-neutral-200 dark:border-neutral-700 h-6"></div>
                  </div>
                  <BookmarkButton class="h-9 w-9 dark:hover:!bg-neutral-700" />
                  <div class="relative inline-block text-left">
                    <Menu as="div" class="relative inline-block text-left">
                      <div>
                        <MenuButton
                          class="flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-dark-800 dark:hover:bg-dark-700/20 text-neutral-700 dark:text-neutral-200 rounded-full">
                          <Share />
                        </MenuButton>
                      </div>

                      <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
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
                              <FacebookIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
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
                              <TwitterIcon :active="active" c class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
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
                              <LinkedinIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
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
                              <InstagramIcon :active="active" class="ml-2 h-5 w-5 fill-gray-800" aria-hidden="true" />
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
                      <Menu as="div" class="relative inline-block text-left">
                        <div>
                          <MenuButton
                            class="text-neutral-500 dark:text-neutral-400 flex items-center justify-center rounded-full h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-dark-800 dark:hover:bg-dark-700/20 focus:outline-none">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <PostCover />
  </div>

</template>

<script setup>
import PostCover from "@/components/TemplateParts/Content/Single/Media/FeaturingImage1.vue";
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