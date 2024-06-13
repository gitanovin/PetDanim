<template>
  <div class="relative flex items-center justify-start  font-fd">

    <button v-on:click.prevent="Count = !Count"
      class="box-border relative z-0 flex items-center  py-3 px-2  overflow-hidden font-medium text-gray-500 transition-all duration-300 border rounded-md cursor-pointer  group ease focus:outline-none  dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300">
      <span class="relative z-20 flex items-center justify-between w-full text-center ">
        <span class="text-right text-sm text-gray-400">نمایش: </span>
        <span class="w-full px-2">
          {{ entiresVal }}
        </span>
        <span class="block pr-1">
          <i :class="Count == 1 ? 'fa-chevron-down' : 'fa-angle-up'" class="fa-duotone text-[15px] text-slate-500 dark:text-gray-300"></i>
        </span>

      </span>
    </button>

    <div v-if="Count"
      class="absolute right-0 z-10 w-full  mt-6 bg-white border rounded-lg top-6  dark:bg-dark-800/70 dark:border-dark-700/20 dark:text-gray-300">
      <ul
        class="h-40 p-3 overflow-y-auto scroll-my-2 scroll-p-2 scrollbar-corner-rounded-full text-sm text-gray-700 dark:text-gray-300">
        <li v-for="(option, index) in dsShowEntriesLovs" :key="index" @click="change(option.value)">
          <div class="flex items-center w-full p-2 my-1">{{ option.text }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["datasetI18n", "showEntries"],
  data() {
    return {
      Count: false,
      entiresVal: null,
    };
  },
  props: {
    dsShowEntries: {
      type: Number,
      default: 5,
    },
    dsShowEntriesLovs: {
      type: Array,
      default: () => [
        { value: 5, text: 5 },
        { value: 10, text: 10 },
        { value: 25, text: 25 },
        { value: 50, text: 50 },
        { value: 100, text: 100 },
      ],
    },
  },
  created() {
    this.showEntries(Number(this.dsShowEntries));
  },
  mounted() {
    this.entiresVal = this.dsShowEntries;
  },
  methods: {
    change(value) {
      this.Count = false;
      // console.log(value);
      // this.dsShowEntries = value
      this.entiresVal = value;
      this.$emit("changed", Number(value));
      this.showEntries(Number(value));
    },
  },
};
</script>
