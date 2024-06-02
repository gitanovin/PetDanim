<template>
  <div class="nc-PageAuthor">
    <div class="w-full">
      <div class="relative w-full h-40 md:h-60 2xl:h-72">
        <div class="absolute inset-0">
            <div class="bg-[url('@/assets/images/7.jpg')] h-full w-full bg-no-repeat  bg-cover"></div>

        </div>
      </div>
      <div class="w-full mx-auto w-full xl:max-w-7xl -mt-10 lg:-mt-16">
        <div
          class="relative bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-lg  flex flex-col md:flex-row border border-gray-100"
        >
          <div class="w-32 lg:w-40 flex-shrink-0 mt-12 sm:mt-0">
            <div
              class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold rounded-lg w-20 h-20 text-xl lg:text-2xl lg:w-36 lg:h-36 ring-4 ring-white dark:ring-0  z-0"
            >
              <img
                alt="Avatar"
                class="object-cover w-full h-full absolute inset-0"
                src="@/assets/images/6.jpg"
              />
            </div>
          </div>
          <div class="pt-5 md:pt-1 lg:ml-6 xl:ml-12 flex-grow">
            <div class="max-w-screen-sm space-y-3.5">
              <h2
                class="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold"
              >
                <span>محبوب حسین زاده</span
                ><span class="mr-2"
                  >
                 <Verify/>
            </span>
              </h2>
              <span class="block text-sm text-neutral-500 dark:text-neutral-400 text-justify"
                >محبوب حسین زاده (زاده ۲۸ اردیبهشت ۱۳۶۹ در خوی) نوازنده، توسعه دهنده ، سفیر صلح و دوستی ، و طراح ایرانی است. وی کارشناس حقوق و کارشناس ارشد کسب و کار الکترونیک از دانشگاه بین المللی کیش است.</span
              ><a
                href="#"
                class="flex items-center text-xs font-medium space-x-2.5 rtl:space-x-reverse cursor-pointer text-neutral-500 dark:text-neutral-400 truncate"
                >
                <WebIcon/>
                <span class="text-neutral-700 dark:text-neutral-300 truncate"
                  >https://petoman.com/mahboob</span
                ></a
              >
              <nav
                class="SocialsList flex gap-x-3 text-2xl text-neutral-700 dark:text-neutral-300 pt-1 "
              >



                                <a
                                  :class="[
                                    active
                                      ? 'bg-gray-50 text-gray-700'
                                      : ' fill-gray-500',
                                    'items-center rounded-md px-2 py-2 text-sm',
                                  ]"
                                >
                                  <FacebookIcon
                                    :active="active"
                                    class="h-5 w-5 fill-gray-800"
                                    aria-hidden="true"
                                  />
                                  
            </a>
                             
                         
                                <a
                                  :class="[
                                    active
                                      ? 'bg-gray-50 text-gray-700'
                                      : 'text-gray-500',
                                    'items-center rounded-md px-2 py-2 text-sm',
                                  ]"
                                >
                                  <TwitterIcon
                                    :active="active"
                                    class="h-5 w-5 fill-gray-800"
                                    aria-hidden="true"
                                  />
                                  
        </a>
                      

                     
                                <a
                                  :class="[
                                    active
                                      ? 'bg-gray-50 text-gray-700'
                                      : ' fill-gray-500',
                                    'items-center rounded-md px-2 py-2 text-sm',
                                  ]"
                                >
                                  <LinkedinIcon
                                    :active="active"
                                    class="h-5 w-5 fill-gray-800"
                                    aria-hidden="true"
                                  />
                              
    </a>
                          
                     
                                <a
                                  :class="[
                                    active
                                      ? 'bg-gray-50 text-gray-700'
                                      : ' fill-gray-500',
                                    'items-center rounded-md px-2 py-2 text-sm',
                                  ]"
                                >
                                  <InstagramIcon
                                    :active="active"
                                    class="h-5 w-5 fill-gray-800"
                                    aria-hidden="true"
                                  />
                                
</a>
                           

              </nav>
            </div>
          </div>
          <div
            class="absolute md:static start-5 end-5 top-4 sm:start-auto sm:top-5 sm:end-5 flex justify-end"
          >
            <button
              class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-orange-500 hover:bg-porange-600 text-orange-50 text-sm md:text-base font-medium px-4 py-1 md:py-2.5 h-8 md:!h-10 sm:px-6 lg:px-8"
            >
             <PlusIcon/>
              <span class="ms-2">دنبال کردن</span>
            </button>
            <div class="mx-2">
              <div
                class="relative inline-block text-left"
              >
                  <Menu as="div" class="relative inline-block text-left">
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
                                      : ' fill-gray-500',
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
                                      : 'text-gray-500',
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
                                      : ' fill-gray-500',
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
                                      : ' fill-gray-500',
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
            </div>
            <div>
              <div
                class="relative inline-block text-left"
              >
           <Menu as="div" class="relative inline-block text-left">
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
                                        : ' fill-gray-500',
                                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]"
                                  >
                                    <CopyIcon
                                      :active="active"
                                      class="ml-2 h-5 w-5 fill-gray-800"
                                      aria-hidden="true"
                                    />
                                    کپی لینک 
                                  </button>
                                </MenuItem>

                                <MenuItem v-slot="{ active }">
                                  <button
                                    :class="[
                                      active
                                        ? 'bg-gray-50 text-gray-700'
                                        : ' fill-gray-500',
                                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]"
                                  >
                                    <EyeSlashIcon
                                      :active="active"
                                      class="ml-2 h-5 w-5 fill-gray-800"
                                      aria-hidden="true"
                                    />
                                   مخفی کردن این نویسنده
                                  </button>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                  <button
                                    :class="[
                                      active
                                        ? 'bg-gray-50 text-gray-700'
                                        : ' fill-gray-500',
                                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]"
                                  >
                                    <ReportIcon
                                      :active="active"
                                      class="ml-2 h-5 w-5 fill-gray-800"
                                      aria-hidden="true"
                                    />
                                    گزارش این نویسنده
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
    <div class="w-full mx-auto w-full xl:max-w-7xl  py-6 lg:pb-28 lg:pt-10 space-y-16 lg:space-y-28">
      <main>
        <div
          class="flex flex-col sm:items-center sm:justify-between sm:flex-row bg-white p-3 rounded-lg"
        >
          <nav class="nc-Nav" data-nc-id="Nav">
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
                  علاقه مندی ها
                </button>
              </li>
              <li class="nc-NavItem relative flex-shrink-0">
                <button
                  class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  ذخیره شده ها
                </button>
              </li>
            </ul>
          </nav>
          <div
            class="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"
          ></div>
          <div class="flex justify-end">
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
        <div
          class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10  p-4 rounded-lg"
        >
         <article>
              <div class="relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 h-full">
                <div
                  class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-5 aspect-h-3">
                  <div>
                    <div class="nc-PostFeaturedMedia relative w-full h-full">
                      <img alt="featured" class="object-cover" src="@/assets/images/7.jpg" /><span
                        class="absolute inset-0 flex items-center justify-center">
                        <div class="hover:scale-105 transform cursor-pointer transition-transform"
                          data-nc-id="PostTypeFeaturedIcon">
                          <span
                            class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11">
                            <Post class="text-white fill-white bg-gray-900/20 rounded-full" />
                          </span>
                        </div>
                      </span><a class="block absolute inset-0" href="/single-video/this-is-single-slug"></a>
                    </div>
                  </div>
                </div>
                <a class="absolute inset-0" href="/single-video/this-is-single-slug"></a><span
                  class="absolute top-3 inset-x-3 z-10">
                  <div class="nc-CategoryBadgeList flex flex-wrap space-x-2">
                    <a class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800"
                      href="/archive/the-demo-archive-slug">خبر</a>
                  </div>
                </span>
                <div class="p-4 flex flex-col space-y-3">
                  <div
                    class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
                    <a class="relative flex items-center space-x-2 rtl:space-x-reverse"
                      href="/author/the-demo-author-slug">
                      <div
                        class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                        <img alt="Falconar Agnes" class="absolute inset-0 w-full h-full object-cover"
                          src="@/assets/images/4.jpg" /><span class="wil-avatar__name">F</span>
                      </div>
                      <span
                        class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">محبوب
                        حسین زاده</span>
                    </a><span class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                      class="text-neutral-500 dark:text-neutral-400 font-normal font-fd">21 اردیبهشت 1403</span>
                  </div>
                  <h3 class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    <span class="line-clamp-2" title="How AI and Teams are benefitting the littlest of patients ">باهوش
                      ترین سگ ایرانی
                    </span>
                  </h3>
                  <div class="flex items-end justify-between mt-auto">
                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative">
                      <button
                        class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                        title="Liked">
                        <Like />
                        <span class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd">34</span>
                      </button><a
                        class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                        title="Comments" href="/single/demo-slug#comments">
                        <Comment />
                        <span class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd">110</span>
                      </a>
                    </div>
                    <div
                      class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
                      <button
                        class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                        title="Save to reading list">
                        <Bookmark />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>

               <article>
              <div class="relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 h-full">
                <div
                  class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-5 aspect-h-3">
                  <div>
                    <div class="nc-PostFeaturedMedia relative w-full h-full">
                      <img alt="featured" class="object-cover" src="@/assets/images/7.jpg" /><span
                        class="absolute inset-0 flex items-center justify-center">
                        <div class="hover:scale-105 transform cursor-pointer transition-transform"
                          data-nc-id="PostTypeFeaturedIcon">
                          <span
                            class="bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white w-11 h-11">
                            <Post class="text-white fill-white bg-gray-900/20 rounded-full" />
                          </span>
                        </div>
                      </span><a class="block absolute inset-0" href="/single-video/this-is-single-slug"></a>
                    </div>
                  </div>
                </div>
                <a class="absolute inset-0" href="/single-video/this-is-single-slug"></a><span
                  class="absolute top-3 inset-x-3 z-10">
                  <div class="nc-CategoryBadgeList flex flex-wrap space-x-2">
                    <a class="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800"
                      href="/archive/the-demo-archive-slug">خبر</a>
                  </div>
                </span>
                <div class="p-4 flex flex-col space-y-3">
                  <div
                    class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
                    <a class="relative flex items-center space-x-2 rtl:space-x-reverse"
                      href="/author/the-demo-author-slug">
                      <div
                        class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                        <img alt="Falconar Agnes" class="absolute inset-0 w-full h-full object-cover"
                          src="@/assets/images/4.jpg" /><span class="wil-avatar__name">F</span>
                      </div>
                      <span
                        class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">محبوب
                        حسین زاده</span>
                    </a><span class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                      class="text-neutral-500 dark:text-neutral-400 font-normal font-fd">21 اردیبهشت 1403</span>
                  </div>
                  <h3 class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    <span class="line-clamp-2" title="How AI and Teams are benefitting the littlest of patients ">باهوش
                      ترین سگ ایرانی
                    </span>
                  </h3>
                  <div class="flex items-end justify-between mt-auto">
                    <div class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative">
                      <button
                        class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                        title="Liked">
                        <Like />
                        <span class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd">34</span>
                      </button><a
                        class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs"
                        title="Comments" href="/single/demo-slug#comments">
                        <Comment />
                        <span class="ml-1 text-neutral-900 dark:text-neutral-200 font-fd">110</span>
                      </a>
                    </div>
                    <div
                      class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
                      <button
                        class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                        title="Save to reading list">
                        <Bookmark />
                      </button>
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
            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-orange-500 hover:bg-orange-600 text-orange-50 text-sm sm:text-base font-medium py-2 px-4 sm:py-2 sm:px-6"
          >
            بیشتر
          </button>
        </div>
      </main>

      <!-- Related--------------- -->
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