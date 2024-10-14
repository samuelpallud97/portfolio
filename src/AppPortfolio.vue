<template>
  <div id="app">
    <HeaderVue />
    <router-view/>
    <FooterVue />
  </div>
</template>

<script>
import HeaderVue from './components/Header.vue';
import FooterVue from './components/Footer.vue';

export default {
  name: 'AppPortfolio',
  components: {
    HeaderVue,
    FooterVue,
  }
};
</script>

<style>


body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;

}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
}
</style>
