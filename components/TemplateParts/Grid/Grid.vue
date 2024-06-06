<template>
  <div class="grid-items">
    <div :class="class" class="px-6 lg:px-0">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
    class: {
        required: true,
        type: String
    }
})

</script>

<style scoped></style>