<template>
  <form action="#" method="POST" class="space-y-6">
    <div>
      <div class="relative">
        <input
          type="text"
          id="ok"
          aria-describedby="mobile"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900  rounded-lg border-1 appearance-none dark:!text-white dark:!border-dark-700/20 border-gray-100 dark:!focus:!border-dark-700/20 focus:outline-none focus:ring-0 focus:border-red-600 peer bg-white dark:!bg-dark-800"
          placeholder="شماره موبایل یا پست الکترونیک"
        />
        <div
          class="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none"
        >
          <i
            class="fa-duotone fa-mobile text-orange-500 h-5 w-5 flex leading-[1px] pr-1"
          ></i>
        </div>
        <!-- <label for="outlined_error" class="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto w-2/4 py-1">شماره موبایل</label> -->
        <label
          for="ok"
          class="absolute text-sm text-gray-600 dark:!text-dark-700 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  bg-white  dark:!bg-dark-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto w-[90%] py-1 "
          >شماره موبایل یا پست الکترونیک</label
        >
      </div>
      <p
        id="outlined_error_help"
        class="hidden mt-2 text-xs text-red-600 dark:!text-red-400"
      >
        <span class="font-medium"
          >لطفا شماره موبایل را به درستی وارد کنید
        </span>
      </p>
    </div>

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md border border-transparent bg-orange-500 py-4 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-0 focus:ring-orange-500 focus:ring-offset-2 "
      >
        ثبت نام در پت دانیم
      </button>
      <div class="text-link terms text-center mt-4 text-sm">ثبت نام در پت دانیم به منزله موافقت با <a class="text-orange-500" target="_blank" href="/terms">قوانین</a> است</div>
    </div>
  </form>
</template>
