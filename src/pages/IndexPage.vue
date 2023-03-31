<script lang="ts" setup>
import { defineComponent } from 'vue';
import type { Card } from '../components/models';

import HeroImageStacked from 'src/components/HeroImageStacked.vue';
import NewsSlider from 'src/components/NewsSlider.vue';

defineComponent({
  components: {
    HeroImageStacked,
    NewsSlider,
  },
});

// In a real app, this would be a dynamic data source, dependent on current locale.
// For example purposes, I translated the card content via i18n API using ID.
const cards: Card[] = [
  {
    id: '1',
    datePublished: new Date('2022-09-27T13:42:44+00:00'),
    url: '#',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: '2',
    datePublished: new Date('2022-09-22T13:42:44+00:00'),
    url: '#',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: '3',
    datePublished: new Date('2022-09-14T13:42:44+00:00'),
    url: '#',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: '4',
    datePublished: new Date('2022-09-14T13:42:44+00:00'),
    url: '#',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: '3',
    datePublished: new Date('2022-09-14T13:42:44+00:00'),
    url: '#',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: '4',
    datePublished: new Date('2022-09-14T13:42:44+00:00'),
    url: '#',
    image: 'https://via.placeholder.com/400x300',
  },
];
</script>

<template>
  <q-page>
    <div class="container q-py-xl">
      <hero-image-stacked></hero-image-stacked>
      <news-slider :cards="cards" class="q-mt-xl"></news-slider>
    </div>
  </q-page>
</template>
