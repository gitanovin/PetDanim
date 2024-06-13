<template>
    <div class="w-full">
        <div class="border border-gray-200 dark:border-dark-700/20 rounded-lg card  dark:bg-dark-800">
            <div
                class="relative pb-4 m-0 overflow-hidden dark:text-gray-300 text-gray-700 dark:border-dark-700/20  bg-transparent border-b shadow-none bg-clip-border border-b-gray-200 px-6 py-6">
                <h6
                    class="flex items-center gap-1 dark:text-gray-300 antialiased font-semibold leading-normal text-gray-600 font-fa">

                    ویرایش حساب
                </h6>
            </div>


            <div class="flex flex-col tabs">
                <div class="p-4 tab-content sm:p-5">
                    <div class="space-y-5">
                        <div class="grid lg:grid-cols-2 gap-4">
                            <div class="relative mt-4 lg:w-full justify-start flex">
                                <div
                                    class="flex items-center justify-center w-full max-w-[150px] px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md dark:border-dark-700">
                                    <div class="space-y-1 text-center">
                                        <div class="w-12 h-12 mx-auto text-4xl text-gray-400">
                                            <ImageIcon class="dark:stroke-dark-700 stroke-gray-700 w-12 h-12" />
                                        </div>
                                        <div class="flex text-sm text-gray-600">
                                            <label for="page-file-upload"
                                                class="relative mx-auto font-medium text-hamian rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-hamian focus-widuotone:ring-offset-2 hover:text-hamian dark:text-gray-300"><span>تصویر
                                                    پروفایل</span><input id="page-file-upload" type="file"
                                                    class="sr-only" /></label><!---->
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div></div>

                            <div class="relative mt-4">
                                <label for="last-name"
                                    class="flex pb-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <span>نام و نام خانوادگی</span>
                                </label>
                                <div class="mt-1 rounded-md">
                                    <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                        <div
                                            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <i
                                                class="fa-duotone fa-duotone fa-user text-hamian h-5 w-5 flex leading-[1px] pr-1"></i>
                                        </div>
                                        <input type="text"
                                            class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-gray-500 focus:ring-gray-500 sm:text-sm dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300"
                                            placeholder="نام و نام خانوادگی " />
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-4">
                                <label for="last-name"
                                    class="flex pb-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <span>نام کاربری </span>
                                </label>
                                <div class="mt-1 rounded-md">
                                    <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                        <div
                                            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <i
                                                class="fa-duotone fa-duotone fa-pen-to-square text-hamian h-5 w-5 flex leading-[1px] pr-1"></i>
                                        </div>
                                        <input type="text"
                                            class="block w-full pl-10 py-4 border-gray-300 rounded-md   ltr focus:border-gray-500 focus:ring-gray-500 sm:text-sm dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300"
                                            placeholder="bapu" />
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-4">
                                <label for="last-name"
                                    class="flex pb-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <span> شماره موبایل </span>
                                </label>
                                <div class="mt-1 rounded-md">
                                    <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                        <div
                                            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <i
                                                class="fa-duotone  fa-pen-to-square text-hamian h-5 w-5 flex leading-[1px] pr-1"></i>
                                        </div>
                                        <input type="text"
                                            class="block w-full pl-10 py-4 border-gray-300 rounded-md   ltr focus:border-gray-500 focus:ring-gray-500 sm:text-sm dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300"
                                            placeholder="09030264300" />
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-4">
                                <label for="last-name"
                                    class="flex pb-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <span>ایمیل </span>
                                </label>
                                <div class="mt-1 rounded-md">
                                    <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                        <div
                                            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <i
                                                class="fa-duotone fa-duotone fa-envelope text-hamian h-5 w-5 flex leading-[1px] pr-1"></i>
                                        </div>
                                        <input type="text"
                                            class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-gray-500 focus:ring-gray-500 sm:text-sm dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300"
                                            placeholder="your@email.com" />
                                    </div>
                                </div>
                            </div>



                            <div class="relative mt-4">
                                <password size="24" auto="true" characters="a-z,A-Z,0-9,#"></password>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative w-full px-6 border-t dark:border-dark-700/20">
                <button type="button"
                    class="box-border relative z-0 inline-flex items-center justify-center p-3 px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-green-500 rounded-md cursor-pointer group ease focus:outline-none w-full my-8 max-w-sm">
                    <span
                        class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                        class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                        class="relative z-20 flex items-center justify-center w-full text-center"><i
                            class="pl-2 text-2xl text-white fa-duotone fa-user-edit"></i><span class="w-full">بروز رسانی
                            اطلاعات</span></span>
                </button>
            </div>



        </div>
    </div>
</template>

<script>
import ImageIcon from "@/components/icons/ImageIcon.vue";
import password from "./Password.vue";
export default {
    components: {
        password, ImageIcon
    },
    data() {
        return {
            useRealInput: false,
            value: "",
        };
    },

    mounted: function () {
        if (this.auto == "true" || this.auto == 1) {
            this.generate();
        }
    },


};
</script>
