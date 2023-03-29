<script lang="ts">
import config from '../../app.config.toml';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroImageStacked',

  setup() {
    return {
      messageImage: config.messageImage,
    };
  },
});
</script>

<template>
  <div class="hero-image-stacked">
    <q-img :src="'/src/assets/' + messageImage" width="80px"></q-img>
    <div class="hero-image-stacked__wrapper q-pt-sm">
      <h1 class="text-h4 text-bold font-lexend">
        Dáme vám vědět, jakmile vypíšeme další výzvu
      </h1>
      <div class="hero-image-stacked__content">
        <p>
          Jsme rádi, že s námi chcete jezdit na kole, koloběžce, chodit či běhat
          (nejen) do práce.
        </p>
        <p>Další výzvu připravujeme.</p>
        <p>
          Zatím se můžete podívat na novinky v oblasti městské cyklistiky a
          udržitelné dopravy.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.hero-image-stacked {
}
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
