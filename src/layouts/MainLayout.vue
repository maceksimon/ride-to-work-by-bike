<script lang="ts">
import { defineComponent } from 'vue';
import LanguageSwitcher from 'components/LanguageSwitcher.vue';
import config from '../../app.config.toml';

export default defineComponent({
  name: 'MainLayout',

  components: {
    LanguageSwitcher,
  },

  setup() {
    return {
      titleImage: config.titleImage,
    };
  },
});
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar
            :icon="'img:/src/assets/' + titleImage"
            :square="true"
            :rounded="false"
          ></q-avatar>
        </q-toolbar-title>
        <language-switcher></language-switcher>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.q-header {
  background-color: transparent;
}
.q-avatar,
.q-avatar,
.q-icon {
  height: 75px;
  width: auto;
}
</style>
