<template>
    <div class="relative grid grid-cols-3 sm:grid-cols-4 gap-2 my-10">
        <div class="col-span-2 row-span-2 relative rounded-xl overflow-hidden cursor-pointer z-0">
            <div class="absolute inset-0">
                <img alt="single" class="object-cover w-full h-full rounded-xl" src="@/assets/images/3.jpg" />
            </div>
            <div class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity">
            </div>
        </div>
        <div class="relative rounded-xl overflow-hidden z-0">
            <div class="aspect-w-6 aspect-h-5">
                <img alt="single" class="object-cover w-full h-full rounded-xl" src="@/assets/images/3.jpg" />
            </div>
            <div
                class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
            </div>
        </div>
        <div class="relative rounded-xl overflow-hidden z-0">
            <div class="aspect-w-6 aspect-h-5">
                <img alt="single" class="object-cover w-full h-full rounded-xl" src="@/assets/images/5.jpg" />
            </div>
            <div
                class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
            </div>
        </div>
        <div class="relative rounded-xl overflow-hidden z-0 hidden sm:block">
            <div class="aspect-w-6 aspect-h-5">
                <img alt="single" class="object-cover w-full h-full rounded-xl" src="@/assets/images/7.jpg" />
            </div>
            <div
                class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
            </div>
        </div>
        <div class="relative rounded-xl overflow-hidden z-0 hidden sm:block">
            <div class="aspect-w-6 aspect-h-5">
                <img alt="single" class="object-cover w-full h-full rounded-xl" src="@/assets/images/6.jpg" />
            </div>
            <div
                class="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
            </div>
        </div>
        <div
            class="absolute hidden md:flex md:items-center md:justify-center right-3 bottom-3 px-4 py-2 rounded-full bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10">
            <GridIcon />
            <span class="ms-2 text-neutral-800 text-sm font-medium">مشاهده همه تصاویر</span>
        </div>
    </div>
</template>
<script setup>
import GridIcon from "@/components/icons/GridIcon.vue";
</script>