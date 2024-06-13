<template>
  <ul
    class="text-sm flex items-center space-x-1 md:text-center sm:text-center xs:text-center lg:justify-end justify-end md:justify-center sm:justify-center xs:justify-center mt-2 lg:mt-2 w-full">
    <li :class="['page-item', disabledPrevious && 'disabled']">
      <a class="page-link block px-3 py-2 ml-1 text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200  dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300 dark:hover:bg-dark-700"
        href="#" :tabindex="disabledPrevious && '-1'" :aria-disabled="disabledPrevious && 'true'"
        @click.prevent="setActive(dsPage !== 1 && dsPagecount !== 0 ? dsPage - 1 : dsPage)">
        {{ datasetI18n.previous }}
      </a>
    </li>
    <template v-for="(item, index) in dsPages" :key="index">
      <li :class="['page-item', item === dsPage && 'active', item === morePages && 'disabled']">
        <a v-if="item !== morePages"
          class="page-link block px-3 py-2 ml-1 text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200  dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300 dark:hover:bg-dark-700"
          href="#" @click.prevent="setActive(item)">
          {{ item }}
        </a>
        <span v-else
          class="page-link block px-3 py-2 ml-1 text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200  dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300 dark:hover:bg-dark-700">
          {{ item }}
        </span>
      </li>
    </template>
    <li :class="['page-item', disabledNext && 'disabled']">
      <a class="page-link block px-3 py-2 ml-1 text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200  dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300 dark:hover:bg-dark-700"
        href="#" :tabindex="disabledNext && '-1'" :aria-disabled="disabledNext && 'true'"
        @click.prevent="setActive(dsPage !== dsPagecount && dsPagecount !== 0 ? dsPage + 1 : dsPage)">
        {{ datasetI18n.next }}
      </a>
    </li>
  </ul>
</template>

<script>
import { MORE_PAGES } from '@/helpers'

export default {
  inject: ['datasetI18n', 'setActive', 'rdsPages', 'rdsPagecount', 'rdsPage'],
  data: function () {
    return {
      morePages: MORE_PAGES
    }
  },
  computed: {
    /* Setup reactive injects */
    dsPages() {
      return this.rdsPages()
    },
    dsPagecount() {
      return this.rdsPagecount()
    },
    dsPage() {
      return this.rdsPage()
    },
    /* Normal computeds */
    disabledPrevious() {
      return this.dsPage === 1
    },
    disabledNext() {
      return this.dsPage === this.dsPagecount || this.dsPagecount === 0
    }
  }
}
</script>

<style>
.page-item.active a{background-color: #ff8d22 !important;
border: solid #ff7b23 1px; color: white;}
</style>
