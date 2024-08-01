<template>
  <div class="tag" v-for="(tag , index) in tags" :key="index">
    <div class="h-36 w-full relative group">
      <div class="absolute top-0 right-0 bg-black/20 rounded-lg w-full h-full">
        <!-- <span>{{ tag.posts.length }}</span> -->
      </div>
      <nuxt-link
        :to="`/archive/tags/${tag.name}-${tag.id}`"
        class="absolute inset-0 z-10 block w-full h-full"
      ></nuxt-link>
      <div class="absolute z-20 flex items-center mb-3 bottom-1 left-4">
        <nuxt-link
          :to="`/archive/tags/${tag.name}-${tag.id}`"
          class="bg-white px-2.5 py-[5px] rounded-full text-xs font-bold mr-2"
        >
          <span
            class="inline-block rounded-full w-[10px] h-[10px] ml-1" :class="'bg-pink-500'"
          ></span>
          <span class="align-[1px]">{{ tag.name }}</span>
        </nuxt-link>
      </div>
      <img
        class="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
        src="/tag.jfif"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    tags: {
      required: true,
      type: [Array , Object]
    }
  })
</script>
