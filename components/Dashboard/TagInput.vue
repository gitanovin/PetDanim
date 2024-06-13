<template>
  <input  class="block w-full pr-10 py-4 border-gray-300 rounded-md !focus:border-hamian !focus:ring-hamian sm:text-sm placeholder:pr-10 focus:outline-none"  ref="inputRef" @change="handleChange" />
</template>
<script setup>
import { onMounted, ref } from "vue";
import Tagify from "@yaireo/tagify";
import "@/assets/css/tagify.css";
import { watch } from "vue";

const props = defineProps(["modelValue"]);

const emits = defineEmits(["update:modelValue"]);

const inputRef = ref();
let tagify = ref();

function handleChange(e) {
  let str = e.target.value;
  if (!str) emits("update:modelValue", []);
  else {
    let ans = str.split(",");
    emits("update:modelValue", ans);
  }
}

onMounted(() => {
  tagify.value = new Tagify(inputRef.value, {
    originalInputValueFormat: (valuesArr) =>
      valuesArr.map((item) => item.value).join(","),
  });
  tagify.value.loadOriginalValues(props.modelValue);
});
</script>