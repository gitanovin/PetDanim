<template>
    <div v-if="show" @click.stop="cancel" class="px-2 fixed inset-0 !z-[1000] flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-5 rounded shadow-lg max-w-lg w-full animate-modal-slide-in" @click.stop>
        <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
        <p>{{ message }}</p>
        <div class="mt-4 flex justify-end">
          <VerifyButton 
            text="تایید"
            :isLoading="isLoading"
            @doClick="confirm" />
          <button class="bg-gray-500 cursor-pointer text-white px-4 py-2 rounded" @click="cancel">لغو</button>
        </div>
      </div>
    </div>
</template>
<script setup>
  import VerifyButton from '@/components/TemplateParts/Modal/promptButoon/verify.vue'
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    title: {
      type: String,
      default: 'عنوان مودال'
    },
    message: {
      type: String,
      default: 'متن پیام مودال'
    },
    show: {
      type: Boolean,
      default: false
    },
    isLoading: {
        required: true,
        type: Boolean,
        default: false
    }
  })
  
  const emit = defineEmits(['confirm', 'cancel'])
  
  const confirm = () => {
    emit('confirm')
  }
  
  const cancel = () => {
    emit('cancel')
  }
  </script>
  
  <style>
  @keyframes modalSlideIn {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .animate-modal-slide-in {
    animation: modalSlideIn 0.3s ease-out;
  }
  </style>
  