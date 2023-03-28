<script lang="ts">
import config from '../../app.config.toml';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TooltipButton',

  setup() {
    return {
      lightGrayColor: config.lightGrayColor,
    };
  },
});
</script>

<template>
  <q-btn
    icon="bi-question-circle-fill"
    flat
    unelevated
    round
    :stretch="false"
    :style="{ backgroundColor: lightGrayColor }"
  >
    <q-tooltip>{{ $t('tooltip') }}</q-tooltip>
  </q-btn>
</template>
