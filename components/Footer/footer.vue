<template>
  <footer class="relative overflow-hidden bg-white">
    <div class=" border-gray-200">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 w-screen xl:max-w-screen-2xl py-8 lg:py-12">
        <div class="xl:grid xl:grid-cols-2 xl:gap-8">
          <div
            class="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-2"
          >
            <div>
              <h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">
              خانواده پتومن
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href=""
                    rel="noopener noreferrer"
                    target="_blank"
                    >حامیان پت
                    <span
                      class="i-ph-arrow-up-right w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"
                    ></span
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
                      class="i-ph-arrow-up-right w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"
                    ></span
                  ></a>
                </li>
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href="/team"
                    >دامپزشکی
                  </a>
                </li>
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href="/design-kit"
                    >پت چت
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">
                ارتباط با ما
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href="/enterprise/support"
                    >پشتیبانی آنلاین
                  </a>
                </li>
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href="/enterprise/agencies"
                    >تلگرام
                  </a>
                </li>
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href="/enterprise/jobs"
                    >واتساپ
                  </a>
                </li>
                <li>
                  <a
                    class="text-sm relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    href="/enterprise/sponsors"
                    >همکاری با ما
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">
                سرویس های پتومن
              </h3>
          
            </div>
          </div>
  
        </div>
      </div>
    </div>
    <div class="border-t border-gray-100 dark:border-gray-800 bg-gray-50">
      <div
        class="mx-auto px-4 sm:px-6 lg:px-8 w-screen xl:max-w-screen-2xl py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3 !py-6"
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
              <Instagram class="fill-orange-500" /> </span
          ></a>
        </div>
        <div
          class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center"
        ></div>
        <div
          class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1"
        >
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            1403 - کپی بخش یا کل هر کدام از مطالب پت دانیم تنها با کسب مجوز
            مکتوب امکان پذیر است
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Instagram from "@/components/icons/social/instagram.vue";
</script>
