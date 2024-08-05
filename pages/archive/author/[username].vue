<template>
  <section>
    <Loading :isShow="showLoading" />
    <Author 
      v-if="authorData != null && showLoading == false"
      :authorData="authorData"
    />
  </section>

</template>

<script setup>
import Loading from '@/components/Loading/index.vue'
import Author from "~/components/TemplateParts/Author/author.vue";
import {useRoute , useRouter} from 'vue-router'

const {appBaseUrl} = useRuntimeConfig().public
const route = useRoute()
const router = useRouter()
const showLoading = ref(true)
const authorData = ref(null)

onMounted(() => {
  if(!route.params.username) {
    router.push("/")
  }
})

const getAuthorDetail = async () => {
  const {data} = await useFetch(`${appBaseUrl}/api/mag/author/get` , {
    params: {
      username: route.params.username
    }
  })
  // console.log(data)
  if(data.value.status == 200) {
      setTimeout(() => {
        showLoading.value = false
      }, 500);
      authorData.value = data.value.result
      console.log(authorData.value)
  }
}

getAuthorDetail()


</script>
