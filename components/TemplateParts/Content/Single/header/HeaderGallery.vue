<template>
  <header class="rounded-xl">
    <div class="SingleHeader">
      <div class="space-y-5">
        <div
          class="flex flex-wrap space-x-2"
        >
          <a
            class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs !px-3 text-red-800 bg-red-100 hover:bg-red-800"
            href="/archive/the-demo-archive-slug"
            >گالری سگ ها</a
          >
        </div>
        <h1
          class="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100 max-w-4xl"
          title="Trending web &amp; landing page designs in 2023"
        >
          این یک گالری تستی است
        </h1>
        <div
          class="w-full border-b border-neutral-200 dark:border-neutral-700"
        ></div>
        <div
          class="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse"
        >
          <div
            class="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0"
          >
            <a
              class="flex items-center space-x-2 rtl:space-x-reverse"
              href="/author/the-demo-author-slug"
            >
              <div
                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full shadow-inner h-10 w-10 sm:h-11 sm:w-11 text-xl ring-1 ring-white dark:ring-neutral-900"
              >
                <img
                  alt="Foulcher Nathanil"
                  class="absolute inset-0 w-full h-full object-cover"
                  src="@/assets/images/3.jpg"
                /><span class="wil-avatar__name">F</span>
              </div>
            </a>
            <div class="ms-3">
              <div class="flex items-center">
                <a
                  class="block font-semibold"
                  href="/author/the-demo-author-slug"
                  >محبوب حسین زاده</a
                >
              </div>
              <div class="text-xs mt-[6px]">
                <span class="text-neutral-700 dark:text-neutral-300 font-fd"
                  >28 اردیبهشت 1403</span
                ><span class="mx-2 font-semibold">·</span
                ><span class="text-neutral-700 dark:text-neutral-300 font-fd"
                  >مطالعه 2 دقیقه</span
                >
              </div>
            </div>
          </div>
          <div class="SingleMetaAction">
            <div
              class="flex flex-row space-x-2.5 rtl:space-x-reverse items-center"
            >
              <div
                class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse !space-x-2.5 rtl:!space-x-reverse"
              >
                <button
                  class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-4 h-9 text-sm text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                  title="Liked"
                >
                  <Like /><span
                    class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                    >34</span
                  ></button
                ><a
                  href="#comments"
                  class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-4 h-9 text-sm"
                  title="Comments"
                >
                  <Comment />
                  <span
                    class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                    >110</span
                  ></a
                >
              </div>
              <div class="px-1">
                <div
                  class="border-s border-neutral-200 dark:border-neutral-700 h-6"
                ></div>
              </div>
              <button
                class="nc-NcBookmark relative rounded-full flex items-center justify-center h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                title="Save to reading list"
              >
                <Bookmark />
              </button>

              <div class="relative inline-block text-left">
                <Menu as="div" class="relative inline-block text-left z-10">
                  <div>
                    <MenuButton
                      class="flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full"
                    >
                      <Share />
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
                      class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                    >
                      <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                          <button
                            :class="[
                              active
                                ? 'bg-gray-50 text-gray-700'
                                : 'text-gray-600',
                              'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]"
                          >
                            <FacebookIcon
                              :active="active"
                              class="ml-2 h-5 w-5 fill-gray-800"
                              aria-hidden="true"
                            />
                            فیسبوک
                          </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                          <button
                            :class="[
                              active
                                ? 'bg-gray-50 text-gray-700'
                                : 'text-gray-600',
                              'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]"
                          >
                            <TwitterIcon
                              :active="active"
                              c
                              class="ml-2 h-5 w-5 fill-gray-800"
                              aria-hidden="true"
                            />
                            توییتر
                          </button>
                        </MenuItem>

                        <MenuItem v-slot="{ active }">
                          <button
                            :class="[
                              active
                                ? 'bg-gray-50 text-gray-700'
                                : 'text-gray-600',
                              'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]"
                          >
                            <LinkedinIcon
                              :active="active"
                              class="ml-2 h-5 w-5 fill-gray-800"
                              aria-hidden="true"
                            />
                            لینکدین
                          </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                          <button
                            :class="[
                              active
                                ? 'bg-gray-50 text-gray-700'
                                : 'text-gray-600',
                              'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]"
                          >
                            <InstagramIcon
                              :active="active"
                              class="ml-2 h-5 w-5 fill-gray-800"
                              aria-hidden="true"
                            />
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
                        class="text-neutral-500 dark:text-neutral-400 flex items-center justify-center rounded-full h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 focus:outline-none"
                      >
                        <MenuMoreIcon />
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
                        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                      >
                        <div class="px-2 py-4 space-y-2">
                          <MenuItem v-slot="{ active }">
                            <button
                              :class="[
                                active
                                  ? 'bg-gray-50 text-gray-700'
                                  : 'text-gray-600',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                              ]"
                            >
                              <CopyIcon
                                :active="active"
                                class="ml-2 h-5 w-5 fill-gray-800"
                                aria-hidden="true"
                              />
                              کپی لینک مقاله
                            </button>
                          </MenuItem>

                          <MenuItem v-slot="{ active }">
                            <button
                              :class="[
                                active
                                  ? 'bg-gray-50 text-gray-700'
                                  : 'text-gray-600',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                              ]"
                            >
                              <CommentIcon
                                :active="active"
                                class="ml-2 h-5 w-5 fill-gray-800"
                                aria-hidden="true"
                              />
                              افزودن نظر به این مقاله
                            </button>
                          </MenuItem>
                          <MenuItem v-slot="{ active }">
                            <button
                              :class="[
                                active
                                  ? 'bg-gray-50 text-gray-700'
                                  : 'text-gray-600',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                              ]"
                            >
                              <ReportIcon
                                :active="active"
                                class="ml-2 h-5 w-5 fill-gray-800"
                                aria-hidden="true"
                              />
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
    <div class="relative grid grid-cols-3 sm:grid-cols-4 gap-2 my-10">
      <div
        class="col-span-2 row-span-2 relative rounded-xl overflow-hidden cursor-pointer z-0"
      >
        <div class="absolute inset-0">
          <img
            alt="single"
            class="object-cover w-full h-full rounded-xl"
            src="@/assets/images/3.jpg"
          />
        </div>
        <div
          class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"
        ></div>
      </div>
      <div class="relative rounded-xl overflow-hidden z-0">
        <div class="aspect-w-6 aspect-h-5">
          <img
            alt="single"
            class="object-cover w-full h-full rounded-xl"
            src="@/assets/images/3.jpg"
          />
        </div>
        <div
          class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
        ></div>
      </div>
      <div class="relative rounded-xl overflow-hidden z-0">
        <div class="aspect-w-6 aspect-h-5">
          <img
            alt="single"
            class="object-cover w-full h-full rounded-xl"
            src="@/assets/images/5.jpg"
          />
        </div>
        <div
          class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
        ></div>
      </div>
      <div class="relative rounded-xl overflow-hidden z-0 hidden sm:block">
        <div class="aspect-w-6 aspect-h-5">
          <img
            alt="single"
            class="object-cover w-full h-full rounded-xl"
            src="@/assets/images/7.jpg"
          />
        </div>
        <div
          class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
        ></div>
      </div>
      <div class="relative rounded-xl overflow-hidden z-0 hidden sm:block">
        <div class="aspect-w-6 aspect-h-5">
          <img
            alt="single"
            class="object-cover w-full h-full rounded-xl"
            src="@/assets/images/6.jpg"
          />
        </div>
        <div
          class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
        ></div>
      </div>
      <div
        class="absolute hidden md:flex md:items-center md:justify-center right-3 bottom-3 px-4 py-2 rounded-full bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
      >
        <GridIcon />
        <span class="ms-2 text-neutral-800 text-sm font-medium"
          >مشاهده همه تصاویر</span
        >
      </div>
    </div>
  </header>
</template>
