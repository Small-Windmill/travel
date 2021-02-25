import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/pages/home/Home.vue';
import City from '@/pages/city/City.vue';
import Detail from '@/pages/detail/Detail.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
}, {
  path: '/city',
  name: 'City',
  component: City,
}, {
  path: '/detail/:id',
  name: 'Detail',
  component: Detail,
},
];

const router = new VueRouter({
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
