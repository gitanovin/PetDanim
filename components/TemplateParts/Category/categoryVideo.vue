<template>
  <div class="">



<section class="bg-white lg:px-0 px-4">
      <div class="mx-auto w-full xl:max-w-7xl pb-16">
        <div class="header py-6"><h2 class=" text-3xl font-semibold">ویدیوها</h2>
        <span class="pt-3 block font-fd">120 ویدیو</span>
        </div>
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
          class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 mt-8 lg:mt-10"
        >
        <article>
          <div class="relative flex flex-col h-full">
            <div
              class="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden z-0"
            >
              <div>
                <div class="relative w-full h-full">
                  <img
                    alt="featured"
                    class="object-cover"
                    src="@/assets/images/3.jpg"
                  /><span
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      class="hover:scale-105 transform cursor-pointer transition-transform"
                    >
                      <span
                        class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11"
                      >
                        <Play />
                      </span>
                    </div> </span
                  ><a
                    class="block absolute inset-0"
                    href="/single-video/this-is-single-slug"
                  ></a>
                </div>
              </div>
              <a
                class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"
                href="/single-video/this-is-single-slug"
              ></a>
            </div>
            <div
              class="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 rtl:space-x-reverse"
            >
              <div class="flex flex-wrap space-x-2">
                <a
                  class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
                  href="/archive/the-demo-archive-slug"
                  >سگ ها</a
                >
              </div>
              <div
                class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300"
              >
                <button
                  class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                  title="Save to reading list"
                >
                  <Bookmark class="fill-gray-700" />
                </button>
              </div>
            </div>
            <div class="space-y-2.5 mt-4 px-4">
              <div
                class="inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
              >
                <div
                  class="relative flex items-center space-x-2 rtl:space-x-reverse"
                >
                  <div
                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-lg h-9 w-9 text-base ring-1 ring-white dark:ring-neutral-900"
                  >
                    <img
                      alt="Birrell Chariot"
                      class="absolute inset-0 w-full h-full object-cover"
                      src="@/assets/images/1.jpg"
                    /><span class="wil-avatar__name">B</span>
                  </div>
                  <div>
                    <h2 class="block font-semibold text-base text-gray-900">
                      <a
                        class="line-clamp-1"
                        href="/single-video/this-is-single-slug"
                        >سگ ها حیوانات باهوشی هستند
                      </a>
                    </h2>
                    <a class="flex mt-1.5" href="/author/the-demo-author-slug"
                      ><span
                        class="block text-gray-400 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
                        >محبوب حسین زاده</span
                      ><span
                        class="text-gray-100 dark:text-neutral-400 mx-[6px] font-medium"
                        >·</span
                      ><span
                        class="text-gray-400 dark:text-neutral-400 font-normal font-fd"
                        >28 اردیبهشت 1403</span
                      ></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

         <article>
          <div class="relative flex flex-col h-full">
            <div
              class="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden z-0"
            >
              <div>
                <div class="relative w-full h-full">
                  <img
                    alt="featured"
                    class="object-cover"
                    src="@/assets/images/3.jpg"
                  /><span
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      class="hover:scale-105 transform cursor-pointer transition-transform"
                    >
                      <span
                        class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11"
                      >
                        <Play />
                      </span>
                    </div> </span
                  ><a
                    class="block absolute inset-0"
                    href="/single-video/this-is-single-slug"
                  ></a>
                </div>
              </div>
              <a
                class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"
                href="/single-video/this-is-single-slug"
              ></a>
            </div>
            <div
              class="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 rtl:space-x-reverse"
            >
              <div class="flex flex-wrap space-x-2">
                <a
                  class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
                  href="/archive/the-demo-archive-slug"
                  >سگ ها</a
                >
              </div>
              <div
                class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300"
              >
                <button
                  class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                  title="Save to reading list"
                >
                  <Bookmark class="fill-gray-700" />
                </button>
              </div>
            </div>
            <div class="space-y-2.5 mt-4 px-4">
              <div
                class="inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
              >
                <div
                  class="relative flex items-center space-x-2 rtl:space-x-reverse"
                >
                  <div
                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-lg h-9 w-9 text-base ring-1 ring-white dark:ring-neutral-900"
                  >
                    <img
                      alt="Birrell Chariot"
                      class="absolute inset-0 w-full h-full object-cover"
                      src="@/assets/images/1.jpg"
                    /><span class="wil-avatar__name">B</span>
                  </div>
                  <div>
                    <h2 class="block font-semibold text-base text-gray-900">
                      <a
                        class="line-clamp-1"
                        href="/single-video/this-is-single-slug"
                        >سگ ها حیوانات باهوشی هستند
                      </a>
                    </h2>
                    <a class="flex mt-1.5" href="/author/the-demo-author-slug"
                      ><span
                        class="block text-gray-400 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
                        >محبوب حسین زاده</span
                      ><span
                        class="text-gray-100 dark:text-neutral-400 mx-[6px] font-medium"
                        >·</span
                      ><span
                        class="text-gray-400 dark:text-neutral-400 font-normal font-fd"
                        >28 اردیبهشت 1403</span
                      ></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

         <article>
          <div class="relative flex flex-col h-full">
            <div
              class="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden z-0"
            >
              <div>
                <div class="relative w-full h-full">
                  <img
                    alt="featured"
                    class="object-cover"
                    src="@/assets/images/3.jpg"
                  /><span
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      class="hover:scale-105 transform cursor-pointer transition-transform"
                    >
                      <span
                        class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11"
                      >
                        <Play />
                      </span>
                    </div> </span
                  ><a
                    class="block absolute inset-0"
                    href="/single-video/this-is-single-slug"
                  ></a>
                </div>
              </div>
              <a
                class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"
                href="/single-video/this-is-single-slug"
              ></a>
            </div>
            <div
              class="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 rtl:space-x-reverse"
            >
              <div class="flex flex-wrap space-x-2">
                <a
                  class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
                  href="/archive/the-demo-archive-slug"
                  >سگ ها</a
                >
              </div>
              <div
                class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300"
              >
                <button
                  class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                  title="Save to reading list"
                >
                  <Bookmark class="fill-gray-700" />
                </button>
              </div>
            </div>
            <div class="space-y-2.5 mt-4 px-4">
              <div
                class="inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
              >
                <div
                  class="relative flex items-center space-x-2 rtl:space-x-reverse"
                >
                  <div
                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-lg h-9 w-9 text-base ring-1 ring-white dark:ring-neutral-900"
                  >
                    <img
                      alt="Birrell Chariot"
                      class="absolute inset-0 w-full h-full object-cover"
                      src="@/assets/images/1.jpg"
                    /><span class="wil-avatar__name">B</span>
                  </div>
                  <div>
                    <h2 class="block font-semibold text-base text-gray-900">
                      <a
                        class="line-clamp-1"
                        href="/single-video/this-is-single-slug"
                        >سگ ها حیوانات باهوشی هستند
                      </a>
                    </h2>
                    <a class="flex mt-1.5" href="/author/the-demo-author-slug"
                      ><span
                        class="block text-gray-400 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
                        >محبوب حسین زاده</span
                      ><span
                        class="text-gray-100 dark:text-neutral-400 mx-[6px] font-medium"
                        >·</span
                      ><span
                        class="text-gray-400 dark:text-neutral-400 font-normal font-fd"
                        >28 اردیبهشت 1403</span
                      ></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

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

</section>




      <section>
        <div class="relative py-16 bg-gray-100 px-4 rounded-lg">
          <div class="mx-auto w-full w-full xl:max-w-7xl relative">
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
        <div class="mx-auto w-full  xl:max-w-7xl py-16 lg:px-0 px-4">
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
                      <div
                        class="relative inline-block whitespace-normal w-full"
                      >
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
import CategoryModal from "@/components/TemplateParts/Modal/CategoryModal.vue";
import TagsModal from "@/components/TemplateParts/Modal/TagsModal.vue";
import Bookmark from "@/components/icons/Bookmark.vue";
import Play from "@/components/icons/Video.vue";
import VideoIcon from "@/components/icons/VideoIcon.vue";



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
