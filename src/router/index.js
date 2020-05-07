import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export const routes = [
  {path: "/", redirect: "/wel"},
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {keepAlive: true}
  },
  {
    path: '/wel',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/menu',
    name: '右键菜单',
    component: () => import('../views/menu.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue'),
    meta: {keepAlive: true}
  },
  {
    path: '/table-list',
    name: 'table-list',
    component: () => import('../views/table-list.vue'),
    meta: {keepAlive: true}
  },
  {path: "*", redirect: "/wel"},
];

const router = new VueRouter({
  routes
});

export default router

