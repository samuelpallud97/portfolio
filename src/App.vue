<template>
  <div id="app">
    <HeaderVue />
    <router-view />
    <FooterVue />
  </div>
</template>

<script>
import HeaderVue from './components/Header.vue';
import FooterVue from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    HeaderVue,
    FooterVue
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
}
#app {
  padding-bottom: 50px; /* Height of the footer */
  min-height: 100vh;
  position: relative;
}
</style>
