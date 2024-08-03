<template>
  <div class="max-w-screen-md mx-auto pb-16">
    <h1 class="text-2xl py-5 border-b-1 font-bold">نظرات</h1>
    <ul v-if="commentList.length != 0" class="nc-SingleCommentLists space-y-5">
      <li v-for="comment in commentList" :key="comment.id" class="nc-CommentCard flex">
        <div
          class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4"
        >
          <img
            alt="John Doe"
            class="absolute inset-0 w-full h-full object-cover"
            :src="comment.user.profile == null ? '/2.webp' : `${appBaseUrl}/storage/avatars/${comment.user.profile}`"
          />
        </div>
        <div
          class="flex-grow flex flex-col p-4 ms-2 text-sm border border-neutral-200 rounded-xl sm:ms-3 sm:text-base dark:border-neutral-700"
        >
          <div class="relative flex items-center pe-6">
            <a
              class="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
              href="javascript:void(0)"
              > {{ comment.user.name }} </a
            ><span class="mx-2">·</span
            ><span
              class="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm"
              >{{ comment.user.created_at }}</span
            >
          </div>
          <span
            class="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300"
            > {{ comment.body }} </span
          >
          <!-- هنگام زدن دکمه پاسخ این قسمت نمایش داده میشود و دکمه های لایک و پاسخ حذف می شود -->
          <div class="Comment-Replay hidden">
            <form action="#" class="nc-SingleCommentForm flex-grow">
              <textarea
                class="block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900"
                rows="4"
                placeholder="پاسخ خود را بنویسید"
                required=""
              ></textarea>
              <div class="mt-2 space-x-3">
                <button
                  class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                  type="submit"
                >
                  ثبت</button
                ><button
                  class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
                  type="button"
                >
                  انصراف
                </button>
              </div>
            </form>
          </div>
          <!-- هنگام زدن دکمه پاسخ این قسمت نمایش داده میشود و دکمه های لایک و پاسخ حذف می شود -->
        </div>
      </li>

    </ul>
      <button
        @click="loadMore()"
        v-if="comments.length > 5"
        class="nc-Button mt-5 flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-orange-700 hover:bg-orange-600 text-orange-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 dark:bg-dark-900 w-full"
      >
        مشاهده همه نظرات (+{{ comments.length }} نظر)
      </button>
    <div></div>
  </div>
</template>

<script setup>
import {usePetdanimStore} from '~/store/petdanimStore'
import {storeToRefs} from 'pinia'

const petdanimStore = usePetdanimStore()
const {postData} = storeToRefs(petdanimStore)
const {appBaseUrl} = useRuntimeConfig().public

watch(() => postData.value.comments , (newVal , oldVal) => {
    commentList.value = newVal.slice(0,5)
})

const props = defineProps({
    comments: {
        required: true,
        type: [Array , Object]
    }
})

const commentList = ref([])

onMounted(() => {
    commentList.value = props.comments.slice(0,5)
})

const loadMore = () => {
    commentList.value = props.comments
}
</script>
