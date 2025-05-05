import { useStorage } from '@vueuse/core';

const StorageKey = 'Nuxt-Sample-Project';

export type StorageValue = {
  theCat: {
    favoriteIds: string[];
  };
};

export const getStorage = () => {
  return useStorage<StorageValue>(StorageKey, {
    theCat: {
      favoriteIds: [],
    },
  });
};
