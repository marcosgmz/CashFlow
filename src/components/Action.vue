<script setup>
import Modal from '@/components/Modal.vue';
import { ref, defineEmits } from 'vue';

const showModal = ref(false);
const title = ref('');
const description = ref('');
const amount = ref(0);
const movementType = ref('Ingreso');

const emit = defineEmits(['create']);

const submit = () => {
  emit('create', {
    title: title.value,
    description: description.value,
    amount:
      movementType.value === 'Ingreso' ? amount.value : -amount.value,
    time: new Date(),
    id: new Date().getTime(),
  });
  title.value = '';
  description.value = '';
  amount.value = 0;
  movementType.value = 'Ingreso';
  showModal.value = false;
};
</script>

<template>
  <button class="Button" @click="showModal = true">
    Agregar movimiento
  </button>
  <Teleport to="#app">
    <Modal @close="showModal = false" v-show="showModal">
      <form class="text-xl w-full" @submit.prevent="submit">
        <div class="Field">
          <label>Titulo</label>
          <input class="Input" type="text" v-model="title" />
        </div>
        <div class="Field">
          <label>Monto</label>
          <input
            class="Input text-right"
            type="number"
            v-model="amount"
          />
        </div>
        <div class="Field">
          <label>Descripción</label>
          <textarea
            class="Input"
            rows="4"
            v-model="description"
          ></textarea>
        </div>
        <div class="Field">
          <label>Tipo de movimiento</label>
          <label class="flex items-center mt-2">
            <input
              class="appearance-none w-5 h-5 mr-2 text-cyan-600 border-2 border-solid border-cyan-600 rounded-full checked:bg-cyan-600"
              type="radio"
              v-model="movementType"
              value="Ingreso"
            />
            <span>Ingreso</span>
          </label>
          <label class="flex items-center mt-2">
            <input
              class="appearance-none w-5 mr-2 h-5 text-cyan-600 border-2 border-solid border-cyan-600 rounded-full checked:bg-cyan-600"
              type="radio"
              v-model="movementType"
              value="Gasto"
            />
            <span>Gasto</span>
          </label>
        </div>
        <div class="pb-4 px-6">
          <button class="Button">Agregar movimiento</button>
        </div>
      </form>
    </Modal>
  </Teleport>
</template>

<style scoped>
label {
  margin-bottom: 8px;
}
</style>