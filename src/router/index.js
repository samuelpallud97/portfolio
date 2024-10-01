import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/Home.vue";
import AboutVue from "@/views/About.vue";
import ProjectsVue from "@/views/Projects.vue";
import ContactVue from "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeVue },
      { path: '/about', component: AboutVue },
      { path: '/projects', component: ProjectsVue },
      { path: '/contact', component: ContactVue }
  ]
})

export default router