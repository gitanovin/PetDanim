<template>
    <div class="relative lg:w-44 lg:justify-end lg:flex">
            <button
              v-on:click.prevent="Status = !Status"
              class="box-border border relative z-0 flex items-center justify-center w-full p-2.5 overflow-hidden font-medium text-gray-500 transition-all duration-300 rounded-md cursor-pointer group ease focus:outline-none"
            >
              <span
                class="relative z-20 flex items-center justify-center w-full text-center"
              >
                <i
                  :class="Status == 1 ? 'fa-chevron-down' : 'fa-angle-up'"
                  class="fa-duotone text-[15px] text-slate-500"
                ></i>
                <span class="w-full">انتخاب وضعیت</span></span
              >
            </button>
            <div
              v-if="Status"
              class="absolute z-10 w-full mt-6 bg-white border rounded-lg top-6"
            >
              <ul class="py-1 text-sm font-medium text-right text-gray-700">
                <li>
                  <a
                    href="javascript:void(0)"
                    @click="doFilter('all')"
                    class="block px-4 py-2 font-medium hover:bg-gray-100"
                    >همه </a
                  >
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    @click="doFilter('paied')"
                    class="block px-4 py-2 font-medium hover:bg-gray-100"
                    >جدیدترین ها</a
                  >
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    @click="doFilter('unpaied')"
                    class="block px-4 py-2 font-medium hover:bg-gray-100"
                    >قدیمی ترین</a
                  >
                </li>
                
              </ul>
            </div>
          </div>
</template>

<script>

export default {
    data() {
        return {

            Status: false,

        }
    },
    methods: {
        doFilter(type) {
            this.Status = false
            if (type == 'paied') {
                this.$emit('doFilterStatus' , 'paied')
            } else if (type == 'unpaied') {
                this.$emit('doFilterStatus' , 'unpaied')
            } else {
                this.$emit('doFilterStatus' , 'all')
            }
        }
    }
}

</script>
