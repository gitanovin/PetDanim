<template>
  <!-- https://demo.tmrwstudio.net/atlas/default/ -->
  <!-- https://ncmaz-react.vercel.app/ -->
  <div class="top-header-ads hidden">
    <a
      href=""
      rel="noopener noreferrer"
      target="_blank"
      class="block relative bg-primary hover:bg-primary/90 transition-[background] backdrop-blur z-50 app-banner"
      ><div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-2">
        <div class="flex items-center justify-between gap-2">
          <div class="lg:flex-1 hidden lg:flex items-center"></div>
          <div class="text-sm font-medium text-white dark:text-gray-900">
            <div class="flex items-center gap-2">
              <span class="w-5 h-5 flex-shrink-0 pointer-events-none">
                <Events class="fill-white dark:fill-gray-900" /> </span
              ><span class="sm:hidden"
                >قرار حمایت از حیوانات بی سرپرست شمیرانات</span
              ><span class="hidden sm:inline-block"
                >قرار حمایت از حیوانات بی سرپرست شمیرانات</span
              ><button
                type="button"
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-xs gap-x-1 px-2 py-1 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center rounded-full text-center justify-center"
              >
                <span class="">مشاهده</span
                ><span class="flex-shrink-0 h-4 w-4" aria-hidden="true">
                  <LeftArrow />
                </span>
              </button>
            </div>
          </div>
          <div class="flex items-center justify-end lg:flex-1">
            <button class="p-1.5 rounded-md inline-flex hover:bg-primary/90">
              <span class="w-5 h-5">
                <Times class="fill-white dark:fill-gray-900" />
              </span>
            </button>
          </div>
        </div></div
    ></a>
  </div>

  <header
    class="bg-background/75 backdrop-blur border-b  dark:border-gray-800 -mb-px sticky top-0 z-50 lg:mb-0  border-gray-100"
  >
    <div
      class="mx-auto px-4 lg:px-0 max-w-7xl flex items-center justify-between gap-3 h-[4rem]"
    >
      <div class="lg:flex-1 flex items-center gap-1.5">
        <div class="relative inline-flex text-left rtl:text-right">
          <div class="inline-flex w-full">
            <a href="/" class="flex gap-2 items-end" aria-current="page">
              <Logo />
            </a>
          </div>
        </div>
      </div>

      <div class="items-center gap-x-4 hidden lg:flex">
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75"
            >
              حیوانات
              <ChevronDownIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
              class="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    سگ
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    گربه
                  </button>
                </MenuItem>
              </div>
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    پرنده
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    خزنده
                  </button>
                </MenuItem>
              </div>

              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    دیگر
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>

        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75"
            >
              سبک زندگی
              <ChevronDownIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
              class="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    سگ
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    گربه
                  </button>
                </MenuItem>
              </div>
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    پرنده
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    خزنده
                  </button>
                </MenuItem>
              </div>

              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    دیگر
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>

        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75"
            >
              سفر و گردشگری
              <ChevronDownIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
              class="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    سگ
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    گربه
                  </button>
                </MenuItem>
              </div>
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    پرنده
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    خزنده
                  </button>
                </MenuItem>
              </div>

              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    دیگر
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>

        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75"
            >
              اخبار
              <ChevronDownIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
              class="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    سگ
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    گربه
                  </button>
                </MenuItem>
              </div>
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    پرنده
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    خزنده
                  </button>
                </MenuItem>
              </div>

              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    دیگر
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>

        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring-0 focus-visible:ring-white/75"
            >
              مسئولیت اجتماعی
              <ChevronDownIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
              class="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black/5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    سگ
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    گربه
                  </button>
                </MenuItem>
              </div>
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    پرنده
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    خزنده
                  </button>
                </MenuItem>
              </div>

              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-50 text-gray-800' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    دیگر
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>

      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <div class="relative inline-flex">
          <button
            type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          >
            <span class="flex-shrink-0 h-5 w-5" aria-hidden="true">
              <Search />
            </span>
          </button>
        </div>
        <div class="relative inline-flex">
          <button
            type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
            aria-label="Switch to dark mode"
          >
            <span class="flex-shrink-0 h-5 w-5" aria-hidden="true">
              <Sun />
            </span>
          </button>
        </div>

        <div class="relative inline-flex">
          <button
            type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 lg:inline-flex items-center border border-gray-100 px-4 md:hidden"
            aria-label="Switch to dark mode"
          >
            <div class="current-date whitespace-nowrap leading-normal">
              <div class="cur-date flex items-center">
                <span class="d text-[24px] m-0 ml-[5px]">16</span
                ><span
                  class="my flex flex-col font-normal text-[13px] leading-[1.1]"
                  ><span class="m">اردیبهشت</span
                  ><span class="y pt-0.5">1403</span></span
                >
              </div>
            </div>
          </button>
        </div>

        <button
          type="button"
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden"
          aria-label="Open Menu"
        >
          <span class="flex-shrink-0 h-5 w-5" aria-hidden="true">
            <MenuList />
          </span>
        </button>
      </div>
    </div>
  </header>

  <div
    class="mx-auto px-4 lg:px-0 max-w-7xl"
  >
        <div class="block-tickerwrap bg-gray-100 w-full max-w-lg p-2 rounded-b-md">
          <div class="th90-ticker block-newsticker">
            <div class="posts">
              <div class="itemWrap active" style="">
                <div class="post-item flex items-center gap-4">
                  <div class="entry-cats">
                    <a
                      class="text-sm text-orange-500"
                      href=""
                      >سگ ها</a
                    >
                  </div>
                  <div class="ticker-thumb thumbnail-circle">
                    <div class="entry-thumbnail">
                      <a
                        class="src-1_1"
                        href=""
                        title="Winter Dressing Tips When It’s Really Cold Out"
                        ><div class="thumb-container thumb-100">
                          <img
                            src="@/assets/images/1.jpg"
                            class="w-[20px] h-[20px] rounded-full"
                            alt=""
                          /></div
                      ></a>
                    </div>
                  </div>
                  <div class="entry-header">
                    <div class="entry-title head6">
                      <a
                        class="title-text"
                        href="https://demo.tmrwstudio.net/atlas/default/2023/09/06/winter-dressing-tips-when-its-really-cold-out/"
                        >اضطراب تنهایی در سگ ها و گربه ها</a
                      >
                    </div>
                  </div>
                </div>
              </div>
         
            </div>
          </div>
        </div>
  </div>

  <main class="mx-4">
    <section>
  <div class="top-slider">

  </div>
    </section>

    <TopCategories />

    <section class="max-w-7xl pt-6 mb-20 mx-auto">
      <header class="flex items-end">
        <h2 class="mb-6 text-lg dark:text-white">محبوبترین برچسب ها</h2>
      </header>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7">
        <div class="tag-648cd9b8a966d51bdd8d9642">
          <div class="h-36 w-full relative group">
            <a
              href="/tag/apps/"
              class="absolute inset-0 z-10 block w-full h-full"
            ></a>
            <div class="absolute z-20 flex items-center mb-3 bottom-1 left-4">
              <a
                href="/tag/apps/"
                class="bg-white px-2.5 py-[5px] rounded-full text-xs font-bold mr-2"
              >
                <span
                  class="inline-block rounded-full w-[10px] h-[10px] ml-1"
                  style="background: #6b5be1"
                ></span>
                <span class="align-[1px]">سگ</span>
              </a>
            </div>
            <img
              class="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
              srcset="
                https://images.unsplash.com/photo-1596558450268-9c27524ba856?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI1fHxhcHBzfGVufDB8fHx8MTY4Njk1MjQwNnww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=300   300w,
                https://images.unsplash.com/photo-1596558450268-9c27524ba856?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI1fHxhcHBzfGVufDB8fHx8MTY4Njk1MjQwNnww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=600   600w,
                https://images.unsplash.com/photo-1596558450268-9c27524ba856?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI1fHxhcHBzfGVufDB8fHx8MTY4Njk1MjQwNnww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1000 1000w,
                https://images.unsplash.com/photo-1596558450268-9c27524ba856?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI1fHxhcHBzfGVufDB8fHx8MTY4Njk1MjQwNnww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000 2000w
              "
              sizes="(max-width: 1000px) 400px, 700px"
              src="https://images.unsplash.com/photo-1596558450268-9c27524ba856?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI1fHxhcHBzfGVufDB8fHx8MTY4Njk1MjQwNnww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=600"
              alt=""
            />
          </div>
        </div>
        <div class="tag-648d2063a966d51bdd8d96b2">
          <div class="h-36 w-full relative group">
            <a
              href="/tag/ai/"
              class="absolute inset-0 z-10 block w-full h-full"
            ></a>
            <div class="absolute z-20 flex items-center mb-3 bottom-1 left-4">
              <a
                href="/tag/ai/"
                class="bg-white px-2.5 py-[5px] rounded-full text-xs font-bold mr-2"
              >
                <span
                  class="inline-block rounded-full w-[10px] h-[10px] ml-1"
                  style="background: #cfb220"
                ></span>
                <span class="align-[1px]">گربه</span>
              </a>
            </div>
            <img
              class="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
              srcset="
                https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDU1fHxhaXxlbnwwfHx8fDE2ODY5Mzc4MTJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=300   300w,
                https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDU1fHxhaXxlbnwwfHx8fDE2ODY5Mzc4MTJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=600   600w,
                https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDU1fHxhaXxlbnwwfHx8fDE2ODY5Mzc4MTJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1000 1000w,
                https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDU1fHxhaXxlbnwwfHx8fDE2ODY5Mzc4MTJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000 2000w
              "
              sizes="(max-width: 1000px) 400px, 700px"
              src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDU1fHxhaXxlbnwwfHx8fDE2ODY5Mzc4MTJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=600"
              alt=""
            />
          </div>
        </div>
        <div class="tag-648cdf49a966d51bdd8d9697">
          <div class="h-36 w-full relative group">
            <a
              href="/tag/vr/"
              class="absolute inset-0 z-10 block w-full h-full"
            ></a>
            <div class="absolute z-20 flex items-center mb-3 bottom-1 left-4">
              <a
                href="/tag/vr/"
                class="bg-white px-2.5 py-[5px] rounded-full text-xs font-bold mr-2"
              >
                <span
                  class="inline-block rounded-full w-[10px] h-[10px] ml-1"
                  style="background: #c83ca3"
                ></span>
                <span class="align-[1px]">حیوانات</span>
              </a>
            </div>
            <img
              class="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
              srcset="
                https://images.unsplash.com/photo-1593508512255-86ab42a8e620?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDExfHx2cnxlbnwwfHx8fDE2ODY5NTM3MTl8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=300   300w,
                https://images.unsplash.com/photo-1593508512255-86ab42a8e620?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDExfHx2cnxlbnwwfHx8fDE2ODY5NTM3MTl8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=600   600w,
                https://images.unsplash.com/photo-1593508512255-86ab42a8e620?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDExfHx2cnxlbnwwfHx8fDE2ODY5NTM3MTl8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1000 1000w,
                https://images.unsplash.com/photo-1593508512255-86ab42a8e620?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDExfHx2cnxlbnwwfHx8fDE2ODY5NTM3MTl8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000 2000w
              "
              sizes="(max-width: 1000px) 400px, 700px"
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDExfHx2cnxlbnwwfHx8fDE2ODY5NTM3MTl8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=600"
              alt=""
            />
          </div>
        </div>
        <div class="tag-648e9953a966d51bdd8d96c2">
          <div class="h-36 w-full relative group">
            <a
              href="/tag/apple/"
              class="absolute inset-0 z-10 block w-full h-full"
            ></a>
            <div class="absolute z-20 flex items-center mb-3 bottom-1 left-4">
              <a
                href="/tag/apple/"
                class="bg-white px-2.5 py-[5px] rounded-full text-xs font-bold mr-2"
              >
                <span
                  class="inline-block rounded-full w-[10px] h-[10px] ml-1"
                  style="background: #839ed2"
                ></span>
                <span class="align-[1px]">حیوانات خانگی</span>
              </a>
            </div>
            <img
              class="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
              srcset="
                https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE3fHxhcHBsZXxlbnwwfHx8fDE2ODcwNjcyMzZ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=300   300w,
                https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE3fHxhcHBsZXxlbnwwfHx8fDE2ODcwNjcyMzZ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=600   600w,
                https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE3fHxhcHBsZXxlbnwwfHx8fDE2ODcwNjcyMzZ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1000 1000w,
                https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE3fHxhcHBsZXxlbnwwfHx8fDE2ODcwNjcyMzZ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000 2000w
              "
              sizes="(max-width: 1000px) 400px, 700px"
              src="https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE3fHxhcHBsZXxlbnwwfHx8fDE2ODcwNjcyMzZ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=600"
              alt=""
            />
          </div>
        </div>
        <div class="tag-648e9953a966d51bdd8d96c3">
          <div class="h-36 w-full relative group">
            <a
              href="/tag/google/"
              class="absolute inset-0 z-10 block w-full h-full"
            ></a>
            <div class="absolute z-20 flex items-center mb-3 bottom-1 left-4">
              <a
                href="/tag/google/"
                class="bg-white px-2.5 py-[5px] rounded-full text-xs font-bold mr-2"
              >
                <span
                  class="inline-block rounded-full w-[10px] h-[10px] ml-1"
                  style="background: #58df68"
                ></span>
                <span class="align-[1px]">خزندگان</span>
              </a>
            </div>
            <img
              class="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
              srcset="
                https://images.unsplash.com/photo-1633632799503-c8cff57c17f3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEzfHxnb29nbGV8ZW58MHx8fHwxNjg3MDY3MjU2fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=300   300w,
                https://images.unsplash.com/photo-1633632799503-c8cff57c17f3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEzfHxnb29nbGV8ZW58MHx8fHwxNjg3MDY3MjU2fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=600   600w,
                https://images.unsplash.com/photo-1633632799503-c8cff57c17f3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEzfHxnb29nbGV8ZW58MHx8fHwxNjg3MDY3MjU2fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1000 1000w,
                https://images.unsplash.com/photo-1633632799503-c8cff57c17f3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEzfHxnb29nbGV8ZW58MHx8fHwxNjg3MDY3MjU2fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000 2000w
              "
              sizes="(max-width: 1000px) 400px, 700px"
              src="https://images.unsplash.com/photo-1633632799503-c8cff57c17f3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEzfHxnb29nbGV8ZW58MHx8fHwxNjg3MDY3MjU2fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=600"
              alt=""
            />
          </div>
        </div>
        <div class="tag-648cde21a966d51bdd8d9679">
          <div class="h-36 w-full relative group">
            <a
              href="/tag/fintech/"
              class="absolute inset-0 z-10 block w-full h-full"
            ></a>
            <div class="absolute z-20 flex items-center mb-3 bottom-1 left-4">
              <a
                href="/tag/fintech/"
                class="bg-white px-2.5 py-[5px] rounded-full text-xs font-bold"
              >
                <span
                  class="inline-block rounded-full w-[10px] h-[10px] ml-1"
                  style="background: #4cb337"
                ></span>
                <span class="align-[1px]">پرندگان</span>
              </a>
            </div>
            <img
              class="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
              srcset="
                https://images.unsplash.com/photo-1554260570-e9689a3418b8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDl8fGZpbnRlY2h8ZW58MHx8fHwxNjg2OTUzNTI5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=300   300w,
                https://images.unsplash.com/photo-1554260570-e9689a3418b8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDl8fGZpbnRlY2h8ZW58MHx8fHwxNjg2OTUzNTI5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=600   600w,
                https://images.unsplash.com/photo-1554260570-e9689a3418b8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDl8fGZpbnRlY2h8ZW58MHx8fHwxNjg2OTUzNTI5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1000 1000w,
                https://images.unsplash.com/photo-1554260570-e9689a3418b8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDl8fGZpbnRlY2h8ZW58MHx8fHwxNjg2OTUzNTI5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000 2000w
              "
              sizes="(max-width: 1000px) 400px, 700px"
              src="https://images.unsplash.com/photo-1554260570-e9689a3418b8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDl8fGZpbnRlY2h8ZW58MHx8fHwxNjg2OTUzNTI5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=600"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="relative">
    <div class="border-t border-gray-200 dark:border-gray-800">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-12">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div
            class="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-2"
          >
            <div>
              <h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">
                Community
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href="https://nuxters.nuxt.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    >Nuxters
                    <span
                      class="i-ph-arrow-up-right w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"
                    ></span
                  ></a>
                </li>
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href="https://github.com/nuxt"
                    rel="noopener noreferrer"
                    target="_blank"
                    >Nuxt on GitHub
                    <span
                      class="i-ph-arrow-up-right w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"
                    ></span
                  ></a>
                </li>
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href="/team"
                    >Team
                  </a>
                </li>
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href="/design-kit"
                    >Design Kit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">
                Enterprise
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href="/enterprise/support"
                    >Support
                  </a>
                </li>
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href="/enterprise/agencies"
                    >Agencies
                  </a>
                </li>
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href="/enterprise/jobs"
                    >Jobs
                  </a>
                </li>
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href="/enterprise/sponsors"
                    >Sponsors
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">
                سرویس های پتومن
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href=""
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    حامیان پت
                    <span
                      class="w-3 h-3 absolute top-0.5 -left-3.5 text-gray-400 dark:text-gray-500"
                    >
                      <ArrowUpRight
                        class="!fill:gray-300 dark:fill-gray-50 stroke-slate-100 dark:stroke-slate-100"
                      /> </span
                  ></a>
                </li>
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href=""
                    rel="noopener noreferrer"
                    target="_blank"
                    >پت مارکت
                    <span
                      class="w-3 h-3 absolute top-0.5 -left-3.5 text-gray-400 dark:text-gray-500"
                    >
                      <ArrowUpRight
                        class="!fill:gray-300 dark:fill-gray-50 stroke-slate-100 dark:stroke-slate-100" /></span
                  ></a>
                </li>
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href=""
                    rel="noopener noreferrer"
                    target="_blank"
                    >دامپزشکی
                    <span
                      class="i-ph-arrow-up-right w-3 h-3 absolute top-0.5 -left-3.5 text-gray-400 dark:text-gray-500"
                    >
                      <ArrowUpRight
                        class="!fill:gray-300 dark:fill-gray-50 stroke-slate-100 dark:stroke-slate-100" /></span
                  ></a>
                </li>
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href=""
                    rel="noopener noreferrer"
                    target="_blank"
                    >پت فیلم
                    <span
                      class="w-3 h-3 absolute top-0.5 -left-3.5 text-gray-400 dark:text-gray-500"
                    >
                      <ArrowUpRight
                        class="!fill:gray-300 dark:fill-gray-50 stroke-slate-100 dark:stroke-slate-100" /></span
                  ></a>
                </li>

                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href=""
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span
                      class="w-3 h-3 absolute top-0.5 -left-3.5 text-gray-400 dark:text-gray-500"
                    >
                      <ArrowUpRight
                        class="!fill:gray-300 dark:fill-gray-50 stroke-slate-100 dark:stroke-slate-100"
                    /></span>

                    پت چت
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-10 xl:mt-0">
            <form>
              <div class="">
                <div class="">
                  <div
                    class="flex content-center items-center justify-between text-base"
                  >
                    <label
                      for="nVZXn7tVmHS-9"
                      class="block text-gray-700 dark:text-gray-200 font-semibold"
                      >عضویت در خبرنامه پتومن</label
                    >
                  </div>
                  <p class="text-gray-500 dark:text-gray-400 text-base">
                    زودتر از همه از جدیدترین مقالات باخبر شوید
                  </p>
                </div>
                <div class="relative mt-3">
                  <div class="relative max-w-sm">
                    <input
                      id="nVZXn7tVmHS-9"
                      name="email"
                      value=""
                      type="email"
                      required=""
                      placeholder="you@domain.com"
                      class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-base px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 pe-12"
                      autocomplete="off"
                    /><span
                      class="absolute inset-y-0 end-0 flex items-center px-3.5"
                      ><button
                        type="submit"
                        class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-orange-500 bg-orange-500 hover:bg-orange-800 disabled:bg-gray-600 dark:bg-white dark:hover:bg-orange-100 dark:disabled:bg-orange-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                      >
                        <span class="">عضویت</span>
                      </button></span
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-200 dark:border-gray-800">
      <div
        class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3 !py-6"
      >
        <div
          class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"
        >
          <a
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
            aria-label="Nuxt on X"
            href="https://instagram.com/petoman_team"
            rel="noopener noreferrer"
            target="_blank"
            ><span class="flex-shrink-0 h-5 w-5" aria-hidden="true">
              <Instagram /> </span
          ></a>
        </div>
        <div
          class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center"
        ></div>
        <div
          class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1"
        >
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            ©کپی رایت تمامی حقوق مادی و معنوی این سرویس متعلق به پتومن است.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LeftArrow from "@/components/icons/LeftArrow.vue";
import Events from "@/components/icons/Events.vue";
import Times from "@/components/icons/Times.vue";
import Sun from "@/components/icons/Sun.vue";
import Search from "@/components/icons/Search.vue";
import Logo from "@/components/icons/Logo.vue";
import ArrowUpRight from "@/components/icons/ArrowUpRight.vue";

import MenuList from "@/components/icons/MenuList.vue";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import Instagram from "@/components/icons/social/instagram.vue";

import TopCategories from "@/components/TopCategories/categories.vue";
</script>
