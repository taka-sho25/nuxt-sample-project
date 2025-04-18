<script setup lang="ts">
import { ImagesApi } from '@/api/thecatapi/openapi-generator';

const config = useRuntimeConfig();

const imagesApi = new ImagesApi();

const { data: cats } = await useAsyncData('cats-search', async () => {
  const response = await imagesApi.imagesListSearchOrRandom({
    xApiKey: config.public.CAT_API_KEY,
    limit: 20,
    order: 'RANDOM',
  });

  return response || [];
});
</script>

<template>
  <div class="container">
    <Heading :level="1" text="The Cat Page" />
    <div class="cats__content">
      <!-- カルーセル -->
      <Carousel v-if="cats" :items="cats || []">
        <template #item="{ item }">
          <div class="cats__image-wrapper">
            <img :src="item.url" alt="" role="img" class="cats__image" />
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  width: 100%;
  height: 100vh;
  padding: 56px;
  margin: 0 auto;
  background-color: var(--gray15);
}

.cats__content {
  margin-top: 32px;
}

.cats__image-wrapper {
  width: 100%;
}

.cats__image {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
}
</style>
