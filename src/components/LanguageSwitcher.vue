<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useRouteQuery } from '@vueuse/router';

const { locale } = useI18n({ useScope: 'global' });
const lang = useRouteQuery('lang');
</script>

<template>
  <div class="c-language-switcher">
    <q-btn
      label="EN"
      unelevated
      round
      color="secondary"
      text-color="white"
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
      :class="{ 'is-active': $i18n.locale === 'cs-CZ' }"
      @click.prevent="
        {
          $i18n.locale = 'cs-CZ';
          lang = 'cs';
        }
      "
    />
  </div>
</template>

<style lang="scss">
.c-language-switcher {
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
