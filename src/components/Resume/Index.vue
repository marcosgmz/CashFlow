<script setup>
import {
  computed,
  inject,
  provide,
  ref,
  toRef,
  toRefs,
  watch,
} from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  dateLabel: {
    type: String,
  },
  amount: {
    type: Number,
    default: null,
  },
  totalAmount: {
    type: Number,
  },
});
const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const { label, dateLabel, amount, totalAmount } = toRefs(props);
const amountVisual = computed(() => {
  return amount.value !== null ? amount.value : totalAmount.value;
});
const labelVisual = computed(() => {
  return label.value !== null ? label.value : dateLabel.value;
});
const amountCurrency = computed(() => {
  return currencyFormatter.format(parseInt(amountVisual.value));
});

const styles = ref(
  'flex justify-center items-center flex-col w-full h-screen'
);
const graphicStyles = ref(
  'flex justify-center items-center w-full py-12 px-6 box-border'
);
const actionStyles = ref('');
const showMovements = toRef(inject('showMovements'));
watch(showMovements, (newValue) => {
  newValue
    ? (styles.value = 'flex flex-col w-full h-screen pt-24')
    : (styles.value =
        'flex justify-center items-center flex-col w-full h-screen');
  newValue
    ? (graphicStyles.value = 'hidden')
    : (graphicStyles.value =
        'flex justify-center items-center w-full py-12 px-6 box-border');
  newValue
    ? (actionStyles.value = 'hidden')
    : (actionStyles.value = '');
});
</script>

<template>
  <main :class="styles">
    <p class="m-o text-center">{{ labelVisual }}</p>
    <h1
      class="m-0 text-center mt-4 text-green-600 font-bold text-4xl"
    >
      {{ amountCurrency }}
    </h1>
    <div :class="graphicStyles">
      <slot name="graphic"></slot>
    </div>
    <div :class="actionStyles">
      <slot name="action"></slot>
    </div>
  </main>
</template>

<style scoped>
</style>