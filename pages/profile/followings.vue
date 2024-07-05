<template>
  <section>
    <div class="loading-box" v-if="followingsList == null">
      <div class="loader"></div>
    </div>
    <emptyCard
      v-else-if="followingsList.length == 0"
      title="شما هیچ کسی را دنبال نمیکنید"
      description="دنبال شونده ی جدیدی را اضافه کنید"
    />
    <Following
      v-else
      :followingsList="followingsList"
      @updateFollowings="(followings) => updateFollowings(followings)"
    />
  </section>
</template>

<script setup>
import emptyCard from "@/components/Dashboard/emptyCard.vue";
import Following from "@/components/Dashboard/Following.vue";
import { usePetdanimStore } from "@/store/petdanimStore.js";

const petdanimStore = usePetdanimStore();

const followingsList = ref(null);

onMounted(async () => {
  getUserFollowings();
});

const getUserFollowings = async () => {
  const result = await petdanimStore.getUserFollowings();
  if (result.status == 200) {
    followingsList.value = result.result;
  }
};

const updateFollowings = (data) => {
  followingsList.value = data
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
