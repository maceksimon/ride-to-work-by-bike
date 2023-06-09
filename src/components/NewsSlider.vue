<script lang="ts" setup>
import { defineComponent, defineProps } from 'vue';
import type { Card } from './models';

import NewsCard from './NewsCard.vue';
// Import Swiper Vue.js components
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

const props = defineProps<{
  cards: Card[];
}>();

defineComponent({
  components: {
    NewsCard,
    Swiper,
    SwiperSlide,
  },
});
</script>

<template>
  <div class="relative-position">
    <swiper
      :modules="[Navigation]"
      navigation
      :slides-per-view="4"
      :space-between="24"
    >
      <swiper-slide
        v-for="card in props.cards"
        :key="card.id"
        class="swiper-slide"
      >
        <news-card :card="card"></news-card>
      </swiper-slide>

      <div class="swiper-button font-lexend">
        <q-btn to="/blog" unelevated rounded color="black" size="16px">
          {{ $t('slider.button') }}
        </q-btn>
      </div>
    </swiper>
  </div>
</template>

<style lang="scss">
.swiper {
  padding-bottom: 64px;
}

.swiper-slide {
  height: auto;
}

.swiper-button {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.swiper-button-next,
.swiper-button-prev {
  border-radius: 9999px;
  top: auto;
  bottom: 0;
  width: 40px;
  height: 40px;
  color: $grey-10;
  background-color: #fff;
  border: 1px solid $grey-10;

  &:after {
    width: 32px;
    height: 32px;
    content: '';
  }

  &.swiper-button-disabled {
    opacity: 1;
    border-color: $grey-5;

    &:after {
      opacity: 0.35;
    }
  }
}

.swiper-button-prev {
  left: auto;
  right: 56px;

  &:after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
  }
}
.swiper-button-next {
  left: auto;
  right: 0;

  &:after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
