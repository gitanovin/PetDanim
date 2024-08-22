<template>

      <div class="Tabs-Content" >
        <SearchPosts
          v-if="postsResult.length != 0"
          :postsResult="postsResult"
        />
        <emptyCard 
          class="bg-white"
          v-else
          title="هیچ پستی وجود ندارد"
          description="نتیجه ای با جستجوی شما حاصل نشد"
        />
      </div>
      
</template>

<script setup>
import emptyCard from "@/components/Dashboard/emptyCard.vue";
import SearchPosts from "./SearchPosts.vue";

const props = defineProps({
    postsResult: {
        required: true,
        type: [Array , Object]
    }
})
</script>