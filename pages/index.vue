<script setup lang="ts"></script>

<template>
  <section class="container">
    <div>
      <AppLogo />
      <h1 class="title">nuxt-example</h1>
      <h2 class="subtitle">Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxt.com/" target="_blank" class="button--green">Documentation</a>
        <br />
        <a href="https://github.com/nuxt/nuxt" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

.title {
  display: block;
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif; /* 1 */
  font-size: 100px;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  font-size: 42px;
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
