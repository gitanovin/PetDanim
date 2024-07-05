<template>
    <section>
        <div class="loading-box" v-if="postDetail == null">
            <div class="loader" ></div>
        </div>
        <EditPost 
            v-if="postDetail!= null" 
            :postDetail="postDetail"
            :postTags="postTags"
        />
    </section>
</template>


<script setup>
import EditPost from "@/components/Dashboard/EditPost.client.vue";
import {usePetdanimStore} from '@/store/petdanimStore.js'
import {useRoute , useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
const postDetail = ref(null)
const postTags =ref([]);

const petdanimStore = usePetdanimStore()

definePageMeta({
  layout: 'user-profile',  
  middleware: 'user-auth'
})

onMounted(async () => {
    var reg = new RegExp('^[0-9]');
    if(reg.test(route.params.id) == false) {
        router.push("/profile/posts")
    }else {
        const result = await petdanimStore.getUserPost({post_id: route.params.id})
        if(result.status == 200) {
            if(result.result.tags.length != 0) {
                result.result.tags.forEach(tag => {
                    postTags.value.push(tag.name)
                });
            }

            postDetail.value = result.result
        }
    }
})



</script>


<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: 
    radial-gradient(farthest-side,#f97316 94%,#0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%,#f97316);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation: l13 1s infinite linear;
}
@keyframes l13{ 
  100%{transform: rotate(1turn)}
}

.loading-box{
    width: 100%;
    height:600px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #f9f9f9;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    -webkit-animation: .5s shine linear infinite;
            animation: .5s shine linear infinite;
}

@-webkit-keyframes shine {
  to {
    background-position-x: -200%;
  }
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>