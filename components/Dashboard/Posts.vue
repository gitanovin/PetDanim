<template>
    <div
      class="posts border border-gray-200 dark:border-dark-700/20 rounded-lg card dark:bg-dark-800 p-4"
    >
      <div
        class="grid gap-4 mt-4 mb-4 font-medium lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 font-fa"
      >
        <div
          class="col-span-1 row-span-1 p-6 border rounded-lg dark:border-dark-700/20"
        >
          <div class="flex items-start content-between justify-between">
            <div class="content-left">
              <span class="text-sm text-gray-500 dark:text-gray-300"
                >تعداد نوشته ها</span
              >
              <div class="flex items-center my-1">
                <h4 class="mb-0 ml-2 font-bold">{{ postVerifiedCount }}</h4>
              </div>
              <span class="text-xs text-gray-500">مجموع نوشته منتشر شده</span>
            </div>
            <span
              class="flex items-center justify-center w-8 h-8 p-2 bg-orange-100 text-orange-500 rounded badge"
            >
              <i class="fa fa-edit"></i>
            </span>
          </div>
        </div>
        <div
          class="col-span-1 row-span-1 p-6 border rounded-lg dark:border-dark-700/20"
        >
          <div class="flex items-start content-between justify-between">
            <div class="content-left">
              <span class="text-sm text-gray-500 dark:text-gray-300"
                >تعداد رد شده ها</span
              >
              <div class="flex items-center my-1">
                <h4 class="mb-0 ml-2 font-bold">{{ waitingVerifiedPostCount }}</h4>
              </div>
              <span class="text-xs text-gray-500">مجموع نوشته ی رد شده</span>
            </div>
            <span
              class="flex items-center justify-center w-8 h-8 p-2 text-green-500 bg-green-100 rounded badge"
            >
              <i class="fa-light fa-save"></i>
            </span>
          </div>
        </div>
        <div
          class="col-span-1 row-span-1 p-6 border rounded-lg dark:border-dark-700/20"
        >
          <div class="flex items-start content-between justify-between">
            <div class="content-left">
              <span class="text-sm text-gray-500 dark:text-gray-300">بازدید های پست</span>
              <div class="flex items-center my-1">
                <h4 class="mb-0 ml-2 font-bold">{{ postVisitCount }}</h4>
              </div>
              <span class="text-xs text-gray-500"
                >مجموع بازدیدها از پست های شما</span
              >
            </div>
            <span
              class="flex items-center justify-center w-8 h-8 p-2 text-red-500 bg-red-100 rounded badge"
            >
              <i class="fa-light fa-list"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="w-full pb-6">
        <div class="overflow-hidden">
          <div class="gap-4 lg:grid lg:grid-cols-12">
            <dataset
              v-slot="{ ds }"
              :ds-data="postsList"
              :ds-sortby="sortBy"
              :ds-sort-as="{}"
              :ds-search-in="['id', 'title']"
              :ds-search-as="{}"
            >
              <div class="col-span-12 font-fa">
                <div
                  class="mt-2 mb-6 bg-white border border-gray-200 blog-info rounded-xl dark:text-gray-300 dark:bg-dark-800 dark:border-dark-700/20"
                >
                  <div
                    class="relative px-6 py-6 pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200 dark:border-dark-700/20"
                  >
                    <h6
                      class="flex items-center gap-1 text-xs antialiased font-semibold leading-normal text-gray-600 font-fa dark:text-gray-300"
                    >
                      <i
                        class="fa-light fa-grid-2 text-[20px] !w-5 !h-5 text-hamian ml-1"
                      ></i
                      >نوشته ها
                    </h6>
                    <p
                      class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa dark:text-gray-300"
                    >
                      از این بخش می توانید نوشته ها را مدیریت یا حذف نمایید
                    </p>
                  </div>
  
                  <div
                    class="py-8 border-b px-7 card-header dark:border-dark-700/20"
                  >
                    <div
                      class="grid lg:grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1"
                    >
                      <div class="w-full">
                        <RouterLink to="/profile/create-post">
                          <button
                            class="box-border relative z-0 inline-flex items-center justify-end w-full p-2.5 overflow-hidden font-medium text-white transition-all duration-300 bg-orange-500 rounded-md cursor-pointer group ease focus:outline-none"
                          >
                            <span
                              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                            ></span
                            ><span
                              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                            ></span
                            ><span
                              class="relative z-20 flex items-center justify-center w-full text-center"
                              ><i
                                class="pl-2 text-2xl text-white fa-light fa-plus"
                              ></i
                              ><span class="w-full">افزودن نوشته جدید</span></span
                            >
                          </button>
                        </RouterLink>
                      </div>
  
                      <div class="w-full">
                        <div class="flex rounded-md hover:shadow-sm">
                          <div
                            class="relative flex items-stretch flex-grow focus-within:z-10"
                          >
                            <dataset-search
                              ds-search-placeholder="جستجو در لیست..."
                              class=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div
                    class="grid gap-4 px-6 py-6 bg-stripes-purple xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-4 4xl:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1"
                  >
                    <div class="relative flex w-full gap-4">
                      <data-action @removePosts="(value) => removePosts(value)" />
                    </div>
                    <div
                      class="lg:justify-end lg:flex w-full relative text-right"
                    >
                      <dataset-show />
                    </div>
                  </div>
  
                  <div class="flex flex-col">
                    <div class="overflow-hidden">
                      <div class="min-w-full align-middle">
                        <div class="flex flex-col lg:hidden">
                          <div class="overflow-hidden">
                            <div class="inline-block min-w-full align-middle">
                              <div class="relative overflow-hidden">
                                <div class="w-full table-auto">
                                  <div>
                                    <div
                                      class="text-sm leading-normal text-right text-gray-600 uppercase border-t border-gray-200"
                                    >
                                      <div
                                        scope="col"
                                        class="px-6 py-3 font-semibold"
                                      >
                                        نوشته ها
                                      </div>
                                    </div>
                                  </div>
  
                                  <dataset-item
                                    tag="ul"
                                    class="bg-white divide-gray-200 last:border-b dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300 dark:hover:bg-dark-700/20 dark:divide-dark-700/20"
                                    name="fade"
                                    is="transition-group"
                                  >
                                    <template #default="{ row, rowIndex }">
                                      <li
                                        class="flex border-t border-gray-200 divide-gray-200 cursor-pointer items-center justify-between relative dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300 dark:hover:bg-dark-700/20 dark:divide-dark-700/20"
                                        v-on:click.prevent="
                                          openSubMobileTable(row.id)
                                        "
                                      >
                                        <div class="flex px-6 py-2 text-right">
                                          <div class="flex items-center">
                                            <img
                                              :src="`${$config.public.appBaseUrl}/storage/posts/${row.image}`"
                                              class="w-10 h-10 rounded-lg mx-auto ml-2"
                                            />
  
                                            <p
                                              class="text-sm font-regular text-gray-700 break-words dark:text-gray-300"
                                            >
                                              {{ row.title }}
                                            </p>
                                          </div>
                                        </div>
  
                                        <div class="px-6 py-3" scope="col">
                                          <div
                                            class="flex justify-center cursor-pointer item-center"
                                          >
                                            <div
                                              class="flex items-center justify-center w-4 font-extrabold transform hover:text-gray-500 hover:scale-110"
                                            >
                                              <i
                                                :class="{
                                                  'fa-minus':
                                                    mobileSubmenuIndex == row.id,
                                                  'fa-plus':
                                                    mobileSubmenuIndex != row.id,
                                                }"
                                                class="w-4 h-4 text-hamian transition-transform transform fa-solid"
                                                aria-hidden="true"
                                              ></i>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
  
                                      <collapse-transition>
                                        <div
                                          v-show="mobileSubmenuIndex == row.id"
                                          class="border-transparent border-y border-b-slate-200 dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300 dark:hover:bg-dark-700 dark:divide-dark-700/20"
                                        >
                                          <div colspan="100" class="p-0">
                                            <div
                                              class="border-l border-r rounded-b-lg dark:divide-gray-700/20 dark:border-dark-700/20"
                                            >
                                              <div class="pb-4">
                                                <div
                                                  class="min-w-full overflow-x-auto is-scrollbar-hidden"
                                                >
                                                  <div
                                                    class="w-full text-left is-hoverable"
                                                  >
                                                    <div
                                                      class="border-b border-gray-200 divide-gray-200 dark:divide-gray-700/20 dark:border-dark-700/20"
                                                    >
                                                      <div
                                                        class="flex px-6 py-3 text-right border-b dark:border-dark-700/20"
                                                      >
                                                        <div
                                                          class="flex items-center text-base font-semibold"
                                                        >
                                                          شناسه :
                                                          <span
                                                            class="mr-1 font-medium text-hamian ltr"
                                                          >
                                                            #{{ row.id }}
                                                          </span>
                                                        </div>
                                                      </div>
  
                                                      <div
                                                        class="flex px-6 py-3 text-right border-b dark:border-dark-700/20"
                                                      >
                                                        <div
                                                          class="flex items-center text-base font-semibold"
                                                        >
                                                          تاریخ :
                                                          <span
                                                            class="mr-1 font-medium"
                                                          >
                                                            {{ row.date }}
                                                          </span>
                                                        </div>
                                                      </div>
  
                                                      <div
                                                        class="flex px-6 py-3 text-right border-b dark:border-dark-700/20"
                                                      >
                                                        <div
                                                          class="flex items-center text-base font-semibold"
                                                        >
                                                          دسته :
                                                          <span
                                                            class="mr-1 font-medium"
                                                          >
                                                            <i
                                                              @click="
                                                                openTagModal(
                                                                  row.tags
                                                                )
                                                              "
                                                              class="fa-light text-lg fa-info-circle cursor-pointer text-gray-600"
                                                            ></i>
                                                          </span>
                                                        </div>
                                                      </div>
  
                                                      <div
                                                        class="flex px-6 py-3 text-right border-b dark:border-dark-700/20"
                                                      >
                                                        <div
                                                          class="flex items-center text-base font-semibold"
                                                        >
                                                          وضعیت :
                                                          <span
                                                            class="mr-1 font-medium"
                                                          >
                                                            <div
                                                              class="text-[15px] font-semibold"
                                                            >
                                                              <span
                                                                class="font-semibold text-green-500"
                                                                v-if="
                                                                  row.status == 1
                                                                "
                                                                >منتشر شده</span
                                                              >
                                                              <span
                                                                class="font-semibold text-orange-500"
                                                                v-if="
                                                                  row.status == 0
                                                                "
                                                                >در انتظار تایید
                                                              </span>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
  
                                                      <div
                                                        class="flex px-6 py-3 text-right"
                                                      >
                                                        <div
                                                          class="flex items-center text-base font-semibold"
                                                        >
                                                          <span class="mr-1">
                                                            <div
                                                              class="flex justify-center item-center"
                                                            >
                                                              <div
                                                                @click="deletePost(row.id , rowIndex)"
                                                                class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                              >
                                                                <i
                                                                  class="fa-light fa-trash-can text-[18px] !w-5 !h-5 font-normal"
                                                                ></i>
                                                              </div>
                                                              <RouterLink
                                                                to="/edit-news"
                                                              >
                                                                <div
                                                                  class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                                >
                                                                  <i
                                                                    class="fa-light fa-edit text-[18px] !w-5 !h-5 font-normal"
                                                                  ></i>
                                                                </div>
                                                              </RouterLink>
  
                                                              <RouterLink
                                                                to="/view-blog"
                                                              >
                                                                <button
                                                                  class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                                >
                                                                  <i
                                                                    class="fa-solid fa-eye text-[18px] !w-5 !h-5 font-normal"
                                                                  ></i>
                                                                </button>
                                                              </RouterLink>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="mr-6 text-right">
                                                  <button
                                                    v-on:click.prevent="
                                                      Expanded = false
                                                    "
                                                    class="btn mt-2 h-8 rounded px-3 text-xs+ font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25"
                                                  >
                                                    بستن
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </collapse-transition>
                                    </template>
                                  </dataset-item>
                                </div>
  
                                <nav
                                  class="items-center justify-between block pt-4 pb-4 mx-4 lg:flex"
                                  aria-label="Table navigation"
                                >
                                  <dataset-info />
                                  <dataset-pager />
                                </nav>
                              </div>
                            </div>
                          </div>
                        </div>
  
                        <div
                          class="relative hidden overflow-x-auto lg:block Desktop-Table"
                        >
                          <table class="w-full">
                            <thead>
                              <tr
                                class="text-sm leading-normal text-right text-gray-600 uppercase border border-gray-200 divide-x dark:bg-dark-900 dark:border-dark-700/20 dark:hover:bg-dark-700/20 transition-all duration-300 dark:divide-dark-700/20 dark:text-gray-300"
                              >
                                <th
                                  scope="col"
                                  class="relative w-10 px-6 border-l sm:w-8 sm:px-8 dark:border-dark-700/20"
                                >
                                </th>
  
                                <th
                                  scope="col"
                                  v-for="(th, index) in cols"
                                  :key="th.field"
                                  :class="th.size"
                                  class="px-3 py-2 font-semibold text-center uppercase align-middle bg-transparent border-b border-collapse border-solid shadow-none d text-xxs tracking-none text-slate-700 opacity-70 dark:text-gray-300 dark:hover:bg-dark-700/20 dark:border-dark-700/20"
                                >
                                  <div
                                    class="flex items-center"
                                    :class="th.center"
                                  >
                                    <span class="font-medium">{{ th.name }}</span>
                                  </div>
                                </th>
                              </tr>
                            </thead>
  
                            <dataset-item
                              tag="tbody"
                              class="bg-white divide-gray-200 w-full dark:divide-dark-700/20 dark:bg-dark-900/70"
                              name="fade"
                              is="transition-group"
                            >
                              <template #default="{ row, rowIndex }">
                                <tr
                                  class="border-b border-gray-200 divide-x dark:divide-gray-700/20 dark:border-dark-700/20"
                                >
                                  <td
                                    class="relative w-10 px-6 border-l sm:w-8 sm:px-8 dark:border-dark-700/20"
                                  >
                                    <!-- <div class="absolute inset-y-0 right-0 w-0.5 bg-green-600"></div> -->
                                    <input
                                      type="checkbox"
                                      v-model="selectedIds"
                                      :value="row.id"
                                      class="absolute w-4 h-4 -mt-2 text-hamian border-gray-300 rounded right-4 top-1/2 focus:ring-hamian sm:right-6 dark:divide-gray-700/20 dark:border-dark-700/20"
                                    />
                                  </td>
  
                                  <td
                                    class="relative px-6 py-2 font-bold text-center text-hamian border-l ltr text-[15px] dark:border-dark-700/20 font-fd"
                                  >
                                    {{ row.id }}
                                  </td>
  
                                  <td class="p-2 text-right mx-auto">
                                    <img
                                      :src="`${$config.public.appBaseUrl}/storage/posts/${row.image}`"
                                      class="w-10 h-10 rounded-lg mx-auto"
                                    />
                                  </td>
  
                                  <td class="px-3 py-2 text-right text-sm">
                                    <p class="text-[15px] font-semibold w-[250px] truncate">
                                      {{ row.title }}
                                    </p>
                                  </td>
  
                                  <td class="px-3 py-2 text-center">
                                    <div class="text-[15px] font-semibold">
                                      <span
                                        class="font-semibold text-orange-500 dark:text-orange-500"
                                        v-if="row.status == 0"
                                        >در انتظار تایید</span
                                      >
                                      <span
                                        class="font-semibold text-success-500 dark:text-success-500"
                                        v-if="row.status == 1"
                                        >منتشر شده</span
                                      >
                                    </div>
                                  </td>
  
                                  <td class="p-2 text-center text-[15px]">
                                    <i
                                      @click="openTagModal(row.tags)"
                                      class="fa-light text-lg fa-info-circle cursor-pointer text-gray-600"
                                    ></i>
                                  </td>
  
                                  <td
                                    class="p-2 text-center mx-auto text-[15px] font-fd"
                                  >
                                    {{ row.date }}
                                  </td>
  
                                  <td
                                    scope="col"
                                    class="px-3 py-3 text-center border-l dark:border-dark-700/20"
                                  >
                                    <div
                                      class="flex justify-center item-center gap-4 text-gray-400"
                                    >
                                      <div
                                        @click="deletePost(row.id , rowIndex)"
                                        class="w-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                      >
                                        <i
                                          class="fa-light fa-trash-can text-[18px] !w-5 !h-5"
                                        ></i>
                                      </div>
  
                                      <RouterLink :to="`/profile/posts/${row.id}`">
                                        <div
                                          class="w-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                        >
                                          <i
                                            class="fa-light fa-edit text-[18px] !w-5 !h-5"
                                          ></i>
                                        </div>
                                      </RouterLink>
  
                                      <RouterLink to="/" v-if="row.status == 1">
                                        <div
                                          class="w-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                        >
                                          <i
                                            class="fa-light fa-eye text-[18px] !w-5 !h-5"
                                          ></i>
                                        </div>
                                      </RouterLink>
                                    </div>
                                  </td>
                                </tr>
                              </template>
                            </dataset-item>
                          </table>
                          <nav
                            class="items-center justify-between block pt-4 pb-4 mx-4 lg:flex"
                            aria-label="Table navigation"
                          >
                            <dataset-info />
                            <dataset-pager />
                          </nav>
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
  
      <TagsModal
        v-if="showTagModal"
        @closeModal="showTagModal = false"
        :tagsList="tagsList"
      />
    </div>
</template>
  
<script>
  import { mapStores } from 'pinia';
  import { usePetdanimStore } from "@/store/petdanimStore";
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
  import TagsModal from "./TagModal.vue";
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
      TagsModal,
    },
    emits: ['removePost'],
    props: {
      postsList: {
        required: true,
        type: [Array, Object],
      },
      postVisitCount: {
        required: true,
        type: Number,
      },
      postVerifiedCount: {
        required: true,
        type: Number,
      },
      waitingVerifiedPostCount: {
        required: true,
        type: Number,
      },
    },
    data() {
      return {
        tagsList: [],
        showTagModal: false,
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
            size: "w-32",
            center: "justify-start",
          },
          {
            name: "وضعیت",
            field: "blogStatus",
            size: "w-auto",
            center: "justify-center",
          },
  
          {
            name: "تگ ها",
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
        selectedIds: []
      };
    },
    methods: {
      openTagModal(tags) {
        this.showTagModal = true;
        this.tagsList = tags;
      },
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
      async deletePost(postId , postIndex){
          this.$swal.fire({
              title: "هشدار",
              text: "آیا از حذف این پست مطمعنید ؟",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#9d2c48",
              cancelButtonColor: "#555",
              cancelButtonText: "خیر",
              confirmButtonText: "بله",
          }).then(async (result) => {
              if (result.isConfirmed) {
                  const result = await this.petdanimStore.deleteUserPost(postId)
                  if(result.status == 200){
                  
                      this.$emit("removePost" , postIndex)
                      this.$toast(result.message , {
                          "theme": "colored",
                          "type": "success"
                      });
  
                  }else{
                      this.$toast(result.message , {
                          "theme": "colored",
                          "type": "error"
                      });
                  }
              }
          });
      },
      async removePosts(value){
          if(value != "") {
              this.$swal.fire({
              title: "هشدار",
              text: "آیا از حذف این پست ها مطمعنید ؟",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#9d2c48",
              cancelButtonColor: "#555",
              cancelButtonText: "خیر",
              confirmButtonText: "بله",
          }).then(async (result) => {
              if (result.isConfirmed) {
                  const result = await this.petdanimStore.deleteUserPosts({ids: this.selectedIds})
                  if(result.status == 200){
                  
                      this.$emit("removePost" , this.selectedIds)
                      this.$toast(result.message , {
                          "theme": "colored",
                          "type": "success"
                      });
  
                  }else{
                      this.$toast(result.message , {
                          "theme": "colored",
                          "type": "error"
                      });
                  }
              }
          });
          }else {
              this.$toast("اقدام مد نظر خود را انتخاب کنید" , {
                  "theme": "colored",
                  "type": "error"
              });
          }
      }   
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
      ...mapStores(usePetdanimStore)
    },
  };
  </script>