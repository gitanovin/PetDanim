<template>
  <div>
    <header
      class="bg-white/75 backdrop-blur border-b -mb-px sticky top-0 z-50 lg:mb-0 border-gray-100 text-neutral-900 dark:!border-gray-700/20 dark:!bg-dark-800 dark:!text-dark-700">
      <div class="mx-auto px-4 lg:px-0 w-full max-w-7xl flex items-center justify-between gap-3 h-[4rem]">
        <LogoHeader />
        <MenuHeader :headerData="headerData" />

        <div class="flex items-center justify-end lg:flex-1 gap-3">
          <!-- <SearchIcon /> -->
          <ThemeToggle />
          <!-- Before User Login -->
          <UserLogin class="hidden" />
          <!-- Before User Login -->

          <!-- After User Login -->
          <UserLogeded @openPrompt="openModalPrompt" />
          <!-- BAfter User Login -->

          <MenuMobile :headerData="headerData" />

          <DataHeader />
        </div>
      </div>


    </header>
    <promptModal :show="showPromptLikeModal" title="هشدار" message="آیا میخواهید از حساب کاربری خود خارج شوید؟"
      @confirm="handleConfirm" @cancel="handleCancel" :isLoading="isLoading" />
  </div>
</template>

<script setup>
import promptModal from '@/components/TemplateParts/Modal/promptModal.vue'
import LogoHeader from "~/components/Header/Logo/Logo.vue";
import MenuHeader from "~/components/Header/Menu/Menu.vue";
import UserLogeded from "~/components/Header/Profile/Profile.vue";
import UserLogin from "~/components/Header/LoginORegister/Button.vue";
import ThemeToggle from "~/components/Header/ColorMode/ThemeToggle.vue";
import SearchIcon from "~/components/Header/Search/Search.vue";
import DataHeader from "~/components/Header/Data/Data.vue";
import MenuMobile from "~/components/Header/MenuMobile/menu.vue";
import { usePetdanimStore } from '~/store/petdanimStore.js'
import { useRouter } from 'vue-router'


const router = useRouter()
const petdanimStore = usePetdanimStore()
const isLoading = ref(false)
const showPromptLikeModal = ref(false)
const { $toast } = useNuxtApp()
const headerData = ref([])
const {appBaseUrl} = useRuntimeConfig().public

const getHeaderMenu = async () => {
  const { data } = await useFetch(`${appBaseUrl}/api/mag/home/get-header-menu`)
  const dataJson = data.value
  if(dataJson.status == 200) {
    headerData.value = dataJson.result
  }
}

getHeaderMenu()

const openModalPrompt = () => {
  showPromptLikeModal.value = true
}


const handleConfirm = async () => {
  isLoading.value = true

  const result = await petdanimStore.logoutUser()
  if (result.status == 200) {
    isLoading.value = false
    showPromptLikeModal.value = false
    $toast(result.message, {
      "theme": "colored",
      "type": "success"
    });
    router.push("/")
  } else {
    isLoading.value = false
    showPromptLikeModal.value = false
    $toast(result.message, {
      "theme": "colored",
      "type": "error"
    });
  }
}

const handleCancel = () => {
  showPromptLikeModal.value = false
}


</script>
