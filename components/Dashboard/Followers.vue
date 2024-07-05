<template>
  <div
    class="posts border border-gray-200 dark:border-dark-700/20 rounded-lg card dark:bg-dark-800 p-4"
  >
    <div class="w-full pb-6">
      <div class="overflow-hidden">
        <div class="gap-4 lg:grid lg:grid-cols-12">
          <dataset
            v-slot="{ ds }"
            :ds-data="followersList"
            :ds-sort-as="{}"
            :ds-search-in="['name' , 'username']"
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
                      class="fa-solid fa-bookmark text-[20px] !w-5 !h-5 text-hamian ml-1"
                    ></i>
                    لیست دنبال کننده های شما
                  </h6>
                  <p
                    class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa dark:text-gray-300"
                  >
                    از این بخش می توانید دنبال کننده های خود را مدیریت کنید
                  </p>
                </div>

                <div
                  class="py-8 border-b px-7 card-header dark:border-dark-700/20"
                >
                  <div
                    class="grid lg:grid-cols-1 gap-4 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1"
                  >
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
                  class="hidden grid gap-4 px-6 py-6 bg-stripes-purple xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-4 4xl:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1"
                >
                  <div
                    class="lg:justify-end lg:flex w-full relative text-right"
                  >
                    <dataset-show :dsShowEntries="5" />
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
                                <dataset-item
                                  tag="ul"
                                  class="flex-col space-y-3 p-4 border-t bg-gray-50 divide-gray-200 last:border-b dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300 dark:divide-dark-700/20"
                                  name="fade"
                                  is="transition-group"
                                >
                                  <template #default="{ row, rowIndex }">
                                    <li
                                      class="flex justify-between items-center bg-white dark:bg-dark-900 p-2 rounded-lg px-4 border dark:border-dark-700/20"
                                    >
                                      <div class="profile flex items-center">
                                        <img
                                          v-if="row.image == null"
                                          src="@/assets/images/avatar.png"
                                          class="rounded-full w-12 h-12 ml-2"
                                        />
                                        <img
                                          v-else
                                          :src="`${$config.public.appBaseUrl}/storage/users/profile/${row.profile}`"
                                          class="rounded-full w-12 h-12 ml-2"
                                        />
                                        <div class="flex flex-col gap-y-2">
                                          <span>{{ row.name }}</span>
                                          <span>@{{ row.username }}</span>
                                        </div>
                                      </div>
                                      <div class="button" >
                                        <button @click="openPromptModal(row.id)"
                                          class="follow p-4 py-1 bg-orange-500 text-white  rounded-full"
                                        >
                                          بیرون انداختن
                                        </button>
                                      </div>
                                    </li>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dataset>
        </div>
      </div>
    </div>

    <promptModal
      :show="showPromptModal"
      title="هشدار"
      message="آیا میخواهید این کاربر از لیست دنبال کننده های شما حذف شود ؟ "
      @confirm="handleConfirm"
      @cancel="handleCancel"
      :isLoading="isLoading"
    />
  </div>
</template>

<script>
import content from "@/components/TemplateParts/contentPost.vue";
import CollapseTransition from "@/components/DataTable/CollapseTransition.vue";
import Dataset from "@/components/DataTable/Dataset.vue";
import DatasetInfo from "@/components/DataTable/DatasetInfo.vue";
import DatasetItem from "@/components/DataTable/DatasetItem.vue";
import DatasetPager from "@/components/DataTable/DatasetPager.vue";
import DatasetSearch from "@/components/DataTable/DatasetSearch.vue";
import DatasetShow from "@/components/DataTable/DatasetShow.vue";
import DataAction from "@/components/DataTable/DataAction.vue";
import DatasetStatus from "@/components/DataTable/DatasetStatus.vue";
import promptModal from '@/components/TemplateParts/Modal/promptModal.vue'
import { mapStores } from 'pinia';
import { usePetdanimStore } from "@/store/petdanimStore";

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
    content,
    promptModal
  },
  props: {
    followersList: {
      required: true,
      type: [Array, Object],
    },
  },
  emits: ['updateFollowers'],
  data() {
    return {
      isLoading: false,
      showPromptModal: false,
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
      filteredContainer: [],
      followerId: 0
    };
  },
  methods: {
    openPromptModal(followerId) {
      this.showPromptModal = true
      this.followerId = followerId
    },
    openSubMobileTable(stateId) {
      if (stateId == this.mobileSubmenuIndex) this.mobileSubmenuIndex = null;
      else this.mobileSubmenuIndex = stateId;
    },

    async handleConfirm (){
        this.isLoading = true

        const result = await this.petdanimStore.removeUserFollowers({follower_id: this.followerId})
        if(result.status == 200) {
            this.isLoading = false
            this.showPromptModal = false

            this.$emit('updateFollowers' , result.result)

            this.$toast(result.message , {
                "theme": "colored",
                "type": "success"
            });
        }else {
            this.isLoading = false
            this.showPromptModal = false

            this.$toast(result.message , {
                "theme": "colored",
                "type": "error"
            });
        }
    },

    handleCancel(){
        this.showPromptModal = false
    }
  },
  computed: {
      ...mapStores(usePetdanimStore)
  },
};
</script>
