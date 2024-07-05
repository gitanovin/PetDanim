<template>
  <div class="dropdown">
    <select :name="name" :id="id" ref="input" v-model="value" class="hidden">
      <option value="" :disabled="true">{{ placeholder }}</option>
      <option v-for="category in categories" :value="category.value">
        {{ category.text }}
      </option>
    </select>

    <div class="relative flex items-center">
      <button type="button"
        class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-hamian font-medium rounded-lg text-sm px-4 py-4 text-center inline-flex items-center justify-between w-[250px]  dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300"
        @click="toggleFocus">
        <i class="fa-duotone fa-list text-hamian h-5 w-5 flex leading-[1px] text-[19px]"></i>
        <span class="w-full pr-2 text-right text-normal font-normal">
          {{ [null, ""].includes(value) ? placeholder : findText(value) }}</span>
        <i class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"></i>
      </button>

      <button type="button"
        @click="collectionRemove()"
        class="mr-2 text-white bg-orange-500 font-medium rounded-lg text-sm px-4 py-4 block text-center items-center">
        پذیرش
      </button>
    </div>
    <div
      class="categories absolute top-18 z-10 mt-2 bg-white border rounded-lg w-full p-3 max-w-[250px]  dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300"
      v-if="focused">
      <ul>
        <li
          class="py-1 text-gray-500 mt-2 cursor-pointer hover:bg-gray-50 px-2 rounded-md  dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300 dark:hover:bg-dark-700/30"
          v-for="category in categories" @click="selectCategory(category.value)" :data-value="category.value"
          :class="{ selected: value === category.value }">
          {{ category.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['removePosts'],
  data() {
    return {
      placeholder: "اقدام دسته جمعی",
      useRealInput: false,
      value: "",
      focused: false,
      category: false,
      categories: [
        { value: 1, text: "حذف" },
      ],
    };
  },

  methods: {
    toggleFocus() {
      if (this.useRealInput) {
        this.$refs.input.focus();
      } else {
        this.focused = !this.focused;
      }
    },
    selectCategory(value) {
      if (value !== this.value) {
        this.value = value;
        this.$refs.input.value = value;
        this.toggleFocus();
      }
    },
    findText(value) {
      const category = this.categories.filter((category) => {
        if (category.value === value) return true;
      })[0];
      return category === undefined ? "" : category.text;
    },
    collectionRemove() {
      this.$emit("removePosts" , this.value)
    }
  },
};
</script>
