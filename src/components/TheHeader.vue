<script lang="ts" setup>
import { defineComponent } from 'vue';
import config from '../../app.config.toml';
import LanguageSwitcher from 'components/LanguageSwitcher.vue';
import TooltipButton from 'src/components/TooltipButton.vue';

defineComponent({
  components: {
    TooltipButton,
    LanguageSwitcher,
  },
});
</script>

<template>
  <q-header>
    <div class="container q-py-xl">
      <q-toolbar class="q-pa-none">
        <q-toolbar-title>
          <q-avatar
            :icon="'img:/src/assets/' + config.titleImage"
            square
          ></q-avatar>
        </q-toolbar-title>

        <tooltip-button></tooltip-button>

        <language-switcher class="q-ml-xl"></language-switcher>
      </q-toolbar>
    </div>
  </q-header>
</template>
