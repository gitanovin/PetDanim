<template>
    <button 
        v-if="isLoading == false"
        @click="doClickEvent()"
        class="bg-orange-500 cursor-pointer text-white px-4 py-2 rounded ml-2" 
    >{{ text }}</button>
    <button 
        v-if="isLoading == true"
        @click="doClickEvent()"
        class="bg-orange-500 cursor-pointer text-white px-4 py-2 rounded ml-2" 
    >
        <div class="loader"></div>
    </button>
</template>

<script setup>
const emit = defineEmits([
    'doClick'
])
const props = defineProps({
    text: {
        required: true,
        type: String
    },
    isLoading: {
        required: true,
        type: Boolean
    }
})

const doClickEvent = () => {
    emit('doClick')
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