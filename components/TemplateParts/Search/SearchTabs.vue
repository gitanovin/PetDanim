<template>
    <div class="flex flex-col sm:items-center sm:justify-between sm:flex-row bg-white dark:bg-dark-700/20 py-4 rounded-t-lg">
        <nav class="nc-Nav px-4">
            <ul class="flex sm:space-x-2 rtl:space-x-reverse">
                <li class="nc-NavItem relative flex-shrink-0">
                    <button
                        class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-black">
                        مقالات
                    </button>
                </li>
                <li class="nc-NavItem relative flex-shrink-0">
                    <button
                        class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                        دسته بندی ها
                    </button>
                </li>
                <li class="nc-NavItem relative flex-shrink-0">
                    <button
                        class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                        برچسب ها
                    </button>
                </li>
                <li class="nc-NavItem relative flex-shrink-0">
                    <button
                        class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                        نویسنده ها
                    </button>
                </li>
            </ul>
        </nav>
        <div class="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
        <div class="flex justify-start px-4">
            <div class="nc-ArchiveFilterListBox flex-shrink-0">
                <div class="relative">
                    <Listbox v-model="selectedPerson">
                        <div class="relative mt-1">
                            <ListboxButton
                                class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-white dark:bg-dark-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-dark-700/20 dark:hover:ring-dark-700/20 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6">
                                <span class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                    <ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>

                                <span class="block truncate pl-2">{{
                                    selectedPerson.name
                                }}</span>
                            </ListboxButton>

                            <transition leave-active-class="transition duration-100 ease-in"
                                leave-from-class="opacity-100" leave-to-class="opacity-0">
                                <ListboxOptions
                                    class="absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm w-40 dark:bg-dark-800 dark:text-white">
                                    <ListboxOption v-slot="{ active, selected }" v-for="person in people"
                                        :key="person.name" :value="person" as="template">
                                        <li :class="[
                                            active
                                                ? 'bg-amber-100 text-amber-900 dark:bg-dark-700/20 dark:text-dark-700'
                                                : 'text-dark-700',
                                            'relative cursor-default select-none py-2 pl-10 pr-4',
                                        ]">
                                            <span :class="[
                                                selected ? 'font-medium' : 'font-normal',
                                                'block truncate',
                                            ]">{{ person.name }}</span>
                                            <span v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ChevronDownIcon from "@/components/icons/ChevronDownIcon.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/vue";

const people = [
    { name: "جدیدترین ها" },
    { name: "پربازدیدترین ها" },
    { name: "بیشترین نظرات" },
];
const selectedPerson = ref(people[0]);
</script>