<script lang="ts" setup>
import { defineProps } from 'vue';

import type { Card } from './models';

const props = defineProps<{
  card: Card;
}>();
</script>

<template>
  <article class="card-news font-lexend text-bold">
    <div class="card-news__image">
      <a :href="props.card.url">
        <q-img ratio="1.33" :src="props.card.image"></q-img>
      </a>
    </div>
    <div class="card-news__content">
      <div>
        <a :href="props.card.url">
          <h2 class="card-news__title q-ma-none text-h6 text-weight-bold">
            {{ $t(`slider.card.${props.card.id}.title`) }}
          </h2>
        </a>
      </div>
      <div>
        <time
          v-if="props.card.datePublished"
          class="card-news__date text-weight-regular"
          :datetime="props.card.datePublished.toString()"
        >
          {{ $d(props.card.datePublished, 'short') }}
        </time>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.card-news {
  box-sizing: border-box;
  border: 1px solid $grey-4;
  background-color: #fff;
  border-radius: 6px 6px 24px 24px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__image {
    max-width: 100%;
  }

  &__content {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;

    a {
      text-decoration: none;
      color: #000;

      &:hover {
        text-decoration: underline;
      }
    }

    .card-news__title {
      line-height: 1.2;
    }

    .card-news__date {
      display: inline-block;
      margin-top: 8px;
      color: $grey-5;
    }
  }
}
</style>
