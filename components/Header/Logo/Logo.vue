<template>
  <div class="lg:flex-1 flex items-center gap-1.5">
    <div class="relative inline-flex text-right rtl:text-right">
      <div class="inline-flex w-full">
        <nuxt-link to="/" class="flex gap-2 items-end text-xl lg:text-3xl font-extrabold text-orange-500" aria-current="page">
          <PetomanLogo class="w-[120px]" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import PetomanLogo from '@/assets/images/petoman-logo.svg'
</script>