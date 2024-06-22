<script setup>
import { computed, toRefs, ref, defineEmits } from 'vue';

const props = defineProps({
  amounts: {
    type: Array,
    default: () => [],
  },
});
const { amounts } = toRefs(props);

const amountToPixels = (amount) => {
  const min = Math.min(...amounts.value);
  const max = Math.max(...amounts.value);

  const amountAbs = amount + Math.abs(min);
  const minmax = Math.abs(max) + Math.abs(min);

  return 200 - ((amountAbs * 100) / minmax) * 2;
};
const points = computed(() => {
  const total = amounts.value.length;
  return amounts.value.reduce((points, amount, i) => {
    const x = (300 / total) * (i + 1);
    const y = amountToPixels(amount);
    return `${points} ${x},${y}`;
  }, '0,100');
});
const zero = computed(() => {
  return amountToPixels(0);
});

const showPointer = ref(false);
const pointer = ref(0);

const emit = defineEmits(['select']);

const tap = ({ target, touches }) => {
  showPointer.value = true;
  const elementWidth = target.getBoundingClientRect().width;
  const elementX = target.getBoundingClientRect().x;
  const touchX = touches[0].clientX;
  pointer.value = ((touchX - elementX) * 300) / elementWidth;
  //emit("select", );
};
const untap = () => {
  showPointer.value = false;
};
</script>

<template>
  <div>
    <svg
      @touchstart="tap"
      @touchmove="tap"
      @touchend="untap"
      class="w-full"
      viewBox="0 0 300 200"
    >
      <line
        stroke="#646468"
        stroke-width="2"
        x1="0"
        :y1="zero == NaN ? zero : 100"
        x2="300"
        :y2="zero == NaN ? zero : 100"
      />
      <polyline
        fill="none"
        stroke="#2563eb"
        stroke-width="2"
        :points="points"
      />
      <line
        v-show="showPointer"
        stroke-width="2"
        stroke="#339933"
        :x1="pointer"
        y1="0"
        :x2="pointer"
        y2="200"
      />
    </svg>
    <p class="text-center">Últimos 30 días</p>
  </div>
</template>

<style scoped>
</style>