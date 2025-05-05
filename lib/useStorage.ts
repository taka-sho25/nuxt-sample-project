import { useStorage } from '@vueuse/core';

const StorageKey = 'Nuxt-Sample-Project';

export type StorageValue = {
  theCat: {
    favoriteImages: {
      id: string;
      src: string;
    }[];
  };
};

export const getStorage = () => {
  return useStorage<StorageValue>(StorageKey, {
    theCat: {
      favoriteImages: [],
    },
  });
};
