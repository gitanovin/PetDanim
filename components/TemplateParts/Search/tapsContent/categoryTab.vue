<template>

    <div class="Tabs-Content">
      <categoryContent
      class="bg-white p-4" 
        v-if="categoryResult.length != 0"
        :categoryResult="categoryResult"
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
import categoryContent from "./categoryContent.vue";

const props = defineProps({
  categoryResult: {
      required: true,
      type: [Array , Object]
  }
})
</script>