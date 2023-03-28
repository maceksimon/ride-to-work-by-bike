<script lang="ts">
import { defineComponent } from 'vue';
import config from '../../app.config.toml';

export default defineComponent({
  name: 'LanguageSwitcher',
  setup() {
    return {
      lightGrayColor: config.lightGrayColor,
      blackColor: config.blackColor,
    };
  },
});
</script>

<template>
  <div class="c-language-switcher">
    <q-btn
      label="EN"
      flat
      unelevated
      round
      :style="{ backgroundColor: lightGrayColor }"
      @click.prevent="$i18n.locale = 'en-US'"
    />
    <q-btn
      label="CZ"
      flat
      unelevated
      round
      :style="{ backgroundColor: blackColor }"
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
}
</style>
