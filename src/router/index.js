import "../assets/main.css"
import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/Home.vue";
import AboutVue from "@/views/About.vue";
import ProjectsVue from "@/views/ProjectsSP.vue";
import ContactVue from "@/views/Contact.vue";
// import NotFound from "@/views/NotFound.Vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/', component: HomeVue },
      { path: '/about', component: AboutVue },
      { path: '/projects', component: ProjectsVue },
      { path: '/contact', component: ContactVue },
      // { path: '/NotFound', component: NotFound }
  ]
})

export default router