<template>
    <div class="posts border border-gray-200 dark:border-dark-700/20 rounded-lg card  dark:bg-dark-800 p-4">

        <div class="w-full pb-6">
            <div class="overflow-hidden">
                <div class="gap-4 lg:grid lg:grid-cols-12">
                    <dataset v-slot="{ ds }" :ds-data="blogsList" :ds-sortby="sortBy" :ds-sort-as="{}"
                        :ds-search-in="['blogId', 'blogName', 'blogValue']" :ds-search-as="{}">
                        <div class="col-span-12 font-fa">
                            <div
                                class="mt-2 mb-6 bg-white border border-gray-200 blog-info rounded-xl dark:text-gray-300 dark:bg-dark-800 dark:border-dark-700/20">
                                <div
                                    class="relative px-6 py-6 pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200 dark:border-dark-700/20">
                                    <h6
                                        class="flex items-center gap-1 text-xs antialiased font-semibold leading-normal text-gray-600 font-fa dark:text-gray-300">
                                        <i class="fa-solid fa-bookmark text-[20px] !w-5 !h-5 text-hamian ml-1"></i>
                                        لیست علاقه مندی ها
                                    </h6>
                                    <p
                                        class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa dark:text-gray-300">
                                        از این بخش می توانید علاقه مندی ها را مدیریت یا حذف نمایید
                                    </p>
                                </div>

                                <div class="py-8 border-b px-7 card-header dark:border-dark-700/20">
                                    <div class="grid lg:grid-cols-1 gap-4 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">




                                        <div class="w-full">
                                            <div class="flex rounded-md hover:shadow-sm">
                                                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                                    <dataset-search ds-search-placeholder="جستجو در لیست..." class="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="grid gap-4 px-6 py-6 bg-stripes-purple xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-4 4xl:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
                                    <div class="relative flex w-full gap-4">


                                        <data-action />
                                    </div>
                                    <div class="lg:justify-end lg:flex w-full relative text-right">
                                        <dataset-show />
                                    </div>
                                </div>

                                <div class="flex flex-col">
                                    <div class="overflow-hidden">
                                        <div class="min-w-full align-middle">
                                            <div class="flex flex-col">
                                                <div class="overflow-hidden">
                                                    <div class="inline-block min-w-full align-middle">
                                                        <div class="relative overflow-hidden">
                                                            <div class="w-full table-auto">

                                                                <dataset-item tag="ul"
                                                                    class="grid grid-cols-3 gap-4 p-4 border-t bg-gray-50 divide-gray-200 last:border-b  dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300  dark:divide-dark-700/20"
                                                                    name="fade" is="transition-group">
                                                                    <template #default="{ row, rowIndex }">
                                                                        <li>

                                                                            <content />



                                                                        </li>

                                                                    </template>
                                                                </dataset-item>
                                                            </div>

                                                            <nav class="items-center justify-between block pt-4 pb-4 mx-4 lg:flex"
                                                                aria-label="Table navigation">
                                                                <dataset-info />
                                                                <dataset-pager />
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dataset>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import content from "@/components/TemplateParts/contentPost.vue";
import CollapseTransition from "@/components/DataTable/CollapseTransition.vue";
import blogs from "@/assets/blogs.json";
import Dataset from "@/components/DataTable/Dataset.vue";
import DatasetInfo from "@/components/DataTable/DatasetInfo.vue";
import DatasetItem from "@/components/DataTable/DatasetItem.vue";
import DatasetPager from "@/components/DataTable/DatasetPager.vue";
import DatasetSearch from "@/components/DataTable/DatasetSearch.vue";
import DatasetShow from "@/components/DataTable/DatasetShow.vue";
import DataAction from "@/components/DataTable/DataAction.vue";
import DatasetStatus from "@/components/DataTable/DatasetStatus.vue";
export default {
    components: {
        Dataset,
        DatasetInfo,
        DatasetItem,
        DatasetPager,
        DatasetSearch,
        DatasetShow,
        DatasetStatus,
        DataAction,
        CollapseTransition,
        content
    },

    data() {
        return {
            showModal: false,
            StockModal: false,
            OutStockModal: false,
            mobileSubmenuIndex: null,
            ShowDetailes: false,
            isOpenA: false,
            activeBtn: "",
            Addorder: false,
            Export: false,
            Status: false,
            Count: false,
            Expanded: null,
            Shipping: false,
            Discount: false,
            blogsList: blogs,
            filteredContainer: [],
            cols: [
                {
                    name: "شناسه",
                    field: "blogId",
                    size: "w-10",
                    center: "justify-center",
                },
                {
                    name: "تصویر",
                    field: "blogImage",
                    size: "w-auto",
                    center: "justify-center",
                },
                {
                    name: "عنوان",
                    field: "blogName",
                    size: "w-auto",
                    center: "justify-start",
                },
                {
                    name: "وضعیت",
                    field: "blogStatus",
                    size: "w-auto",
                    center: "justify-center",
                },

                {
                    name: "دسته ها",
                    field: "blogLevel",
                    size: "w-auto",
                    center: "justify-center",
                },
                {
                    name: "تاریخ",
                    field: "blogFeatured",
                    size: "w-auto",
                    center: "justify-center",
                },


                {
                    name: "عملیات",
                    field: "blogAction",
                    size: "w-auto",
                    center: "justify-center",
                },
            ],
        };
    },
    methods: {
        openSubMobileTable(stateId) {
            if (stateId == this.mobileSubmenuIndex) this.mobileSubmenuIndex = null;
            else this.mobileSubmenuIndex = stateId;
        },

        click(event, i) {
            let toset;
            const sortEl = this.cols[i];

            if (!event.shiftKey) {
                this.cols.forEach((o) => {
                    if (o.field !== sortEl.field) {
                        o.sort = "";
                    }
                });
            }
            if (!sortEl.sort) {
                toset = "asc";
            }
            if (sortEl.sort === "desc") {
                toset = event.shiftKey ? "" : "asc";
            }
            if (sortEl.sort === "asc") {
                toset = "desc";
            }
            sortEl.sort = toset;
        },
    },
    computed: {
        sortBy() {
            return this.cols.reduce((acc, o) => {
                if (o.sort) {
                    o.sort === "asc" ? acc.push(o.field) : acc.push("-" + o.field);
                }

                return acc;
            }, []);
        },
    },
};
</script>
