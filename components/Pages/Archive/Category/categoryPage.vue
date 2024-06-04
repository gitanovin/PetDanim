<template>
  <div class="nc-PageArchivepy-8 lg:px-0 px-4 py-8">
    <div class="mx-auto  w-full xl:max-w-7xl">
      <div
        class="relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0"
      >
        <img
          alt="archive"
          class="object-cover w-full h-full rounded-3xl md:rounded-[40px]"
          src="@/assets/images/3.jpg"
        />
        <div
          class="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center"
        >
          <h2
            class="inline-block align-middle text-5xl font-semibold md:text-7xl"
          >
            سگ ها
          </h2>
          <span class="block mt-4 text-neutral-300 font-fd">115 مقاله</span>
        </div>
      </div>
    </div>
    <div class="pt-10 pb-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
      <div class="mx-auto w-full  xl:max-w-7xl">
        <div class="flex flex-col sm:justify-between sm:flex-row">
          <div class="flex space-x-2.5 rtl:space-x-reverse">
            <div class="nc-ModalCategories">
              <div class="nc-NcModal">
                <button
                  @click="OpenCategoryModal = true"
                  class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-white dark:bg-neutral-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-neutral-700 dark:hover:ring-neutral-500 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                >
                  <div>
                    <span class="hidden sm:inline">دیکر</span> دسته بندی ها
                  </div>
                  <ChevronDownIcon
                            class="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                </button>
              </div>
            </div>
            <div class="nc-ModalTags">
              <div class="nc-NcModal">
                <button
                  @click="OpenTagsModal = true"
                  class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-white dark:bg-neutral-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-neutral-700 dark:hover:ring-neutral-500 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                >
                  <div><span class="hidden sm:inline">دیگر</span> برچسب ها</div>
                   <ChevronDownIcon
                            class="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                </button>
              </div>
            </div>
          </div>
          <div
            class="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"
          ></div>
          <div class="flex justify-end">
            <div class="nc-ArchiveFilterListBox flex-shrink-0">
              <div class="relative">
                <div>
                  <Listbox v-model="selectedPerson">
                    <div class="relative mt-1">
                      <ListboxButton
                        class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-white dark:bg-neutral-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-neutral-700 dark:hover:ring-neutral-500 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                      >
                        <span
                          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2"
                        >
                          <ChevronDownIcon
                            class="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>

                        <span class="block truncate pl-2">{{
                          selectedPerson.name
                        }}</span>
                      </ListboxButton>

                      <transition
                        leave-active-class="transition duration-100 ease-in"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                      >
                        <ListboxOptions
                          class="absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm w-40"
                        >
                          <ListboxOption
                            v-slot="{ active, selected }"
                            v-for="person in people"
                            :key="person.name"
                            :value="person"
                            as="template"
                          >
                            <li
                              :class="[
                                active
                                  ? 'bg-amber-100 text-amber-900'
                                  : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-10 pr-4',
                              ]"
                            >
                              <span
                                :class="[
                                  selected ? 'font-medium' : 'font-normal',
                                  'block truncate',
                                ]"
                                >{{ person.name }}</span
                              >
                              <span
                                v-if="selected"
                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                              >
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                              </span>
                            </li>
                          </ListboxOption>
                        </ListboxOptions>
                      </transition>
                    </div>
                  </Listbox>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10"
        >
          <div
            class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 h-full"
          >
            <div
              class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-4 aspect-h-3"
            >
              <div>
                <div class="nc-PostFeaturedMedia relative w-full h-full">
                  <img
                    alt="featured"
                    class="object-cover h-full"
                    src="@/assets/images/4.jpg"
                  /><a
                    class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100"
                    href="/single/this-is-single-slug"
                  ></a>
                </div>
              </div>
            </div>
            <a class="absolute inset-0" href="/single/this-is-single-slug"></a
            ><span class="absolute top-3 inset-x-3 z-10">
              <div class="nc-CategoryBadgeList flex flex-wrap space-x-2">
                <a
                  class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                  href="/archive/the-demo-archive-slug"
                  >سگ ها</a
                >
              </div>
            </span>
            <div class="p-4 flex flex-col space-y-3">
              <div
                class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
              >
                <a
                  class="relative flex items-center space-x-2 rtl:space-x-reverse"
                  href="/author/the-demo-author-slug"
                >
                  <div
                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900"
                  >
                    <img
                      alt="Foulcher Nathanil"
                      class="absolute inset-0 w-full h-full object-cover"
                      src="@/assets/images/5.jpg"
                    /><span class="wil-avatar__name">F</span>
                  </div>
                  <span
                    class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
                  >
                    محبوب حسین زاده
                  </span> </a
                ><span
                  class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
                  >·</span
                ><span
                  class="text-neutral-500 dark:text-neutral-400 font-normal font-fd"
                  >24 اردیبهشت 1403</span
                >
              </div>
              <h3
                class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100"
              >
                <span
                  class="line-clamp-2"
                  title="Lenovo’s smarter devices stoke professional passions "
                  >این یک متن تستی است
                </span>
              </h3>
              <div class="flex items-end justify-between mt-auto">
                <div
                  class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative"
                >
                  <button
                    class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                    title="Liked"
                  >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span
                      class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                      >34</span
                    ></button
                  ><a
                    class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                    title="Comments"
                    href="/single/demo-slug#comments"
                  >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                      ></path>
                    </svg>
                    <span
                      class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                      >110</span
                    ></a
                  >
                </div>
                <div
                  class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative"
                >
                  <button
                    class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                    title="Save to reading list"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      fill="none"
                      stroke="currentColor"
                      class="w-[18px] h-[18px]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center font-fd"
        >
          <nav
            class="nc-Pagination inline-flex space-x-1 rtl:space-x-reverse text-base font-medium"
          >
            <span
              class="inline-flex w-11 h-11 items-center justify-center rounded-full bg-orange-500 text-white focus:outline-none"
              >1</span
            ><a
              class="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
              href="/"
              >2</a
            ><a
              class="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
              href="/"
              >3</a
            ><a
              class="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
              href="/"
              >4</a
            >
          </nav>
          <button
            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-orange-500 hover:bg-orange-600 text-orange-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
          >
            نمایش بیشتر
          </button>
        </div>
      </div>

      <section>
        <div class="relative py-16 bg-gray-100 px-4 rounded-lg">
          <div class="mx-auto  w-full xl:max-w-7xl relative">
            <div
              class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50"
            >
              <div class="w-full flex items-center justify-between">
                <h2
                  class="text-2xl md:text-3xl lg:text-2xl font-bold flex items-center"
                >
                  <CategoryIcon
                    class="w-12 rounded-lg ml-2 p-2 bg-orange-500"
                  />
                  <span>برترین دسته ها</span>
                </h2>
                <button
                  class="flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent text-sm sm:text-base font-medium !hidden md:!flex"
                >
                  <span>مشاهده همه </span>
                  <IconsLeftArrow />
                </button>
              </div>
            </div>
            <div
              class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-4 md:gap-4"
            >
              <a
                class="relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-lg transition-colors"
                href="/archive/the-demo-archive-slug"
                ><span
                  class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100"
                  >#1</span
                >
                <div
                  class="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden z-0"
                >
                  <img
                    alt="categories"
                    class="object-cover w-full h-full"
                    src="@/assets/images/3.jpg"
                  />
                </div>
                <div class="mt-3">
                  <h2 class="text-base font-semibold">پرندگان</h2>
                  <span
                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400 font-fd"
                    >13 مقاله</span
                  >
                </div>
              </a>

              <a
                class="relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-lg transition-colors"
                href="/archive/the-demo-archive-slug"
                ><span
                  class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100"
                  >#1</span
                >
                <div
                  class="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden z-0"
                >
                  <img
                    alt="categories"
                    class="object-cover w-full h-full"
                    src="@/assets/images/3.jpg"
                  />
                </div>
                <div class="mt-3">
                  <h2 class="text-base font-semibold">پرندگان</h2>
                  <span
                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400 font-fd"
                    >13 مقاله</span
                  >
                </div>
              </a>

              <a
                class="relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-lg transition-colors"
                href="/archive/the-demo-archive-slug"
                ><span
                  class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100"
                  >#1</span
                >
                <div
                  class="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden z-0"
                >
                  <img
                    alt="categories"
                    class="object-cover w-full h-full"
                    src="@/assets/images/3.jpg"
                  />
                </div>
                <div class="mt-3">
                  <h2 class="text-base font-semibold">پرندگان</h2>
                  <span
                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400 font-fd"
                    >13 مقاله</span
                  >
                </div>
              </a>

              <a
                class="relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-lg transition-colors"
                href="/archive/the-demo-archive-slug"
                ><span
                  class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100"
                  >#1</span
                >
                <div
                  class="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden z-0"
                >
                  <img
                    alt="categories"
                    class="object-cover w-full h-full"
                    src="@/assets/images/3.jpg"
                  />
                </div>
                <div class="mt-3">
                  <h2 class="text-base font-semibold">پرندگان</h2>
                  <span
                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400 font-fd"
                    >13 مقاله</span
                  >
                </div>
              </a>

              <a
                class="relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-lg transition-colors"
                href="/archive/the-demo-archive-slug"
                ><span
                  class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100"
                  >#1</span
                >
                <div
                  class="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden z-0"
                >
                  <img
                    alt="categories"
                    class="object-cover w-full h-full"
                    src="@/assets/images/3.jpg"
                  />
                </div>
                <div class="mt-3">
                  <h2 class="text-base font-semibold">پرندگان</h2>
                  <span
                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400 font-fd"
                    >13 مقاله</span
                  >
                </div>
              </a>

              <a
                class="relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-lg transition-colors"
                href="/archive/the-demo-archive-slug"
                ><span
                  class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100"
                  >#1</span
                >
                <div
                  class="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden z-0"
                >
                  <img
                    alt="categories"
                    class="object-cover w-full h-full"
                    src="@/assets/images/3.jpg"
                  />
                </div>
                <div class="mt-3">
                  <h2 class="text-base font-semibold">پرندگان</h2>
                  <span
                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400 font-fd"
                    >13 مقاله</span
                  >
                </div>
              </a>

              <a
                class="relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-lg transition-colors"
                href="/archive/the-demo-archive-slug"
                ><span
                  class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100"
                  >#1</span
                >
                <div
                  class="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden z-0"
                >
                  <img
                    alt="categories"
                    class="object-cover w-full h-full"
                    src="@/assets/images/3.jpg"
                  />
                </div>
                <div class="mt-3">
                  <h2 class="text-base font-semibold">پرندگان</h2>
                  <span
                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400 font-fd"
                    >13 مقاله</span
                  >
                </div>
              </a>

              <a
                class="relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-lg transition-colors"
                href="/archive/the-demo-archive-slug"
                ><span
                  class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100"
                  >#1</span
                >
                <div
                  class="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden z-0"
                >
                  <img
                    alt="categories"
                    class="object-cover w-full h-full"
                    src="@/assets/images/3.jpg"
                  />
                </div>
                <div class="mt-3">
                  <h2 class="text-base font-semibold">پرندگان</h2>
                  <span
                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400 font-fd"
                    >13 مقاله</span
                  >
                </div>
              </a>

              <a
                class="relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-lg transition-colors"
                href="/archive/the-demo-archive-slug"
                ><span
                  class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100"
                  >#1</span
                >
                <div
                  class="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden z-0"
                >
                  <img
                    alt="categories"
                    class="object-cover w-full h-full"
                    src="@/assets/images/3.jpg"
                  />
                </div>
                <div class="mt-3">
                  <h2 class="text-base font-semibold">پرندگان</h2>
                  <span
                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400 font-fd"
                    >13 مقاله</span
                  >
                </div>
              </a>

              <a
                class="relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-lg transition-colors"
                href="/archive/the-demo-archive-slug"
                ><span
                  class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute -top-2 sm:top-3 left-3 text-indigo-800 bg-indigo-100"
                  >#1</span
                >
                <div
                  class="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden z-0"
                >
                  <img
                    alt="categories"
                    class="object-cover w-full h-full"
                    src="@/assets/images/3.jpg"
                  />
                </div>
                <div class="mt-3">
                  <h2 class="text-base font-semibold">پرندگان</h2>
                  <span
                    class="block mt-1 text-sm text-neutral-500 dark:text-neutral-400 font-fd"
                    >13 مقاله</span
                  >
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="mx-auto  w-full xl:max-w-7xl">
          <div
            class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50"
          >
            <div class="w-full flex items-center justify-between">
              <h2
                class="text-2xl md:text-3xl lg:text-2xl font-bold flex items-center"
              >
                <UserIcon
                  class="w-12 rounded-lg ml-2 p-2 bg-orange-500 text-white"
                />
                <span>نویسندگان برتر</span>
              </h2>
              <button
                class="flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent text-sm sm:text-base font-medium !hidden md:!flex"
              >
                <span>مشاهده همه </span>
                <IconsLeftArrow />
              </button>
            </div>
          </div>
          <div class="nc-MySlider">
            <div class="relative flow-root">
              <div class="flow-root overflow-hidden rounded-xl">
                <div class="relative whitespace-nowrap rounded-xl">
                  <Splide
                    :options="{
                      perPage: 5,
                      type: 'loop',
                      direction: 'rtl',
                      gap: '20px',
                      breakpoints: {
                        400: {
                          perPage: 1,
                          padding: '4rem',
                          gap: '1rem',
                        },
                        640: {
                          perPage: 1,
                          padding: '4rem',
                          gap: '1rem',
                        },
                        768: {
                          perPage: 3,
                          padding: '4rem',
                          gap: '1rem',
                        },
                        1080: {
                          perPage: 4,
                          padding: '4rem',
                          gap: '1rem',
                        },
                      },
                    }"
                  >
                    <SplideSlide class="splide__slide rounded-lg">
                      <div class="relative inline-block whitespace-normal w-full">
                        <a
                          class="nc-CardAuthorBox2 flex flex-col overflow-hidden bg-white dark:bg-neutral-800 rounded-3xl"
                          href="/author/the-demo-author-slug"
                        >
                          <div class="relative flex-shrink-0">
                            <div>
                              <div
                                class="flex aspect-w-7 aspect-h-5 w-full h-0"
                              >
                                <img
                                  alt="author"
                                  class="object-cover w-full h-full"
                                  src="@/assets/images/1.jpg"
                                />
                              </div>
                            </div>
                            <div class="absolute top-3 inset-x-3 flex">
                              <div
                                class="py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium font-fd"
                              >
                                40
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  class="w-5 h-5 text-yellow-600 ms-3 rtl:rotate-180"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div class="-mt-8 m-8 text-center">
                            <div
                              class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-16 h-16 text-2xl ring-2 ring-white"
                            >
                              <img
                                alt="Truelock Alric"
                                class="absolute inset-0 w-full h-full object-cover"
                                src="@/assets/images/7.jpg"
                              /><span class="wil-avatar__name">T</span>
                            </div>
                            <div class="mt-3">
                              <h2 class="text-base font-medium">
                                <span class="line-clamp-1">حدیث شادی</span>
                              </h2>
                              <span
                                class="block mt-1 text-sm text-orange-500 dark:text-neutral-400 ltr"
                                >@hadisshadi</span
                              >
                            </div>
                          </div>
                        </a>
                      </div>
                    </SplideSlide>
                  </Splide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <transition-group name="modal">
    <CategoryModal
      v-if="OpenCategoryModal"
      @closeModal="OpenCategoryModal = false"
    />
  </transition-group>

  <transition-group name="modal">
    <TagsModal v-if="OpenTagsModal" @closeTagsModal="OpenTagsModal = false" />
  </transition-group>
</template>

<script setup>
import ChevronDownIcon from "@/components/icons/ChevronDownIcon.vue";
import IconsLeftArrow from "@/components/icons/LeftArrow.vue";
import CategoryIcon from "@/components/icons/CategoryIcon.vue";
import UserIcon from "@/components/icons/UserIcon.vue";
import CategoryModal from "@/components/Pages/Archive/Modal/CategoryModal.vue";
import TagsModal from "@/components/Pages/Archive/Modal/TagsModal.vue";
import { ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const people = [
  { name: "جدیدترین ها" },
  { name: "پربازدیدترین ها" },
  { name: "بیشترین نظرات" },
];
const selectedPerson = ref(people[0]);
const OpenCategoryModal = ref(false);
const OpenTagsModal = ref(false);
</script>
