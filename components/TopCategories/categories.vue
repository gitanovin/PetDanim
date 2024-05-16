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
            >Top categories</span
          >
        </div>
      </div>
      <div class="nc-MySlider">
        <div class="relative flow-root">
          <div class="flow-root overflow-hidden rounded-xl">
            <ul class="relative"  id="advertising" >
              <Splide
                :options="{
                  perPage: 5,
                   type: 'loop',
                  direction: 'rtl',
                  gap: '10px',
                  //   padding: '0',
                  //   focus: 'center',
                  breakpoints: {
                    400: {
                      perPage: 1,
                      padding: '4rem',
                      gap: '1rem',
                    },
                    640: {
                      perPage: 1,
                      padding: '4rem',
                      gap: '1rem',
                    },
                  },
                }"
              >
                <SplideSlide class="splide__slide rounded-lg">
                  <li>
                    <div class="h-36 w-full relative group overflow-hidden">
                      <a
                        href="/tag/fintech/"
                        class="absolute inset-0 z-10 block w-full h-full"
                      ></a>
                      <div
                        class="absolute z-20 flex items-center mb-3 bottom-1 right-4"
                      >
                        <a
                          href="/tag/fintech/"
                          class="bg-white px-2.5 py-[5px] rounded-full text-xs font-bold"
                        >
                          <span
                            class="inline-block rounded-full w-[10px] h-[10px] ml-1 bg-green-500"
                          ></span>
                          <span class="align-[1px]">سگ ها</span>
                        </a>
                      </div>
                      <img
                        class="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                        src="@/assets/images/2.webp"
                        alt=""
                      />
                    </div>
                  </li>
                </SplideSlide>

                <SplideSlide class="splide__slide rounded-lg">
                  <li>
                    <div class="h-36 w-full relative group overflow-hidden">
                      <a
                        href="/tag/fintech/"
                        class="absolute inset-0 z-10 block w-full h-full"
                      ></a>
                      <div
                        class="absolute z-20 flex items-center mb-3 bottom-1 right-4"
                      >
                        <a
                          href="/tag/fintech/"
                          class="bg-white px-2.5 py-[5px] rounded-full text-xs font-bold"
                        >
                          <span
                            class="inline-block rounded-full w-[10px] h-[10px] ml-1 bg-orange-500"
                          ></span>
                          <span class="align-[1px]">پرندگان</span>
                        </a>
                      </div>
                      <img
                        class="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                        src="@/assets/images/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                </SplideSlide>

                <SplideSlide class="splide__slide rounded-lg">
                  <li>
                    <div class="h-36 w-full relative group overflow-hidden">
                      <a
                        href="/tag/fintech/"
                        class="absolute inset-0 z-10 block w-full h-full"
                      ></a>
                      <div
                        class="absolute z-20 flex items-center mb-3 bottom-1 right-4"
                      >
                        <a
                          href="/tag/fintech/"
                          class="bg-white px-2.5 py-[5px] rounded-full text-xs font-bold"
                        >
                          <span
                            class="inline-block rounded-full w-[10px] h-[10px] ml-1 bg-pink-500"
                          ></span>
                          <span class="align-[1px]">پرندگان</span>
                        </a>
                      </div>
                      <img
                        class="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                        src="@/assets/images/5.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                </SplideSlide>

                <SplideSlide class="splide__slide rounded-lg">
                  <li>
                    <div class="h-36 w-full relative group overflow-hidden">
                      <a
                        href="/tag/fintech/"
                        class="absolute inset-0 z-10 block w-full h-full"
                      ></a>
                      <div
                        class="absolute z-20 flex items-center mb-3 bottom-1 right-4"
                      >
                        <a
                          href="/tag/fintech/"
                          class="bg-white px-2.5 py-[5px] rounded-full text-xs font-bold"
                        >
                          <span
                            class="inline-block rounded-full w-[10px] h-[10px] ml-1 bg-pink-500"
                          ></span>
                          <span class="align-[1px]">پرندگان</span>
                        </a>
                      </div>
                      <img
                        class="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                        src="@/assets/images/6.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                </SplideSlide>

                <SplideSlide class="splide__slide rounded-lg">
                  <li>
                    <div class="h-36 w-full relative group overflow-hidden">
                      <a
                        href="/tag/fintech/"
                        class="absolute inset-0 z-10 block w-full h-full"
                      ></a>
                      <div
                        class="absolute z-20 flex items-center mb-3 bottom-1 right-4"
                      >
                        <a
                          href="/tag/fintech/"
                          class="bg-white px-2.5 py-[5px] rounded-full text-xs font-bold"
                        >
                          <span
                            class="inline-block rounded-full w-[10px] h-[10px] ml-1 bg-pink-500"
                          ></span>
                          <span class="align-[1px]">پرندگان</span>
                        </a>
                      </div>
                      <img
                        class="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                        src="@/assets/images/3.jpg"
                        alt=""
                      />
                    </div>
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
export default {
  data() {
    return {
      colorCache: {},
    };
  },
  methods: {
    randomColor(id) {
      const r = () => Math.floor(256 * Math.random());

      return (
        this.colorCache[id] ||
        (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`)
      );
    },
  },
};
</script>
