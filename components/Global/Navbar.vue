<script setup lang="ts">
const open = ref(false);
const links = [
  { to: '/', name: 'Home' },
  { to: '/the-cat', name: 'The Cat Page' },
  { to: '/the-cat/favs', name: 'The Cat Favs' },
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
      <a v-for="link of links" :key="link.name" :href="link.to">
        {{ link.name }}
      </a>
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
