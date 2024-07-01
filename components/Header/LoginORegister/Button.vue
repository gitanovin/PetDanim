<template>
  <div
    class="relative inline-flex bg-orange-500 hover:bg-orange-600 transition-all duration-300 rounded-lg py-1 px-2"
  >
    <nuxt-link
      to="/auth/login"
      class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 inline-flex items-center text-white border-0"
    >
      <span class="flex-shrink-0 h-5 w-5" aria-hidden="true">
        <UserIcon />
      </span>
      ورود یا ثبت نام
    </nuxt-link>
  </div>
</template>

<script setup>

import UserIcon from '~/components/icons/UserIcon.vue';


</script>
