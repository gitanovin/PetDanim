<template>
    <div
        class="flex flex-col sm:items-center sm:justify-between sm:flex-row bg-white  border-b border-x dark:bg-dark-900 dark:border-dark-700/20">
        <nav class="nc-Nav p-3">
            <ul class="flex sm:space-x-2 rtl:space-x-reverse">
                <li class="nc-NavItem relative flex-shrink-0">
                    <button
                        class="flex items-center justify-center font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-black">
                        مقالات
                    </button>
                </li>
            </ul>
        </nav>
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