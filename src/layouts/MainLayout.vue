<script lang="ts" setup>
import { defineComponent } from 'vue';
import PageBackground from 'src/components/PageBackground.vue';
import TheHeader from 'src/components/TheHeader.vue';
import TheFooter from 'src/components/TheFooter.vue';

defineComponent({
  name: 'MainLayout',

  components: {
    PageBackground,
    TheFooter,
    TheHeader,
  },
});
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <page-background></page-background>
    <the-header></the-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <the-footer></the-footer>
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
