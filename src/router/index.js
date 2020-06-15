import Vue from 'vue'
import VueRouter from 'vue-router'

const TableList = () => import(/* webpackChunkName: "group-foo" */ '../views/table-list.vue')

Vue.use(VueRouter);

export const routes = [
  {path: "/", redirect: "/wel"},
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/wel',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {keepAlive: true}
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

  },
  {
    path: '/table-list',
    name: 'table-list',
    component: TableList,
    meta: {keepAlive: true},
    props: (route) => ({
      id: 1008611
    })
  },
  {
    path: '/table-detail',
    name: 'table-detail',
    component: () => import('../views/table-detail.vue'),
  },
  {path: "*", redirect: "/wel"},
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(savedPosition)
        }, 50)
      })
    } else {
      if (from.meta.keepAlive) {
        from.meta.scrollTop = document.documentElement.scrollTop;
      }
      return {x: 0, y: to.meta.scrollTop || 0}
    }
  }
});

export default router

