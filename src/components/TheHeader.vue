<script lang="ts" setup>
import { defineComponent } from 'vue';
import config from '../../app.config.toml';
import LanguageSwitcher from 'components/LanguageSwitcher.vue';

const lightGrayColor = config.lightGrayColor;

defineComponent({
  components: {
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

        <q-btn
          icon="bi-question-circle-fill"
          unelevated
          round
          color="secondary"
          :stretch="false"
          :style="{ backgroundColor: lightGrayColor }"
        >
          <q-tooltip>{{ $t('tooltip') }}</q-tooltip>
        </q-btn>

        <language-switcher class="q-ml-xl"></language-switcher>
      </q-toolbar>
    </div>
  </q-header>
</template>
