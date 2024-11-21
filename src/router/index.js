import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import ProjectsSP from '@/views/ProjectsSP.vue';
import Contact from '@/views/Contact.vue';
import NotFound from '@/views/NotFound.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'ProjectsSP',
    component: ProjectsSP,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
  path: '/:pathMatch(.*)*', 
  name: 'NotFound',
  component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
