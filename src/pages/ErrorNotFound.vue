<script lang="ts" setup></script>

<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <div>
      <div class="text-h4 text-bold q-mb-xl">{{ $t('404.title') }}</div>

      <div class="text-h3 font-lexend" style="opacity: 0.4">
        {{ $t('404.text') }}
      </div>

      <q-btn
        to="/"
        class="q-mt-xl font-lexend"
        color="primary"
        text-color="white"
        unelevated
        rounded
        size="16px"
        :label="$t('404.button')"
      />
    </div>
  </div>
</template>
