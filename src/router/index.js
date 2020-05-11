import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router';

export const routes = [
    {path: "/", redirect: "/next"},
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/home.vue'),
      meta: {keepAlive: true}
    },
    {
      path: '/wel',
      name: 'About',
      component: () => import('../views/wel.vue')
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
      component: () => import(/* webpackChunkName: "table" */ '../views/table-list.vue'),
      meta: {keepAlive: true}
    },
    {
      path: '/show',
      name: 'show',
      component: () => import(/* webpackChunkName: "show" */ '../views/show.vue'),
      meta: {keepAlive: true}
    },
    {
      path: '/next',
      name: 'next',
      component: () => import('../next/view/next.vue'),
    },
    {
      path: '/life',
      name: 'life',
      component: () => import('../next/view/life.vue'),
    },
    {
      path: '/:catchAll(.*)', redirect: "/next"
    }
  ]
;

const router = createRouter({
  history: createWebHistory(),
  routes
});

//  createWebHistory()

export default router

