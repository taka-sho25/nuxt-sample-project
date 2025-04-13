<script setup lang="ts">
import { useRoute } from 'vue-router';

const open = ref(false);
const links = [
  { to: '/', name: 'Home' },
  { to: '/about', name: 'About' },
  { to: '/products', name: 'Products' },
  { to: '/products/view', name: 'Products/View' },
  { to: '/about/ben-jones', name: 'Nested About' },
  { to: '/products/edit/64', name: 'Edit Product By Route Param' },
  { to: '/categories/2/products/3', name: 'Complex Route' },
  { to: '/categories/2/products/someproduct', name: 'Invalid Route Param' },
  { to: '/products/view', name: 'Pinia Store Example' },
  { to: '/admin', name: 'Admin Layout' },
  { to: '/products/view-async', name: 'Async Fetch Example' },
];

const route = useRoute();

watch(
  () => route.name,
  () => {
    open.value = false;
  },
);
</script>

<template>
  <div class="navbar">
    <span @click="open = !open"> {{ open ? 'Close' : 'View' }} Links </span>
    <div class="navbar-drawer" :class="{ isOpen: open }">
      <NuxtLink v-for="link of links" :key="link.name" :to="link.to" exact>
        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  position: relative;
  padding: 10px;
  color: white;
  background: #333333;
}
.navbar-drawer {
  position: absolute;
  top: 100%;
  left: -500px;
  display: flex;
  flex-flow: column nowrap;
  width: 250px;
  padding: 0 10px 20px;
  text-align: center;
  background: #333333;
  transition: left 0.35s;
}
.isOpen {
  left: 0;
}
span,
a {
  padding: 10px;
  color: white;
  text-decoration: none;
  cursor: pointer;
}
span:hover,
a:hover {
  color: #333333;
  background: white;
}
a.nuxt-link-active {
  color: #333333;
  cursor: default;
  background: #41b883;
}
</style>
