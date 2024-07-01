<template>
  <transition-group name="modal">
      <div key="verifyModal" :class="activeModal == false ? 'hide' : 'show'" class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden otpModal px-7">
          <div @click="doCloseModal()" class="absolute inset-0 transition-opacity duration-300 bg-black/20 backdrop-blur"></div>
          <div
              class="relative rounded-lg shadow-lg shadow-gray-300/40 h-auto max-w-lg bg-white m-auto inset-0 w-full">
              <button  @click="doCloseModal()"  type="button"
                  class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
                  data-bs-dismiss="modal" aria-label="Close"><i class="text-lg fa fa-times"></i></button>
              <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                  <div class="info">
                      <h3 class="text-xl font-semibold block text-gray-500">تایید {{ modalHeaderType == 'email' ? 'ایمیل' : 'شماره همراه' }} </h3>
                  </div>
              </div>
              <div class="modal-body font-fa mx-2 px-6 my-4 flex flex-col items-center justify-center">
                  <p class="my-2">لطفا کد تایید دریافت شده را وارد نمایید</p>
                  <div class="gap-6" style="display: flex; flex-direction: row; direction: ltr;width:250px;">
                      <v-otp-input
                          ref="otpInput"
                          v-model:value="bindModal"
                          input-classes="w-full focus:outline-none focus:ring focus:border-orange-500 mx-1 text-center border-gray-200 rounded-md py-3 focus:ring-orange-500/50 darker:bg-zinc-700 darker:border-zinc-600 darker:text-gray-200 h-[45px]"
                          separator="-"
                          :num-inputs="4"
                          :should-auto-focus="true"
                          input-type="letter-numeric"
                          :conditionalClass="['one', 'two', 'three', 'four']"
                      />
                      <!-- @on-complete="handleOnComplete" -->

                  </div>
                  <div class="text-center mt-3">
                      <div
                          class="text-sm justify-center"
                          :class="codeTimer != 0 ? 'flex' : 'hidden'"
                      >
                          <div class="timer">
                          <div class="text-gray-700">
                              {{ codeTimer }}
                          </div>
                          </div>
                          <span class="pr-2">ثانیه مانده تا دریافت مجدد</span>
                      </div>

                      <div
                          class="mt-5 justify-center"
                          :class="codeTimer == 0 ? 'flex' : 'hidden'"
                      >
                          <button class="relative flex items-center" @click="resendLoading == false ? ReSendOtp() : ''">
                              <div
                                  v-if="resendLoading == false"
                                  class="flex items-center justify-center relative grow-1 text-mahak font-semibold"
                              >
                                  دریافت مجدد رمز یک‌بار مصرف
                              </div>
                              <div
                                  v-else
                                  class="flex items-center justify-center relative grow-1 text-mahak font-semibold"
                              >
                                  در حال ارسال ...
                              </div>
                          </button>
                      </div>
                  </div>
                  <AuthButton 
                    text="تایید حساب"
                    :isLoading="validateOtpLoading"
                    @doClick="doSignUp()"
                  />
              </div>
          </div>
      </div>
  </transition-group>
</template>

<script setup>
import AuthButton from '@/components/Buttons/AuthButton.vue'
import VOtpInput from "vue3-otp-input";

const props = defineProps({
  activeModal: {
      required: true,
      type: Boolean
  },
  resendLoading: {
      required: true,
      type: Boolean
  },
  resendended: {
      required: true,
      type: Boolean
  },
  validateOtpLoading: {
      required: true,
      type: Boolean
  },
  modalHeaderType: {
    required: true,
    type: String
  }
})

const emit = defineEmits([
  "closeModal",
  "resendOtp",
  "doAction"
])

const bindModal = ref("");
const loading = ref(false)
const codeTimer = ref(120);
let timerInterval;


watch(() => props.activeModal , (newVal , oldVal) => {
  if(newVal == true) {
      codeTimer.value = 120
      setGlobalInterVal();
  }else {
    bindModal.value = ""
  }
})

watch(() => props.resendended , (newVal , oldVal) => {
  if(newVal == true) {
      codeTimer.value = 120
      setGlobalInterVal();
  }else {
      clearInterval(timerInterval)
  }
})


const intervalFunction = () => {
if (codeTimer.value <= 0) {
  codeTimer.value = 0;
  clearInterval(timerInterval)
  return false;
} else {
  codeTimer.value--;
}
};

const setGlobalInterVal = () => {
  timerInterval = setInterval(intervalFunction, 1000);
};

const doSignUp = () => {
  emit("doAction" , bindModal.value)
}

const ReSendOtp = async () => {
  emit("resendOtp")
}

const doCloseModal = () => {
  clearInterval(timerInterval)
  emit("closeModal")
}
</script>

<style scoped>
.otpModal.hide {
  opacity: 0;
  visibility: hidden;
  transition: all .2s ease-in-out;
}

.otpModal.show {
  opacity: 1;
  visibility: visible;
  transition: all .2s ease-in-out;
}
.modal-mask {
  transition: opacity 0.3s ease;
}

.modal-container {
  max-height: calc(100% - 48px);
  width: calc(100% - 48px);
  max-width: calc(100% - 48px);
  margin: 24px;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #fff;
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>