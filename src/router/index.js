import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import Introdution from '../views/introdution.vue';
import Project from '../views/project.vue';
import Contact from '../views/contact.vue';
import Demo from '../views/demo.vue';
import Categories from '../views/Categories.vue';
const router = createRouter({
  history: createWebHistory('/personal-web/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/introdution',
      name: 'introdution',
      component: Introdution
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/categories/tech',
      name: 'categories',
      component: Categories
    }
  ]
});

export default router;
