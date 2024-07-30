<template>
  <div class="Hero !bg-cover bg-no-repeat isolate -z-20 opacity-50 hidden lg:flex dark:!hidden h-screen"></div>
  <div
    class="lg:relative lg:flex  lg:flex-col lg:items-center lg:justify-center w-full lg:h-screen bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400  dark:!from-dark-800 dark:!via-dark-800 dark:!to-dark-700/30 lg:rounded-tl-[300px] rounded-b-lg"
  >
    <section class="splash-inner lg:h-screen xl:py-8 lg:py-16">
      <div class="splash-header lg:py-0 py-6">
        <div class="splash--logo lg:w-80 lg:max-w-full max-w-36 w-full mx-auto">
          <a href="/" title="">
            <LoginPetSvg />
          </a>
        </div>
        <h1 class="lg:text-3xl lg:font-extrabold text-white lg:mt-16 text-2xl font-bold lg:text-right text-center mt-6">
          اینجا هر کسی می&zwnj;تونه بنویسه!
        </h1>
        <h2
          class="splash--subtitle py-6 text-2xl font-semibold text-orange-100 hidden lg:block"
        >
          همین حالا حساب کاربری خودت را بساز و در مورد حیوان مور علاقت بنویس
        </h2>
      </div>
      <div class="splash-content hidden lg:flex">
        <ul class="space-y-4 text-white">
          <li class="flex">
            <CheckIcon class="ml-2" />
            اگر شما هم عاشق حیوانات هستید در پت دانیم می&zwnj;توانید مطالب
            متنوعی را در موضوعات مختلف بخوانید.
          </li>
          <li class="flex">
            <CheckIcon class="ml-2" />
            با نوشتن مطلبتان در پت دانیم آن را در معرض دید قشر وسیعی از علاقه
            مندان حیوانات قرار خواهید داد.
          </li>
          <li class="flex">
            <CheckIcon class="ml-2" />
            پت دانیم آمار دقیقی از تعداد و میزان خوانده شدن مطلبتان به شما ارائه
            می&zwnj;دهد.
          </li>
        </ul>
      </div>
    </section>

       <div class="footer w-full py-4 hidden lg:block">
    <footer class="splash-footer flex justify-between items-center px-8 text-orange-100">
      <div class="copyright block-start text-orange-100">
        © تمام حقوق برای پت دانیم محفوظ است.
      </div>
      <nav class="menu block-end">
        <ul class="inline-flex gap-4 items-center">
          <li><nuxt-link to="/">صفحه اصلی </nuxt-link></li>
          <li><nuxt-link to="/">تماس با ما</nuxt-link></li>
          <li>
            <a
              href="https://www.instagram.com/"
              title="اینستاگرام پت دانیم"
              >
              <InstagramIcon class="w-6 !stroke-orange-100 !fill-none"/>
          </a>
          </li>
          <li>
            <a href="https://twitter.com/" title="توئیتر پت دانیم"
              >
             <TwitterIcon class="w-6  !fill-orange-100"/>
          </a>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
  </div>


</template>

<script setup>
import LoginPetSvg from '@/assets/images/login-pet.svg'
import CheckIcon from "@/components/Icons/CheckIcon.vue";
import InstagramIcon from "@/components/Icons/social/instagram.vue";
import TwitterIcon from "@/components/Icons/social/twitter.vue";

</script>
