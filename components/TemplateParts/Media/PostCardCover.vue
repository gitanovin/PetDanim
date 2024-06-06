<template>
  <div class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-5 aspect-h-3">
    <div class="post-cover">
      <div class="PostFeaturedMedia relative w-full h-full">
        <a class="block absolute inset-0" href="/single-video/this-is-single-slug">
          <img alt="featured" class="object-cover" src="@/assets/images/7.jpg" />
        </a>
        <PostTypeIcon />
      </div>
    </div>
  </div>
</template>

<script setup>
import PostTypeIcon from "@/components/TemplateParts/PostType/PostCard.vue";
</script>
