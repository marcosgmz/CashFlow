<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  amount: Number,
  id: Number,
});
const { id, amount } = toRefs(props);
const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});
const amountFormatted = computed(() => {
  return currencyFormatter.format(amount.value);
});

const amountColor =
  amount.value > 0
    ? 'text-green-600 font-semibold'
    : 'text-red-600 font-semibold';

const emit = defineEmits(['remove']);
const remove = () => {
  emit('remove', id.value);
};
</script>

<template>
  <div
    class="flex justify-between items-center w-full p-4 bg-blue-100 rounded-lg box-border"
  >
    <div class="w-full">
      <h4 class="m-0 mb-2 font-semibold">{{ title }}</h4>
      <p class="m-0">{{ description }}</p>
    </div>
    <div class="flex justify-between items-end flex-col">
      <img
        class="mb-4"
        @click="remove"
        src="../../assets/trash-icon.svg"
        alt="delete"
      />
      <p :class="amountColor">{{ amountFormatted }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>