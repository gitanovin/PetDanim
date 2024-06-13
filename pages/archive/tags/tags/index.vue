<template>
    <div class="bg-slate-100 dark:bg-dark-900">
        <BlogSection class="dark:!bg-dark-900/30 bg-gray-50 py-16 lg:py-16">
            <HeaderSection />
            <Grid class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <contentTag/>
            </Grid>
        </BlogSection>
    </div>
</template>

<script setup>
import BlogSection from "@/components/TemplateParts/Section/BlogSection.vue";
import HeaderSection from "@/components/TemplateParts/Header/header.vue";
import Grid from "@/components/TemplateParts/Grid/Grid.vue";
import contentTag from "@/components/TemplateParts/contentTag.vue";
</script>
