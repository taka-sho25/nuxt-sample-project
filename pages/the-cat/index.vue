<script setup lang="ts">
import { ImagesApi } from '@/api/thecatapi/openapi-generator';

const config = useRuntimeConfig();

const imagesApi = new ImagesApi();

const openModal = ref(false);
const modalImage = ref('');

const { data: cats } = await useAsyncData(async () => {
  const response = await imagesApi.imagesListSearchOrRandom({
    xApiKey: config.public.CAT_API_KEY,
    limit: 20,
    order: 'RANDOM',
  });

  return response || [];
});

const closeModal = () => {
  modalImage.value = '';
  openModal.value = false;
};

const onClickImage = (src: string) => {
  if (!src) {
    return '';
  }

  modalImage.value = src;
  openModal.value = true;
};
</script>

<template>
  <div class="container">
    <Heading :level="1" text="The Cat Page" />
    <div class="cats__content">
      <!-- カルーセル -->
      <Carousel v-if="cats" :items="cats || []" width="50%" :space-between="12">
        <template #item="{ item }">
          <div class="cats__image-wrapper" @click="onClickImage(item.url || '')">
            <img :src="item.url" alt="" role="img" class="cats__image" />
          </div>
        </template>
      </Carousel>
    </div>
  </div>
  <Teleport v-if="openModal" to="#teleport1">
    <Modal @close="closeModal">
      <div class="cat__modal-image">
        <img :src="modalImage" alt="" role="img" />
      </div>
    </Modal>
  </Teleport>
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

.cat__modal-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cat__modal-image img {
  width: 700px;
}
</style>
