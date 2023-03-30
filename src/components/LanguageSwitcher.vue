<script lang="ts" setup></script>

<template>
  <div class="c-language-switcher">
    <q-btn
      label="EN"
      unelevated
      round
      color="secondary"
      text-color="white"
      :class="{ 'is-active': $i18n.locale === 'en-US' }"
      @click.prevent="$i18n.locale = 'en-US'"
    />
    <q-btn
      label="CZ"
      unelevated
      round
      color="secondary"
      text-color="white"
      :class="{ 'is-active': $i18n.locale === 'cs' }"
      @click.prevent="$i18n.locale = 'cs'"
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
