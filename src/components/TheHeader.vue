<script lang="ts" setup>
import config from '../../app.config.toml';
import { inject } from 'vue';
import { useRouteQuery } from '@vueuse/router';

const lightGrayColor = config.lightGrayColor;

const lang = useRouteQuery('lang');

const log: any = inject('vuejs3-logger');
log.debug(lang.value);
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

        <div class="language-switcher q-ml-xl">
          <q-btn
            label="EN"
            unelevated
            round
            color="secondary"
            text-color="white"
            class="language-switcher--en"
            :class="{ 'is-active': $i18n.locale === 'en-US' }"
            @click.prevent="
              {
                $i18n.locale = 'en-US';
                lang = 'en';
              }
            "
          />
          <q-btn
            label="CZ"
            unelevated
            round
            color="secondary"
            text-color="white"
            class="language-switcher--cs"
            :class="{ 'is-active': $i18n.locale === 'cs-CZ' }"
            @click.prevent="
              {
                $i18n.locale = 'cs-CZ';
                lang = 'cs';
              }
            "
          />
        </div>
      </q-toolbar>
    </div>
  </q-header>
</template>

<style lang="scss">
.language-switcher {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;

  > *:not(:first-child) {
    margin-right: -8px;
  }

  .q-btn.is-active {
    z-index: 10;
    background-color: $primary !important;
  }
}
</style>
