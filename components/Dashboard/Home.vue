<template>
    <div class="posts border border-gray-200 dark:border-dark-700/20 rounded-lg card  dark:bg-dark-800 p-4">
        <div
            class="grid gap-4 mt-4 mb-4 font-medium lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 font-fa ">
            <div class="col-span-1 row-span-1 p-6 border rounded-lg dark:border-dark-700/20">
                <div class="flex items-start content-between justify-between">
                    <div class="content-left">
                        <span class="text-sm text-gray-500 dark:text-gray-300">دنبال می کنند</span>
                        <div class="flex items-center my-1">
                            <h4 class="mb-0 ml-2 font-bold">215</h4>
                        </div>
                        <span class="text-xs text-gray-500">مجموع کاربرانی که شما را دنبال می کنند</span>
                    </div>
                    <span
                        class="flex items-center justify-center w-8 h-8 p-2  bg-orange-100 text-orange-500 rounded badge">
                        <i class="fa fa-user"></i>
                    </span>
                </div>
            </div>
            <div class="col-span-1 row-span-1 p-6 border rounded-lg dark:border-dark-700/20">
                <div class="flex items-start content-between justify-between">
                    <div class="content-left">
                        <span class="text-sm text-gray-500 dark:text-gray-300">دنبال می کنم</span>
                        <div class="flex items-center my-1">
                            <h4 class="mb-0 ml-2 font-bold">15</h4>
                        </div>
                        <span class="text-xs text-gray-500"> مجموع کاربرانی که شما دنبال می کنید </span>
                    </div>
                    <span
                        class="flex items-center justify-center w-8 h-8 p-2 text-green-500 bg-green-100 rounded badge">
                        <i class="fa-light fa-user-check"></i>
                    </span>
                </div>
            </div>
            <div class="col-span-1 row-span-1 p-6 border rounded-lg dark:border-dark-700/20">
                <div class="flex items-start content-between justify-between">
                    <div class="content-left">
                        <span class="text-sm text-gray-500 dark:text-gray-300">آمار</span>
                        <div class="flex items-center my-1">
                            <h4 class="mb-0 ml-2 font-bold">78</h4>
                        </div>
                        <span class="text-xs text-gray-500">مجموع بازدیدها از پست های شما</span>
                    </div>
                    <span class="flex items-center justify-center w-8 h-8 p-2 text-red-500 bg-red-100 rounded badge">
                        <i class="fa-light fa-chart-simple"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>