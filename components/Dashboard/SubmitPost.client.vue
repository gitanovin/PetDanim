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
                                <span>عنوان نوشته <span class="text-xs text-gray-500">({{ data.title.length }} کاراکتر)</span></span>
                            </label>
                            <div class="mt-1 rounded-md">
                                <div class="relative flex items-stretch flex-grow focus-within:z-10">

                                    <input type="text"
                                        v-model="data.title"
                                        class="block w-full pr-4 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm dark:text-gray-300 dark:bg-dark-900 dark:border-dark-700/20"
                                        placeholder="حداکثر 40 کاراکتر بنویسید" />
                                </div>
                            </div>
                        </div>

                        

                        <div class="relative col-span-4 sm:col-span-2 mt-2">
                            <label for="last-name"
                                class="flex py-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                <span> توضیحات (حداقل 300 کاراکتر)</span>
                            </label>
                            <div class="w-full mt-1" v-if="customEditor != null">
                                <ckeditor :config="customEditor.editoConfig" :editor="customEditor" v-model="data.descriptionContent" class="text-wrap" />
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
                                                                v-if="indexPicLocalSrc == ''"
                                                                class="dark:stroke-dark-700 stroke-gray-700 w-14 h-14" />
                                                            <div class="relative" v-if="indexPicLocalSrc != ''" >
                                                                <i @click="removeIndexPic()" class="fa fa-close absolute top-[-5px] right-[-10px] cursor-pointer text-sm bg-red-500 p-1 rounded-lg text-white"></i>
                                                                <img 
                                                                    :src="indexPicLocalSrc"
                                                                    
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="flex text-sm text-gray-600 dark:text-gray-300">
                                                            <label for="indexPic"
                                                                class="relative mx-auto font-medium text-hamian bg-white rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-hamian focus-widuotone:ring-offset-2 hover:text-hamian dark:bg-dark-900 p-2"><span>تصویر
                                                                    شاخص </span>
                                                                    <input 
                                                                        @change="(e) => setIndexPicImage(e)"
                                                                        ref="indexPic"
                                                                        id="indexPic" 
                                                                        type="file"
                                                                        class="sr-only" />
                                                                    </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="relative col-span-6 mt-4">
                                            <label for="last-name"
                                                class="flex pb-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                                <span> کلمات کلیدی ( حداقل تعداد 5 تگ اضافه کنید ) </span>
                                            </label>
                                            <div class="mt-1 rounded-md">
                                                <div class="relative flex items-stretch flex-grow focus-within:z-10">

                                                    <TagInput ref="tagInputRef" v-model="data.tags" :modelValue="data.tags"
                                                        class="dark:!text-gray-300 dark:!bg-dark-900 dark:border-dark-700/20">
                                                    </TagInput>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div class="buttons mt-4 md:flex gap-4">

                                        <!-- <button type="button"
                                            @click="addPost()"
                                            class="box-border relative z-0 inline-flex items-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-orange-500 rounded-md cursor-pointer group ease focus:outline-none">
                                            <span
                                                class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                                                class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                                                class="relative z-20 flex items-center justify-center w-full text-center"><i
                                                    class="pl-2 text-2xl text-white fa-duotone fa-arrow-up-from-bracket"></i><span
                                                    class="w-full">افزودن نوشته</span></span>
                                        </button> -->
                                        <AuthButton 
                                            text="افزودن نوشته"
                                            :isLoading="postIsLoading"
                                            @doClick="doAddPost()"
                                        />
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
import AuthButton from '@/components/Buttons/AuthButton.vue'
import TagInput from "./TagInput.vue";
import ImageIcon from "@/components/icons/ImageIcon.vue";
import { usePetdanimStore } from '~/store/petdanimStore';

const tagInputRef = ref(null)
const petdanimStore = usePetdanimStore()


const {$toast , $ckeditor} = useNuxtApp()
const indexPic = ref("")
const indexPicLocalSrc = ref("")
const postIsLoading = ref(false)

const data = reactive({
    title: "",
    date: "",
    descriptionContent: "",
    indexPic: "",
    tags: []
})


const customEditor = ref(null)


onMounted(() => {
    data.date = useNuxtApp().$moment().locale('fa').format('YYYY-MM-DD')
    customEditor.value = $ckeditor.customEditor
})

const doAddPost = async () => {
    const resultValidate = validatePostData();
    if(resultValidate == true) {
        postIsLoading.value = true
        const result = await petdanimStore.userAddPost(data)
        if(result.status == 200) {
            postIsLoading.value = false
            console.log(result)
            $toast(result.message , {
                "theme": "colored",
                "type": "success"
            });
            clearData()
        }else {
            postIsLoading.value = false
            $toast(result.message , {
                "theme": "colored",
                "type": "error"
            });
        }
    } else {
        $toast(resultValidate , {
            "theme": "colored",
            "type": "error"
        });
    }
}

const validatePostData = () => {
    if (data.title == '') {
        return "عنوان نوشته را وارد کنید"
    }else if(data.title.length < 40) {
        return "عنوان نوشته باید حداقل 40 کاراکتر باشد"
    }else if(data.descriptionContent == "") {
        return "توضیحات نوشته را وارد کنید"
    }else if(data.descriptionContent.length < 300) {
        return "توضیحات نوشته باید حداقل 300 کاراکتر باشد"
    }else if(data.indexPic == "") {
        return "تصویر شاخص را وارد کنید"
    }else if(data.tags.length == 0) {
        return "تگ های نوشته را وارد کنید"
    }else if(data.tags.length < 5) {
        return "تگ های نوشته باید حداقل 5 تگ باشد"
    }else {
        return true
    }
}

const setIndexPicImage = (e) => {
    createIndexFile(e.target.files[0])
}

const createIndexFile = (file) => {
    if(file != undefined) {
        data.indexPic = file
        const extensions = ["image/png" , "image/jpeg" , "image/jpg" , "image/png"];
        if (!extensions.includes(file.type)) {
            $toast("لطفا نوع فایل را عکس انتخاب کنید" , {
                "theme": "colored",
                "type": "error"
            });
            indexPic.value.value = ""
            data.indexPic = '';
            indexPicLocalSrc.value = ""
            return false;
        }
    
        let reader = new FileReader();
        reader.onload = (e) => {
            indexPicLocalSrc.value = e.target.result;
        };
    
        reader.readAsDataURL(file);
    }else {
        $toast("لطفا نوع فایل را عکس انتخاب کنید" , {
            "theme": "colored",
            "type": "error"
        });
        return false;
    }
}

const removeIndexPic = () => {
    data.indexPic = '';
    indexPic.value.value = ""
    indexPicLocalSrc.value = '';
}

const clearData = () => {
    data.title = ""
    data.descriptionContent = ""
    removeIndexPic()
    data.tags = []
    tagInputRef.value.clearInput()
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

.ck.ck-content {
    overflow-wrap: anywhere !important;
}


</style>