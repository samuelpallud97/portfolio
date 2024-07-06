import Vue from 'vue';
import AppVue from './App.vue';
import VueRouter from './router/index';

Vue.config.productionTip = false;

new Vue({
  VueRouter,
  render: h => h(AppVue),
}).$mount('#app');
