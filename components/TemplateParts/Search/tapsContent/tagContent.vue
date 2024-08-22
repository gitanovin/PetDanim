<template>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <contentTag 
        v-if="tagsResult.length != 0"
        :tags="tagsResult"/>
    </div>
    
</template>

<script setup>
import contentTag from "@/components/TemplateParts/contentTag.vue";



const props = defineProps({
    tagsResult: {
      required: true,
      type: [Array , Object]
  }
})
</script>