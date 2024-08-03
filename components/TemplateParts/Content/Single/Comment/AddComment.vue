<template>
  <div id="comments" class="scroll-mt-20 max-w-screen-md mx-auto pt-5">
    <h3 class="text-xl font-semibold text-dark-800 dark:text-neutral-200">
      نظر خود را ثبت کنید
    </h3>
    <form @submit.prevent="submitComment()" class="nc-SingleCommentForm mt-5">
      <textarea
        class="block w-full text-sm rounded-xl border-neutral-200 focus:border-orange-300 focus:ring-0 focus:ring-orange-200 focus:ring-opacity-50 bg-white dark:border-dark-700/20 dark:focus:ring-dark-700/20 dark:focus:ring-opacity-25 dark:bg-dark-900"
        rows="4"
        placeholder="دیدگاه خود را بنویسید"
        v-model="text"
      ></textarea>
      <div class="mt-2 gap-2 flex">
        <button
          v-if="commentLoading == false"
          class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-orange-700 hover:bg-orange-600 text-orange-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
          type="submit"
        >
          ثبت
        </button>
        <button
          v-if="commentLoading == true"
          class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-lg transition-colors border-transparent bg-orange-700 hover:bg-orange-600 text-orange-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6"
          type="button"
        >
            <div class="loader"></div>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>


const text = ref(null)




const emit = defineEmits([
    "submitComment"
])

const props = defineProps({
    commentLoading: {
        required: true,
        type: Boolean
    }
})
 
const submitComment = async () => {
    if(text != null) {
        emit("submitComment" , {
            text: text.value
        })

        text.value = null
    }else {
        $toast("متن نظر را وارد کنید" , {
            "theme": "colored",
            "type": "error"
        });
    }
}
</script>

<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 20px;
  padding: 3px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #ffffff;
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