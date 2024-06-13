<template>
    <div class="CategoriesButton">
        <div class="flex flex-col sm:justify-between sm:flex-row">
            <div class="flex space-x-2.5 rtl:space-x-reverse">
                <div class="nc-ModalCategories">
                    <div class="nc-NcModal">
                        <button @click="OpenCategoryModal = true"
                            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-white dark:bg-dark-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-dark-700/20 dark:hover:ring-dark-700/30 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6">
                            <div>
                                <span class="hidden sm:inline">دیکر</span> دسته بندی ها
                            </div>
                            <ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div class="nc-ModalTags">
                    <div class="nc-NcModal">
                        <button @click="OpenTagsModal = true"
                            class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-white dark:bg-dark-900 ring-1 ring-neutral-300 hover:ring-neutral-400 dark:ring-dark-700/20 dark:hover:ring-dark-700/30 text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6">
                            <div><span class="hidden sm:inline">دیگر</span> برچسب ها</div>
                            <ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
            <div class="flex justify-end">
                <div class="nc-ArchiveFilterListBox flex-shrink-0">
                    <div class="relative">
                        <div>
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
        </div>


        <transition-group name="modal">
            <CategoryModal v-if="OpenCategoryModal" @closeModal="OpenCategoryModal = false" />
        </transition-group>

        <transition-group name="modal">
            <TagsModal v-if="OpenTagsModal" @closeTagsModal="OpenTagsModal = false" />
        </transition-group>
    </div>

</template>
<script setup>
import ChevronDownIcon from "@/components/icons/ChevronDownIcon.vue";
import CategoryModal from "@/components/TemplateParts/Modal/CategoryModal.vue";
import TagsModal from "@/components/TemplateParts/Modal/TagsModal.vue";
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
const OpenCategoryModal = ref(false);
const OpenTagsModal = ref(false);
</script>