<template>
  <div
    class="flex-shrink-0 dark:bg-dark-800 py-8 lg:ml-3 rounded-lg border dark:border-dark-700/20"
  >
    <ul class="text-base space-y-2 text-neutral-700 dark:text-neutral-400 px-4">
      <li>
        <nuxt-link
          to="/profile"
          :class="$route.path == '/profile' ? 'text-neutral-800 bg-neutral-100 dark:bg-dark-900 dark:text-neutral-100' : ''"
          class="px-6 py-3 font-medium rounded-lg flex items-center hover:text-neutral-800 hover:bg-neutral-100 dark:hover:bg-dark-900 dark:hover:text-neutral-100"
          
          ><span class="w-8 me-2 text-lg"
            ><i class="fa-solid fa-gauge"></i></span
          ><span> پیشخوان</span></nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/profile/create-post"
          :class="$route.path == '/profile/create-post' ? 'text-neutral-800 bg-neutral-100 dark:bg-dark-900 dark:text-neutral-100' : ''"
          class="px-6 py-3 font-medium rounded-lg flex items-center hover:text-neutral-800 hover:bg-neutral-100 dark:hover:bg-dark-900 dark:hover:text-neutral-100"
          
          ><span class="w-8 me-2 text-lg"><i class="fa fa-edit"></i></span
          ><span> ایجاد نوشته جدید</span></nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/profile/posts"
          :class="$route.path == '/profile/posts' ? 'text-neutral-800 bg-neutral-100 dark:bg-dark-900 dark:text-neutral-100' : ''"
          class="px-6 py-3 font-medium rounded-lg flex items-center hover:text-neutral-800 hover:bg-neutral-100 dark:hover:bg-dark-900 dark:hover:text-neutral-100"
          
          ><span class="w-8 me-2 text-lg"
            ><i class="fa-solid fa-newspaper"></i></span
          ><span> نوشته های من</span></nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/profile/bookmarks"
          :class="$route.path == '/profile/bookmarks' ? 'text-neutral-800 bg-neutral-100 dark:bg-dark-900 dark:text-neutral-100' : ''"
          class="px-6 py-3 font-medium rounded-lg flex items-center hover:text-neutral-800 hover:bg-neutral-100 dark:hover:bg-dark-900 dark:hover:text-neutral-100"
          ><span class="w-8 me-2 text-lg"
            ><i class="fa-solid fa-bookmark"></i></span
          ><span> ذخیره شده ها </span></nuxt-link
        >
      </li>

      <li>
        <nuxt-link
          to="/profile/followings"
          :class="$route.path == '/profile/followings' ? 'text-neutral-800 bg-neutral-100 dark:bg-dark-900 dark:text-neutral-100' : ''"
          class="px-6 py-3 font-medium rounded-lg flex items-center hover:text-neutral-800 hover:bg-neutral-100 dark:hover:bg-dark-900 dark:hover:text-neutral-100"
          
          ><span class="w-8 me-2 text-lg"
            ><i class="fa-solid fa-user-check"></i></span
          ><span>دنبال می کنید </span></nuxt-link
        >
      </li>

      <li>
        <nuxt-link
          to="/profile/followers"
          :class="$route.path == '/profile/followers' ? 'text-neutral-800 bg-neutral-100 dark:bg-dark-900 dark:text-neutral-100' : ''"
          class="px-6 py-3 font-medium rounded-lg flex items-center hover:text-neutral-800 hover:bg-neutral-100 dark:hover:bg-dark-900 dark:hover:text-neutral-100"
          
          ><span class="w-8 me-2 text-lg"><i class="fa-solid fa-user"></i></span
          ><span>دنبال می کنند </span></nuxt-link
        >
      </li>

      <li>
        <nuxt-link
          to="/profile/edit-profile"
          :class="$route.path == '/profile/edit-profile' ? 'text-neutral-800 bg-neutral-100 dark:bg-dark-900 dark:text-neutral-100' : ''"
          class="px-6 py-3 font-medium rounded-lg flex items-center hover:text-neutral-800 hover:bg-neutral-100 dark:hover:bg-dark-900 dark:hover:text-neutral-100"
          
          ><span class="w-8 me-2 text-lg"><i class="fa fa-user-edit"></i></span
          ><span> ویرایش حساب</span></nuxt-link
        >
      </li>

      <li class="border-t border-neutral-200 dark:border-dark-700/20 my-4"></li>
      <li @click="openModalPrompt()">
        <a href="javascript:void(0)" class="flex items-center px-6 py-3 font-medium text-red-500" 
          ><span class="w-8 me-2 text-lg"
            ><i class="fa-solid fa-right-from-bracket"></i></span
          >خروج</a
        >
      </li>
    </ul>


    <promptModal :show="showPromptLikeModal" title="هشدار" message="آیا میخواهید از حساب کاربری خود خارج شوید؟"
      @confirm="handleConfirm" @cancel="handleCancel" :isLoading="isLoading" />
  </div>
</template>

<script setup>
import promptModal from '@/components/TemplateParts/Modal/promptModal.vue'
import { usePetdanimStore } from '~/store/petdanimStore.js'
import {useRouter , useRoute} from 'vue-router'

const isLoading = ref(false)
const showPromptLikeModal = ref(false)
const { $toast } = useNuxtApp()
const petdanimStore = usePetdanimStore()
const router = useRouter()

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
