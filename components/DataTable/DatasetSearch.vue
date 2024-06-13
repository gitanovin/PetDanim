<template>
  <div class="relative flex justify-end w-full">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <i class="fa-thin fa-search text-[22px] w-5 h-5 text-gray-400 leading-[15px]"></i>
    </div>
    <input type="text"
      class="font-normal border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-3 dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300"
      :placeholder="dsSearchPlaceholder" :value="dsSearch" @input="input($event.target.value)" />
  </div>
</template>

<script>
import { debounce } from "@/helpers";

export default {
  inject: ["search"],
  props: {
    dsSearchPlaceholder: {
      type: String,
      default: "",
    },
    wait: {
      type: Number,
      default: 0,
    },
  },
  data: function () {
    return {
      dsSearch: "",
    };
  },
  mounted() {
    this.input = debounce((value) => {
      this.search(value);
    }, this.wait);
  },
};
</script>
