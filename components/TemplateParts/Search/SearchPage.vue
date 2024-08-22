<template>
  <div class="PageSearch lg:pt-8 dark:bg-dark-900 bg-slate-100 py-1">
    <div class="Search-Header">
      <SearchHeader
        :searchQuery="searchQuery"
        @doSearch="(queryString) => doSearch(queryString)"
        :searchResultCount="searchResultCount"
      />
    </div>
    <div class="space-y-16 lg:space-y-28">
      <main class="max-w-7xl mx-auto my-16">
        <div class="Search-Tabs">
          <SearchTabs
            @activeTab="(index) => activeTabIndex = index"
            :activeTabIndex="activeTabIndex"
          />
        </div>
        <postsTab 
        class="py-5"
        :postsResult="postsResult"
        v-if="activeTabIndex == 0"/>
        <categoryTab 
        class="py-5"
        :categoryResult="categoryResult"
        v-if="activeTabIndex == 1"/>
        <tagsTab 
        class="py-5"
        :tagsResult="tagsResult"
        v-if="activeTabIndex == 2"/>
        <authorsTab 
        class="py-5"
        :authorResult="authorResult"
        v-if="activeTabIndex == 3"/>
      </main>
 
    </div>
  </div>
</template>

<script setup>

import SearchHeader from "./SearchHeader.vue";
import SearchTabs from "./SearchTabs.vue";
import postsTab from "./tapsContent/postsTab.vue";
import categoryTab from "./tapsContent/categoryTab.vue";
import tagsTab from "./tapsContent/tagsTab.vue";
import authorsTab from "./tapsContent/authorsTab.vue";



const activeTabIndex = ref(0)

const props = defineProps({
  searchQuery: {
    required: true,
    type: String
  },
  searchResultCount: {
    required: true,
    type: Number
  },
  postsResult: {
    required: true,
    type: [Array , Object]
  },
  categoryResult: {
    required: true,
    type: [Array , Object]
  },
  tagsResult: {
    required: true,
    type: [Array , Object]
  },
  authorResult: {
    required: true,
    type: [Array , Object]
  }
})

const emit = defineEmits([
  "doSearch"
])

const doSearch = (queryString) => {
  emit("doSearch" , queryString)
}


</script>
