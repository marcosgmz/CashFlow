<script setup>
import Header from '@/components/Header.vue';
import Layout from '@/components/Layout.vue';
import Resume from '@/components/Resume/Index.vue';
import Movements from '@/components/Movements/Index.vue';
import Action from '@/components/Action.vue';
import Graphic from './Resume/Graphic.vue';
import { computed, onMounted, ref } from 'vue';

const amount = ref(null);
const label = ref('Ahorro total');

const movements = ref([]);
const amounts = computed(() => {
  const lastDays = movements.value
    .filter((e) => {
      const today = new Date();
      //console.log(e.time);
      //console.log(today);
      const oldDate = new Date(today.setMonth(today.getMonth() - 1));
      return e.time > oldDate;
    })
    .map((e) => {
      return e.amount;
    });

  return lastDays.map((e, i) => {
    const lastMovements = lastDays.slice(0, i);
    return lastMovements.reduce((e, movement) => {
      return e + movement;
    }, 0);
  });
});

const create = (movement) => {
  movements.value.push(movement);
  save();
};
const remove = (id) => {
  movements.value.splice(
    movements.value.findIndex((m) => m.id == id),
    1
  );
  save();
};
const save = () => {
  localStorage.setItem('movements', JSON.stringify(movements.value));
};

onMounted(() => {
  const storageMovements = JSON.parse(
    localStorage.getItem('movements')
  );

  if (Array.isArray(storageMovements)) {
    movements.value = storageMovements.map((e) => {
      return { ...e, time: new Date(e.time) };
    });
  }
});
</script>

<template>
  <Layout>
    <template #header>
      <Header />
    </template>
    <template #resume>
      <Resume
        :date-label="label"
        :total-amount="1000000"
        :amount="amount"
      >
        <template #graphic>
          <Graphic :amounts="amounts" />
        </template>
        <template #action>
          <Action @create="create" />
        </template>
      </Resume>
    </template>
    <template #movements>
      <Movements @remove="remove" :movements="movements" />
    </template>
  </Layout>
</template>

<style scoped>
</style>