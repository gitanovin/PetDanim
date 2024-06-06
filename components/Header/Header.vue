<template>
  <header
    class="bg-white/75 backdrop-blur border-b -mb-px sticky top-0 z-50 lg:mb-0 border-gray-100 text-neutral-900 dark:!border-gray-700/20 dark:!bg-dark-800 dark:!text-dark-700"
  >
    <div
      class="mx-auto px-4 lg:px-0 w-full max-w-7xl flex items-center justify-between gap-3 h-[4rem]"
    >
      <LogoHeader />
      <MenuHeader />

      <div class="flex items-center justify-end lg:flex-1 gap-3">
        <SearchIcon />
        <ThemeToggle />
        <!-- Before User Login -->
        <UserLogin class="hidden" />
        <!-- Before User Login -->

        <!-- After User Login -->
        <UserLogeded />
        <!-- BAfter User Login -->

        <MenuMobile />

        <DataHeader />
      </div>
    </div>

  </header>
</template>

<script setup>
import LogoHeader from "~/components/Header/Logo/Logo.vue";
import MenuHeader from "~/components/Header/Menu/Menu.vue";
import UserLogeded from "~/components/Header/Profile/Profile.vue";
import UserLogin from "~/components/Header/LoginORegister/Button.vue";
import ThemeToggle from "~/components/Header/ColorMode/ThemeToggle.vue";
import SearchIcon from "~/components/Header/Search/Search.vue";
import DataHeader from "~/components/Header/Data/Data.vue";
import MenuMobile from "~/components/Header/MenuMobile/Menu.vue";
</script>
