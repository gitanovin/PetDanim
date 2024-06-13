<template>
<div class="text-sm font-normal text-gray-500 w-full md:text-center sm:text-center xs:text-center lg:text-right dark:text-gray-300 font-fd">
    {{ datasetI18n.showing }} <span class="font-semibold text-gray-900 pl-1 dark:text-gray-100">{{ showing }}</span> {{ datasetI18n.showingTo }}  <span class="font-semibold text-gray-900 pl-1 dark:text-gray-100">{{ showingTo }}</span> {{ datasetI18n.showingOf }}
     <span class="font-semibold text-gray-900 pl-1 dark:text-gray-100">{{ dsResultsNumber }} </span>{{ datasetI18n.showingEntries }}
</div>
</template>

<script>
export default {
  inject: ['datasetI18n', 'rdsResultsNumber', 'rdsFrom', 'rdsTo'],
  computed: {
    showing() {
      return this.dsResultsNumber !== 0 ? this.dsFrom + 1 : 0
    },
    showingTo() {
      return this.dsTo >= this.dsResultsNumber ? this.dsResultsNumber : this.dsTo
    },
    /* Setup reactive injects */
    dsResultsNumber() {
      return this.rdsResultsNumber()
    },
    dsFrom() {
      return this.rdsFrom()
    },
    dsTo() {
      return this.rdsTo()
    }
  }
}
</script>
