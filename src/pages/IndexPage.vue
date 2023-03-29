<script lang="ts">
import { defineComponent } from 'vue';

import HeroImageStacked from 'src/components/HeroImageStacked.vue';
import SliderCards from 'src/components/SliderCards.vue';

export default defineComponent({
  components: {
    HeroImageStacked,
    SliderCards,
  },
});
</script>

<template>
  <q-page>
    <div class="container q-py-xl">
      <hero-image-stacked></hero-image-stacked>
      <slider-cards></slider-cards>
    </div>
  </q-page>
</template>
