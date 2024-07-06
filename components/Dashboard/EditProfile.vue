<template>
  <div class="w-full">
    <div
      class="border border-gray-200 dark:border-dark-700/20 rounded-lg card dark:bg-dark-800"
    >
      <div
        class="relative pb-4 m-0 overflow-hidden dark:text-gray-300 text-gray-700 dark:border-dark-700/20 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200 px-6 py-6"
      >
        <h6
          class="flex items-center gap-1 dark:text-gray-300 antialiased font-semibold leading-normal text-gray-600 font-fa"
        >
          ویرایش حساب
        </h6>
      </div>

      <div class="flex flex-col tabs" v-if="authUser && authUser != null">
        <div class="p-4 tab-content sm:p-5">
          <div class="space-y-5">
            <div class="grid lg:grid-cols-2 gap-4">
              <div class="relative mt-4 lg:w-full justify-start flex">
                <div
                  class="flex items-center justify-center w-full max-w-[150px] px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md dark:border-dark-700"
                >
                  <div class="space-y-1 text-center">
                    <div
                      class="w-12 h-12 mx-auto mb-4 text-4xl text-gray-400 dark:text-gray-300"
                    >
                      <ImageIcon
                        v-if="localProfileSrc == ''"
                        class="dark:stroke-dark-700 stroke-gray-700 w-14 h-14"
                      />
                      <div class="relative" v-if="localProfileSrc != ''">
                        <i
                          @click="removeProfilePic()"
                          class="fa fa-close absolute top-[-5px] right-[-10px] cursor-pointer text-sm bg-red-500 p-1 rounded-lg text-white"
                        ></i>
                        <img :src="localProfileSrc" />
                      </div>
                    </div>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="page-file-upload"
                        class="relative mx-auto font-medium text-hamian rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-hamian focus-widuotone:ring-offset-2 hover:text-hamian dark:text-gray-300"
                        ><span>تصویر پروفایل</span>
                        <input
                          id="page-file-upload"
                          type="file"
                          ref="profileRef"
                          @change="(e) => setProfile(e)"
                          class="sr-only"
                        /> </label
                      ><!---->
                    </div>
                  </div>
                </div>
              </div>

              <div></div>

              <div class="relative mt-4">
                <label
                  for="last-name"
                  class="flex pb-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  <span>نام و نام خانوادگی</span>
                </label>
                <div class="mt-1 rounded-md">
                  <div
                    class="relative flex items-stretch flex-grow focus-within:z-10"
                  >
                    <div
                      class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                    >
                      <i
                        class="fa-duotone fa-duotone fa-user text-hamian h-5 w-5 flex leading-[1px] pr-1"
                      ></i>
                    </div>
                    <input
                      type="text"
                      v-model="userData.name"
                      class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-gray-500 focus:ring-gray-500 sm:text-sm dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300"
                      placeholder="نام و نام خانوادگی "
                    />
                  </div>
                </div>
              </div>

              <div class="relative mt-4">
                <label
                  for="last-name"
                  class="flex pb-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  <span>نام کاربری </span>
                </label>
                <div class="mt-1 rounded-md">
                  <div
                    class="relative flex items-stretch flex-grow focus-within:z-10"
                  >
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                    >
                      <i
                        class="fa-duotone fa-duotone fa-pen-to-square text-hamian h-5 w-5 flex leading-[1px] pr-1"
                      ></i>
                    </div>
                    <input
                      type="text"
                      v-model="userData.username"
                      class="block w-full pl-10 py-4 border-gray-300 rounded-md ltr focus:border-gray-500 focus:ring-gray-500 sm:text-sm dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300"
                      placeholder="bapu"
                    />
                  </div>
                </div>
              </div>

              <div class="relative mt-4">
                <label
                  for="last-name"
                  class="flex pb-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  <span> شماره موبایل </span>
                  <span class="mr-3">
                    <Badge
                      v-if="authUser.mobile != null"
                      :status="
                      userData.mobile != '' && authUser.mobile != userData.mobile || userData.mobile != '' && authUser.mobile_verified_at == null ? 'error' : 'success'
                      "
                      :text="
                      userData.mobile != '' && authUser.mobile != userData.mobile || userData.mobile != '' && authUser.mobile_verified_at == null ? 'تایید نشده' : 'تایید شده'
                      "
                    />
                  </span>
                </label>
                <div class="mt-1 rounded-md">
                  <div
                    class="relative flex items-stretch flex-grow focus-within:z-10"
                  >
                    <div
                      v-if="userData.mobile != '' && authUser.mobile != userData.mobile || userData.mobile != '' && authUser.mobile_verified_at == null"
                      title="تایید شماره همراه"
                      class="absolute flex items-center justify-center inset-y-3 h-[30px] w-auto cursor-pointer bg-green-100 hover:bg-green-200 rounded-full  right-[10px]  p-3"
                      @click="doSendCode('mobile')"
                    >
                      <i
                        v-if="loadingVerifyMobileButton == false"
                        class="fa-duotone fa-duotone fa-check text-green-500 text-xs leading-[1px] pr-1"
                      ></i>
                      <span v-else class="loader"></span>
                      <span class="text-xs mr-1">تایید موبایل </span>
                    </div>

                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                    >
                      <i
                        class="fa-duotone fa-pen-to-square text-hamian h-5 w-5 flex leading-[1px] pr-1"
                      ></i>
                    </div>
                    <input
                      type="text"
                      v-model="userData.mobile"
                      class="block w-full pl-10 py-4 border-gray-300 rounded-md ltr focus:border-gray-500 focus:ring-gray-500 sm:text-sm dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300"
                      placeholder="09057305302"
                    />
                  </div>
                </div>
              </div>

              <div class="relative mt-4">
                <label
                  for="last-name"
                  class="flex pb-2 pr-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  <span>ایمیل </span>
                  <span class="mr-3">
                    <Badge
                      v-if="authUser.email != null"
                      :status="userData.email != '' && authUser.email != userData.email || userData.email != '' && authUser.email_verified_at == null ? 'error' : 'success'"
                      :text="
                      userData.email != '' && authUser.email != userData.email || userData.email != '' && authUser.email_verified_at == null ? 'تایید نشده' : 'تایید شده'
                      "
                    />
                  </span>
                </label>
                <div class="mt-1 rounded-md">
                  <div
                    class="relative flex items-center flex-grow focus-within:z-10"
                  >
                    <div
                      v-if="userData.email != '' && authUser.email != userData.email || userData.email != '' && authUser.email_verified_at == null"
                      title="تایید ایمیل "
                      class="absolute flex items-center justify-center inset-y-3 h-[30px] w-auto cursor-pointer bg-green-100 hover:bg-green-200 rounded-full  right-[10px]  p-3"
                      @click="doSendCode('email')"
                    >
                      <i
                        v-if="loadingVerifyEmailButton == false"
                        class="fa-duotone fa-duotone fa-check text-green-500 text-xs leading-[1px] pr-1"
                      ></i>
                      <span v-else class="loader"></span>
                      <span class="text-xs mr-1">تایید ایمیل </span>
                    </div>

                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                    >
                      <i
                        class="fa-duotone fa-duotone fa-envelope text-hamian h-5 w-5 flex leading-[1px] pr-1"
                      ></i>
                    </div>
                    <input
                      dir="ltr"
                      type="email"
                      v-model="userData.email"
                      class="block w-full pl-10 py-4 border-gray-300 rounded-md focus:border-gray-500 focus:ring-gray-500 sm:text-sm dark:bg-dark-900 dark:border-dark-700/20 dark:text-gray-300"
                      placeholder="hsnmhmdzade@gmail.com"
                    />
                  </div>
                </div>
              </div>

              <div class="relative mt-4">
                <password
                  @setPassword="(value) => (userData.password = value)"
                  ref="passwordRef"
                  size="24"
                  auto="false"
                  characters="a-z,A-Z,0-9,#"
                ></password>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative w-full px-6 py-2 border-t dark:border-dark-700/20">
        <AuthButton
          text="بروزرسانی اطلاعات"
          :isLoading="loading"
          @doClick="doEditProfile()"
          bg="green"
        />
      </div>
    </div>


    <VerifyCodeModal
      :modalHeaderType="userData.inputType" 
      :activeModal="activeVerifyModal"
      @closeModal="activeVerifyModal = false"
      @resendOtp="resendCode()"
      @doAction="(otpCode) => doVerifyEmailOrPhone(otpCode)"
      :resendLoading="resendLoading"
      :resendended="resendended"
      :validateOtpLoading="validateOtpLoading"
    />
  </div>
</template>

<script setup>
import AuthButton from "@/components/Buttons/AuthButton.vue";
import VerifyCodeModal from '@/components/Auth/Form/FormVerifyCode.vue'
import ImageIcon from "@/components/icons/ImageIcon.vue";
import Badge from "@/components/TemplateParts/Badge/index.vue";
import password from "./Password.vue";
import { usePetdanimStore } from "@/store/petdanimStore.js";
import { storeToRefs } from "pinia";


const activeVerifyModal = ref(false)
const isLoading = ref(false)
const {$toast} = useNuxtApp()
const petdanimStore = usePetdanimStore();
const { authUser } = storeToRefs(petdanimStore);
const useRealInput = ref(false);
const passwordRef = ref(null);
const value = ref("");
const localProfileSrc = ref("");
const profileRef = ref("");
const loading = ref(false);
const loadingVerifyEmailButton  = ref(false)
const loadingVerifyMobileButton = ref(false)
const validateOtpLoading = ref(false)
const resendLoading = ref(false)
const resendended = ref(false)

const userData = reactive({
  inputType: "",
  name: "",
  username: "",
  mobile: "",
  email: "",
  password: "",
  profile_image: "",
});

onMounted(() => {
  userData.name = authUser.value.name;
  userData.username = authUser.value.username;
  userData.email = authUser.value.email ? authUser.value.email : "";
  userData.mobile = authUser.value.mobile;
});

const isEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
}

const isMobile = (input) => {
    const mobileRegex = /^\+?[0-9]{1,15}$/;
    return mobileRegex.test(input);
}

const doSendCode = async (inputType) => {
    if(inputType == "email") {
        if(!isEmail(userData.email)) {
            $toast("ایمیل وارد شده معتبر نمیباشد" , {
                "theme": "colored",
                "type": "error"
            });
            return false;
        }
    }else if(inputType == "mobile") {
        if(!isMobile(userData.mobile)) {
            $toast("شماره همراه وارد شده معتبر نمیباشد" , {
                "theme": "colored",
                "type": "error"
            });
            return false;
        }
    }else {
        $toast("نوع ورودی معتبر نمیباشد" , {
            "theme": "colored",
            "type": "error"
        });
        return false;
    }
    userData.inputType = inputType

    if(inputType == "email")
        loadingVerifyEmailButton.value = true
    if(inputType == "mobile") 
        loadingVerifyMobileButton.value = true

    resendLoading.value = true

    const result = await petdanimStore.sendOtpVerifyEmailOrPhone({
        userInput: inputType == "email" ? userData.email : userData.mobile,
        inputType: inputType
    })
    if(result.status == 200) {
        activeVerifyModal.value = true;
        loadingVerifyEmailButton.value = false
        loadingVerifyMobileButton.value = false
        resendLoading.value = false
    }else if(result.status == 429) {
        $toast(result.message , {
            "theme": "colored",
            "type": "error"
        });
        loadingVerifyEmailButton.value = false
        loadingVerifyMobileButton.value = false
        resendLoading.value = false
    }else {
        $toast(result.message , {
            "theme": "colored",
            "type": "error"
        });
        loadingVerifyEmailButton.value = false
        loadingVerifyMobileButton.value = false
        resendLoading.value = false
    }
}


const doVerifyEmailOrPhone = async (otp) => {
    if(otp != ""){
        validateOtpLoading.value = true

        const result = await petdanimStore.verifyUserEmailOrPhone({
            otp: otp,
            inputType: userData.inputType,
            userInput: userData.inputType == "email" ? userData.email : userData.mobile
        })

        if(result.status == 200) {
          validateOtpLoading.value = false
          activeVerifyModal.value = false;  
          
          $toast(result.message , {
            "theme": "colored",
            "type": "success"
          });
          authUser.value = result.result
          
        } else {
          validateOtpLoading.value = false
          activeVerifyModal.value = false;  
          $toast(result.message , {
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

const doEditProfile = async () => {
  let validateResult = validatData();
  if (validateResult != true) {
    $toast(validateResult, {
      theme: "colored",
      type: "error",
    });
  } else {
    loading.value = true;
    const result = await petdanimStore.editUserProfile(userData);
    if (result.status == 200) {
      loading.value = false;
      $toast(result.message, {
        theme: "colored",
        type: "error",
      });
    }
  }
};

const setProfile = (e) => {
  if (e.target.files.length != 0) {
    createIndexFile(e.target.files[0]);
  }
};

const createIndexFile = (file) => {
  if (file != undefined) {
    console.log(file);
    if (file.size > 3048000) {
      $toast("حجم تصویر نباید بیشتر از 3 مگابایت باشد", {
        theme: "colored",
        type: "error",
      });
      profileRef.value.value = "";
      userData.profile_image = "";
      localProfileSrc.value = "";
      return false;
    } else {
      userData.profile_image = file;
      const extensions = ["image/png", "image/jpeg", "image/jpg", "image/png"];
      if (!extensions.includes(file.type)) {
        $toast("لطفا نوع فایل را عکس انتخاب کنید", {
          theme: "colored",
          type: "error",
        });
        profileRef.value.value = "";
        userData.profile_image = "";
        localProfileSrc.value = "";
        return false;
      }

      let reader = new FileReader();
      reader.onload = (e) => {
        localProfileSrc.value = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  } else {
    return false;
  }
};

const removeProfilePic = () => {
    profileRef.value.value = "";
    userData.profile_image = "";
    localProfileSrc.value = "";
}

const validatData = () => {
  if (userData.name == "") {
    return "نام و نام خانوادگی نمیتواند خالی باشد";
  } else if (userData.name.length < 5) {
    return "نام و نام خانوادگی حداقل باید 5 کاراکتر باشد";
  } else if (userData.username == "") {
    return "نام کاربری نمیتواند خالی باشد";
  } else if (userData.username.length < 5) {
    return "نام کاربری حداقل باید 5 کاراکتر باشد";
  } else if (userData.mobile != "" && authUser.value.mobile != userData.mobile) {
    return "ابتدا شماره همراه خود را به تایید برسانید";
  } else if (userData.email != "" && authUser.value.email != userData.email) {
    return "ابتدا ایمیل خود را به تایید برسانید";
  } else if (userData.password != "" && userData.password.length < 8) {
    return "گذرواژه حداقل باید 8 کاراکتر باشد";
  } else {
    return true;
  }
};
</script>

<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 13px;
  padding: 3px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: green;
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {to{transform: rotate(1turn)}}
</style>