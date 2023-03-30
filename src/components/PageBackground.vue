<script lang="ts" setup>
import config from '../../app.config.toml';
const backgroundImage = config.backgroundImage;
</script>

<template>
  <div class="background-image__wrapper">
    <q-img
      :src="'/src/assets/' + backgroundImage"
      class="background-image"
    ></q-img>
  </div>
</template>

<style lang="scss">
.background-image {
  position: absolute;
  top: 0;
  right: 0;
  left: calc(50% - 160px);
  width: auto;
  height: 1300px;

  .q-img__image {
    height: 100%;
    object-position: left bottom !important;
  }
}
</style>
