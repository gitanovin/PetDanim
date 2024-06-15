<template>
    <div class="posts border border-gray-200 dark:border-dark-700/20 rounded-lg card  dark:bg-dark-800 p-4 w-full">
        <ul class="flex flex-col space-y-4 w-full">
            <li>
                <form class="max-w-full mx-auto">
                    <label for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">جستجو</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="نام یا نام کاربری را بنویسید">
                        <button type="submit"
                            class="text-white absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">جستجو</button>
                    </div>
                </form>
            </li>
            <li
                class="flex justify-between items-center bg-white dark:bg-dark-900 p-2 rounded-lg px-4 border dark:border-dark-700/20">

                <div class="profile flex items-center">
                    <img src="@/assets/images/1.jpg" class="rounded-full w-12 h-12 ml-2">
                    <div class="flex flex-col gap-y-2">
                        <span>محبوب حسین زاده</span>
                        <span>@mahboubhosseinzadeh</span>
                    </div>
                </div>
                <div class="button">
                    <button class="follow p-4 py-1 bg-orange-500 text-white rounded-full">
                        حذف
                    </button>
                </div>
            </li>

            <li
                class="flex justify-between items-center bg-white dark:bg-dark-900 p-2 rounded-lg px-4 border dark:border-dark-700/20">

                <div class="profile flex items-center">
                    <img src="@/assets/images/1.jpg" class="rounded-full w-12 h-12 ml-2">
                    <div class="flex flex-col gap-y-2">
                        <span>محبوب حسین زاده</span>
                        <span>@mahboubhosseinzadeh</span>
                    </div>
                </div>
                <div class="button">
                    <button class="follow p-4 py-1 bg-orange-500 text-white rounded-full">
                        حذف
                    </button>
                </div>
            </li>
            <li
                class="flex justify-between items-center bg-white dark:bg-dark-900 p-2 rounded-lg px-4 border dark:border-dark-700/20">

                <div class="profile flex items-center">
                    <img src="@/assets/images/1.jpg" class="rounded-full w-12 h-12 ml-2">
                    <div class="flex flex-col gap-y-2">
                        <span>محبوب حسین زاده</span>
                        <span>@mahboubhosseinzadeh</span>
                    </div>
                </div>
                <div class="button">
                    <button class="follow p-4 py-1 bg-orange-500 text-white rounded-full">
                        حذف
                    </button>
                </div>
            </li>



        </ul>
    </div>
</template>