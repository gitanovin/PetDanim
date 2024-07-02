<template>
    <div class="w-full">
        <div
            class="border border-gray-200 dark:border-dark-700/20 rounded-lg card  dark:bg-dark-800">
            <div
                class="relative pb-4 m-0 overflow-hidden dark:text-gray-300 text-gray-700 dark:border-dark-700/20  bg-transparent border-b shadow-none bg-clip-border border-b-gray-200 px-6 py-6">
                <h6
                    class="flex items-center gap-1 dark:text-gray-300 antialiased font-semibold leading-normal text-gray-600 font-fa">

                    افزودن نوشته
                </h6>
                <p
                    class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal dark:text-white text-gray-600 font-fa">
                    از این بخش می توانید نوشته را اضافه کنید
                </p>
            </div>

            <div class="flex flex-col tabs">
                <div class="p-4 tab-content sm:p-5">
                    <div class="space-y-5">
                        <div class="relative col-span-4 sm:col-span-2 mt-4">
                            <label for="last-name"
                                class="flex pb-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                <span>عنوان نوشته</span>
                            </label>
                            <div class="mt-1 rounded-md">
                                <div class="relative flex items-stretch flex-grow focus-within:z-10">

                                    <input type="text"
                                        class="block w-full pr-4 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm dark:text-gray-300 dark:bg-dark-900 dark:border-dark-700/20"
                                        placeholder="حداکثر 60 کاراکتر بنویسید" />
                                </div>
                            </div>
                        </div>

                        <div class="grid lg:grid-cols-2 gap-4">
                            <div class="relative mt-4">
                                <label for="last-name"
                                    class="flex pb-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <span>تاریخ </span>
                                </label>
                                <div class="mt-1 rounded-md">
                                    <div class="relative flex items-stretch flex-grow focus-within:z-10">

                                        <input type="text"
                                            class="block w-full pr-4 py-4 border-gray-300 dark:border-dark-700/20 dark:bg-dark-800 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm dark:text-gray-300 dark:bg-dark-900"
                                            placeholder="انتخاب تاریخ" />
                                    </div>
                                </div>
                            </div>



                            <div class="relative mt-4">
                                <div class="dropdown">
                                    <label class="flex pb-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        <span>دسته بندی</span>
                                    </label>
                                    <select :name="name" :id="id" ref="input" v-model="value" class="hidden">
                                        <option value="" :disabled="true">{{ placeholder }}</option>
                                        <option v-for="category in categories" :value="category.value">
                                            {{ category.text }}
                                        </option>
                                    </select>

                                    <button type="button"
                                        class="text-gray-500 border border-gray-300 dark:bg-dark-900 focus:ring-1 focus:outline-none focus:ring-hamian font-medium rounded-lg text-sm px-4 py-4 text-center inline-flex items-center w-full justify-between mt-1 dark:border-dark-700/20"
                                        @click="toggleFocus">

                                        <span class="w-full pr-2 text-right text-normal font-normal">
                                            {{
                                            [null, ""].includes(value)
                                            ? placeholder
                                            : findText(value)
                                            }}</span>

                                    </button>
                                    <div class="categories absolute top-18 z-10 mt-2 bg-white dark:bg-dark-900 border rounded-lg w-full p-3"
                                        v-if="focused">
                                        <ul>
                                            <li class="disabled text-sm font-semibold text-gray-400">
                                                {{ placeholder }}
                                            </li>
                                            <li class="disabled text-sm font-normal">
                                                <input type="search"
                                                    class="border border-gray-200 w-full my-2 rounded-lg placeholder:text-sm text-gray-400 placeholder:text-gray-400/70"
                                                    placeholder="جستجو در لیست" />
                                            </li>
                                            <li class="py-1 text-gray-500 mt-2 cursor-pointer hover:bg-gray-50 px-2 rounded-md"
                                                v-for="category in categories" @click="selectCategory(category.value)"
                                                :data-value="category.value"
                                                :class="{ selected: value === category.value }">
                                                {{ category.text }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative col-span-4 sm:col-span-2 mt-2">
                            <label for="last-name"
                                class="flex py-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                <span> توضیحات</span>
                            </label>
                            <div class="w-full mt-1" v-if="customEditor != null">
                                <ckeditor  :editor="customEditor" v-model="data.descriptionContent" />
                            </div>
                        </div>

                        <div class="relative col-span-4 sm:col-span-2 mt-2">
                            <label for="last-name"
                                class="flex py-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                <span> خلاصه نوشته</span>
                            </label>
                            <div class="w-full mt-1" v-if="customEditor != null">
                                <ckeditor  :editor="customEditor" v-model="data.summaryDescription" />
                            </div>
                        </div>

                        <div class="">

                            <div class="w-full py-10">
                                <div class="w-full">
                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6">
                                            <div class="relative lg:w-full justify-start flex">
                                                <div
                                                    class="flex items-center justify-center w-full max-w-[150px] px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md dark:border-dark-700">
                                                    <div class="space-y-1 text-center">
                                                        <div
                                                            class="w-12 h-12 mx-auto mb-4 text-4xl text-gray-400 dark:text-gray-300">
                                                            <ImageIcon
                                                                class="dark:stroke-dark-700 stroke-gray-700 w-14 h-14" />
                                                        </div>
                                                        <div class="flex text-sm text-gray-600 dark:text-gray-300">
                                                            <label for="page-file-upload"
                                                                class="relative mx-auto font-medium text-hamian bg-white rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-hamian focus-widuotone:ring-offset-2 hover:text-hamian dark:bg-dark-900 p-2"><span>تصویر
                                                                    شاخص </span><input id="page-file-upload" type="file"
                                                                    class="sr-only" /></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="relative col-span-6 mt-4">
                                            <label for="last-name"
                                                class="flex pb-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                                <span> کلمات کلیدی</span>
                                            </label>
                                            <div class="mt-1 rounded-md">
                                                <div class="relative flex items-stretch flex-grow focus-within:z-10">

                                                    <TagInput v-model="value"
                                                        class="dark:!text-gray-300 dark:!bg-dark-900 dark:border-dark-700/20">
                                                    </TagInput>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div class="buttons mt-8 md:flex gap-4">

                                        <button type="button"
                                            class="box-border relative z-0 inline-flex items-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-orange-500 rounded-md cursor-pointer group ease focus:outline-none">
                                            <span
                                                class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                                                class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                                                class="relative z-20 flex items-center justify-center w-full text-center"><i
                                                    class="pl-2 text-2xl text-white fa-duotone fa-arrow-up-from-bracket"></i><span
                                                    class="w-full">افزودن نوشته</span></span>
                                        </button>
                                        <button type="button"
                                            class="box-border relative z-0 inline-flex items-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-hamian transition-all duration-300 bg-green-500 text-white rounded-md cursor-pointer group ease focus:outline-none">
                                            <span
                                                class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                                                class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                                                class="relative z-20 flex items-center justify-center w-full text-center"><i
                                                    class="pl-2 text-2xl text-hamaian fa-duotone fa-eye"></i><span
                                                    class="w-full">افزودن به پیش نویس ها</span></span>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import TagInput from "./TagInput.vue";
import ImageIcon from "@/components/icons/ImageIcon.vue";
const placeholder = ref("دسته مورد نظر را انتخاب کنید")
const useRealInput = ref(false)
const value = ref("")
const focused = ref(false)
const category = ref(false)
const categories = ref([
    { value: 1, text: "سگ ها" },
    { value: 2, text: "گربه ها" },
    { value: 3, text: "پرندگان" },
    { value: 4, text: "دیگر" },
])

const data = reactive({
    descriptionContent: "<p>test</p>",
    summaryDescription: "<p>test2</p>"
})

const { $ckeditor } = useNuxtApp()
const customEditor = ref(null)


onMounted(() => {
    customEditor.value = $ckeditor.customEditor
})

const toggleFocus = () => {
    if (useRealInput.value) {
        input.value.focus();
    } else {
        focused.value = !focused.value;
    }
}

const selectCategory = (value) => {
    if (value !== value.value) {
        value.value = value;
        input.value.value = value;
        toggleFocus();
    }
}

const findText = (value) => {
    const category = categories.value.filter((category) => {
        if (category.value === value) return true;
    })[0];
    return category === undefined ? "" : category.text;
}

const onInputEditor = (event) => {
    console.log(event)
}
</script>
<style>
.ck.ck-editor__editable_inline {
    direction: rtl !important;
    text-align: right !important;
}


.ck.ck-editor__main , .ck.ck-editor__main > .ck-content {
    height:200px !important;
}
</style>