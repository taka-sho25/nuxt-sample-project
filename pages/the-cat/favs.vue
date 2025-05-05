<script setup lang="ts">
import { getStorage, type StorageValue } from '@/lib/useStorage';

const theCatStorage = getStorage();

const favoriteImages = computed(() => {
  return theCatStorage.value?.theCat?.favoriteImages || [];
});

const handleRemoveFavoriteImage = (imageId: string) => {
  const newStorageValue: StorageValue = {
    theCat: {
      favoriteImages: favoriteImages.value.filter((image) => image.id !== imageId),
    },
  };

  theCatStorage.value = { ...newStorageValue };
};
</script>

<template>
  <div class="container">
    <div v-for="image in favoriteImages" :key="image.id" class="cats__image-wrapper">
      <img :src="image.src" alt="" role="img" class="cat__image" />
      <button type="button" class="cat__button" @click="handleRemoveFavoriteImage(image.id)">Remove Fav</button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  min-height: 100vh;
  padding: 56px;
  margin: 0 auto;
  background-color: var(--gray10);
}

.cats__image-wrapper {
  width: 30%;
}

.cat__image {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
}

.cat__button {
  padding: 4px 8px;
  background-color: var(--white);
  border: 1px solid var(--border);
  border-radius: 4px;
}
</style>
