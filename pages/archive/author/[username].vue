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
import { watch } from 'vue';


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


watch(authorData, (newValue) => {
  if (newValue) {
    useHead({
      title: `پروفایل نویسنده: ${newValue.name}`,
      meta: [
        { name: 'title', content: `پروفایل نویسنده: ${newValue.name}` },
        { name: 'description', content: newValue.biography },
        { name: 'keywords', content: `${newValue.name}, تخصص‌ها, مقالات نویسنده` },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `پروفایل نویسنده: ${newValue.name}` },
        { property: 'og:description', content: newValue.biography },
        { property: 'og:image', content: newValue.profile == null ? `/2.webp` : `${appBaseUrl}/storage/avatars/${newValue.profile}` },
        { property: 'og:url', content: `http://localhost:3000/archive/author/${newValue.username}` },
        { property: 'og:type', content: 'profile' },
        { property: 'og:locale', content: 'fa_IR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `پروفایل نویسنده: ${newValue.name}` },
        { name: 'twitter:description', content: newValue.biography },
        { name: 'twitter:image', content: newValue.profile == null ? `/2.webp` : `${appBaseUrl}/storage/avatars/${newValue.profile}` },
        { name: 'twitter:site', content: '@YourTwitterHandle' },
      ],
      link: [
        { rel: 'canonical', href: `http://localhost:3000/archive/author/${newValue.username}` }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": newValue.name,
            "description": newValue.biography,
            "url": `http://localhost:3000/archive/author/${newValue.username}`,
            "image": newValue.profile == null ? `/2.webp` : `${appBaseUrl}/storage/avatars/${newValue.profile}`,
          })
        }
      ]
    });
  }
});

const getAuthorDetail = async () => {
  const { data } = await useFetch(`${appBaseUrl}/api/mag/author/get` , {
    params: {
      username: route.params.username
    }
  })

  if(data.value.status == 200) {
      setTimeout(() => {
        showLoading.value = false
      }, 500);
      authorData.value = data.value.result
  }
}

getAuthorDetail()


</script>
