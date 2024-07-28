<template>
  <footer v-if="footerData != null" class="relative z-0 dark:!text-dark-700 dark:!bg-dark-800">
    <div class="footer lg:px-0 px-8  mx-auto w-full max-w-7xl">
      <div class="content pb-10 pt-10">
        <div class="mb-12 relative">
          <span
            class="absolute border-t border-1 sm:top-2/4 top-5 trasform sm:translate-y-2/4 dark:border-dark-700/20 border-chambray-100 w-full z-0 right-0"
          ></span>
          <div
            class="flex items-center justify-between sm:flex-row flex-col relative z-10"
          >
            <div
              class="logo w-fit-content dark:!bg-dark-800 sm:px-0 bg-white px-5 sm:pl-8 sm:mb-0 mb-6 text-3xl text-orange-500 font-extrabold"
            >
            پتومن
            </div>

            <ul
              class="flex dark:!bg-dark-800 bg-white sm:pr-8 self-center"
            >
              <li>
                <a
                  href="https://www.youtube.com/channel/"
                  rel="nofollow"
                  class="group flex items-center rounded justify-center w-10 h-10 dark:hover:bg-orange-970 dark:!bg-dark-900/50 dark:bg-opacity-25 bg-orange-50 group hover:bg-orange-200 transition duration-300 ease-linear"
                >
                <YoutubeIcon  class="w-6 fill-primary-500 dark:!fill-dark-700 "/>
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="https://www.facebook.com/"
                  class="group flex items-center rounded justify-center w-10 h-10 dark:hover:bg-orange-970 dark:!bg-dark-900/50 dark:bg-opacity-25 bg-orange-50 group hover:bg-orange-200 transition duration-300 ease-linear"
                  rel="nofollow"
                >
                 <FacebookIcon  class="w-6 fill-primary-500 stroke-primary text-primary dark:!fill-dark-700 "/>
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="https://twitter.com/"
                  class="group flex items-center rounded justify-center w-10 h-10 dark:hover:bg-orange-970 dark:!bg-dark-900/50 dark:bg-opacity-25 bg-orange-50 group hover:bg-orange-200 transition duration-300 ease-linear"
                  rel="nofollow"
                >
                 <TwitterIcon  class="w-6 fill-primary-500 dark:!fill-dark-700  "/>
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="https://www.instagram.com/"
                  class="group flex items-center rounded justify-center w-10 h-10 dark:hover:bg-orange-970 dark:!bg-dark-900/50 dark:bg-opacity-25 bg-orange-50 group hover:bg-orange-200 transition duration-300 ease-linear"
                  rel="nofollow"
                >
                <Instagram class="w-6 stroke-primary dark:!stroke-dark-700 stroke-orange-500  fill-none "/>
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="https://t.me/roocketir"
                  class="group flex items-center rounded justify-center w-10 h-10 dark:hover:bg-orange-970 dark:!bg-dark-900/50 dark:bg-opacity-25 bg-orange-50 group hover:bg-orange-200 transition duration-300 ease-linear  hover:fill-white hover:text-white"
                  rel="nofollow"
                >
                 <TelegramIcon class="w-6 fill-primary-500 dark:!fill-dark-700  "/>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="grid md:grid-cols-9 grid-cols-1 xl:gap-20 gap-7">
          <div class="md:col-span-4">
            <div
              class="relative flex flex-col md:items-start md:mx-0 mx-auto w-fit-content items-center"
            >
              <h3
                class="text-xl relative font-bold dark:text-white text-biscay-700 mb-4 z-10"
              >
                درباره پت دانیم
              </h3>
              <span
                class="z-0 w-8 h-8 flex absolute bg-orange-500 opacity-20 top-0 rounded-full -right-2 dark:!bg-dark-700"
              ></span>
            </div>

            <div class="flex relative">
              <span
                class="md:flex hidden absolute top-1 right-0 w-1 h-1 mt-2 bg-orange-500 opacity-30 rounded-full"
              ></span>
              <div class="md:mr-2 md:text-right text-center">
                <p
                  class="text-base mb-2 md:w-10/12 w-full  leading-7 dark:text-gray-920 text-biscay-650 text-justify"
                >
                  {{ footerData.aboutus }}
                </p>

                <a
                  href="/aboutus"
                  class="inline-flex items-center group dark:hover:text-orange-60 dark:!text-dark-700 text-orange-700 text-13 font-medium transition transform duration dark:hover:text-gray-210-20 hover:text-dark-700 md:mx-0 mx-auto"
                >
                  مشاهده بیشتر
                  <svg
                    class="mr-1"
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      opacity="0.4"
                      d="M10.4527 4.15949L13.3686 3.90161C14.023 3.90161 14.5536 4.43735 14.5536 5.09812C14.5536 5.75889 14.023 6.29463 13.3686 6.29463L10.4527 6.03674C9.93928 6.03674 9.52308 5.61649 9.52308 5.09812C9.52308 4.57888 9.93928 4.15949 10.4527 4.15949"
                    ></path>
                    <path
                      fill="currentColor"
                      class="fill-current duration-200 transition dark:group-hover:text-orange-60 dark:text-orange-600 text-orange-500 dark:hover:text-gray-210-700 grou-hover:text-dark-700"
                      d="M0.660621 4.20689C0.706196 4.16087 0.87646 3.96637 1.0364 3.80487C1.96941 2.79331 4.40555 1.13921 5.67995 0.632993C5.87343 0.552242 6.36272 0.38032 6.62499 0.368164C6.87523 0.368164 7.11429 0.42634 7.34216 0.540954C7.6268 0.701589 7.85381 0.95513 7.97936 1.25382C8.05933 1.46048 8.18488 2.08131 8.18488 2.09259C8.30957 2.77073 8.3775 3.87346 8.3775 5.09255C8.3775 6.25259 8.30957 7.31017 8.20724 7.99959C8.19606 8.01175 8.07051 8.78192 7.93379 9.04589C7.68355 9.52866 7.19426 9.82735 6.67057 9.82735H6.62499C6.28361 9.81606 5.56644 9.5165 5.56644 9.50608C4.35998 8.99987 1.98145 7.42565 1.02522 6.37936C1.02522 6.37936 0.755212 6.11019 0.638263 5.94261C0.455961 5.70122 0.36481 5.40253 0.36481 5.10383C0.36481 4.77041 0.46714 4.46043 0.660621 4.20689"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

          
          </div>

          <div class="md:col-span-2">
            <div
              class="relative flex md:items-start md:mx-0 mx-auto w-fit-content items-center"
            >
              <h3
                class="text-xl relative font-bold dark:text-white text-biscay-700 mb-4 z-10"
              >
             خانواده ما
              </h3>
              <span
                class="z-0 w-4 h-4 flex absolute bg-orange-700 opacity-20 top-0 rounded-full -right-2 dark:!bg-dark-700 dark:!bg-dark-700"
              ></span>
            </div>
            <ul v-if="linkduni != null" class="flex flex-col md:items-start items-center">
              <li v-for="(link , index) in linkduni" :key="index" class="mb-3 last:mb-0 flex items-center">
                <span
                  class="md:flex hidden w-1 h-1 ml-2 mb-1 dark:text-gray-940 bg-orange-700 opacity-30 rounded-full"
                ></span>
                <a
                  class="text-base text-biscay-650 dark:text-gray-920 transition transform dark:hover:text-orange-450 hover:text-dark-700 duration-200 ease-linear"
                  href="/terms"
                  >
                  {{link.title}} 
                </a>
              </li>
            </ul>
          </div>

          <div class="md:col-span-3">
            <div
              class="relative flex md:items-start md:mx-0 mx-auto w-fit-content items-center"
            >
              <h3
                class="text-xl relative font-bold dark:tew dark:text-white text-biscay-700 mb-4 z-10"
              >
                ارتباط با ما
              </h3>
              <span
                class="z-0 w-4 h-4 flex absolute bg-orange-700 opacity-20 top-0 rounded-full -right-2 dark:!bg-dark-700 dark:!bg-dark-700"
              ></span>
            </div>

            <ul>
              <li class="flex items-center justify-between mb-7 last:mb-0">
                <span class="flex items-center">
                  <span class="relative ml-3">
                    <i
                      class="flex w-5 h-5 bg-orange-700 opacity-20 rounded-full dark:!bg-dark-700"
                    ></i>

                    <svg
                      class="dark:text-orange-600 text-orange-500 absolute -top-1 -left-2"
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5632 4.17184C15.4183 3.54105 15.2294 3.0782 15.0064 2.72729C14.2794 3.41662 13.3594 4.25301 12.3603 4.98727C10.9828 5.99965 9.61574 6.69415 8.50008 6.69415C7.38443 6.69415 6.01733 5.99965 4.63986 4.98727C3.64079 4.25301 2.72075 3.41662 1.99377 2.72729C1.77081 3.0782 1.58187 3.54105 1.437 4.17184C1.43013 4.20176 1.42338 4.23196 1.41675 4.26247C2.07618 4.86961 2.86033 5.55149 3.70121 6.1695C5.10702 7.2027 6.83246 8.18184 8.50008 8.18184C10.1677 8.18184 11.8931 7.2027 13.299 6.1695C14.1398 5.55149 14.924 4.86961 15.5834 4.26246C15.5768 4.23196 15.57 4.20176 15.5632 4.17184Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 7.5C0 13.6762 1.50025 15 8.5 15C15.4997 15 17 13.6762 17 7.5C17 1.32375 15.4997 0 8.5 0C1.50025 0 0 1.32375 0 7.5ZM8.5 13.75C6.7824 13.75 5.49884 13.6672 4.5262 13.4764C3.56964 13.2889 3.0028 13.0139 2.62683 12.6822C2.25086 12.3505 1.9393 11.8503 1.72671 11.0063C1.51055 10.1481 1.41667 9.01553 1.41667 7.5C1.41667 5.98447 1.51055 4.85192 1.72671 3.99371C1.9393 3.14968 2.25086 2.64953 2.62683 2.31779C3.0028 1.98605 3.56964 1.71115 4.5262 1.52357C5.49884 1.33284 6.7824 1.25 8.5 1.25C10.2176 1.25 11.5012 1.33284 12.4738 1.52357C13.4304 1.71115 13.9972 1.98605 14.3732 2.31779C14.7491 2.64953 15.0607 3.14968 15.2733 3.99371C15.4895 4.85192 15.5833 5.98447 15.5833 7.5C15.5833 9.01553 15.4895 10.1481 15.2733 11.0063C15.0607 11.8503 14.7491 12.3505 14.3732 12.6822C13.9972 13.0139 13.4304 13.2889 12.4738 13.4764C11.5012 13.6672 10.2176 13.75 8.5 13.75Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>

                  <span
                    class="text-sm font-medium text-dark-550 dark:text-gray-920"
                  >
                    ایمیل:
                  </span>
                </span>
                <a
                  class="dark:text-white text-biscay-650 dark:hover:text-orange-450 font-medium text-sm transition transform hover:text-dark-700 duration-200 ease-linear"
                  href="mailto:info@petoman.com"
                  >{{ footerData.email }}</a
                >
              </li>
              <li class="flex items-center justify-between mb-7 last:mb-0">
                <span class="flex items-center">
                  <span class="relative ml-3">
                    <i
                      class="flex w-5 h-5 bg-orange-700 opacity-20 rounded-full dark:!bg-dark-700"
                    ></i>
                    <svg
                      class="dark:text-orange-600 text-orange-500 absolute -top-1 -left-2"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.14715 9.85653L8.80585 8.19987M7.14715 9.85653C5.93121 11.0732 0.81617 8.93438 1.73474 6.22947C2.6533 3.52456 12.7125 0.221534 14.7459 2.25616C16.7793 4.29079 13.4633 14.3879 10.772 15.2723C8.08068 16.1567 5.93121 11.0732 7.14715 9.85653Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>

                  <span
                    class="text-sm font-medium text-dark-550 dark:text-gray-920"
                  >
                    تلفن :
                  </span>
                </span>
                <a
                  class="dark:text-white text-biscay-650 dark:hover:text-orange-450 font-medium text-sm transition ltr transform hover:text-dark-700 duration-200 ease-linear"
                  href="javascript:void(0)"
                  >{{footerData.telphone}}</a
                >
              </li>
            </ul>

            <div class="flex items-center mt-9 space-x-reverse space-x-2">
              <div class="cursor-pointer">
     
              </div>

              <div class="cursor-pointer">

              </div>
            </div>
          </div>
        </div>

        <div class="relative flex md:justify-start justify-center mt-8   px-2 lg:px-0">
          <p
            class="dark:!bg-dark-800 dark:text-gray-970 bg-white pl-3 text-center relative z-10 inline-block text-xs text-dark-700"
          >
            1403 - کپی بخش یا کل هر کدام از مطالب پت دانیم تنها با کسب مجوز
            مکتوب امکان پذیر است
          </p>

          <span
            class="absolute border-t border-1 top-2/4 trasform translate-y-2/4 dark:border-orange-980 border-dark-700/20 w-full z-0 right-0"
          ></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Instagram from "@/components/icons/social/instagram.vue";
import TelegramIcon from "@/components/icons/social/telegram.vue";
import FacebookIcon from "@/components/icons/social/facebook.vue";
import YoutubeIcon from "@/components/icons/social/youtube.vue";
import TwitterIcon from "@/components/icons/social/twitter.vue";

const footerData = ref(null)
const linkduni = ref(null)
const {appBaseUrl} = useRuntimeConfig().public

const getHeaderMenu = async () => {
  const { data } = await useFetch(`${appBaseUrl}/api/mag/home/get-footer`)
  const dataJson = data.value
  if(dataJson.status == 200) {
    footerData.value = dataJson.result.footer
    linkduni.value = dataJson.result.linkduni
  }
}

getHeaderMenu()
</script>
