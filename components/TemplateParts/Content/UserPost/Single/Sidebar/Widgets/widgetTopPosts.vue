<template>
  <div
    class="WidgetPosts rounded-3xl overflow-hidden bg-white dark:bg-dark-800 border dark:border-dark-700/20"
  >
    <div
      class="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 sticky"
    >
      <h2
        class="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow"
      >
        🎯 محبوبترین مقالات
      </h2>
      <a
        class="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
        rel="noopener noreferrer"
        href="javascript:void(0)"
        >مشاهده همه</a
      >
    </div>
    <div
      class="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700"
    >
      <div
        class="nc-Card3Small relative flex flex-row justify-between items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-dark-700/20"
        v-for="(post , index) in topsPosts" :key="post.id"
       >
        <nuxt-link
          class="absolute inset-0"
          title="New tools for Black pregnant and postpartum mothers to save lives"
          :to="`/post/${post.slug}`"
        ></nuxt-link>
        <div class="relative space-y-2">
          <div
            class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
          >
            <a
              class="relative flex items-center space-x-2 rtl:space-x-reverse"
              href="javascript:void(0)"
            >
              <div
                class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900"
              >
                <img
                  alt="Truelock Alric"
                  class="absolute inset-0 w-full h-full object-cover"
                  :src="post.user.profile == null ? '/2.webp' : `${appBaseUrl}/storage/avatars/${post.user.profile}`"
                />
              </div>
              <span
                class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
              >
                {{ post.user.name }}  </span
              > </a
            ><span
              class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
              >·</span
            ><span
              class="text-neutral-500 dark:text-neutral-400 font-normal font-fd"
              >{{ post.created_at }}</span
            >
          </div>
          <h2
            class="nc-card-title block text-sm sm:text-base font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100 truncate w-[200px]"
          >
            <nuxt-link
              class="line-clamp-2"
              :title="post.title"
              :to="`/post/${post.slug}`"
              >{{ post.title }}...     
            </nuxt-link>
          </h2>
        </div>
        <nuxt-link
          :title="post.title"
          class="block w-20 flex-shrink-0 relative rounded-lg overflow-hidden z-0 ms-4 group"
          :to="`/post/${post.slug}`"
        >
          <div class="w-full h-0 aspect-w-1 aspect-h-1">
            <img
              :alt="post.title"
              title="New tools for Black pregnant and postpartum mothers to save lives"
              class="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
              :src="`${appBaseUrl}/storage/posts/${post.image}`"
            />
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
    const props = defineProps({
        topsPosts: {
            required: true,
            type: [Array , Object]
        }
    })

    const {appBaseUrl} = useRuntimeConfig().public
</script>
