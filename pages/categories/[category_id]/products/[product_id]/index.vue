<script setup lang="ts">
const route = useRoute();

const productId = route.params.product_id;
if (!/^\d+$/.test(String(productId))) {
  await navigateTo('/404');
}
</script>

<template>
  <div>
    <h1>Product {{ $route.params.product_id }}</h1>
    <p>This is a nested route of the more complex route</p>
    <p>Changing the final param of the route to a non-number will also cause this component to throw a 404 error</p>
  </div>
</template>
