<template>
  <form action="#" method="POST" class="space-y-6">
    <div>
      <div class="relative">
        <div
          class="flex flex-row items-center justify-between mx-auto w-full max-w-sm"
        >
          <div class="w-16 h-16">
            <input
              class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-orange-700 dark:!bg-dark-800 dark:!border-dark-700/20"
              type="text"
              name=""
              id=""
            />
          </div>
          -
          <div class="w-16 h-16">
            <input
              class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-orange-700  dark:!bg-dark-800 dark:!border-dark-700/20"
              type="text"
              name=""
              id=""
            />
          </div>
          -
          <div class="w-16 h-16">
            <input
              class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-orange-700  dark:!bg-dark-800 dark:!border-dark-700/20"
              type="text"
              name=""
              id=""
            />
          </div>
          -
          <div class="w-16 h-16">
            <input
              class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-orange-700  dark:!bg-dark-800 dark:!border-dark-700/20"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
      <p
        id="outlined_error_help"
        class="hidden mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span class="font-medium">کد احراز هویت اشتباه است </span>
      </p>
    </div>

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md border border-transparent bg-orange-500 py-4 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-0 focus:ring-orange-500 focus:ring-offset-2"
      >
        تایید
      </button>

      <div
        class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500 mt-3"
      >
        <p>
          <strong class="pl-2 text-orange-500 font-fd">1:45</strong
          ><span class="text-sm font-medium pl-2"
            >مانده تا ارسال مجدد کد تایید</span
          >
        </p>
        <a
          class="flex flex-row items-center text-orange-600"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          >ارسال مجدد</a
        >
      </div>
    </div>
  </form>
</template>
