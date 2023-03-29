<script setup>
import { defineComponent } from 'vue';
import CardNews from './CardNews.vue';

defineComponent({
  components: {
    CardNews,
  },
});

const cards = [
  {
    id: 'one',
    datePublished: new Date('2022-09-27T13:42:44+00:00'),
  },
  {
    id: 'two',
    datePublished: new Date('2022-09-22T13:42:44+00:00'),
  },
  {
    id: 'three',
    datePublished: new Date('2022-09-14T13:42:44+00:00'),
  },
  {
    id: 'four',
    datePublished: new Date('2022-09-14T13:42:44+00:00'),
  },
];
</script>

<template>
  <div v-for="card in cards" :key="card.id">
    <card-news :card="card"></card-news>
  </div>
</template>
