<script lang="ts">
import config from '../../app.config.toml';
import { defineComponent } from 'vue';

import LanguageSwitcher from 'components/LanguageSwitcher.vue';
import TooltipButton from 'src/components/TooltipButton.vue';
import PageBackground from 'src/components/PageBackground.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    LanguageSwitcher,
    TooltipButton,
    PageBackground,
  },

  setup() {
    return {
      titleImage: config.titleImage,
    };
  },
});
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <page-background></page-background>
    <q-header>
      <div class="container q-py-xl">
        <q-toolbar class="q-pa-none">
          <q-toolbar-title>
            <q-avatar
              :icon="'img:/src/assets/' + titleImage"
              :square="true"
              :rounded="false"
            ></q-avatar>
          </q-toolbar-title>

          <tooltip-button></tooltip-button>

          <language-switcher class="q-ml-xl"></language-switcher>
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <div class="container">
        <div class="footer__wrapper">
          <div class="footer-title">
            <h2 class="text-h4 text-bold font-lexend q-ma-none">
              {{ $t('footer.title') }}
            </h2>
          </div>
          <div class="footer__icons">
            <q-btn
              icon="bi-facebook"
              unelevated
              round
              outline
              :stretch="false"
              color="white"
              text-color="black"
            >
            </q-btn>
            <q-btn
              icon="bi-instagram"
              unelevated
              round
              outline
              :stretch="false"
              color="white"
              text-color="black"
            >
            </q-btn>
            <q-btn
              icon="bi-twitter"
              unelevated
              round
              outline
              :stretch="false"
              color="white"
              text-color="black"
            >
            </q-btn>
            <q-btn
              icon="bi-youtube"
              unelevated
              round
              outline
              :stretch="false"
              color="white"
              text-color="black"
            >
            </q-btn>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<style lang="scss">
.q-header {
  position: absolute;
  background-color: transparent;

  .q-avatar,
  .q-avatar .q-icon {
    height: 75px;
    width: auto;
  }
}

.q-footer {
  position: absolute;
  background-color: transparent;
  color: $grey-10;

  .footer__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    background: $grey-2;
    margin: 48px 0;
  }
  .footer__icons {
    display: flex;
    gap: 12px;

    .q-icon {
      font-size: 18px;
    }
  }
}
</style>
