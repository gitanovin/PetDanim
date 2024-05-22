<template>
  <section>
    <div class="mx-auto max-w-7xl pt-8 lg:pt-16">
      <header class="container rounded-xl">
        <div class="max-w-screen-md mx-auto">
          <div class="nc-SingleHeader">
            <div class="space-y-5">
              <div class="flex flex-wrap space-x-2 gap-2">
                <a
                  class="transition-colors hover:text-gray-700 duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs !px-3 text-red-800 bg-red-100 hover:bg-red-800"
                  href="/archive/the-demo-archive-slug"
                  >حیوانات خانگی</a
                >
                <a
                  class="transition-colors hover:text-gray-700 duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs !px-3 text-red-800 bg-red-100 hover:bg-red-800"
                  href="/archive/the-demo-archive-slug"
                  >سگ ها</a
                >
              </div>
              <h1
                class="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100 max-w-4xl"
                title="Trending web &amp; landing page designs in 2023"
              >
                برترین نژادهای سگ در سال 2024
              </h1>
              <span
                class="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1"
                >شیائومی در سکوت خبری از گوشی جدید ردمی نوت 13R رونمایی کرد. این
                گوشی به‌جز ارتقاء دوربین‌ها تفاوت زیادی با ردمی نوت 12R
                ندارد.</span
              >
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
                    ><div
                      class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full shadow-inner h-10 w-10 sm:h-11 sm:w-11 text-xl ring-1 ring-white dark:ring-neutral-900"
                    >
                      <img
                        alt="Foulcher Nathanil"
                        class="absolute inset-0 w-full h-full object-cover"
                        src="@/assets/images/3.jpg"
                      /><span class="wil-avatar__name">F</span>
                    </div></a
                  >
                  <div class="ms-3">
                    <div class="flex items-center">
                      <a
                        class="block font-semibold"
                        href="/author/the-demo-author-slug"
                        >محبوب حسین زاده</a
                      >
                    </div>
                    <div class="text-xs mt-[6px]">
                      <span class="text-neutral-700 dark:text-neutral-300"
                        >28 اردیبهشت 1403</span
                      ><span class="mx-2 font-semibold">·</span
                      ><span class="text-neutral-700 dark:text-neutral-300"
                        >مطالعه 2 دقیقه</span
                      >
                    </div>
                  </div>
                </div>
                <div class="nc-SingleMetaAction2">
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
                        <like /><span
                          class="ml-1 text-neutral-900 dark:text-neutral-200"
                          >34</span
                        ></button
                      ><a
                        href="#comments"
                        class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-4 h-9 text-sm"
                        title="Comments"
                        ><Comment /><span
                          class="ml-1 text-neutral-900 dark:text-neutral-200"
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
                    <div>
                      <div class="relative inline-block text-left">
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
                                    کپی لینک مقاله
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
                                        : ' fill-gray-500',
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
                      <div class="nc-NcModal"></div>
                      <div class="nc-NcModal"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="container my-10 sm:my-12">
        <img
          alt="single"
          class="w-full rounded-xl"
          src="@/assets/images/3.jpg"
        />
      </div>
    </div>
    <div class="container mt-10">
      <div class="relative">
        <div class="nc-SingleContent space-y-10">
          <div
            id="single-entry-content"
            class="prose lg:prose-lg !max-w-screen-md mx-auto dark:prose-invert"
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel
              officiis ipsum placeat itaque neque dolorem modi perspiciatis
              dolor distinctio veritatis sapiente, minima corrupti dolores
              necessitatibus suscipit accusantium dignissimos culpa cumque.
            </p>
            <p>
              It is a long established fact that a <strong>reader</strong> will
              be distracted by the readable content of a page when looking at
              its <strong>layout</strong>. The point of using Lorem Ipsum is
              that it has a more-or-less normal
              <a href="/#" target="_blank" rel="noopener noreferrer"
                >distribution of letters.</a
              >
            </p>
            <ol>
              <li>We want everything to look good out of the box.</li>
              <li>
                Really just the first reason, that's the whole point of the
                plugin.
              </li>
              <li>
                Here's a third pretend reason though a list with three items
                looks more realistic than a list with two items.
              </li>
            </ol>
            <h3>Typography should be easy</h3>
            <p>
              So that's a header for you — with any luck if we've done our job
              correctly that will look pretty reasonable.
            </p>
            <p>Something a wise person once told me about typography is:</p>
            <blockquote>
              <p>
                Typography is pretty important if you don't want your stuff to
                look like trash. Make it good then it won't be bad.
              </p>
            </blockquote>
            <p>
              It's probably important that images look okay here by default as
              well:
            </p>
            <figure>
              <img
                alt="nc blog"
                class="rounded-2xl"
                src="@/assets/images/5.jpg"
              />
              <figcaption>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                vel officiis ipsum placeat itaque neque dolorem modi
                perspiciatis dolor distinctio veritatis sapiente
              </figcaption>
            </figure>
            <p>
              Now I'm going to show you an example of an unordered list to make
              sure that looks good, too:
            </p>
            <ul>
              <li>So here is the first item in this list.</li>
              <li>In this example we're keeping the items short.</li>
              <li>Later, we'll use longer, more complex list items.</li>
            </ul>
            <p>And that's the end of this section.</p>
            <h2>Code should look okay by default.</h2>
            <p>
              I think most people are going to use
              <a href="https://highlightjs.org/">highlight.js</a> or
              <a href="https://prismjs.com/">Prism</a> or something if they want
              to style their code blocks but it wouldn't hurt to make them look
              <em>okay</em> out of the box, even with no syntax highlighting.
            </p>
            <p>
              What I've written here is probably long enough, but adding this
              final sentence can't hurt.
            </p>
            <pre
              class="!rounded-2xl"
            ><code class="language-js">function tick() {
  const element = (
    &lt;div&gt;
      &lt;h1&gt;Hello, world!&lt;/h1&gt;
      &lt;h2&gt;It is {new Date().toLocaleTimeString()}.&lt;/h2&gt;
    &lt;/div&gt;
  );
  ReactDOM.render(element, document.getElementById('root'));
} </code></pre>
            <p>Hopefully that looks good enough to you.</p>
            <h3>We still need to think about stacked headings though.</h3>
            <h4>
              Let's make sure we don't screw that up with
              &lt;code&gt;h4&lt;/code&gt; elements, either.
            </h4>
            <p>
              Phew, with any luck we have styled the headings above this text
              and they look pretty good.
            </p>
            <p>
              Let's add a closing paragraph here so things end with a decently
              sized block of text. I can't explain why I want things to end that
              way but I have to assume it's because I think things will look
              weird or unbalanced if there is a heading too close to the end of
              the document.
            </p>
            <p>
              What I've written here is probably long enough, but adding this
              final sentence can't hurt.
            </p>
          </div>
          <div class="max-w-screen-md mx-auto flex flex-wrap">
            <a
              class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 me-2 mb-2"
              href="/archive/the-demo-archive-slug"
              >Garden</a
            ><a
              class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 me-2 mb-2"
              href="/archive/the-demo-archive-slug"
              >Jewelry</a
            ><a
              class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 me-2 mb-2"
              href="/archive/the-demo-archive-slug"
              >Industrial</a
            ><a
              class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 me-2 mb-2"
              href="/archive/the-demo-archive-slug"
              >Tools</a
            ><a
              class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 me-2 mb-2"
              href="/archive/the-demo-archive-slug"
              >Automotive</a
            ><a
              class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 me-2 mb-2"
              href="/archive/the-demo-archive-slug"
              >Toys</a
            ><a
              class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 me-2 mb-2"
              href="/archive/the-demo-archive-slug"
              >Outdoors</a
            ><a
              class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 me-2 mb-2"
              href="/archive/the-demo-archive-slug"
              >Health</a
            ><a
              class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 me-2 mb-2"
              href="/archive/the-demo-archive-slug"
              >Electronics</a
            >
          </div>
          <div
            class="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"
          ></div>
          <div class="max-w-screen-md mx-auto">
            <div class="nc-SingleAuthor flex">
              <a href="/author/the-demo-author-slug"
                ><div
                  class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-12 w-12 text-lg sm:text-xl sm:h-24 sm:w-24 ring-1 ring-white dark:ring-neutral-900"
                >
                  <img
                    alt="Birrell Chariot"
                    class="absolute inset-0 w-full h-full object-cover"
                    src="@/assets/images/6.jpg"
                  /><span class="wil-avatar__name">B</span>
                </div></a
              >
              <div class="flex flex-col ml-3 max-w-lg sm:ml-5">
                <span class="text-xs text-neutral-400 uppercase tracking-wider"
                  >WRITTEN BY</span
                >
                <h2
                  class="text-lg font-semibold text-neutral-900 dark:text-neutral-200"
                >
                  <a href="/author/the-demo-author-slug">Birrell Chariot</a>
                </h2>
                <span
                  class="block mt-1 text-sm text-neutral-500 sm:text-base dark:text-neutral-300"
                  >There’s no stopping the tech giant. Apple now opens its 100th
                  store in China.There’s no stopping the tech giant.<a
                    class="text-primary-6000 font-medium ml-1"
                    href="/author/the-demo-author-slug"
                    >Read more</a
                  ></span
                >
              </div>
            </div>
          </div>
          <div id="comments" class="scroll-mt-20 max-w-screen-md mx-auto pt-5">
            <h3
              class="text-xl font-semibold text-neutral-800 dark:text-neutral-200"
            >
              Responses (10)
            </h3>
            <form action="#" class="nc-SingleCommentForm mt-5">
              <textarea
                class="block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900"
                rows="4"
                placeholder="Add to discussion"
              ></textarea>
              <div class="mt-2 space-x-3">
                <button
                  class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                  type="submit"
                >
                  Submit</button
                ><button
                  class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div class="max-w-screen-md mx-auto">
            <ul class="nc-SingleCommentLists space-y-5">
              <div class="nc-CommentCard flex">
                <div
                  class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4"
                  style=""
                >
                  <img
                    alt="John Doe"
                    class="absolute inset-0 w-full h-full object-cover"
                    src="@/assets/images/7.jpg"
                  /><span class="wil-avatar__name">J</span>
                </div>
                <div
                  class="flex-grow flex flex-col p-4 ms-2 text-sm border border-neutral-200 rounded-xl sm:ms-3 sm:text-base dark:border-neutral-700"
                >
                  <div class="relative flex items-center pe-6">
                    <div class="absolute -end-3 -top-3">
                      <div
                        class="relative inline-block text-left"
                        data-headlessui-state=""
                      >
                        <button
                          class="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 sm:hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none"
                          title="More"
                          id="headlessui-menu-button-:rpo:"
                          type="button"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-headlessui-state=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            class="h-6 w-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <a
                      class="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
                      href="/author/the-demo-author-slug"
                      >Truelock Alric</a
                    ><span class="mx-2">·</span
                    ><span
                      class="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm"
                      >May 20, 2021</span
                    >
                  </div>
                  <span
                    class="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300"
                    >Praesent id massa id nisl venenatis lacinia. Aenean sit
                    amet justo. Morbi ut odio.</span
                  >
                  <div
                    class="nc-CommentCardLikeReply flex items-center space-x-2 rtl:space-x-reverse"
                    data-nc-id="CommentCardLikeReply"
                  >
                    <button
                      class="min-w-[68px] flex items-center rounded-full leading-none px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 hover:text-rose-600 dark:hover:text-rose-500"
                      title="Liked"
                    >
                      <svg class="h-5 w-5 me-1" fill="none" viewBox="0 0 24 24">
                        <path
                          fill-rule="evenodd"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                          clip-rule="evenodd"
                        ></path></svg
                      ><span class="text-neutral-900 dark:text-neutral-200"
                        >96</span
                      ></button
                    ><button
                      class="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none"
                      title="Reply"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-[18px] w-[18px] me-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                        ></path></svg
                      ><span
                        class="text-xs leading-none text-neutral-900 dark:text-neutral-200"
                        >Reply</span
                      >
                    </button>
                  </div>
                </div>
              </div>
              <div class="nc-NcModal"></div>
              <div class="nc-NcModal"></div>
              <div class="nc-NcModal"></div>
              <div class="nc-CommentCard flex">
                <div
                  class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4"
                  style=""
                >
                  <img
                    alt="John Doe"
                    class="absolute inset-0 w-full h-full object-cover"
                    src="@/assets/images/3.jpg"
                  /><span class="wil-avatar__name">J</span>
                </div>
                <div
                  class="flex-grow flex flex-col p-4 ms-2 text-sm border border-neutral-200 rounded-xl sm:ms-3 sm:text-base dark:border-neutral-700"
                >
                  <div class="relative flex items-center pe-6">
                    <div class="absolute -end-3 -top-3">
                      <div
                        class="relative inline-block text-left"
                        data-headlessui-state=""
                      >
                        <button
                          class="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 sm:hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none"
                          title="More"
                          id="headlessui-menu-button-:rpp:"
                          type="button"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-headlessui-state=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            class="h-6 w-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <a
                      class="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
                      href="/author/the-demo-author-slug"
                      >Truelock Alric</a
                    ><span class="mx-2">·</span
                    ><span
                      class="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm"
                      >May 20, 2021</span
                    >
                  </div>
                  <span
                    class="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300"
                    >Praesent id massa id nisl venenatis lacinia. Aenean sit
                    amet justo. Morbi ut odio.</span
                  >
                  <div
                    class="nc-CommentCardLikeReply flex items-center space-x-2 rtl:space-x-reverse"
                    data-nc-id="CommentCardLikeReply"
                  >
                    <button
                      class="min-w-[68px] flex items-center rounded-full leading-none px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 hover:text-rose-600 dark:hover:text-rose-500"
                      title="Liked"
                    >
                      <svg class="h-5 w-5 me-1" fill="none" viewBox="0 0 24 24">
                        <path
                          fill-rule="evenodd"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                          clip-rule="evenodd"
                        ></path></svg
                      ><span class="text-neutral-900 dark:text-neutral-200"
                        >96</span
                      ></button
                    ><button
                      class="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none"
                      title="Reply"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-[18px] w-[18px] me-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                        ></path></svg
                      ><span
                        class="text-xs leading-none text-neutral-900 dark:text-neutral-200"
                        >Reply</span
                      >
                    </button>
                  </div>
                </div>
              </div>
              <div class="nc-NcModal"></div>
              <div class="nc-NcModal"></div>
              <div class="nc-NcModal"></div>
              <div class="nc-CommentCard flex">
                <div
                  class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4"
                  style=""
                >
                  <img
                    alt="John Doe"
                    class="absolute inset-0 w-full h-full object-cover"
                    src="@/assets/images/7.jpg"
                  /><span class="wil-avatar__name">J</span>
                </div>
                <div
                  class="flex-grow flex flex-col p-4 ms-2 text-sm border border-neutral-200 rounded-xl sm:ms-3 sm:text-base dark:border-neutral-700"
                >
                  <div class="relative flex items-center pe-6">
                    <div class="absolute -end-3 -top-3">
                      <div
                        class="relative inline-block text-left"
                        data-headlessui-state=""
                      >
                        <button
                          class="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 sm:hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none"
                          title="More"
                          id="headlessui-menu-button-:rpq:"
                          type="button"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-headlessui-state=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            class="h-6 w-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <a
                      class="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
                      href="/author/the-demo-author-slug"
                      >Truelock Alric</a
                    ><span class="mx-2">·</span
                    ><span
                      class="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm"
                      >May 20, 2021</span
                    >
                  </div>
                  <span
                    class="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300"
                    >Praesent id massa id nisl venenatis lacinia. Aenean sit
                    amet justo. Morbi ut odio.</span
                  >
                  <div
                    class="nc-CommentCardLikeReply flex items-center space-x-2 rtl:space-x-reverse"
                    data-nc-id="CommentCardLikeReply"
                  >
                    <button
                      class="min-w-[68px] flex items-center rounded-full leading-none px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 hover:text-rose-600 dark:hover:text-rose-500"
                      title="Liked"
                    >
                      <svg class="h-5 w-5 me-1" fill="none" viewBox="0 0 24 24">
                        <path
                          fill-rule="evenodd"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                          clip-rule="evenodd"
                        ></path></svg
                      ><span class="text-neutral-900 dark:text-neutral-200"
                        >96</span
                      ></button
                    ><button
                      class="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none"
                      title="Reply"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-[18px] w-[18px] me-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                        ></path></svg
                      ><span
                        class="text-xs leading-none text-neutral-900 dark:text-neutral-200"
                        >Reply</span
                      >
                    </button>
                  </div>
                </div>
              </div>
              <div class="nc-NcModal"></div>
              <div class="nc-NcModal"></div>
              <div class="nc-NcModal"></div>
              <div class="nc-CommentCard flex">
                <div
                  class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4"
                  style=""
                >
                  <img
                    alt="John Doe"
                    class="absolute inset-0 w-full h-full object-cover"
                    src="@/assets/images/7.jpg"
                  /><span class="wil-avatar__name">J</span>
                </div>
                <div
                  class="flex-grow flex flex-col p-4 ms-2 text-sm border border-neutral-200 rounded-xl sm:ms-3 sm:text-base dark:border-neutral-700"
                >
                  <div class="relative flex items-center pe-6">
                    <div class="absolute -end-3 -top-3">
                      <div
                        class="relative inline-block text-left"
                        data-headlessui-state=""
                      >
                        <button
                          class="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 sm:hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none"
                          title="More"
                          id="headlessui-menu-button-:rpr:"
                          type="button"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-headlessui-state=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            class="h-6 w-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <a
                      class="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
                      href="/author/the-demo-author-slug"
                      >Truelock Alric</a
                    ><span class="mx-2">·</span
                    ><span
                      class="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm"
                      >May 20, 2021</span
                    >
                  </div>
                  <span
                    class="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300"
                    >Praesent id massa id nisl venenatis lacinia. Aenean sit
                    amet justo. Morbi ut odio.</span
                  >
                  <div
                    class="nc-CommentCardLikeReply flex items-center space-x-2 rtl:space-x-reverse"
                    data-nc-id="CommentCardLikeReply"
                  >
                    <button
                      class="min-w-[68px] flex items-center rounded-full leading-none px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 hover:text-rose-600 dark:hover:text-rose-500"
                      title="Liked"
                    >
                      <svg class="h-5 w-5 me-1" fill="none" viewBox="0 0 24 24">
                        <path
                          fill-rule="evenodd"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                          clip-rule="evenodd"
                        ></path></svg
                      ><span class="text-neutral-900 dark:text-neutral-200"
                        >96</span
                      ></button
                    ><button
                      class="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none"
                      title="Reply"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-[18px] w-[18px] me-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                        ></path></svg
                      ><span
                        class="text-xs leading-none text-neutral-900 dark:text-neutral-200"
                        >Reply</span
                      >
                    </button>
                  </div>
                </div>
              </div>
              <div class="nc-NcModal"></div>
              <div class="nc-NcModal"></div>
              <div class="nc-NcModal"></div>
              <button
                class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 dark:bg-primary-700 w-full"
              >
                View full comments (+117 comments)
              </button>
            </ul>
            <div></div>
          </div>
        </div>
        <div class="sticky mt-8 bottom-8 z-40 justify-center hidden">
          <div
            class="bg-white dark:bg-neutral-800 shadow-lg rounded-full ring-1 ring-offset-1 ring-neutral-900/5 p-1.5 flex items-center justify-center space-x-2 rtl:space-x-reverse text-xs"
          >
            <button
              class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-9 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
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
                ></path></svg
              ><span class="ml-1 text-neutral-900 dark:text-neutral-200"
                >34</span
              >
            </button>
            <div
              class="border-s h-4 border-neutral-200 dark:border-neutral-700"
            ></div>
            <a
              href="#comments"
              class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex px-3 h-9 text-xs"
              title="Comments"
              ><svg width="24" height="24" fill="none" viewBox="0 0 24 24">
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
                ></path></svg
              ><span class="ml-1 text-neutral-900 dark:text-neutral-200"
                >110</span
              ></a
            >
            <div
              class="border-s h-4 border-neutral-200 dark:border-neutral-700"
            ></div>
            <button
              class="w-9 h-9 items-center justify-center bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 rounded-full flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                  clip-rule="evenodd"
                ></path>
              </svg></button
            ><button
              class="w-9 h-9 items-center justify-center hidden"
              title="Go to top"
            >
              216%
            </button>
          </div>
        </div>
      </div>
    </div>

    <Mostanad />
  </section>
</template>

<script setup>
import Bookmark from "@/components/icons/Bookmark.vue";
import Like from "@/components/icons/Heart.vue";
import Comment from "@/components/icons/Comment.vue";
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


