<template>
    <div :class="isShow == true ? 'loading show' : 'loading hide'">
        <a aria-current="page" href="/" class="router-link-active router-link-exact-active flex gap-2 items-end text-3xl font-extrabold text-orange-500"> پت دانیم </a>
    </div>
</template>

<script setup>

const props = defineProps({
    isShow: {
        required: true,
        type: Boolean,
        default: true
    }
})
</script>

<style scoped>
.loading {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  z-index: 10000;
  top:0;
  right:0;
  left:0;
  bottom:0;
  transition:all 1s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:all .3s ease-out;
}

.loading.show {
  visibility: visible;
  opacity: 1;
}

.loading.hide {
  visibility: hidden;
  opacity: 0;
}
.lds-ring {
    /* change color here */
    color: #af2043
  }
  .lds-ring,
  .lds-ring div {
    box-sizing: border-box;
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 5px solid currentColor;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: currentColor transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>