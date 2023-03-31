<script lang="ts">
import { defineComponent } from 'vue';

import HeroImageStacked from 'src/components/HeroImageStacked.vue';
import NewsSlider from 'src/components/NewsSlider.vue';

export default defineComponent({
  components: {
    HeroImageStacked,
    NewsSlider,
  },
});
</script>

<template>
  <q-page>
    <div class="container q-py-xl">
      <hero-image-stacked></hero-image-stacked>
      <news-slider class="q-mt-xl"></news-slider>
    </div>
  </q-page>
</template>
