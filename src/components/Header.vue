<script setup>
const reload = () => {
  location.reload();
};
</script>

<template>
  <header
    class="flex justify-between items-center w-screen p-5 bg-white"
  >
    <img
      class="h-12 w-12"
      src="../assets/cashflow-icon.svg"
      alt="Logo"
      @click="reload"
    />
    <h1 class="text-blue-600 font-bold text-3xl">
      <span class="text-green-600">Cash</span>
      Flow
    </h1>
    <span></span>
  </header>
</template>

<style scoped>
</style>