<script setup>
import { provide, ref } from 'vue';

const showMovements = ref(false);

provide('showMovements', showMovements);
</script>

<template>
  <div class="fixed z-50">
    <slot name="header"></slot>
  </div>
  <div class="flex justify-around items-center py-4 box-border">
    <slot name="resume"></slot>
  </div>
  <div
    class="flex justify-around items-center pt-4 box-border flex-col absolute bottom-0 w-screen bg-white rounded-3xl shadow-above"
  >
    <div
      class="flex justify-center items-center p-6 w-full box-border"
      @click="showMovements = !showMovements"
    >
      <div class="w-32 h-2 bg-gray-400 rounded-full"></div>
    </div>
    <div class="w-full body" v-show="showMovements">
      <slot name="movements"></slot>
    </div>
  </div>
</template>

<style scoped>
.body {
  height: 60vh;
}
</style>