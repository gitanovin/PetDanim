<template>
  <article>
    <div
      v-if="postItem && postItem.post != null"
      class="relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:!bg-dark-700/10 h-full"
    >
      <nuxt-link :to="`/${postItem.post.slug}`" class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-5 aspect-h-3">
        <div class="post-cover">
          <div class="PostFeaturedMedia relative w-full h-full">
            <div class="block absolute inset-0">
              <img :alt="postItem.post.title" class="object-cover w-full h-[200px]" :src="`${$config.public.appBaseUrl}/storage/${postItem.post.image}`" />
            </div>
            <PostTypeIcon />
          </div>
        </div>
      </nuxt-link>

      <nuxt-link :to="`/${postItem.post.slug}`" class="p-4 flex flex-col space-y-3">
        <div
          class="PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:!text-neutral-200 leading-none text-xs"
        >
            <div
              class="relative flex items-center space-x-2 rtl:space-x-reverse"
            >
              <div
                  class="hidden wil-avatar relative flex-shrink-0  items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-dark-900">
                  <img alt="Falconar Agnes" class="absolute inset-0 w-full h-full object-cover"
                      :src="postItem.post.author.profile == null ? '/2.webp' :`${appBaseUrl}/storage/admin/${postItem.post.author.profile}`" />
              </div>

              <span v-if="postItem.post.author != null" class="block text-neutral-700 hover:text-black dark:!text-neutral-300 dark:hover:text-white font-medium">
                {{postItem.post.author.name}} {{postItem.post.author.family}}
              </span>
            </div>
          <span
            class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
            >·</span
          >
            <span class="text-neutral-500 dark:!text-neutral-400 font-normal font-fd"> {{postItem.post.date}} </span>
        </div>
        

        <h3
          class="card-title block text-base font-semibold text-neutral-900 dark:!text-neutral-100"
        >
          <span
            class="line-clamp-2 truncate"
            :title="postItem.post.title"
            >  {{postItem.post.title}} 
          </span>
        </h3>

        <div class="flex items-end justify-between mt-auto">
          <div class="flex items-center space-x-2 rtl:space-x-reverse relative">
            <LikeButton @click="showPromptLikeModal = true" :isRed="true" :count="0" />
            <CommentButton :count="0" />
          </div>
        </div>
      </nuxt-link>
    </div>

    <promptModal
      :show="showPromptLikeModal"
      title="هشدار"
      message="آیا میخواهید این پست را از لیست علاقه مندیها پاک کنید ؟"
      @confirm="handleConfirm"
      @cancel="handleCancel"
      :isLoading="isLoading"
    />
  </article>
</template>

<script setup>
import LikeButton from "@/components/TemplateParts/MetaAction/Like.vue";
import CommentButton from "@/components/TemplateParts/MetaAction/Comment.vue";
import PostTypeIcon from "@/components/TemplateParts/PostType/PostCard.vue";
import BookmarkButton from "@/components/TemplateParts/MetaAction/Bookmark.vue";
import promptModal from '@/components/TemplateParts/Modal/promptModal.vue'
import {usePetdanimStore} from '@/store/petdanimStore.js'
const {$toast} = useNuxtApp()

const petdanimStore = usePetdanimStore()
const {appBaseUrl} = useRuntimeConfig().public

const isLoading = ref(false)
const showPromptLikeModal = ref(false)
const props = defineProps({
  postItem: {
    required: true,
    type: [Array , Object]
  }
})
const emit = defineEmits([
  'updatePostsContent'
])

const handleConfirm = async () => {
  isLoading.value = true

  const result = await petdanimStore.removeFavoritePost({post_id: props.postItem.post_id})
  if(result.status == 200) {
    isLoading.value = false
    showPromptLikeModal.value = false

    emit('updatePostsContent' , result.result)
    
    $toast(result.message , {
        "theme": "colored",
        "type": "success"
    });
  }else {
    isLoading.value = false
    showPromptLikeModal.value = false

    $toast(result.message , {
        "theme": "colored",
        "type": "error"
    });
  }
}

const handleCancel = () => {
  showPromptLikeModal.value = false
}

// onMounted(() => {
//   console.log(props.postItem)
// })
</script>
