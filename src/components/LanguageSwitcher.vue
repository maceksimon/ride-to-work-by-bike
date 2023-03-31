<script lang="ts" setup>
import { inject } from 'vue';
import { useRouteQuery } from '@vueuse/router';

const lang = useRouteQuery('lang');

const log: any = inject('vuejs3-logger');
log.debug(lang.value);
</script>

<template>
  <div class="language-switcher">
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
