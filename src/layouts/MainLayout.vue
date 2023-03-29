<script lang="ts">
import config from '../../app.config.toml';
import { defineComponent } from 'vue';

import LanguageSwitcher from 'components/LanguageSwitcher.vue';
import TooltipButton from 'src/components/TooltipButton.vue';
import PageBackground from 'src/components/PageBackground.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    LanguageSwitcher,
    TooltipButton,
    PageBackground,
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
    <page-background></page-background>
    <q-header reveal :reveal-offset="0">
      <div class="container q-py-xl">
        <q-toolbar class="q-pa-none">
          <q-toolbar-title>
            <q-avatar
              :icon="'img:/src/assets/' + titleImage"
              :square="true"
              :rounded="false"
            ></q-avatar>
          </q-toolbar-title>

          <tooltip-button></tooltip-button>

          <language-switcher class="q-ml-xl"></language-switcher>
        </q-toolbar>
      </div>
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
.q-avatar .q-icon {
  height: 75px;
  width: auto;
}
</style>
