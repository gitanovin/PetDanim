<template>
    <div
      @click="$router.back()"
      class="cursor-pointer bg-orange-500 text-white font-bold text-2xl w-12 h-12 lg:p-0 p-1 rounded-lg flex items-center justify-center"
    >
      <BackIcon class="fill-white lg:w-8 w-6 text-white stroke-white"/>
    </div>
</template>


<script setup>
import BackIcon from "@/components/icons/BackIcon.vue";
</script>
