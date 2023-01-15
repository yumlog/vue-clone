import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/Home/Home.vue'
import NotFound from '@/views/NotFound.vue'
import One from '@/views/One/index.vue'
import OneProfile from '@/views/One/OneProfile.vue'
import Two from '@/views/Two.vue'
import Example from '@/views/Example/index.vue'

const routes = [
  {
    path: '/',
    name: '홈',
    component: Home,
  },
  {
    path: '*',
    name: 'Error404', // 404
    component: NotFound,
  },
  {
    path: '/one',
    name: 'One',
    component: One,
    children: [
      {
        path: '/one/profile',
        name: 'OneProfile',
        component: OneProfile,
      },
    ],
  },
  {
    path: '/two',
    name: 'Two',
    component: Two,
  },
  {
    path: '/example',
    name: '예제페이지',
    component: Example,
  },
]

// eslint-disable-line no-unused-vars
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
})

export default router
