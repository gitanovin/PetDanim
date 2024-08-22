<template>
    <div class="flex flex-col sm:items-center sm:justify-between sm:flex-row bg-white dark:bg-dark-700/20 py-4 rounded-t-lg">
        <nav class="nc-Nav px-4">
            <ul class="flex sm:space-x-2 rtl:space-x-reverse">
                <li class="nc-NavItem relative flex-shrink-0">
                    <button
                        :class="activeTabIndex == 0 ? 'bg-neutral-900 text-neutral-50' : ''"
                        @click="activeTab(0)"
                        class="flex dark:bg-neutral-100 dark:text-black items-center justify-center font-medium px-3 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full">
                        مقالات
                    </button>
                </li>
                <li class="nc-NavItem relative flex-shrink-0">
                    <button
                        @click="activeTab(1)"
                        :class="activeTabIndex == 1 ? 'bg-neutral-900 text-neutral-50' : ''"
                        class="flex dark:bg-neutral-100 dark:text-black items-center justify-center font-medium px-3 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full">
                        دسته بندی ها
                    </button>
                </li>
                <li class="nc-NavItem relative flex-shrink-0">
                    <button
                        @click="activeTab(2)"
                        :class="activeTabIndex == 2 ? 'bg-neutral-900 text-neutral-50' : ''"
                        class="flex dark:bg-neutral-100 dark:text-black items-center justify-center font-medium px-3 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full">
                        برچسب ها
                    </button>
                </li>
                <li class="nc-NavItem relative flex-shrink-0">
                    <button
                        @click="activeTab(3)"
                        :class="activeTabIndex == 3 ? 'bg-neutral-900 text-neutral-50' : ''"
                        class="flex dark:bg-neutral-100 dark:text-black items-center justify-center font-medium px-3 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full">
                        نویسنده ها
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>

const props = defineProps({
    activeTabIndex: {
        required: true,
        type: Number
    }
})

const emit = defineEmits([
    "activeTab"
])

const activeTab = (index) => {
    emit("activeTab" , index)
}
</script>