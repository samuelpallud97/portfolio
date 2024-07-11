// import Vue from 'vue';
// import AppVue from './App.vue';
// import VueRouter from './router/index';

// Vue.config.productionTip = false;

// new Vue({
//   VueRouter,
//   render: h => h(AppVue),
// }).$mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(router)

app.mount('#app')