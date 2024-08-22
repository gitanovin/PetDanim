<template>

    <div class="Tabs-Content">
      <authorContent
      class="bg-white p-4" 
        v-if="authorResult.length != 0"
        :authorResult="authorResult"
      />
      <emptyCard 
        class="bg-white"
        v-else
        title=""
        description="نتیجه ای با جستجوی شما حاصل نشد"
      />
    </div>
    
</template>

<script setup>
import emptyCard from "@/components/Dashboard/emptyCard.vue";
import authorContent from "./authorContent.vue";

const props = defineProps({
  authorResult: {
      required: true,
      type: [Array , Object]
  }
})
</script>