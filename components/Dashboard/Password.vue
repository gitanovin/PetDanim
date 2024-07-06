<template>
  <div>
    <label for="last-name" class="flex pb-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300">
      <span>رمز عبور </span>
    </label>
    <div class="mt-1 flex rounded-lg border dark:border-dark-700/20">

      <div class="relative flex flex-grow items-stretch focus-within:z-10">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
        <input :type="type"
          class="font-en block w-full rounded-none rounded-r-lg ltr text-left border-0 border-gray-300 pr-4 py-4 focus:ring-0 focus:border-indigo-500 focus:ring-indigo-500 outline-none sm:text-sm dark:border-dark-700/20 focus:border-gray-500 focus:ring-gray-500 sm:text-sm dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300"
          :placeholder="placeholder" :value="passwordInput" />
      </div>
      <button @click="generate()" type="button"
        class="relative -mr-px inline-flex items-center space-x-2 rounded-l-lg border-0 border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-0 focus:ring-indigo-500 dark:border-dark-700/20 dark:bg-dark-700/50 dark:text-gray-300">
        تولید رمز
      </button>
    </div>
  </div>

</template>

<script setup>
const props = defineProps({
    type: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: "32",
    },
    characters: {
      type: String,
      default: "a-z,A-Z,0-9,#",
    },
    placeholder: {
      type: String,
      default: "رمز عبور",
    },
    auto: [String, Boolean],
    value: "",
  })

  const passwordInput = ref(props.value)

  onMounted(() => {
    console.log("test")
    if (props.auto == "true" || props.auto == 1) {
      generate();
    }
  })

  const generate = () => {
      let charactersArray = props.characters.split(",");
      let CharacterSet = "";
      let password = "";

      if (charactersArray.indexOf("a-z") >= 0) {
        CharacterSet += "abcdefghijklmnopqrstuvwxyz";
      }
      if (charactersArray.indexOf("A-Z") >= 0) {
        CharacterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (charactersArray.indexOf("0-9") >= 0) {
        CharacterSet += "0123456789";
      }
      if (charactersArray.indexOf("#") >= 0) {
        CharacterSet += "![]{}()%&*$#^<>~@|";
      }

      for (let i = 0; i < props.size; i++) {
        password += CharacterSet.charAt(
          Math.floor(Math.random() * CharacterSet.length)
        );
      }
      passwordInput.value = password;
    }

</script>
