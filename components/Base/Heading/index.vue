<script setup lang="ts">
type Props = {
  level: 1 | 2 | 3;
  text: string;
  color?: 'black' | 'white' | 'gray80' | 'primary';
};

const props = withDefaults(defineProps<Props>(), {
  color: 'black',
});

const tagLevel = computed(() => `h${props.level}`);
</script>

<template>
  <component
    :is="tagLevel"
    class="heading"
    :class="[`heading-${props.level}`, `heading-${props.color}`]"
    role="heading"
  >
    {{ text }}
  </component>
</template>

<style lang="css" scoped>
.heading {
  letter-spacing: 0.02em;
}

.heading-1 {
  font-size: 2.6rem;
  line-height: 140%;
}

.heading-2 {
  font-size: 22px;
  line-height: 33px;
}

.heading-3 {
  font-size: 18px;
  line-height: 27px;
}

.heading-black {
  color: var(--black);
}

.heading-white {
  color: var(--white);
}

.heading-gray80 {
  color: var(--gray80);
}

.heading-primary {
  color: var(--primary);
}
</style>
