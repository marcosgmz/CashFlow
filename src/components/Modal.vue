<script setup>
const emit = defineEmits(['close']);
const close = () => emit('close');
</script>

<template>
  <div class="z-50 absolute left-0 right-0 top-0 bottom-0 bg-white">
    <div
      class="flex justify-between items-center w-full p-6 box-border"
    >
      <p class="m-0 text-2xl text-cyan-600 font-semibold">
        Nuevo movimiento
      </p>
      <img @click="close" src="../assets/close-icon.svg" alt="" />
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
</style>