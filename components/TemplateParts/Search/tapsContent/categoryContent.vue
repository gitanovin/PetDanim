<template>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <contentCategory 
            :categories="categoryResult" 
        />
    </div>
    
</template>

<script setup>
import contentCategory from "@/components/TemplateParts/contentCategory.vue";
import emptyCard from "@/components/Dashboard/emptyCard.vue";
import categoryContent from "./categoryContent.vue";

const props = defineProps({
  categoryResult: {
      required: true,
      type: [Array , Object]
  }
})
</script>