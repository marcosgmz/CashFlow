<script setup>
import { toRefs, defineEmits } from 'vue';
import Movement from './Movement.vue';

const props = defineProps({
  movements: {
    type: Array,
    default: () => [],
  },
});
toRefs(props);

const emits = defineEmits(['remove']);
const remove = (id) => {
  emits('remove', id);
};
</script>

<template>
  <div class="max-h-full pt-0 px-2 mb-4">
    <h2 class="mt-2 mb-6 mx-4 text-blue-400 text-3xl font-bold">
      Historial
    </h2>
    <div class="content flex flex-col gap-2 overflow-y-scroll">
      <Movement
        v-for="movement in movements"
        :key="movement.id"
        :title="movement.title"
        :description="movement.description"
        :amount="parseInt(movement.amount)"
        :id="parseInt(movement.id)"
        @remove="remove"
      />
    </div>
  </div>
</template>

<style scoped>
.content {
  max-height: 68vh;
}
</style>