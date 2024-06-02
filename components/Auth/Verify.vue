<template>
  <div class="flex min-h-full">
       <Image />
       
    <div
      class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <HeaderFormVerify />
        <FormVerifyCode />
      </div>
    </div>
 
  </div>
 
</template>

<script setup>
import HeaderFormVerify from "./HeaderForm/HeaderFormVerify.vue";
import FormVerifyCode from "./Form/FormVerifyCode.vue";
import Image from "./Image.vue";
</script>
