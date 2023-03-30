<script lang="ts" setup>
import { defineProps } from 'vue';

interface Card {
  id: string;
  datePublished: Date;
}

const props = defineProps<{
  card: Card;
}>();
</script>

<template>
  <article class="card-news font-lexend text-bold">
    <div class="card-news__image">
      <a href="">
        <q-img ratio="1.33" src="https://via.placeholder.com/400x300"></q-img>
      </a>
    </div>
    <div class="card-news__content">
      <a href="">
        <h2 class="card-news__title q-ma-none text-h6 text-weight-bold">
          {{ $t(`slider.card.${props.card.id}.title`) }}
        </h2>
      </a>
      <time
        v-if="props.card.datePublished"
        class="card-news__date text-weight-regular"
        :datetime="props.card.datePublished.toString()"
      >
        {{ $d(props.card.datePublished, 'short') }}
      </time>
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

  &__image {
    max-width: 100%;
  }

  &__content {
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
