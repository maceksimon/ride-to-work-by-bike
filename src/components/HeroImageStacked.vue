<script lang="ts" setup>
import config from '../../app.config.toml';

const messageImage = config.messageImage;
</script>

<template>
  <div class="hero-image-stacked">
    <q-img :src="'/src/assets/' + messageImage" width="80px"></q-img>
    <div class="hero-image-stacked__wrapper q-pt-sm">
      <h1 class="text-h4 text-bold font-lexend">
        {{ $t('hero.title') }}
      </h1>
      <div class="hero-image-stacked__content">
        <p>
          {{ $t('hero.text.section1') }}
        </p>
        <p>
          {{ $t('hero.text.section2') }}
        </p>
        <p>
          {{ $t('hero.text.section3') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.hero-image-stacked__wrapper {
  max-width: 520px;

  h1 {
    line-height: 1.2;
  }

  p {
    font-size: 16px;
  }
}
.hero-image-stacked__content {
  max-width: 360px;
}
</style>
