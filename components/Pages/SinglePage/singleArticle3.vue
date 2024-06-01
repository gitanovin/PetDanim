<template>
    <section>
        <div class="pt-0 relative">
            <div
                class="absolute top-0 inset-x-0 bg-neutral-900 dark:bg-black/30 h-[480px] md:h-[600px] lg:h-[700px] xl:h-[95vh]">
            </div>
            <header class=" pt-10 lg:pt-16 rounded-xl relative z-10 mx-auto w-screen xl:max-w-screen-2xl px-6">
                <div class="nc-SingleHeader4 ">
                    <div class="max-w-5xl mx-auto space-y-5 dark">
                        <div class="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList"><a
                                class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs !px-3 text-red-800 bg-red-100 hover:bg-red-800"
                                href="/archive/the-demo-archive-slug">گربه ها</a></div>
                        <h1 class=" text-neutral-100 font-bold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl 2xl:text-6xl dark:text-neutral-100 max-w-4xl "
                            title="Trending web &amp; landing page designs in 2023">پرفروشترین سگهای دنیا در پتومن</h1><span
                            class="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،</span>
                    </div>
                    <div class="my-10 relative"><img alt="post"
                            src="@/assets/images/6.jpg" class="object-cover rounded-lg w-full  h-auto"></div>
                    <div class=" space-y-10">
                        <div
                            class="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse">
                            <div
                                class="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
                                <a class="flex items-center space-x-2 rtl:space-x-reverse"
                                    href="/author/the-demo-author-slug">
                                    <div
                                        class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full shadow-inner h-10 w-10 sm:h-11 sm:w-11 text-xl ring-1 ring-white dark:ring-neutral-900">
                                        <img alt="Foulcher Nathanil"
                                            class="absolute inset-0 w-full h-full object-cover" 
    
                                            src="@/assets/images/7.jpg"><span
                                            class="wil-avatar__name">F</span></div>
                                </a>
                                <div class="ms-3">
                                    <div class="flex items-center"><a class="block font-semibold"
                                            href="/author/the-demo-author-slug">محبوب حسین زاده</a></div>
                                    <div class="text-xs mt-[6px]"><span
                                            class="text-neutral-700 dark:text-neutral-300 font-fd">5 اردیبهشت 1403</span><span
                                            class="mx-2 font-semibold">·</span><span
                                            class="text-neutral-700 dark:text-neutral-300"> مطالعه 4 دقیقه</span></div>
                                </div>
                            </div>
                            <div class="nc-SingleMetaAction2 ">
                                <div class="flex flex-row space-x-2.5 rtl:space-x-reverse items-center">
                                    <div
                                        class="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse !space-x-2.5 rtl:!space-x-reverse">
                                        <button
                                            class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-4 h-9 text-sm text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                                            title="Liked">
                                            <Like/>
                                            <span
                                                class="ml-1 text-neutral-900 dark:text-neutral-200">34</span></button><a
                                            href="#comments"
                                            class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-4 h-9 text-sm "
                                            title="Comments">
                                          <Comment/>
                                            <span
                                                class="ml-1 text-neutral-900 dark:text-neutral-200">110</span></a></div>
                                    <div class="px-1">
                                        <div class="border-s border-neutral-200 dark:border-neutral-700 h-6"></div>
                                    </div><button
                                        class="nc-NcBookmark relative rounded-full flex items-center justify-center h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                                        title="Save to reading list">
                                      <Bookmark/>
                                    </button>
                                    <div class="relative inline-block text-left">
                                        <Menu as="div" class="relative inline-block text-left">
                                                    <div>
                                                        <MenuButton
                                                            class="text-neutral-500 dark:text-neutral-400 flex items-center justify-center rounded-full h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 focus:outline-none">
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
                                                                        class="ml-2 h-5 w-5 fill-gray-800"
                                                                        aria-hidden="true" />
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
                                                                        class="ml-2 h-5 w-5 fill-gray-800"
                                                                        aria-hidden="true" />
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
                                                                        class="ml-2 h-5 w-5 fill-gray-800"
                                                                        aria-hidden="true" />
                                                                    گزارش این مقاله
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
                                                            class="flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">
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
                                                                        class="ml-2 h-5 w-5 fill-gray-800"
                                                                        aria-hidden="true" />
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
                                                                        class="ml-2 h-5 w-5 fill-gray-800"
                                                                        aria-hidden="true" />
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
                                                                        class="ml-2 h-5 w-5 fill-gray-800"
                                                                        aria-hidden="true" />
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
                        <div class="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
                    </div>
                </div>
            </header>
        </div>
        <div class="mx-auto w-screen xl:max-w-screen-2xl my-8">
            <div class="grid grid-cols-12 gap-4">
                <div class="w-full lg:col-span-8 col-span-12  relative rounded-lg bg-white shadow-sm">
                    <div class="relative">
                        <div class="nc-SingleContent space-y-10">
                            <div id="single-entry-content"
                                class="prose lg:prose-lg  dark:prose-invert text-justify w-full !max-w-full p-8">
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                                    استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                                    در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                                    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                                    کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                                    جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                                    طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                                    فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                                    موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                                    نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>

                                <ol>
                                    <li>این تست است</li>
                                    <li>این تست دو است</li>
                                    <li>این تست 3 است</li>
                                </ol>
                                <h3>عنوان اچ 3</h3>
                                <p>این متن تستی است</p>
                                <p>نقل قول:</p>
                                <blockquote>
                                    <p>این یک نقل و قول تستی است</p>
                                </blockquote>

                                <figure>
                                    <img alt="nc blog" class="rounded-2xl" src="@/assets/images/5.jpg" />
                                    <figcaption>کپشن عکس</figcaption>
                                </figure>

                                <ul>
                                    <li>ایت تست ال ای است</li>
                                    <li>ایت تست ال ای است</li>
                                    <li>ایت تست ال ای است</li>
                                </ul>

                                <h2>تست عنوان اچ 2</h2>
                                <p>
                                    <a href="https://highlightjs.org/">این تست لینک است</a>
                                </p>

                                <pre class="!rounded-2xl"><code class="language-js">function tick() {
    const element = (
      &lt;div&gt;
        &lt;h1&gt;Hello, world!&lt;/h1&gt;
        &lt;h2&gt;It is {new Date().toLocaleTimeString()}.&lt;/h2&gt;
      &lt;/div&gt;
    );
    ReactDOM.render(element, document.getElementById('root'));
  } </code></pre>

                                <h4>تست اچ 4</h4>
                            </div>
                            <div class="max-w-screen-md mx-auto flex flex-wrap">
                                <a class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 me-2 mb-2"
                                    href="/archive/the-demo-archive-slug">حیوان</a><a
                                    class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 me-2 mb-2"
                                    href="/archive/the-demo-archive-slug">سگ</a><a
                                    class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 me-2 mb-2"
                                    href="/archive/the-demo-archive-slug">گربه</a>
                            </div>
                            <div
                                class="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700">
                            </div>
                            <div class="max-w-screen-md mx-auto">
                                <div class="nc-SingleAuthor flex">
                                    <a href="/author/the-demo-author-slug">
                                        <div
                                            class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-12 w-12 text-lg sm:text-xl sm:h-24 sm:w-24 ring-1 ring-white dark:ring-neutral-900">
                                            <img alt="Birrell Chariot"
                                                class="absolute inset-0 w-full h-full object-cover"
                                                src="@/assets/images/6.jpg" /><span class="wil-avatar__name">B</span>
                                        </div>
                                    </a>
                                    <div class="flex flex-col mr-3 max-w-lg sm:ml-5">
                                        <span class="text-xs text-neutral-400 uppercase tracking-wider">نویسنده</span>
                                        <h2 class="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
                                            <a href="/author/the-demo-author-slug">محبوب حسین زاده</a>
                                        </h2>
                                        <span
                                            class="block mt-1 text-sm text-neutral-500 sm:text-base dark:text-neutral-300">محبوب
                                            حسین زاده متولد 1369 در شهرستان خوی می باشد این متن تست
                                            بیوگرافی است
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div id="comments" class="scroll-mt-20 max-w-screen-md mx-auto pt-5">
                                <h3 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                                    پاسخ ها (10)
                                </h3>
                                <form action="#" class="nc-SingleCommentForm mt-5">
                                    <textarea
                                        class="block w-full text-sm rounded-xl border-neutral-200 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900"
                                        rows="4" placeholder="دیدگاه خود را بنویسید"></textarea>
                                    <div class="mt-2 gap-2 flex">
                                        <button
                                            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-orange-700 hover:bg-orange-600 text-orange-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                            type="submit">
                                            ثبت</button><button
                                            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                            type="button">
                                            انصراف
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="max-w-screen-md mx-auto pb-16">
                                <ul class="nc-SingleCommentLists space-y-5">
                                    <div class="nc-CommentCard flex">
                                        <div
                                            class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4">
                                            <img alt="John Doe" class="absolute inset-0 w-full h-full object-cover"
                                                src="@/assets/images/7.jpg" /><span class="wil-avatar__name">J</span>
                                        </div>
                                        <div
                                            class="flex-grow flex flex-col p-4 ms-2 text-sm border border-neutral-200 rounded-xl sm:ms-3 sm:text-base dark:border-neutral-700">
                                            <div class="relative flex items-center pe-6">
                                                <div class="absolute -end-3 -top-3">
                                                    <div class="relative inline-block text-left">
                                                        <Menu as="div" class="relative inline-block text-left">
                                                            <div>
                                                                <MenuButton
                                                                    class="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 sm:hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none">
                                                                    <MenuMoreIcon />
                                                                </MenuButton>
                                                            </div>

                                                            <transition
                                                                enter-active-class="transition duration-100 ease-out"
                                                                enter-from-class="transform scale-95 opacity-0"
                                                                enter-to-class="transform scale-100 opacity-100"
                                                                leave-active-class="transition duration-75 ease-in"
                                                                leave-from-class="transform scale-100 opacity-100"
                                                                leave-to-class="transform scale-95 opacity-0">
                                                                <MenuItems
                                                                    class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
                                                                    <div class="px-2 py-4 space-y-2">
                                                                        <MenuItem v-slot="{ active }">
                                                                        <button :class="[
                                                                            active
                                                                                ? 'bg-gray-50 text-gray-700'
                                                                                : ' fill-gray-500',
                                                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                        ]">
                                                                            <EditIcon :active="active"
                                                                                class="ml-2 h-5 w-5 fill-gray-800"
                                                                                aria-hidden="true" />
                                                                            ویرایش
                                                                        </button>
                                                                        </MenuItem>

                                                                        <MenuItem v-slot="{ active }">
                                                                        <button :class="[
                                                                            active
                                                                                ? 'bg-gray-50 text-gray-700'
                                                                                : ' fill-gray-500',
                                                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                        ]">
                                                                            <DeleteIcon :active="active"
                                                                                class="ml-2 h-5 w-5 fill-gray-800"
                                                                                aria-hidden="true" />
                                                                            حذف
                                                                        </button>
                                                                        </MenuItem>

                                                                        <MenuItem v-slot="{ active }">
                                                                        <button :class="[
                                                                            active
                                                                                ? 'bg-gray-50 text-gray-700'
                                                                                : ' fill-gray-500',
                                                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                        ]">
                                                                            <ReplayIcon :active="active"
                                                                                class="ml-2 h-5 w-5 fill-gray-800"
                                                                                aria-hidden="true" />
                                                                            پاسخ
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
                                                                                class="ml-2 h-5 w-5 fill-gray-800"
                                                                                aria-hidden="true" />
                                                                            گزارش
                                                                        </button>
                                                                        </MenuItem>
                                                                    </div>
                                                                </MenuItems>
                                                            </transition>
                                                        </Menu>
                                                    </div>
                                                </div>
                                                <a class="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
                                                    href="/author/the-demo-author-slug">محبوب حسین زاده</a><span
                                                    class="mx-2">·</span><span
                                                    class="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm">28
                                                    اردیبهست 1403</span>
                                            </div>
                                            <span
                                                class="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300">این
                                                یک متن تستی است برای تست نظر</span>
                                            <!-- هنگام زدن دکمه پاسخ این قسمت نمایش داده میشود و دکمه های لایک و پاسخ حذف می شود -->
                                            <div class="Comment-Replay hidden">
                                                <form action="#" class="nc-SingleCommentForm flex-grow">
                                                    <textarea
                                                        class="block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900"
                                                        rows="4" placeholder="پاسخ خود را بنویسید"
                                                        required=""></textarea>
                                                    <div class="mt-2 space-x-3">
                                                        <button
                                                            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                                            type="submit">
                                                            ثبت</button><button
                                                            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                                            type="button">
                                                            انصراف
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <!-- هنگام زدن دکمه پاسخ این قسمت نمایش داده میشود و دکمه های لایک و پاسخ حذف می شود -->

                                            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                                <button
                                                    class="min-w-[68px] flex items-center rounded-full leading-none px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 hover:text-rose-600 dark:hover:text-rose-500"
                                                    title="Liked">
                                                    <svg class="h-5 w-5 me-1" fill="none" viewBox="0 0 24 24">
                                                        <path fill-rule="evenodd" stroke="currentColor"
                                                            stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="1.5"
                                                            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                                            clip-rule="evenodd"></path>
                                                    </svg><span
                                                        class="text-neutral-900 dark:text-neutral-200">96</span></button><button
                                                    class="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none"
                                                    title="Reply">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="h-[18px] w-[18px] me-2" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="1.5"
                                                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6">
                                                        </path>
                                                    </svg><span
                                                        class="text-xs leading-none text-neutral-900 dark:text-neutral-200">پاسخ</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="nc-NcModal hidden">
                                        <div class="fixed inset-0 z-50 overflow-y-auto" id="headlessui-dialog-:r8g:"
                                            role="dialog" aria-modal="true" data-headlessui-state="open"
                                            aria-labelledby="headlessui-dialog-title-:r8i:">
                                            <div class="min-h-screen px-1 text-center md:px-4">
                                                <div class="fixed inset-0 bg-neutral-900 bg-opacity-50 dark:bg-opacity-80 opacity-100"
                                                    id="headlessui-dialog-overlay-:r8h:" aria-hidden="true"
                                                    data-headlessui-state="open"></div>
                                                <span class="inline-block h-screen align-middle"
                                                    aria-hidden="true">&ZeroWidthSpace;</span>
                                                <div
                                                    class="inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transform bg-white border border-black border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-900 dark:text-neutral-300 max-w-screen-md opacity-100 scale-100">
                                                    <div
                                                        class="py-4 px-6 text-center relative border-b border-neutral-100 dark:border-neutral-700 md:py-5">
                                                        <button
                                                            class="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4 focus:outline-none">
                                                            <span class="sr-only">Close</span><svg
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                                <path fill-rule="evenodd"
                                                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg>
                                                        </button>
                                                        <h3 class="text-base font-semibold text-neutral-900 lg:text-xl dark:text-neutral-200 mx-10"
                                                            id="headlessui-dialog-title-:r8i:"
                                                            data-headlessui-state="open">
                                                            Editing comment
                                                        </h3>
                                                    </div>
                                                    <div class="py-4 px-6 md:py-5">
                                                        <form action="#" class="nc-SingleCommentForm mt-0">
                                                            <textarea
                                                                class="block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900"
                                                                rows="8" placeholder="Add to discussion" required="">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur perferendis maxime quia, quisquam eveniet asperiores fuga laudantium necessitatibus assumenda!</textarea>
                                                            <div class="mt-2 space-x-3">
                                                                <button
                                                                    class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                                                    type="submit">
                                                                    Submit</button><button
                                                                    class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                                                    type="button">
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nc-NcModal hidden">
                                        <div class="fixed inset-0 z-50 overflow-y-auto" id="headlessui-dialog-:r8o:"
                                            role="dialog" aria-modal="true" data-headlessui-state="open"
                                            aria-labelledby="headlessui-dialog-title-:r8q:">
                                            <div class="min-h-screen px-1 text-center md:px-4">
                                                <div class="fixed inset-0 bg-neutral-900 bg-opacity-50 dark:bg-opacity-80 opacity-100"
                                                    id="headlessui-dialog-overlay-:r8p:" aria-hidden="true"
                                                    data-headlessui-state="open"></div>
                                                <span class="inline-block h-screen align-middle"
                                                    aria-hidden="true">&ZeroWidthSpace;</span>
                                                <div
                                                    class="inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transform bg-white border border-black border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-900 dark:text-neutral-300 max-w-screen-md opacity-100 scale-100">
                                                    <div
                                                        class="py-4 px-6 text-center relative border-b border-neutral-100 dark:border-neutral-700 md:py-5">
                                                        <button
                                                            class="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4 focus:outline-none">
                                                            <span class="sr-only">Close</span><svg
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                                <path fill-rule="evenodd"
                                                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg>
                                                        </button>
                                                        <h3 class="text-base font-semibold text-neutral-900 lg:text-xl dark:text-neutral-200 mx-10"
                                                            id="headlessui-dialog-title-:r8q:"
                                                            data-headlessui-state="open">
                                                            Report Abuse
                                                        </h3>
                                                    </div>
                                                    <div class="py-4 px-6 md:py-5">
                                                        <form action="#">
                                                            <div id="headlessui-radiogroup-:r8r:" role="radiogroup"
                                                                aria-labelledby="headlessui-label-:r8s:">
                                                                <label class="sr-only" id="headlessui-label-:r8s:"
                                                                    role="none">Problem Plans</label>
                                                                <div class="grid grid-cols-2 lg:grid-cols-4 gap-2"
                                                                    role="none">
                                                                    <div class="bg-primary-6000 text-white dark:bg-primary-700 relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-5 sm:py-4 focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                                        id="headlessui-radiogroup-option-:r8t:"
                                                                        role="radio" aria-checked="true" tabindex="0"
                                                                        data-headlessui-state="checked"
                                                                        aria-labelledby="headlessui-label-:r8u:">
                                                                        <div
                                                                            class="flex items-center justify-between w-full">
                                                                            <div class="flex items-center">
                                                                                <div class="text-sm">
                                                                                    <p class="font-medium line-clamp-1 text-white"
                                                                                        id="headlessui-label-:r8u:">
                                                                                        Violence
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="flex-shrink-0 text-white">
                                                                                <svg class="w-6 h-6" viewBox="0 0 24 24"
                                                                                    fill="none">
                                                                                    <circle cx="12" cy="12" r="12"
                                                                                        fill="#fff" opacity="0.2">
                                                                                    </circle>
                                                                                    <path d="M7 13l3 3 7-7"
                                                                                        stroke="#fff" stroke-width="1.5"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round"></path>
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="bg-white border-t border-neutral-50 relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-5 sm:py-4 focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                                        id="headlessui-radiogroup-option-:r8v:"
                                                                        role="radio" aria-checked="false" tabindex="-1"
                                                                        aria-labelledby="headlessui-label-:r90:">
                                                                        <div
                                                                            class="flex items-center justify-between w-full">
                                                                            <div class="flex items-center">
                                                                                <div class="text-sm">
                                                                                    <p class="font-medium line-clamp-1 text-neutral-900"
                                                                                        id="headlessui-label-:r90:">
                                                                                        Trouble
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="bg-white border-t border-neutral-50 relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-5 sm:py-4 focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                                        id="headlessui-radiogroup-option-:r91:"
                                                                        role="radio" aria-checked="false" tabindex="-1"
                                                                        aria-labelledby="headlessui-label-:r92:">
                                                                        <div
                                                                            class="flex items-center justify-between w-full">
                                                                            <div class="flex items-center">
                                                                                <div class="text-sm">
                                                                                    <p class="font-medium line-clamp-1 text-neutral-900"
                                                                                        id="headlessui-label-:r92:">
                                                                                        Spam
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="bg-white border-t border-neutral-50 relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-5 sm:py-4 focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                                        id="headlessui-radiogroup-option-:r93:"
                                                                        role="radio" aria-checked="false" tabindex="-1"
                                                                        aria-labelledby="headlessui-label-:r94:">
                                                                        <div
                                                                            class="flex items-center justify-between w-full">
                                                                            <div class="flex items-center">
                                                                                <div class="text-sm">
                                                                                    <p class="font-medium line-clamp-1 text-neutral-900"
                                                                                        id="headlessui-label-:r94:">
                                                                                        Other
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mt-4">
                                                                <h4
                                                                    class="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
                                                                    Message
                                                                </h4>
                                                                <span
                                                                    class="text-sm text-neutral-6000 dark:text-neutral-400">Please
                                                                    provide any additional information or
                                                                    context that will help us understand and handle
                                                                    the situation.</span><textarea
                                                                    class="block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 mt-3"
                                                                    rows="4" placeholder="..." required=""
                                                                    id="report-message"></textarea>
                                                            </div>
                                                            <div class="mt-4 space-x-3 rtl:space-x-reverse">
                                                                <button
                                                                    class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                                                    type="submit">
                                                                    Submit</button><button
                                                                    class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-neutral-700 dark:hover:ring-neutral-500 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                                                    type="button">
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="Delete hidden">
                                        <div class="fixed inset-0 z-50 overflow-y-auto" id="headlessui-dialog-:r9a:"
                                            role="dialog" aria-modal="true" data-headlessui-state="open">
                                            <div class="min-h-screen px-1 text-center md:px-4">
                                                <div class="fixed inset-0 bg-neutral-900 bg-opacity-50 dark:bg-opacity-80 opacity-100"
                                                    id="headlessui-dialog-overlay-:r9b:" aria-hidden="true"
                                                    data-headlessui-state="open"></div>
                                                <span class="inline-block h-screen align-middle"
                                                    aria-hidden="true">&ZeroWidthSpace;</span>
                                                <div
                                                    class="inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transform bg-white border border-black border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-900 dark:text-neutral-300 max-w-screen-sm opacity-100 scale-100">
                                                    <div
                                                        class="py-4 px-6 text-center relative border-b border-neutral-100 dark:border-neutral-700 md:py-5">
                                                        <button
                                                            class="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4 focus:outline-none">
                                                            <span class="sr-only">Close</span><svg
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                fill="currentColor" aria-hidden="true" class="w-5 h-5">
                                                                <path fill-rule="evenodd"
                                                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div class="py-4 px-6 md:py-5">
                                                        <form action="#">
                                                            <h3
                                                                class="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
                                                                Delete comment
                                                            </h3>
                                                            <span class="text-sm">Are you sure you want to delete this
                                                                comment?
                                                                You
                                                                cannot undo this action.</span>
                                                            <div class="mt-4 space-x-3 rtl:space-x-reverse">
                                                                <button
                                                                    class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 !bg-red-500"
                                                                    type="submit">
                                                                    Delete</button><button
                                                                    class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-neutral-700 dark:hover:ring-neutral-500 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                                                                    type="button">
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-orange-700 hover:bg-orange-600 text-orange-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 dark:bg-primary-700 w-full">
                                        مشاهده همه نظرات (+117 نظر)
                                    </button>
                                </ul>
                                <div></div>
                            </div>
                        </div>
                        <div class="sticky mt-8 bottom-8 z-40 justify-center hidden">
                            <div
                                class="bg-white dark:bg-neutral-800 shadow-lg rounded-full ring-1 ring-offset-1 ring-neutral-900/5 p-1.5 flex items-center justify-center space-x-2 rtl:space-x-reverse text-xs">
                                <button
                                    class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-9 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                                    title="Liked">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="1"
                                            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                            clip-rule="evenodd"></path>
                                    </svg><span class="ml-1 text-neutral-900 dark:text-neutral-200">34</span>
                                </button>
                                <div class="border-s h-4 border-neutral-200 dark:border-neutral-700"></div>
                                <a href="#comments"
                                    class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex px-3 h-9 text-xs"
                                    title="Comments"><svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1"
                                            d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                        </path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z">
                                        </path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z">
                                        </path>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z">
                                        </path>
                                    </svg><span class="ml-1 text-neutral-900 dark:text-neutral-200">110</span></a>
                                <div class="border-s h-4 border-neutral-200 dark:border-neutral-700"></div>
                                <button
                                    class="w-9 h-9 items-center justify-center bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 rounded-full flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        aria-hidden="true" class="w-4 h-4">
                                        <path fill-rule="evenodd"
                                            d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                                <button class="w-9 h-9 items-center justify-center hidden" title="Go to top">
                                    216%
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full lg:col-span-4 col-span-12">
                    <div class="nc-SingleSidebar space-y-6 ">
                        <div class="nc-WidgetPosts rounded-3xl overflow-hidden bg-white dark:bg-neutral-800">
                            <div
                                class="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 ">
                                <h2 class="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">🎯
                                    محبوبترین مقالات</h2><a
                                    class="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
                                    rel="noopener noreferrer" href="/#">مشاهده همه</a>
                            </div>
                            <div class="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
                                <div
                                    class="nc-Card3Small relative flex flex-row justify-between items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700">
                                    <a class="absolute inset-0"
                                        title="New tools for Black pregnant and postpartum mothers to save lives"
                                        href="/single/this-is-single-slug"></a>
                                    <div class="relative space-y-2">
                                        <div
                                            class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
                                            <a class="relative flex items-center space-x-2 rtl:space-x-reverse"
                                                href="/author/the-demo-author-slug">
                                                <div
                                                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                                                    <img alt="Truelock Alric"
                                                        class="absolute inset-0 w-full h-full object-cover"
                                                        src="@/assets/images/6.jpg"><span
                                                        class="wil-avatar__name">T</span>
                                                </div><span
                                                    class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                                                    محبوب حسین زاده</span>
                                            </a><span
                                                class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                                                class="text-neutral-500 dark:text-neutral-400 font-normal font-fd">28
                                                اردیبهشت 1403</span>
                                        </div>
                                        <h2
                                            class="nc-card-title block text-sm sm:text-base font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100">
                                            <a class="line-clamp-2"
                                                title="New tools for Black pregnant and postpartum mothers to save lives"
                                                href="/single/this-is-single-slug">جوجه های زشت وارد پتومن شدند</a>
                                        </h2>
                                    </div><a title="New tools for Black pregnant and postpartum mothers to save lives"
                                        class="block w-20 flex-shrink-0 relative rounded-lg overflow-hidden z-0 ms-4 group"
                                        href="/single/this-is-single-slug">
                                        <div class="w-full h-0 aspect-w-1 aspect-h-1"><img alt="featured"
                                                title="New tools for Black pregnant and postpartum mothers to save lives"
                                                class="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
                                                src="@/assets/images/7.jpg">
                                        </div>
                                    </a>
                                </div>

                                <div
                                    class="nc-Card3Small relative flex flex-row justify-between items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700">
                                    <a class="absolute inset-0"
                                        title="New tools for Black pregnant and postpartum mothers to save lives"
                                        href="/single/this-is-single-slug"></a>
                                    <div class="relative space-y-2">
                                        <div
                                            class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
                                            <a class="relative flex items-center space-x-2 rtl:space-x-reverse"
                                                href="/author/the-demo-author-slug">
                                                <div
                                                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                                                    <img alt="Truelock Alric"
                                                        class="absolute inset-0 w-full h-full object-cover"
                                                        src="@/assets/images/6.jpg"><span
                                                        class="wil-avatar__name">T</span>
                                                </div><span
                                                    class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                                                    محبوب حسین زاده</span>
                                            </a><span
                                                class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                                                class="text-neutral-500 dark:text-neutral-400 font-normal font-fd">28
                                                اردیبهشت 1403</span>
                                        </div>
                                        <h2
                                            class="nc-card-title block text-sm sm:text-base font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100">
                                            <a class="line-clamp-2"
                                                title="New tools for Black pregnant and postpartum mothers to save lives"
                                                href="/single/this-is-single-slug">جوجه های زشت وارد پتومن شدند</a>
                                        </h2>
                                    </div><a title="New tools for Black pregnant and postpartum mothers to save lives"
                                        class="block w-20 flex-shrink-0 relative rounded-lg overflow-hidden z-0 ms-4 group"
                                        href="/single/this-is-single-slug">
                                        <div class="w-full h-0 aspect-w-1 aspect-h-1"><img alt="featured"
                                                title="New tools for Black pregnant and postpartum mothers to save lives"
                                                class="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
                                                src="@/assets/images/7.jpg">
                                        </div>
                                    </a>
                                </div>

                                <div
                                    class="nc-Card3Small relative flex flex-row justify-between items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700">
                                    <a class="absolute inset-0"
                                        title="New tools for Black pregnant and postpartum mothers to save lives"
                                        href="/single/this-is-single-slug"></a>
                                    <div class="relative space-y-2">
                                        <div
                                            class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
                                            <a class="relative flex items-center space-x-2 rtl:space-x-reverse"
                                                href="/author/the-demo-author-slug">
                                                <div
                                                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                                                    <img alt="Truelock Alric"
                                                        class="absolute inset-0 w-full h-full object-cover"
                                                        src="@/assets/images/6.jpg"><span
                                                        class="wil-avatar__name">T</span>
                                                </div><span
                                                    class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                                                    محبوب حسین زاده</span>
                                            </a><span
                                                class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                                                class="text-neutral-500 dark:text-neutral-400 font-normal font-fd">28
                                                اردیبهشت 1403</span>
                                        </div>
                                        <h2
                                            class="nc-card-title block text-sm sm:text-base font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100">
                                            <a class="line-clamp-2"
                                                title="New tools for Black pregnant and postpartum mothers to save lives"
                                                href="/single/this-is-single-slug">جوجه های زشت وارد پتومن شدند</a>
                                        </h2>
                                    </div><a title="New tools for Black pregnant and postpartum mothers to save lives"
                                        class="block w-20 flex-shrink-0 relative rounded-lg overflow-hidden z-0 ms-4 group"
                                        href="/single/this-is-single-slug">
                                        <div class="w-full h-0 aspect-w-1 aspect-h-1"><img alt="featured"
                                                title="New tools for Black pregnant and postpartum mothers to save lives"
                                                class="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
                                                src="@/assets/images/7.jpg">
                                        </div>
                                    </a>
                                </div>

                                <div
                                    class="nc-Card3Small relative flex flex-row justify-between items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700">
                                    <a class="absolute inset-0"
                                        title="New tools for Black pregnant and postpartum mothers to save lives"
                                        href="/single/this-is-single-slug"></a>
                                    <div class="relative space-y-2">
                                        <div
                                            class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
                                            <a class="relative flex items-center space-x-2 rtl:space-x-reverse"
                                                href="/author/the-demo-author-slug">
                                                <div
                                                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                                                    <img alt="Truelock Alric"
                                                        class="absolute inset-0 w-full h-full object-cover"
                                                        src="@/assets/images/6.jpg"><span
                                                        class="wil-avatar__name">T</span>
                                                </div><span
                                                    class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                                                    محبوب حسین زاده</span>
                                            </a><span
                                                class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                                                class="text-neutral-500 dark:text-neutral-400 font-normal font-fd">28
                                                اردیبهشت 1403</span>
                                        </div>
                                        <h2
                                            class="nc-card-title block text-sm sm:text-base font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100">
                                            <a class="line-clamp-2"
                                                title="New tools for Black pregnant and postpartum mothers to save lives"
                                                href="/single/this-is-single-slug">جوجه های زشت وارد پتومن شدند</a>
                                        </h2>
                                    </div><a title="New tools for Black pregnant and postpartum mothers to save lives"
                                        class="block w-20 flex-shrink-0 relative rounded-lg overflow-hidden z-0 ms-4 group"
                                        href="/single/this-is-single-slug">
                                        <div class="w-full h-0 aspect-w-1 aspect-h-1"><img alt="featured"
                                                title="New tools for Black pregnant and postpartum mothers to save lives"
                                                class="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
                                                src="@/assets/images/7.jpg">
                                        </div>
                                    </a>
                                </div>







                            </div>
                        </div>
                        <div class="nc-WidgetTags rounded-3xl overflow-hidden bg-white dark:bg-neutral-800">
                            <div
                                class="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 ">
                                <h2 class="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">💡
                                    برچسب ها</h2><a
                                    class="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
                                    rel="noopener noreferrer" href="/#">مشاهده همه</a>
                            </div>
                            <div class="flex flex-wrap p-4 xl:p-5"><a
                                    class="nc-Tag inline-block bg-gray-50 hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                                    href="/archive/the-demo-archive-slug">سگ<span class="text-xs font-normal">
                                        (14)</span></a><a
                                    class="nc-Tag inline-block bg-gray-50 hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                                    href="/archive/the-demo-archive-slug">گربه<span class="text-xs font-normal">
                                        (4)</span></a><a
                                    class="nc-Tag inline-block bg-gray-50 hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                                    href="/archive/the-demo-archive-slug">پرندگان<span class="text-xs font-normal">
                                        (7)</span></a><a
                                    class="nc-Tag inline-block bg-gray-50 hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                                    href="/archive/the-demo-archive-slug">خزندگان<span class="text-xs font-normal">
                                        (26)</span></a><a
                                    class="nc-Tag inline-block bg-gray-50 hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                                    href="/archive/the-demo-archive-slug">حیوانات<span class="text-xs font-normal">
                                        (20)</span></a><a
                                    class="nc-Tag inline-block bg-gray-50 hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                                    href="/archive/the-demo-archive-slug">پت ها<span class="text-xs font-normal">
                                        (22)</span></a><a
                                    class="nc-Tag inline-block bg-gray-50 hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                                    href="/archive/the-demo-archive-slug">اسباب بازی<span class="text-xs font-normal">
                                        (15)</span></a><a
                                    class="nc-Tag inline-block bg-gray-50 hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                                    href="/archive/the-demo-archive-slug">پت<span class="text-xs font-normal">
                                        (9)</span></a><a
                                    class="nc-Tag inline-block bg-gray-50 hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                                    href="/archive/the-demo-archive-slug">مار<span class="text-xs font-normal">
                                        (26)</span></a><a
                                    class="nc-Tag inline-block bg-gray-50 hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                                    href="/archive/the-demo-archive-slug">طوطی<span class="text-xs font-normal">
                                        (15)</span></a></div>
                        </div>
                        <div class="nc-WidgetCategories rounded-3xl  overflow-hidden bg-white dark:bg-neutral-800">
                            <div
                                class="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 ">
                                <h2 class="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">✨
                                    موضوعات پرطرفدار</h2><a
                                    class="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
                                    rel="noopener noreferrer" href="/#">مشاهده همه</a>
                            </div>
                            <div class="flow-root">
                                <div class="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700"><a
                                        class="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                        href="/archive/the-demo-archive-slug">
                                        <div class="relative flex-shrink-0 w-12 h-12 rounded-lg me-4 overflow-hidden">
                                            <img alt="" class="object-cover" src="@/assets/images/4.jpg">
                                        </div>
                                        <div>
                                            <h2
                                                class="text-base nc-card-title text-neutral-900 dark:text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold">
                                                سگ ها</h2><span
                                                class="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400 font-fd">7
                                                مقاله</span>
                                        </div>
                                    </a><a
                                        class="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                        href="/archive/the-demo-archive-slug">
                                        <div class="relative flex-shrink-0 w-12 h-12 rounded-lg me-4 overflow-hidden">
                                            <img alt="" class="object-cover" src="@/assets/images/4.jpg">
                                        </div>
                                        <div>
                                            <h2
                                                class="text-base nc-card-title text-neutral-900 dark:text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold">
                                                گربه ها</h2><span
                                                class="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400 font-fd">26
                                                مقاله</span>
                                        </div>
                                    </a><a
                                        class="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                        href="/archive/the-demo-archive-slug">
                                        <div class="relative flex-shrink-0 w-12 h-12 rounded-lg me-4 overflow-hidden">
                                            <img alt="" class="object-cover" src="@/assets/images/4.jpg">
                                        </div>
                                        <div>
                                            <h2
                                                class="text-base nc-card-title text-neutral-900 dark:text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold">
                                                پرندگان</h2><span
                                                class="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400 font-fd">20
                                                مقاله</span>
                                        </div>
                                    </a><a
                                        class="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                        href="/archive/the-demo-archive-slug">
                                        <div class="relative flex-shrink-0 w-12 h-12 rounded-lg me-4 overflow-hidden">
                                            <img alt="" class="object-cover" src="@/assets/images/4.jpg">
                                        </div>
                                        <div>
                                            <h2
                                                class="text-base nc-card-title text-neutral-900 dark:text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold">
                                                خزندگان</h2><span
                                                class="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400 font-fd">22
                                                مقاله</span>
                                        </div>
                                    </a><a
                                        class="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                        href="/archive/the-demo-archive-slug">
                                        <div class="relative flex-shrink-0 w-12 h-12 rounded-lg me-4 overflow-hidden">
                                            <img alt="" class="object-cover" src="@/assets/images/4.jpg">
                                        </div>
                                        <div>
                                            <h2
                                                class="text-base nc-card-title text-neutral-900 dark:text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold">
                                                مسئولیت اجتماعی</h2><span
                                                class="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400 font-fd">15
                                                مقاله</span>
                                        </div>
                                    </a></div>
                            </div>
                        </div>
                        <div class="nc-WidgetAuthors rounded-3xl overflow-hidden bg-white dark:bg-neutral-800">
                            <div
                                class="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 ">
                                <h2 class="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">🎭
                                    نویسندکان</h2><a
                                    class="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
                                    rel="noopener noreferrer" href="/#">مشاهده همه</a>
                            </div>
                            <div class="flow-root">
                                <div class="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700"><a
                                        class="nc-CardAuthor flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                        href="/author/the-demo-author-slug">
                                        <div
                                            class="wil-avatar relative inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-base flex-shrink-0 me-4">
                                            <img alt="Truelock Alric"
                                                class="absolute inset-0 w-full h-full object-cover"
                                                src="@/assets/images/6.jpg">
                                            <span class="wil-avatar__name">T</span>
                                        </div>
                                        <div>
                                            <h2
                                                class="text-sm sm:text-base text-neutral-900 dark:text-neutral-100 font-medium sm:font-semibold">
                                                حدیث شادی</h2><span
                                                class="block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400">نویسنده</span>
                                        </div>
                                    </a><a
                                        class="nc-CardAuthor flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                        href="/author/the-demo-author-slug">
                                        <div
                                            class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-base flex-shrink-0 me-4">
                                            <img alt="Truelock Alric"
                                                class="absolute inset-0 w-full h-full object-cover"
                                                src="@/assets/images/6.jpg">
                                            <span class="wil-avatar__name">B</span>
                                        </div>
                                        <div>
                                            <h2
                                                class="text-sm sm:text-base text-neutral-900 dark:text-neutral-100 font-medium sm:font-semibold">
                                                علی آزادمند</h2><span
                                                class="block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400">نویسنده</span>
                                        </div>
                                    </a><a
                                        class="nc-CardAuthor flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                        href="/author/the-demo-author-slug">
                                        <div
                                            class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-base flex-shrink-0 me-4">
                                            <img alt="Truelock Alric"
                                                class="absolute inset-0 w-full h-full object-cover"
                                                src="@/assets/images/6.jpg"><span class="wil-avatar__name">F</span>
                                        </div>
                                        <div>
                                            <h2
                                                class="text-sm sm:text-base text-neutral-900 dark:text-neutral-100 font-medium sm:font-semibold">
                                                علی سلمانی</h2><span
                                                class="block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400">نویسنده</span>
                                        </div>
                                    </a><a
                                        class="nc-CardAuthor flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                        href="/author/the-demo-author-slug">
                                        <div
                                            class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-base flex-shrink-0 me-4">
                                            <img alt="Truelock Alric"
                                                class="absolute inset-0 w-full h-full object-cover"
                                                src="@/assets/images/6.jpg"><span class="wil-avatar__name">F</span>
                                        </div>
                                        <div>
                                            <h2
                                                class="text-sm sm:text-base text-neutral-900 dark:text-neutral-100 font-medium sm:font-semibold">
                                                حسن محمد زاده</h2><span
                                                class="block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400">نویسنده</span>
                                        </div>
                                    </a><a
                                        class="nc-CardAuthor flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                        href="/author/the-demo-author-slug">
                                        <div
                                            class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-base flex-shrink-0 me-4">
                                            <img alt="Truelock Alric"
                                                class="absolute inset-0 w-full h-full object-cover"
                                                src="@/assets/images/6.jpg"><span class="wil-avatar__name">T</span>
                                        </div>
                                        <div>
                                            <h2
                                                class="text-sm sm:text-base text-neutral-900 dark:text-neutral-100 font-medium sm:font-semibold">
                                                محبوب حسین زاده</h2><span
                                                class="block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400">نویسنده</span>
                                        </div>
                                    </a></div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>


        <div class="bg-gray-100">
            <RelatedPosts />
        </div>
    </section>
</template>

<script setup>
import RelatedPosts from "@/components/Pages/SinglePage/Relatedposts/Related.vue";
import Bookmark from "@/components/icons/Bookmark.vue";
import Like from "@/components/icons/Heart.vue";
import Comment from "@/components/icons/Comment.vue";
import Share from "@/components/icons/Share.vue";
import InstagramIcon from "@/components/icons/social/instagram.vue";
import TwitterIcon from "@/components/icons/social/twitter.vue";
import LinkedinIcon from "@/components/icons/social/linkedin.vue";
import FacebookIcon from "@/components/icons/social/facebook.vue";
import MenuMoreIcon from "@/components/icons/MenuMoreIcon.vue";

import ReplayIcon from "@/components/icons/Replay.vue";
import DeleteIcon from "@/components/icons/Delete.vue";
import EditIcon from "@/components/icons/Edit.vue";
import ReportIcon from "@/components/icons/ReportIcon.vue";
import CopyIcon from "@/components/icons/Copy.vue";
import CommentIcon from "@/components/icons/Cm.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>