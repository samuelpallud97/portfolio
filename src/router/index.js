import Vue from 'vue';
import VueRouter from './index';
import HomeVue from '@/views/Home.vue';
import AboutVue from '@/views/About.vue';
import ProjectsVue from '@/views/Projects.vue';
import ContactVue from '@/views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeVue },
  { path: '/about', component: AboutVue },
  { path: '/projects', component: ProjectsVue },
  { path: '/contact', component: ContactVue }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
