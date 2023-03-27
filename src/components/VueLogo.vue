<script lang="ts">
import { defineComponent } from 'vue';
import config from '../../app.config.toml';

export default defineComponent({
  name: 'VueLogo',
  setup() {
    return {
      config,
    };
  },
});
</script>

<template>
  <img :src="'/src/assets/' + config.titleImage" alt="" />
</template>
