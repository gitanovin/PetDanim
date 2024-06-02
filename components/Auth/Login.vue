<template>
  <div class="lg:flex block min-h-full">
       <Image /> 
       
    <div
      class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <HeaderFormLogin />
        <Form />
      </div>
    </div>
 
    
  </div>
  
</template>

<script setup>
import HeaderFormLogin from "./HeaderForm/HeaderFormLogin.vue";
import Form from "./Form/FormLogin.vue";
import Image from "./Image.vue";
</script>
