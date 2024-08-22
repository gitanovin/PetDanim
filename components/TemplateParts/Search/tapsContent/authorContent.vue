<template>

    <TopUsers
        v-if="authorResult.length != 0"
        :topUsers="authorResult"
        :isShowHeader="false"
    />

</template>

<script setup>
import TopUsers from "@/components/TemplateParts/Sections/UserList/TopUsers.vue";

const props = defineProps({
    authorResult: {
        required: true,
        type: [Array , Object]
    }
})
</script>