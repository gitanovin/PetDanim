<template>
  <div>
    <div>
      <div class="relative">
        <input
          type="text"
          id="ok"
          v-model="data.userInput"
          placeholder="پست الکترونیک یا شماره موبایل"
          class="block px-2.5 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:!text-white dark:!border-dark-700/20 border-gray-100 dark:focus:!border-dark-700/20 focus:outline-none focus:ring-0 focus:border-red-600 peer bg-white dark:!bg-dark-800"
        />
        <div
          class="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none"
        >
          <i
            class="fa-duotone fa-mobile text-orange-500 h-5 w-5 flex leading-[1px] pr-1"
          ></i>
        </div>

      </div>
      <p
        id="outlined_error_help"
        class="mt-2 text-xs text-gray-700 dark:text-red-400"
      >
        <span class="font-medium text-sm">
          آیا حساب کاربری ندارید ؟ <nuxt-link class="text-orange-600 underline" to="/auth/register">ثبت نام کنید</nuxt-link>
        </span>
      </p>
    </div>

    <div>
      <AuthButton 
        text="ورود به پت دانیم"
        :isLoading="isLoading"
        @doClick="doSendCode()"
      />

    </div>

    <VerifyCodeModal
      :modalHeaderType="data.inputType" 
      :activeModal="activeVerifyModal"
      @closeModal="activeVerifyModal = false"
      @resendOtp="resendCode()"
      @doAction="(otpCode) => doSignIn(otpCode)"
      :resendLoading="resendLoading"
      :resendended="resendended"
      :validateOtpLoading="validateOtpLoading"
    />
  </div>
</template>

<script setup>
  import {usePetdanimStore} from '~/store/petdanimStore.js'
  import AuthButton from '@/components/Buttons/AuthButton.vue'
  import VerifyCodeModal from '@/components/Auth/Form/FormVerifyCode.vue'
  import {useRoute} from 'vue-router'

  const activeVerifyModal = ref(false)
  const petdanimStore = usePetdanimStore()
  const validateOtpLoading = ref(false)
  const resendLoading = ref(false)
  const isLoading = ref(false)
  const resendended = ref(false)
  const uToken = useCookie("_uToken")
  const router = useRouter()

  const data = reactive({
    authAction: "login",
    otp: "",
    userInput: "",
    inputType: ""
  })
  const {$toast} = useNuxtApp()



  const doSendCode = async () => {
    if(data.userInput != ""){
      const userInputType = checkDataType(data.userInput)
      if(userInputType != 'invalid') {
        isLoading.value = true
        data.inputType = userInputType
        const result = await petdanimStore.doSendOtpCode(data)
        if(result.status == 200) {
          activeVerifyModal.value = true;
          isLoading.value = false
        }else if(result.status == 429) {
          $toast(result.message , {
            "theme": "colored",
            "type": "error"
          });
          isLoading.value = false
        }else {
          $toast(result.message , {
            "theme": "colored",
            "type": "error"
          });
          isLoading.value = false
        }
      }else {
        $toast('ورودی نامعتبر میباشد !' , {
          "theme": "colored",
          "type": "error"
        });
      }
    }else {
      $toast("اطلاعات خواسته شده را تکمیل وارد کنید" , {
        "theme": "colored",
        "type": "error"
      });
    }
  }

  const isEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  }

  const isMobile = (input) => {
    const mobileRegex = /^\+?[0-9]{1,15}$/;
    return mobileRegex.test(input);
  }

  const checkDataType = (input) => {
    if (isEmail(input)) {
      return 'email';
    } else if (isMobile(input)) {
      return 'mobile';
    } else {
      return 'invalid';
    }
  }

  const resendCode = async () => {
    if(data.userInput != ""){
      const userInputType = checkDataType(data.userInput)
      if(userInputType != 'invalid') {
        resendLoading.value = true
        data.inputType = userInputType
        const result = await petdanimStore.doSendOtpCode(data)
        if(result.status == 200) {
          resendLoading.value = false
        }else if(result.status == 429) {
          $toast(result.message , {
            "theme": "colored",
            "type": "error"
          });
          resendLoading.value = false
        }else {
          $toast(result.message , {
            "theme": "colored",
            "type": "error"
          });
          resendLoading.value = false
        }
      }else {
        $toast("شماره موبایل و یا ایمیل اشتباه است" , {
          "theme": "colored",
          "type": "error"
        });
      }
    }else {
      $toast("اطلاعات خواسته شده را تکمیل وارد کنید" , {
        "theme": "colored",
        "type": "error"
      });
    }
  }

  const doSignIn = async (otp) => {
    if(data.userInput != "" && otp != ""){
      const userInputType = checkDataType(data.userInput)
      if(userInputType != 'invalid') {
        validateOtpLoading.value = true
        data.inputType = userInputType
        data.otp = otp

        const result = await petdanimStore.doSignInUser(data)
        if(result.status == 200) {
          validateOtpLoading.value = false
          uToken.value = result.access_token

          $toast(result.message , {
            "theme": "colored",
            "type": "success"
          });

          router.push("/profile")
        }else {
          validateOtpLoading.value = false
          $toast(result.message , {
            "theme": "colored",
            "type": "error"
          });
        }

      }else {
        $toast('ورودی نامعتبر میباشد !' , {
          "theme": "colored",
          "type": "error"
        });
      }
    }else {
      $toast("اطلاعات خواسته شده را تکمیل وارد کنید" , {
        "theme": "colored",
        "type": "error"
      });
    }
  }
</script>
