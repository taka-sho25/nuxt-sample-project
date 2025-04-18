<script setup lang="ts" generic="T">
import type { EmblaOptionsType } from 'embla-carousel';
import emblaCarouselVue from 'embla-carousel-vue';
import type { StyleValue } from 'vue';

type Props = {
  items: T[];
  options?: EmblaOptionsType;
  width?: number;
  spaceBetween?: number;
};

const props = withDefaults(defineProps<Props>(), {
  options: () => ({ loop: true }),
  width: undefined,
  spaceBetween: 0,
});

const [emblaRef, emblaApi] = emblaCarouselVue({ ...props.options });

const containerStyle = computed<StyleValue>(() => {
  return {
    'margin-left': props.spaceBetween ? `${props.spaceBetween * -1}px` : 'unset',
  };
});

const slideStyle = computed<StyleValue>(() => {
  return {
    flex: props.width ? `0 0 ${props.width}px` : '0 0 100%',
    'margin-left': props.spaceBetween ? `${props.spaceBetween}px` : 'unset',
  };
});

const scrollPrev = () => {
  emblaApi.value?.scrollPrev();
};

const scrollNext = () => {
  emblaApi.value?.scrollNext();
};
</script>

<template>
  <div ref="emblaRef" class="embla">
    <div class="embla__container" :style="containerStyle">
      <div v-for="(item, index) in items" :key="index" class="embla__slide" :style="slideStyle">
        <slot name="item" :item="item" :item-index="index" />
      </div>
    </div>
    <div class="embla_buttons">
      <button class="embla__prev" @click="scrollPrev">Prev</button>
      <button class="embla__next" @click="scrollNext">Next</button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
.embla_buttons {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}
</style>
