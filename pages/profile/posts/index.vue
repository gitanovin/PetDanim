<template>
    <section>
        <Posts
         @removePost="(postIndex) => removePost(postIndex)"
         :postsList="postsList"
         :postVisitCount="postVisitCount"
         :postVerifiedCount="postVerifiedCount"
         :waitingVerifiedPostCount="waitingVerifiedPostCount"
         :rejectPostCount="rejectedPostCount"
        />
    </section>
</template>


<script setup>
import Posts from "@/components/Dashboard/Posts.vue";
import { usePetdanimStore } from "~/store/petdanimStore";

const petdanimStore = usePetdanimStore()

definePageMeta({
  layout: 'user-profile',  
  middleware: 'user-auth'
})

const postsList = ref([])
const postVisitCount = ref(0)
const postVerifiedCount = ref(0)
const waitingVerifiedPostCount = ref(0)
const rejectedPostCount = ref(0)

onMounted(() => {
  getPosts()
})

const getPosts = async () => {
  const result = await petdanimStore.getUserPosts()
  if(result.status == 200) {
    postsList.value = result.result.posts
    postVisitCount.value = result.result.postVisitCount
    postVerifiedCount.value = result.result.postVerifiedCount
    waitingVerifiedPostCount.value = result.result.waitingVerifiedPostCount
    rejectedPostCount.value = result.result.rejectedPostCount
  }
}

const removePost = (postIdArray) => {
  const filteredPost = postsList.value.filter((val , index) => {
    return !postIdArray.includes(val.id)
  })
  postsList.value = filteredPost
}


</script>