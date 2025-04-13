<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/stores/product';

const productStore = useProductStore();

const { _id, title, price } = storeToRefs(productStore);

productStore.reset();
productStore.load();
</script>

<template>
  <div>
    <h1>View Product {{ _id }}</h1>
    <p>Product Name: {{ title }}</p>
    <p>Price: {{ price }}</p>
    <br />
    <p>This is a deeper route</p>
    <p>This also demonstrates retrieving information from the Vuex store</p>
  </div>
</template>
