<template>
  <section>
    <div class="loading-box" v-if="followersList == null">
      <div class="loader"></div>
    </div>
    <emptyCard
      v-else-if="followersList.length == 0"
      title="دنبال کننده ای ندارید"
      description="با اضافه کردن نوشته های جذاب به دنبال کننده های خود بیفزایید"
      :isShowButton="true"
      :buttonData="{
        text: 'افزودن نوشته',
        link: '/profile/create-post',
      }"
    />
    <Followers
      v-else
      :followersList="followersList"
      @updateFollowers="(followers) => updateFollowers(followers)"
    />
  </section>
</template>

<script setup>
import emptyCard from "@/components/Dashboard/emptyCard.vue";
import Followers from "@/components/Dashboard/Followers.vue";
import { usePetdanimStore } from "@/store/petdanimStore.js";

const petdanimStore = usePetdanimStore();

const followersList = ref(null)

onMounted(async () => {
  getUserFollwers();
});

const getUserFollwers = async () => {
  const result = await petdanimStore.getUserFollowers();
  if(result.status == 200) {
    followersList.value = result.result
  }
};

const updateFollowers = (data) => {
  followersList.value = data
}

definePageMeta({
  layout: "user-profile",
  middleware: "user-auth",
});
</script>

<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #f97316 94%, #0000) top/8px 8px
      no-repeat,
    conic-gradient(#0000 30%, #f97316);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: l13 1s infinite linear;
}
@keyframes l13 {
  100% {
    transform: rotate(1turn);
  }
}

.loading-box {
  width: 100%;
  height: 600px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #f9f9f9;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  -webkit-animation: 0.5s shine linear infinite;
  animation: 0.5s shine linear infinite;
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

