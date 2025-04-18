<script setup lang="ts">
type Props = {
  isClose?: boolean;
};

interface Emits {
  (eventName: 'close'): void;
}

const props = withDefaults(defineProps<Props>(), {
  isClose: true,
});
const emits = defineEmits<Emits>();

// 背景をscrollしないようにする
onMounted(() => {
  document.body.style.overflow = 'hidden';
});
onBeforeUnmount(() => {
  document.body.style.overflow = 'unset';
});

const closeModal = () => {
  if (props.isClose) {
    emits('close');
  }
};
</script>

<template>
  <div class="modal-mask" />
  <div class="modal-content" @click.self="closeModal">
    <slot />
  </div>
</template>

<style lang="css" scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black);
  opacity: 0.5;
}

.modal-content {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  overflow-y: auto;
  text-align: center;
}
</style>
