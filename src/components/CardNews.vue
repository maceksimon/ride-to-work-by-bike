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
  <div>{{ $t(`slider.card.${props.card.id}.title`) }}</div>
  <div>{{ $d(props.card.datePublished, 'short') }}</div>
</template>
