<script lang="ts" setup>
import { defineComponent } from 'vue';
import config from '../../app.config.toml';

import TheHeader from 'src/components/TheHeader.vue';
import TheFooter from 'src/components/TheFooter.vue';

const backgroundImage = config.backgroundImage;

defineComponent({
  name: 'MainLayout',

  components: {
    TheFooter,
    TheHeader,
  },
});
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <div class="background-image__wrapper">
      <q-img
        :src="'/src/assets/' + backgroundImage"
        class="background-image"
      ></q-img>
    </div>

    <q-header>
      <the-header></the-header>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <the-footer></the-footer>
    </q-footer>
  </q-layout>
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

.q-header {
  position: absolute;
  background-color: transparent;
}

.q-footer {
  position: absolute;
  background-color: transparent;
  color: $grey-10;
}
</style>
