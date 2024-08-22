<template>

    <div class="Tabs-Content">
      <tagContent
        class="bg-white p-4" 
        v-if="tagsResult.length != 0"
        :tagsResult="tagsResult"/>
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
import tagContent from "./tagContent.vue";

const props = defineProps({
    tagsResult: {
      required: true,
      type: [Array , Object]
    }
})
</script>