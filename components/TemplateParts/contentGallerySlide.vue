<template>
    <article>
        <div class="relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:!bg-dark-700/10 h-full">
            <div class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10  aspect-w-5 aspect-h-3">
                <div class="Gallery">
                    <Splide :options="{
                        perPage: 1,
                        type: 'slide',
                        direction: 'rtl',
                    }">

                        <SplideSlide class="splide__slide rounded-lg ">
                            <div>
                                <div class="relative w-full ">
                                    <PostCover />
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide class="splide__slide rounded-lg">
                            <div>
                                <div class="nc-PostFeaturedMedia relative w-full">
                                    <PostCover />
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide class="splide__slide rounded-lg">
                            <div>
                                <div class="nc-PostFeaturedMedia relative w-full">
                                    <PostCover />
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>


            <span class="absolute top-3 inset-x-3 z-10">
                <PostCategory />
            </span>


            <div class="p-4 flex flex-col space-y-3">
                <div
                    class="PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:!text-neutral-200 leading-none text-xs">
                    <Author>
                        <AuthorImage />
                        <AuthorName />
                    </Author>
                    <span class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span>
                    <Data />
                </div>
                <PostTitle />

                <div class="flex items-end justify-between mt-auto">
                    <div class="flex items-center space-x-2 rtl:space-x-reverse relative">
                        <LikeButton />
                        <CommentButton />
                    </div>
                    <div class="flex items-center space-x-2 text-xs text-neutral-700 dark:!text-neutral-300 relative">
                        <BookmarkButton />
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup>
import PostCover from "@/components/TemplateParts/Media/PostCardCover.vue";
import PostCategory from "~/components/TemplateParts/Badge/index.vue";
import Author from "@/components/TemplateParts/MetaAction/Author/Author.vue";
import AuthorName from "@/components/TemplateParts/MetaAction/Author/AuthorName.vue";
import AuthorImage from "@/components/TemplateParts/MetaAction/Author/AuthorImage.vue";
import LikeButton from "@/components/TemplateParts/MetaAction/Like.vue";
import CommentButton from "@/components/TemplateParts/MetaAction/Comment.vue";
import BookmarkButton from "@/components/TemplateParts/MetaAction/Bookmark.vue";
import Data from "@/components/TemplateParts/MetaAction/Data.vue";
import PostTitle from "@/components/TemplateParts/Title/PostTitle.vue";
</script>
