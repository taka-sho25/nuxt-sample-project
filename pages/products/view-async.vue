<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/stores/product';

const productStore = useProductStore();

const { _id, title, price } = storeToRefs(productStore);

await useAsyncData('product', () => productStore.loadAsync());
// onServerPrefetch(async () => {
//   await productStore.loadAsync()
// })
</script>

<template>
  <div>
    <h1>View Product {{ _id }}</h1>
    <p>Product Name: {{ title }}</p>
    <p>Price: {{ price }}</p>
    <br />
    <p>This is an example of using <code>fetch</code> to make sure the store is updated before showing the component</p>
  </div>
</template>
