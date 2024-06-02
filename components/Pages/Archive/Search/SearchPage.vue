<template>
  <div class="nc-PageAuthor lg:py-8">
    <div class="w-full ">
      <div class="w-full max-w-7xl mx-auto">
        <div
          class="rounded-0 lg:rounded-[40px] relative aspect-w-16 aspect-h-9 lg:aspect-h-5 overflow-hidden z-0"
        >
          <div class="absolute inset-0">
            <img
              alt="search"
              class="object-cover w-full h-full absolute"
              src="@/assets/images/bb.webp"
            />
          </div>
        </div>
        <div class="relative  -mt-20 lg:-mt-48 mx-auto max-w-5xl">
          <div
            class="bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[20px]  flex items-center"
          >
            <header
              class="w-full max-w-3xl mx-auto text-center flex flex-col items-center"
            >
              <h2 class="text-2xl sm:text-4xl font-semibold">سگ ها</h2>
              <span
                class="block text-xs sm:text-sm mt-4 text-neutral-500 dark:text-neutral-300"
                >ما یافتیم
                <strong
                  class="font-medium text-neutral-800 dark:text-neutral-100 font-fd"
                  >1135</strong
                >
               نتیجه برای 
                <strong
                  class="font-medium text-neutral-800 dark:text-neutral-100"
                  >سگ ها</strong
                ></span
              >
              <form
                class="relative w-full mt-8 sm:mt-11 text-left"
                method="post"
              >
                <label
                  for="search-input"
                  class="text-neutral-500 dark:text-neutral-300"
                  ><span class="sr-only">جستجوی همه</span
                  ><input
                    class="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200/50 bg-white dark:border-neutral-500 dark:focus:ring-primary-500/30 dark:bg-neutral-900 rounded-full text-sm font-normal pr-14 py-5 pe-5 md:ps-16 "
                    id="search-input"
                    placeholder="متن مورد نظر برای جستجو را بنویسید"
                    type="search"
                    value="سگ" /><button
                    class="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-slate-900 hover:bg-slate-800 text-slate-50 absolute end-2.5 top-1/2 transform -translate-y-1/2 w-11 h-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                    type="submit"
                  >
                  <SearchIcon class="w-8"/>
                    </button
                  ><span
                    class="absolute start-5 top-1/2 transform -translate-y-1/2 text-2xl md:start-6"
                    ><svg
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                      ></path></svg></span
                ></label>
              </form>
              <div
                class="w-full text-sm text-start mt-4 text-neutral-500 dark:text-neutral-300"
              >
                <div
                  class="inline-block space-x-1.5 sm:space-x-2.5 rtl:space-x-reverse"
                >
                  <span class="">جستجوهای اخیر:</span
                  ><a
                    class="nc-NcLink text-primary hover:text-primary-800 dark:text-primary-500 dark:hover:text-orange-600 inline-block font-normal"
                    href="/search"
                    >سگ</a
                  ><a
                    class="nc-NcLink text-primary hover:text-primary-800 dark:text-primary-500 dark:hover:text-orange-600 inline-block font-normal"
                    href="/search"
                    >گربه</a
                  ><a
                    class="nc-NcLink text-primary hover:text-primary-800 dark:text-primary-500 dark:hover:text-orange-600 inline-block font-normal"
                    href="/search"
                    >خزنده</a
                  ><a
                    class="nc-NcLink text-primary hover:text-primary-800 dark:text-primary-500 dark:hover:text-orange-600 inline-block font-normal"
                    href="/search"
                    >حیوان خانگی</a
                  >
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>

    <div
      class="max-w-7xl py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28 mx-auto"
    >
      <main>
        <div
          class="flex flex-col sm:items-center sm:justify-between sm:flex-row "
        >
          <nav class="nc-Nav px-4">
            <ul class="flex sm:space-x-2 rtl:space-x-reverse">
              <li class="nc-NavItem relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-black"
                >
                  مقالات
                </button>
              </li>
              <li class="nc-NavItem relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                دسته بندی ها
                </button>
              </li>
              <li class="nc-NavItem relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                برچسب ها
                </button>
              </li>
                 <li class="nc-NavItem relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                نویسنده ها
                </button>
              </li>
            </ul>
          </nav>
          <div
            class="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"
          ></div>
          <div class="flex justify-start px-4">
            <div class="nc-ArchiveFilterListBox flex-shrink-0">
              <div class="relative">
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
                        class="absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm w-40 z-50"
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
        <div
          class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10 p-4 rounded-lg"
        >
          <article>
            <div
              class="relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 h-full"
            >
              <div
                class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-5 aspect-h-3"
              >
                <div>
                  <div class="relative w-full h-full">
                    <img
                      alt="featured"
                      class="object-cover"
                      src="@/assets/images/7.jpg"
                    /><span
                      class="absolute inset-0 flex items-center justify-center"
                    >
                      <div
                        class="hover:scale-105 transform cursor-pointer transition-transform"
                        data-nc-id="PostTypeFeaturedIcon"
                      >
                        <span
                          class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11"
                        >
                          <Post
                            class="text-white fill-white bg-gray-900/20 rounded-full"
                          />
                        </span>
                      </div> </span
                    ><a
                      class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100"
                      href="/single-video/this-is-single-slug"
                    ></a>
                  </div>
                </div>
              </div>
              <a
                class="absolute inset-0"
                href="/single-video/this-is-single-slug"
              ></a
              ><span class="absolute top-3 inset-x-3 z-10">
                <div class="nc-CategoryBadgeList flex flex-wrap space-x-2">
                  <a
                    class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800"
                    href="/archive/the-demo-archive-slug"
                    >خبر</a
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
                        alt="Falconar Agnes"
                        class="absolute inset-0 w-full h-full object-cover"
                        src="@/assets/images/4.jpg"
                      /><span class="wil-avatar__name">F</span>
                    </div>
                    <span
                      class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
                      >محبوب حسین زاده</span
                    > </a
                  ><span
                    class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
                    >·</span
                  ><span
                    class="text-neutral-500 dark:text-neutral-400 font-normal font-fd"
                    >21 اردیبهشت 1403</span
                  >
                </div>
                <h3
                  class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100"
                >
                  <span
                    class="line-clamp-2"
                    title="How AI and Teams are benefitting the littlest of patients "
                    >باهوش ترین سگ ایرانی
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
                      <Like />
                      <span
                        class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                        >34</span
                      ></button
                    ><a
                      class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                      title="Comments"
                      href="/single/demo-slug#comments"
                    >
                      <Comment />
                      <span
                        class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                        >110</span
                      >
                    </a>
                  </div>
                  <div
                    class="flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative"
                  >
                    <button
                      class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                      title="Save to reading list"
                    >
                      <Bookmark />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <div
              class="relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 h-full"
            >
              <div
                class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-5 aspect-h-3"
              >
                <div>
                  <div class="nc-PostFeaturedMedia relative w-full h-full">
                    <img
                      alt="featured"
                      class="object-cover"
                      src="@/assets/images/7.jpg"
                    /><span
                      class="absolute inset-0 flex items-center justify-center"
                    >
                      <div
                        class="hover:scale-105 transform cursor-pointer transition-transform"
                        data-nc-id="PostTypeFeaturedIcon"
                      >
                        <span
                          class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11"
                        >
                          <Post
                            class="text-white fill-white bg-gray-900/20 rounded-full"
                          />
                        </span>
                      </div> </span
                    ><a
                      class="block absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100"
                      href="/single-video/this-is-single-slug"
                    ></a>
                  </div>
                </div>
              </div>
              <a
                class="absolute inset-0"
                href="/single-video/this-is-single-slug"
              ></a
              ><span class="absolute top-3 inset-x-3 z-10">
                <div class="nc-CategoryBadgeList flex flex-wrap space-x-2">
                  <a
                    class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800"
                    href="/archive/the-demo-archive-slug"
                    >خبر</a
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
                        alt="Falconar Agnes"
                        class="absolute inset-0 w-full h-full object-cover"
                        src="@/assets/images/4.jpg"
                      /><span class="wil-avatar__name">F</span>
                    </div>
                    <span
                      class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
                      >محبوب حسین زاده</span
                    > </a
                  ><span
                    class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
                    >·</span
                  ><span
                    class="text-neutral-500 dark:text-neutral-400 font-normal font-fd"
                    >21 اردیبهشت 1403</span
                  >
                </div>
                <h3
                  class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100"
                >
                  <span
                    class="line-clamp-2"
                    title="How AI and Teams are benefitting the littlest of patients "
                    >باهوش ترین سگ ایرانی
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
                      <Like />
                      <span
                        class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                        >34</span
                      ></button
                    ><a
                      class="relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                      title="Comments"
                      href="/single/demo-slug#comments"
                    >
                      <Comment />
                      <span
                        class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd"
                        >110</span
                      >
                    </a>
                  </div>
                  <div
                    class="flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative"
                  >
                    <button
                      class="relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                      title="Save to reading list"
                    >
                      <Bookmark />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div
          class="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center font-fd px-4"
        >
          <nav
            class="inline-flex space-x-1 rtl:space-x-reverse text-base font-medium font-fd"
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
            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-orange-500 hover:bg-orange-600 text-orange-50 text-sm sm:text-base font-medium py-2 px-4 sm:py-2 sm:px-6"
          >
            بیشتر
          </button>
        </div>
      </main>

   
      

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
</template>

<script setup>
import { ref } from "vue";
import NewsIcon from "@/components/icons/NewsIcon.vue";
import Post from "@/components/icons/Post.vue";
import Bookmark from "@/components/icons/Bookmark.vue";
import Like from "@/components/icons/Heart.vue";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon.vue";

import Comment from "@/components/icons/Comment.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import CopyIcon from "@/components/icons/Copy.vue";
import Verify from "@/components/icons/Verify.vue";
import WebIcon from "@/components/icons/WebIcon.vue";

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
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
</script>
