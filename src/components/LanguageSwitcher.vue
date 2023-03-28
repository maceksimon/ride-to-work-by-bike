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
      @click.prevent="$i18n.locale = 'en-US'"
      :flat="true"
      :unelevated="true"
      :round="true"
      :style="{ backgroundColor: lightGrayColor }"
    />
    <q-btn
      label="CZ"
      @click.prevent="$i18n.locale = 'cs'"
      :flat="true"
      :unelevated="true"
      :round="true"
      :style="{ backgroundColor: blackColor }"
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
