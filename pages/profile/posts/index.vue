<template>
    <section>
        <Posts
         @removePost="(postIndex) => removePost(postIndex)"
         :postsList="postsList"
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

onMounted(() => {
  getPosts()
})

const getPosts = async () => {
  const result = await petdanimStore.getUserPosts()
  if(result.status == 200) {
    postsList.value = result.result
  }
}

const removePost = (postIdArray) => {
  const filteredPost = postsList.value.filter((val , index) => {
    return !postIdArray.includes(val.id)
  })
  postsList.value = filteredPost
}


</script>