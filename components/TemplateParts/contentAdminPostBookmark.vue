<template>
    <article>
      <div
        v-if="postItem != null"
        class="relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:!bg-dark-700/10 h-full"
      >
        <div class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-5 aspect-h-3">
          <div class="post-cover">
            <div class="PostFeaturedMedia relative w-full h-full">
              <nuxt-link :to="`/${postItem.slug}`" class="block absolute inset-0" >
                <img alt="featured" class="object-cover h-full w-full" :src="`${$config.public.appBaseUrl}/storage/${postItem.image}`" />
              </nuxt-link>
              <PostTypeIcon />
            </div>
          </div>
        </div>
  
        <div class="p-4 flex flex-col space-y-3">
          <div
            class="PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:!text-neutral-200 leading-none text-xs"
          >
              <nuxt-link :to="`/${postItem.slug}`"
                class="relative flex items-center space-x-2 rtl:space-x-reverse"
              >
                <div
                    class="hidden wil-avatar relative flex-shrink-0  items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-dark-900">
                    <img alt="Falconar Agnes" class="absolute inset-0 w-full h-full object-cover"
                        src="@/assets/images/4.jpg" />
                </div>
  
                <span v-if="postItem.author != null" class="block text-neutral-700 hover:text-black dark:!text-neutral-300 dark:hover:text-white font-medium">
                  {{postItem.author.name}} {{postItem.author.family}}
                </span>
              </nuxt-link>
            <span
              class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
              >·</span
            >
              <span class="text-neutral-500 dark:!text-neutral-400 font-normal font-fd"> {{postItem.date}} </span>
          </div>
          
  
          <nuxt-link :to="`/${postItem.slug}`"
            class="card-title block text-base font-semibold text-neutral-900 dark:!text-neutral-100"
          >
            <span
              class="line-clamp-2 truncate"
              :title="postItem.title"
              >  {{postItem.title}} 
            </span>
          </nuxt-link>
  
          <div class="flex items-end justify-between mt-auto">
            <div class="flex items-center space-x-2 rtl:space-x-reverse relative">
              <CommentButton :count="postItem.comments.length" />
            </div>

            <div
                @click="showPromptLikeModal = true"
                class="flex items-center space-x-2 text-xs text-neutral-700 dark:!text-neutral-300 relative"
            >
                <BookmarkButton :isFill="true" />
            </div>
          </div>
        </div>
      </div>
  
      <promptModal
        :show="showPromptLikeModal"
        title="هشدار"
        message="آیا میخواهید این پست را از لیست ذخیره ها پاک کنید ؟"
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
  
    const result = await petdanimStore.removeBookmarkPost({
      post_id: props.postItem.id,
      post_type: props.postItem.type
    })
    if(result.status == 200) {
      isLoading.value = false
      showPromptLikeModal.value = false
  
      emit('updatePostsContent' , result.result)
      
      $toast("حذف این نوشته از ذخیره ها با موفقیت انجام شد" , {
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
  
    // emit("updatePostsContent" , result.result)
  }
  
  const handleCancel = () => {
    showPromptLikeModal.value = false
  
    
  }
  
  // onMounted(() => {
  //   console.log(props.postItem)
  // })
  </script>
  