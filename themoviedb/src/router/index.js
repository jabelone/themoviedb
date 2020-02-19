import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

window.TMDB_API_TOKEN = '6ed12e064b90ae1290fa326ce9e790ff';
window.TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/original';

// All of our application routes and page metadata (ie title) are defined here
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Popular Movies',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'About',
    },
  },
  {
    path: '/movie/:id',
    name: 'Movie About',
    component: () => import('../views/MovieAbout.vue'),
    meta: {
      title: 'Movie Information',
    },
  },
];


// Create a new instance of the Vue router and configure it
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
