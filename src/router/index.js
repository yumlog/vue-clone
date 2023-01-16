import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '홈',
    component: () => import('@/views/Home/Home.vue'),
  },
  {
    path: '*',
    name: 'Error404', // 404
    component: () => import('@/views/NotFound.vue'),
  },
  {
    path: '/one',
    name: 'One',
    component: () => import('@/views/One/index.vue'),
    children: [
      {
        path: '/one/profile',
        name: 'OneProfile',
        component: () => import('@/views/One/OneProfile.vue'),
      },
    ],
  },
  {
    path: '/two',
    name: 'Two',
    component: () => import('@/views/Two.vue'),
    meta: {
      layout: 'EmptyLayout',
    },
  },
  {
    path: '/example',
    name: '예제페이지',
    component: () => import('@/views/Example/index.vue'),
  },
];

// eslint-disable-next-lin
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
})

export default router
