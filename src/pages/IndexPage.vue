<script lang="ts">
import { defineComponent } from 'vue';

import HeroImageStacked from 'src/components/HeroImageStacked.vue';

export default defineComponent({
  components: {
    HeroImageStacked,
  },
});
</script>

<template>
  <q-page>
    <div class="container q-py-xl">
      <hero-image-stacked></hero-image-stacked>
    </div>
  </q-page>
</template>
