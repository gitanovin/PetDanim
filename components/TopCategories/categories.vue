<template>
  <section>
    <div class="max-w-7xl mx-auto py-16 lg:py-28">
      <div
        class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50"
      >
        <div class="max-w-2xl">
          <h2 class="text-xl md:text-3xl lg:text-xl font-semibold">
            موضوعات پرطرفدار
          </h2>
          <span
            class="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400"
            >233 دسته</span
          >
        </div>
      </div>
      <div class="nc-MySlider">
        <div class="relative flow-root">
          <div class="flow-root overflow-hidden rounded-xl">
            <ul class="relative whitespace-nowrap -mx-2 xl:-mx-4">
              <Splide
                :options="{
                  perPage: 5,
                  // perMove: 1,
                  type: 'loop',
                  direction: 'rtl',
                  gap: '1rem',
                  padding: '0',
                  focus: 'center',
                  breakpoints: {
                    400: {
                      perPage: 1,
                      padding: '3rem',
                      gap: '1rem',
                    },
                    640: {
                      perPage: 1,
                      padding: '3rem',
                      gap: '1rem',
                    },
                  },
                }"
              >
                <SplideSlide class="splide__slide rounded-lg">
                  <li
                    class="relative inline-block px-2 xl:px-4 whitespace-normal overflow-hidden"
                  >
                    <a
                      class="flex flex-col"
                      href="/archive/the-demo-archive-slug"
                      ><div
                        class="flex-shrink-0 relative w-full h-full aspect-w-7 aspect-h-5 rounded-3xl overflow-hidden group"
                      >
                        <img
                          src="@/assets/images/3.jpg"
                          class="object-cover w-full h-full rounded-2xl relative inset-0"
                          alt="taxonomies"
                        />
                        <div>
                          <span
                            class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute top-3 left-3 text-indigo-800 bg-indigo-100"
                            >#1</span
                          >
                        </div>
                        <span
                          class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"
                        ></span>
                      </div>
                      <div class="flex items-center mt-5">
                        <div
                          class="w-9 h-9 bg-indigo-500 rounded-full"
                          v-for="user in users"
                          :style="{ backgroundColor: randomColor() }"
                        >{{user.name}}</div>
                        <div class="mr-4">
                          <h2
                            class="text-base text-neutral-900 dark:text-neutral-100 font-medium"
                          >
                            <!-- {{user.name}} -->
                          </h2>
                          <span
                            class="block text-sm text-neutral-500 dark:text-neutral-400"
                            >13 Articles</span
                          >
                        </div>
                      </div></a
                    >
                  </li>
                </SplideSlide>

                 <SplideSlide class="splide__slide rounded-lg">
                  <li
                    class="relative inline-block px-2 xl:px-4 whitespace-normal overflow-hidden"
                  >
                    <a
                      class="flex flex-col"
                      href="/archive/the-demo-archive-slug"
                      ><div
                        class="flex-shrink-0 relative w-full h-full aspect-w-7 aspect-h-5 rounded-3xl overflow-hidden group"
                      >
                        <img
                          src="@/assets/images/7.jpg"
                          class="object-cover w-full h-full rounded-2xl relative inset-0"
                          alt="taxonomies"
                        />
                        <div>
                          <span
                            class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute top-3 left-3 text-indigo-800 bg-indigo-100"
                            >#1</span
                          >
                        </div>
                        <span
                          class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"
                        ></span>
                      </div>
                      <div class="flex items-center mt-5">
                        <div
                          class="w-9 h-9 bg-indigo-500 rounded-full"
                          v-for="user in users"
                          :style="{ backgroundColor: randomColor() }"
                        >{{user.name}}</div>
                        <div class="mr-4">
                          <h2
                            class="text-base text-neutral-900 dark:text-neutral-100 font-medium"
                          >
                            <!-- {{user.name}} -->
                          </h2>
                          <span
                            class="block text-sm text-neutral-500 dark:text-neutral-400"
                            >13 Articles</span
                          >
                        </div>
                      </div></a
                    >
                  </li>
                </SplideSlide>

                 <SplideSlide class="splide__slide rounded-lg">
                  <li
                    class="relative inline-block px-2 xl:px-4 whitespace-normal overflow-hidden"
                  >
                    <a
                      class="flex flex-col"
                      href="/archive/the-demo-archive-slug"
                      ><div
                        class="flex-shrink-0 relative w-full h-full aspect-w-7 aspect-h-5 rounded-3xl overflow-hidden group"
                      >
                        <img
                          src="@/assets/images/4.jpg"
                          class="object-cover w-full h-full rounded-2xl relative inset-0"
                          alt="taxonomies"
                        />
                        <div>
                          <span
                            class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute top-3 left-3 text-indigo-800 bg-indigo-100"
                            >#1</span
                          >
                        </div>
                        <span
                          class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"
                        ></span>
                      </div>
                      <div class="flex items-center mt-5">
                        <div
                          class="w-9 h-9 bg-indigo-500 rounded-full"
                          v-for="user in users"
                          :style="{ backgroundColor: randomColor() }"
                        >{{user.name}}</div>
                        <div class="mr-4">
                          <h2
                            class="text-base text-neutral-900 dark:text-neutral-100 font-medium"
                          >
                            <!-- {{user.name}} -->
                          </h2>
                          <span
                            class="block text-sm text-neutral-500 dark:text-neutral-400"
                            >13 Articles</span
                          >
                        </div>
                      </div></a
                    >
                  </li>
                </SplideSlide>

                 <SplideSlide class="splide__slide rounded-lg">
                  <li
                    class="relative inline-block px-2 xl:px-4 whitespace-normal overflow-hidden"
                  >
                    <a
                      class="flex flex-col"
                      href="/archive/the-demo-archive-slug"
                      ><div
                        class="flex-shrink-0 relative w-full h-full aspect-w-7 aspect-h-5 rounded-3xl overflow-hidden group"
                      >
                        <img
                          src="@/assets/images/1.jpg"
                          class="object-cover w-full h-full rounded-2xl relative inset-0"
                          alt="taxonomies"
                        />
                        <div>
                          <span
                            class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute top-3 left-3 text-indigo-800 bg-indigo-100"
                            >#1</span
                          >
                        </div>
                        <span
                          class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"
                        ></span>
                      </div>
                      <div class="flex items-center mt-5">
                        <div
                          class="w-9 h-9 bg-indigo-500 rounded-full"
                          v-for="user in users"
                          :style="{ backgroundColor: randomColor() }"
                        >{{user.name}}</div>
                        <div class="mr-4">
                          <h2
                            class="text-base text-neutral-900 dark:text-neutral-100 font-medium"
                          >
                            <!-- {{user.name}} -->
                          </h2>
                          <span
                            class="block text-sm text-neutral-500 dark:text-neutral-400"
                            >13 Articles</span
                          >
                        </div>
                      </div></a
                    >
                  </li>
                </SplideSlide>
              </Splide>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default{

 data() {
    return {
        users: [{
      id: 1,
      name: 'Alice'
    }, {
      id: 2,
      name: 'Bob'
    }, {
      id: 3,
      name: 'Carol'
    }, {
      id: 4,
      name: 'Dennis'
    }],
    colorCache: {}

    };
  },
    methods: {
    randomColor(id) {
      const r = () => Math.floor(256 * Math.random());

      return this.colorCache[id] || (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`);
    },
    
  },

  

}
</script>
