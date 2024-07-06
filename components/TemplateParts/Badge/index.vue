<template>
    <div class="flex flex-wrap space-x-2">
      <a
        :class="status == 'success' ? 'text-green-800 bg-green-100 hover:bg-green-800 hover:text-white' : 'text-pink-800 bg-pink-100 hover:bg-pink-800 hover:text-white'"
        class="transition-colors duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative "
        href="javascript:void(0)"
        >{{ text }}</a
      >
    </div>
</template>

<script setup>
  const props = defineProps({
    status: {
      required: true,
      type: String,
      defaukt: "success"
    },
    text: {
      required: true,
      type: String,
      defaukt: "تایید شده"
    },
  })
</script>
